"use client";

import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

const fetchUserSubmissions = async (userId: string) => {
    const response = await fetch('/api/submission', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch submissions');
    }

    const data = await response.json();
    return data.submissions;
};

const LeaderboardPage: React.FC = () => {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<any | null>(null);

    useEffect(() => {
        const getSessionData = async () => {
            const session = await getSession();
            setSession(session);

            if (session && session.user) {
                try {
                    const submissions = await fetchUserSubmissions(session.user.id);
                    setSubmissions(submissions);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching submissions:', error);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        getSessionData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>Please log in to view this page.</div>;
    }

    return (
        <div>
            <h1>Welcome to the leaderboard, {session.user.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Key 1</th>
                        <th>Key 2</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission) => (
                        <tr key={submission.id}>
                            <td>{submission.task.taskId}</td>
                            <td>{submission.key1.toString()}</td>
                            <td>{submission.key2.toString()}</td>
                            <td>{submission.status}</td>
                            <td>{new Date(submission.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardPage;
