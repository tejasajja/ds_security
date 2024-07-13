// src/app/leaderboard/page.tsx

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import LeaderboardClient from './LeaderBoardClient';

const LeaderboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <div>Please log in to view this page.</div>;
    }

    return <LeaderboardClient userId={session.user.id} userName={session.user.name || session.user.username } />;
};

export default LeaderboardPage;
