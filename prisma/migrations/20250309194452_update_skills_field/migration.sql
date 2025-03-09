/*
  Warnings:

  - You are about to drop the column `name` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `description` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "label" TEXT NOT NULL;
