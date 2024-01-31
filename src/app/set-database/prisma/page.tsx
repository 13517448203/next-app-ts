import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/set-database/prisma/intro" className="link">Prisma 介绍</Link>
        </li>
        <li>
          <Link href="/set-database/prisma/use" className="link">Prisma 使用</Link>
        </li>
        <li>
          <Link href="/set-database/prisma/demo" className="link">Prisma Demo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Page
