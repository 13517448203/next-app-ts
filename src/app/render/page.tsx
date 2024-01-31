import React from 'react'
import Link from 'next/link'

function DemoPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/render/intro" className="link">Intro</Link>
        </li>
        <li>
          <Link href="/render/composition-patterns" className="link">composition-patterns</Link>
        </li>
      </ul>
    </div>
  )
}

export default DemoPage
