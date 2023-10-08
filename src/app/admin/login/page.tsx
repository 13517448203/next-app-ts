'use client'
import React from 'react'
import { Card, Form, Button, Input } from 'antd'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const nav = useRouter();
  return (
    <div className='pt-20'>
      <Card title="卡片" className="w-4/5 mx-auto">
        <Form
          labelCol={{ span: 3 }}
          onFinish={async (v) => {
            const res = fetch('/api/admin/login', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then(res => res.json() )
            console.log(res);
            nav.push('/admin/dashboard');
          }}
        >
          <Form.Item name="userName" label="用户名">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit'>登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
