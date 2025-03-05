import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { courseSchema } from '@/lib/validations/course'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const books = await prisma.books.findMany()
    return NextResponse.json(books)
<<<<<<< HEAD
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
=======
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
>>>>>>> f250926fdc3f4eee8b0691595dfe34c4ccf60946
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
<<<<<<< HEAD
    
    // Validate request body
    const validationResult = courseSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors },
=======
    const result = courseSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors },
>>>>>>> f250926fdc3f4eee8b0691595dfe34c4ccf60946
        { status: 400 }
      )
    }

    const course = await prisma.course.create({
<<<<<<< HEAD
      data: validationResult.data,
      include: {
        category: true
      }
    })

    return NextResponse.json(course, { status: 201 })
  } catch (error) {
    console.error('Error creating book:', error)
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
=======
      data: result.data
    })

    return NextResponse.json(course, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Failed to create course' },
      { status: 500 }
    )
>>>>>>> f250926fdc3f4eee8b0691595dfe34c4ccf60946
  }
} 