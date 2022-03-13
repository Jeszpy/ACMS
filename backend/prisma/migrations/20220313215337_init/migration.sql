-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT,
    "lastName" TEXT,
    "personnelNumber" INTEGER,
    "accessGroup" INTEGER NOT NULL,
    "departmentID" INTEGER NOT NULL,
    "cardHolderID" SERIAL NOT NULL,
    "advanced" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
