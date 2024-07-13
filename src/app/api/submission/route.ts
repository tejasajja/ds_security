// src/app/api/submission/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';
import { SubmissionStatus } from '@prisma/client'; // Import the SubmissionStatus enum

export async function POST(req: Request) {
  const createOrUpdateSchema = z.object({
    taskId: z.string().min(1, 'Task ID is required'),
    userId: z.string().min(1, 'User ID is required'),
    key1: z.string().optional(),
    key2: z.string().optional(),
  });

  const fetchUserSubmissionsSchema = z.object({
    userId: z.string().min(1, 'User ID is required'),
  });

  try {
    const body = await req.json();
    console.log('Request body:', body);

    // Check if request is for fetching user submissions
    if (body.userId && !body.taskId) {
      const { userId } = fetchUserSubmissionsSchema.parse(body);

      // Fetch submissions for the user
      const submissions = await db.submission.findMany({
        where: { userId },
        include: {
          task: {
            select: {
              taskId: true,
              createdAt: true,
            },
          },
        },
      });

      return NextResponse.json({ submissions }, { status: 200 });
    }

    // Otherwise, treat as create or update submission
    const { taskId, userId, key1, key2 } = createOrUpdateSchema.parse(body);

    if (!key1 && !key2) {
      return NextResponse.json({ error: 'At least one key must be provided' }, { status: 400 });
    }

    // Check if user exists
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if task exists
    const task = await db.taskKeys.findUnique({
      where: { taskId: taskId },
    });

    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    let status: SubmissionStatus = SubmissionStatus.NOT_ATTEMPTED; // Initialize with enum value
    if ((key1 && key1 === task.key1) || (key2 && key2 === task.key2)) {
      status = SubmissionStatus.INCOMPLETE; // Use enum value
    }
    if ((key1 && key1 === task.key1) && (key2 && key2 === task.key2)) {
      status = SubmissionStatus.COMPLETE; // Use enum value
    }

    const submission = await db.submission.upsert({
      where: { userId_taskId: { userId, taskId } },
      update: {
        key1: key1 === task.key1,
        key2: key2 === task.key2,
        status,
      },
      create: {
        userId,
        taskId,
        key1: key1 === task.key1,
        key2: key2 === task.key2,
        status,
      },
    });

    return NextResponse.json({ submission }, { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: 'An error occurred while processing the submission' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch all users and their submissions
    const users = await db.user.findMany({
      include: {
        submissions: {
          include: {
            task: true,
          },
        },
      },
    });

    // Calculate scores for each user
    const leaderboard = users.map(user => {
      let totalScore = 0;
      let count= 0;

      user.submissions.forEach(submission => {
        if (submission.status === SubmissionStatus.COMPLETE) {
          totalScore += 100;
          count+=1;
        } else if (submission.status === SubmissionStatus.INCOMPLETE) {
          totalScore += 50;
          count+=0.5;
        }
      });

      return {
        userId: user.id,
        username: user.username || user.name,
        tasksattempted: count,
        totalScore,
      };
    });

    // Sort users by score in descending order
    leaderboard.sort((a, b) => b.totalScore - a.totalScore);

    return NextResponse.json({ leaderboard }, { status: 200 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the leaderboard' }, { status: 500 });
  }
}
