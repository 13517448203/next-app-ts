import prisma from '@/db'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  let per = (req.nextUrl.searchParams.get('per') as any) || 10
  let page = (req.nextUrl.searchParams.get('page') as any) || 1
  let title = (req.nextUrl.searchParams.get('title') as string) || ''
  const data = await prisma.article.findMany({
    where: {
      title: {contains: title},
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: +per,
    skip: (page - 1) * per, 
  })
  const total = await prisma.article.count({ where: {
    title: {contains: title},
  } })
  return NextResponse.json({
    success: true,
    errorMessage: '',
    data: {
      list: data,
      pages: Math.ceil(total / per),
      total,
    }
  })
}

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  await prisma.article.create({
    data
  });
  return NextResponse.json({
    success: true,
    errorMessage: '创建成功',
    data: {}
  })
}  