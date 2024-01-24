import React from 'react'

function DemoPage() {
  return (
    <div>
      <h1>Note:</h1>
      <ul>
        <li>组件 {`<Link>`}</li>
        <ul>
          <li>页面级路由之间的导航方式</li>
          <li>在生产环境中，每当 {`<Link>`} 组件出现在浏览器的视口中时，Next.js 就会在后台自动预取链接路由的代码</li>
        </ul>
        <li>
          <a href='https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works'>
            路由和导航的工作原理
          </a>
        </li>
        <ul>
          <li>代码拆分</li>
          <li>预取</li>
          <li>缓存</li>
          <li>局部渲染</li>
          <li>软导航</li>
          <li>后退和前进导航</li>
          <li>......</li>
        </ul>
      </ul>
    </div>
  )
}

export default DemoPage
