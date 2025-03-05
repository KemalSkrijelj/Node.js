import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { courseSchema, paramsSchema } from '@/lib/validations/course'

const prisma = new PrismaClient()

<<<<<<< HEAD
async function validateRequest(params: { id: string }) {
  const result = paramsSchema.safeParse(params)
  if (!result.success) {
    return { error: result.error.errors, status: 400 }
  }
  return { id: result.data.id }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const validation = await validateRequest(params)
    if ('error' in validation) {
      return NextResponse.json({ error: validation.error }, { status: validation.status })
    }

    const course = await prisma.course.findUnique({
      where: { id: validation.id },
      include: { category: true }
    })

    if (!course) return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    return NextResponse.json(course)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const validation = await validateRequest(params)
    if ('error' in validation) {
      return NextResponse.json({ error: validation.error }, { status: validation.status })
    }

    const body = await request.json()
    const result = courseSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 })
    }

    const course = await prisma.course.update({
      where: { id: validation.id },
      data: result.data,
      include: { category: true }
    })

    return NextResponse.json(course)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update book' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const validation = await validateRequest(params)
    if ('error' in validation) {
      return NextResponse.json({ error: validation.error }, { status: validation.status })
    }

    await prisma.course.delete({ where: { id: validation.id } })
    return NextResponse.json({ message: 'Book deleted successfully' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 })
=======
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = paramsSchema.safeParse(params)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors },
        { status: 400 }
      )
    }

    const course = await prisma.course.findUnique({
      where: { id: result.data.id }
    })

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(course)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const paramResult = paramsSchema.safeParse(params)
    if (!paramResult.success) {
      return NextResponse.json(
        { error: paramResult.error.errors },
        { status: 400 }
      )
    }

    const body = await request.json()
    const bodyResult = courseSchema.safeParse(body)
    if (!bodyResult.success) {
      return NextResponse.json(
        { error: bodyResult.error.errors },
        { status: 400 }
      )
    }

    const course = await prisma.course.update({
      where: { id: paramResult.data.id },
      data: bodyResult.data
    })

    return NextResponse.json(course)
  } catch {
    return NextResponse.json(
      { error: 'Failed to update course' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = paramsSchema.safeParse(params)
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors },
        { status: 400 }
      )
    }

    await prisma.course.delete({
      where: { id: result.data.id }
    })

    return NextResponse.json({ message: 'Course deleted successfully' })
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete course' },
      { status: 500 }
    )
>>>>>>> f250926fdc3f4eee8b0691595dfe34c4ccf60946
  }
}
