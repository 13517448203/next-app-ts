// 该函数允许查询数据库, 可以在任何服务器组件内部调用
import { sql } from '@vercel/postgres';
import { User, Product } from './definitions';

export async function fetchData() {
  try {
    const productCountPromise = sql`SELECT COUNT(*) FROM products`;
    const userCountPromise = sql`SELECT COUNT(*) FROM users`;
 
    const data = await Promise.all([
      productCountPromise,
      userCountPromise,
    ]);

    const productCount = Number(data[0].rows[0].count ?? '0');
    const userCount = Number(data[1].rows[0].count ?? '0');

    return {
      productCount,
      userCount,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchProduct() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  // noStore();
  try {
    const data = await sql<Product>`SELECT * FROM products`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}