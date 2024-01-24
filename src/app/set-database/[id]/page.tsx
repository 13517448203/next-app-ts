import { Metadata } from 'next'
import React from 'react'

type Props = {
  params: { id: string },
  searchParams: any
}

// 动态的进行 metadata 的生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: '这是详情页--' + params.id,

  }
}

function ListDetailPage({ params, searchParams }: Props) {
  return (
    <div>
      ListDetailPage---{params.id},query---{searchParams.name}
    </div>
  )
}

export default ListDetailPage
