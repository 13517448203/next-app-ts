import React from 'react'

function ListLayout({ children }: any) {
  return (
    <div>
      <h2>这是List的母版</h2>
      <hr />
      {children}
    </div>
  )
}

export default ListLayout
