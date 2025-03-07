-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT[],
    "challenges" TEXT[],
    "technologies" TEXT[],
    "libraries" TEXT[],
    "integration" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
