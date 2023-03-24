-- CreateTable
CREATE TABLE "Nofication" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'application',
    "approval" BOOLEAN DEFAULT false,
    "senderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nofication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nofication" ADD CONSTRAINT "Nofication_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
