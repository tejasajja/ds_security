"use client";
import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, RowStyle, RowClassParams } from 'ag-grid-community';

interface LeaderboardClientProps {
    userId: string;
    userName: string;
}

const fetchLeaderboard = async () => {
    const response = await fetch('/api/submission', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
    }

    const data = await response.json();
    return data.leaderboard;
};

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

const LeaderboardClient: React.FC<LeaderboardClientProps> = ({ userId, userName }) => {
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [leaderboardData, submissionsData] = await Promise.all([
                    fetchLeaderboard(),
                    fetchUserSubmissions(userId),
                ]);
                setLeaderboard(leaderboardData);
                setSubmissions(submissionsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    const leaderboardColumnDefs: ColDef[] = [
        { headerName: 'UserId', field: 'userId', hide: true },
        { headerName: 'Username', field: 'username' },
        { headerName: 'Total Score', field: 'totalScore' },
    ];

    const submissionsColumnDefs: ColDef[] = [
        { headerName: 'Task ID', field: 'task.taskId' },
        { headerName: 'Key 1', field: 'key1' },
        { headerName: 'Key 2', field: 'key2' },
        { headerName: 'Status', field: 'status' },
        // { headerName: 'Created At', field: 'createdAt' },
    ];

    const getRowStyle = (params: RowClassParams): RowStyle | undefined => {
        if (params.data.userId === userId) {
            return { background: '#d3f9d8', color: 'black' }; // Highlight color for the logged-in user's row with black text
        }
        return undefined; // No additional style for other rows
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-12">
                Welcome to the leaderboard, {userName}
            </h1>
            <div className="ag-theme-alpine-dark my-24" style={{ height: 400, width: '27%' }}>
                <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
                <AgGridReact
                    rowData={leaderboard}
                    columnDefs={leaderboardColumnDefs}
                    getRowStyle={getRowStyle}
                    pagination={true}
                    paginationPageSize={5}
                />
            </div>
            <div className="ag-theme-alpine-dark my-24" style={{ height: 400, width: '53%' }}>
                <h2 className="text-2xl font-bold mb-4">Your Submissions</h2>
                <AgGridReact
                    rowData={submissions}
                    columnDefs={submissionsColumnDefs}
                    pagination={true}
                    paginationPageSize={3}
                />
            </div>
        </div>
    );
};

export default LeaderboardClient;
