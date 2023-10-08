 'use client'
import React from 'react'
 import { ConfigProvider } from 'antd'
 import zhCn from 'antd/locale/zh_CN'
 import 'antd/dist/reset.css'
 
 function AntdContainer({ children }: any) {

  return (
    <ConfigProvider locale={zhCn}>
      {children}
    </ConfigProvider>
  )
 }
 
 export default AntdContainer
 