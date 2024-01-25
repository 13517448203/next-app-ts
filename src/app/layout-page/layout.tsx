import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // title: 'Layout Page',
  title: {
    // 用于提供忽略父段中设置的标题
    absolute: 'Layout Page',
  }
};

function DemoLayout({ children }: any) {
  return (
    <div>
      <h2>这是母版</h2>
      <hr />
      {children}
    </div>
  )
}

export default DemoLayout
