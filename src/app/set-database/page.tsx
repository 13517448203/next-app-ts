import React from 'react'
import List from './_components/List'
import Link from 'next/link'

function ListPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/set-database/prisma" className="link">Prisma</Link>
        </li>
        <li>如何将数据库部署到 Vercel</li>
        <li>
          <a href="https://nextjs.org/learn/dashboard-app/fetching-data">
            Next.js 官方文档 - 获取数据
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ListPage
