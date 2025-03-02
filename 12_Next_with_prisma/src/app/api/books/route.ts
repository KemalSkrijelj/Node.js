import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { courseSchema } from '@/lib/validations/course'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const books = await prisma.book.findMany()
    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validationResult = courseSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors },
        { status: 400 }
      )
    }

    const course = await prisma.course.create({
      data: validationResult.data,
      include: {
        category: true
      }
    })

    return NextResponse.json(course, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 