/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the `_ProjectToSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToSkill" DROP CONSTRAINT "_ProjectToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToSkill" DROP CONSTRAINT "_ProjectToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ProjectToSkill";

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
