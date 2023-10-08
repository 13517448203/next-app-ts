import React from 'react'

function DemoLayout({ children }: any) {
  return (
    <div>
      <h2>这是Demo的母版</h2>
      <hr />
      {children}
    </div>
  )
}

export default DemoLayout
