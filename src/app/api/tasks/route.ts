import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

export async function POST(req: Request) {

  const taskSchema = z
    .object({
      taskId: z.string().min(1, 'Task ID is required'),
      key1: z.string().min(1, 'Key1 is required'),
      key2: z.string().min(1, 'Key2 is required'),
    });

  try {
    const body = await req.json();
    console.log('Request body:', body);

    const { taskId, key1, key2 } = taskSchema.parse(body);

    const existingTask = await db.taskKeys.findUnique({ where: { taskId: taskId } });
    if (existingTask) {
      console.log('Task with this ID already exists');
      return NextResponse.json({ task: null, message: 'Task with this ID already exists' }, { status: 409 });
    }

    const newTask = await db.taskKeys.create({
      data: {
        taskId,
        key1,
        key2,
      }
    });

    const { ...rest } = newTask;

    console.log('New task created:', newTask);
    return NextResponse.json({ task: newTask, message: 'Task created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ error: 'An error occurred while creating the task' }, { status: 500 });
  }
}


// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";
// import * as z from 'zod';

// export async function POST(req: Request) {
//   const requestSchema = z.object({
//     taskId: z.string().min(1, 'Task ID is required'),
//     key1: z.boolean().optional(),
//     key2: z.boolean().optional(),
//   });

//   try {
//     const body = await req.json();
//     console.log('Request body:', body);

//     const { taskId, key1, key2 } = requestSchema.parse(body);

//     if (!key1 && !key2) {
//       return NextResponse.json({ error: 'At least one key must be requested' }, { status: 400 });
//     }

//     const task = await db.taskKeys.findUnique({
//       where: { taskId: taskId },
//       select: {
//         taskId: true,
//         key1: !!key1,
//         key2: !!key2,
//       },
//     });

//     if (!task) {
//       return NextResponse.json({ error: 'Task not found' }, { status: 404 });
//     }

//     const result: Record<string, string | null> = { taskId: task.taskId };
//     if (key1) result.key1 = task.key1;
//     if (key2) result.key2 = task.key2;

//     return NextResponse.json({ task: result }, { status: 200 });
//   } catch (error) {
//     console.error('Error occurred:', error);
//     return NextResponse.json({ error: 'An error occurred while retrieving the task' }, { status: 500 });
//   }
// }
