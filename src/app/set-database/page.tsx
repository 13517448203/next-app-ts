import React from 'react'
import Link from 'next/link'

function ListPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/set-database/prisma" className="link">Prisma</Link>
        </li>
        <li>
          <Link href="/set-database/use-sql" className="link">获取数据</Link>
        </li>
      </ul>
    </div>
  )
}

export default ListPage
