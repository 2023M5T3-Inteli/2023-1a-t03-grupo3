/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_memberId_fkey";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "questions" TEXT[];

-- DropTable
DROP TABLE "Question";
