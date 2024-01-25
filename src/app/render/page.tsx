import React from 'react'
import Link from 'next/link'

function DemoPage() {
  return (
    <div>
      <h1>Note:</h1>
      <ul>
        <li>静态渲染</li>
        <ul>
          <li>静态渲染是指在构建时生成页面的 HTML 文件，这意味着页面内容在部署时就已经准备好，并且可以直接提供给访问者</li>
          <li>👍 更快的网站、减少服务器负载、SEO</li>
          <li>💦 无法使用动态数据、无法使用React的特性、不适合具有定期更新的个性化数据的仪表板</li>
        </ul>
        <li>动态渲染</li>
        <ul>
          <li>动态渲染是指在请求时生成页面的 HTML 文件，内容根据请求的参数或其他动态数据来生成</li>
          <li>👍 实时数据</li>
          <li>💦 请求时会增加整体的响应时间、SEO(搜索引擎可能无法有效地抓取动态的内容)</li>
        </ul>
        <li>
          <Link href="/render/stream" className="link">流</Link>
        </li>
        <ul>
          <li>流式处理是一种数据传输技术，它允许您将路由分解为更小的“块”，并在它们准备就绪时逐步将它们从服务器流式传输到客户端，防止缓慢的数据请求阻塞整个页面</li>
        </ul>
      </ul>
    </div>
  )
}

export default DemoPage
