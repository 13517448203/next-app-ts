'use client'
import React, { useEffect, useState } from 'react'
import { Form, Table, Input, Button, Card, Modal, Space, Popconfirm } from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

type Article = {
  id: string;
  title: string;
  desc: string;
}

function ArticlePage() {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState<Article[]>([])
  const [myForm] = Form.useForm();
  const [query, setQuery] = useState({ per: 10, page: 1, title: '' })
  const [currentId, setCurrentId] = useState('')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch(`/api/admin/articles?page=${query.page}&per=${query.per}&title=${query.title}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res.data.list)
        setTotal(res.data.total)
      })
  }, [query])

  useEffect(() => {
    if (!open) {
      setCurrentId('')
    }
  }, [open])

  return (
    <Card
      title="文章管理"
      extra={
        <>
          <Button icon={<PlusOutlined />} type="primary" onClick={() => setOpen(true)} />
        </>
      }
    >
      <Form layout='inline' onFinish={(v) => {
        setQuery({
          page: 1,
          per: 10,
          title: v.title || ''
        })
      }}>
        <Form.Item label="标题" name="title">
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Button icon={<SearchOutlined />} htmlType="submit" type='primary' />
      </Form>
      <Table
        style={{ marginTop: '8px' }}
        dataSource={list}
        rowKey="id"
        pagination={{
          defaultPageSize: 10, 
          total,
          onChange(page) {
            setQuery({
              ...query,
              per: 10,
              page,
            })
          }
        }}
        columns={[
        {
          title: '序号',
          width: 80,
          render(v, r, i) {
            return i + 1;
          }
        },
        { title: '标题', dataIndex: 'title' },
        { title: '简述', dataIndex: 'desc' },
        { title: '操作', render(v, r) {
          return (
            <Space>
              <Button
                size='small'
                icon={<EditOutlined />}
                type='primary'
                onClick={() => {
                  setOpen(true)
                  setCurrentId(r.id)
                  myForm.setFieldsValue(r)
                }}
              />
              <Popconfirm
                title="是否确认删除？"
                onConfirm={async () => {
                  await fetch('/api/admin/articles/' + r.id, {
                    method: 'DELETE',
                  }).then(res => res.json())
                  setQuery({ ...query, per: 10, page: 1 })
                }}
              >
                <Button
                  size='small'
                  icon={<DeleteOutlined />}
                  type='primary'
                  danger
                />
              </Popconfirm>
            </Space>
          )
        } },
      ]} />
      <Modal
        title="编辑"
        open={open}
        onCancel={() => setOpen(false)}
        destroyOnClose={true}
        maskClosable={false}
        onOk={() => myForm.submit()}
      >
        <Form preserve={false} layout='vertical' form={myForm} onFinish={async (v) => {
          if (currentId) {
            await fetch('/api/admin/articles/' + currentId, {
              method: 'PUT',
              body: JSON.stringify(v)
            }).then(res => res.json())
          } else {
            await fetch('/api/admin/articles', {
              method: 'POST',
              body: JSON.stringify(v)
            }).then(res => res.json())
          }
 
          setOpen(false)
          setQuery({ ...query })
        }}>
          <Form.Item label="标题" name="title" rules={[{
            required: true,
            message: "标题不能为空",
          }]}>
            <Input placeholder="请输入标题" />
          </Form.Item>
          <Form.Item label="简介" name="desc">
            <Input.TextArea placeholder="请输入简介" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  )
}

export default ArticlePage
