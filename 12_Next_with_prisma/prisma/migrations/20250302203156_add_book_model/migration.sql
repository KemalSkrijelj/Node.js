-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "description" TEXT,
    "lists" INTEGER
);
