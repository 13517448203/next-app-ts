import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/router/intro" className="link">Intro</Link>
        </li>
        <li>
          <Link href="/router/layout-page" className="link">Pages and layouts</Link>
        </li>
        <li>
          <Link href="/router/link" className="link">Linking and navigating</Link>
        </li>
      </ul>
    </div>
  )
}

export default Page
