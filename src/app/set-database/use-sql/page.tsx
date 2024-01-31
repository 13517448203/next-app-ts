import React from 'react'
import { fetchData, fetchProduct } from '@/lib/data';

async function ListPage() {
  const { productCount, userCount } = await fetchData();
  const product = await fetchProduct(); // {cache: 'no-store'}
  console.log('ssr output\n', product)

  return (
    <div>
      <p>产品数量: {productCount}</p>
      <p>用户数量: {userCount}</p>

      <table border={1} cellSpacing={0}>
        <caption>
          产品列表
        </caption>
        <thead>
          <tr>
            <th>名称</th>
            <th>描述</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {product?.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.content}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListPage
