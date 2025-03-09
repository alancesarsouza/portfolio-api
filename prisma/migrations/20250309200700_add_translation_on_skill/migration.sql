/*
  Warnings:

  - The `description` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `label` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "description",
ADD COLUMN     "description" TEXT[],
DROP COLUMN "label",
ADD COLUMN     "label" TEXT[];
