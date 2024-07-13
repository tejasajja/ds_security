-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('NOT_ATTEMPTED', 'INCOMPLETE', 'COMPLETE');

-- AlterTable
ALTER TABLE "submissions" ADD COLUMN     "status" "SubmissionStatus" NOT NULL DEFAULT 'NOT_ATTEMPTED';
