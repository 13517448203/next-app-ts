import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/router/link/intro" className="link">Intro</Link>
        </li>
      </ul>
    </div>
  )
}

export default Page
