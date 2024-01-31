import React from 'react';

function ClientComponent({ data }) {
  return <div>Client Component: {data}</div>;
}

function ServerComponent({ data }) {
  return <div>Server Component: {data}</div>;
}

export default function Home({ serverData }) {
  return (
    <div>
      <h1>Server and Client Component Combination</h1>
      <ServerComponent data={serverData} />
      <ClientComponent data="Client Data" />
    </div>
  );
}

export async function getServerSideProps() {
  // 模拟从服务器获取数据
  const serverData = 'Server Data';

  return {
    props: {
      serverData,
    }
  };
}
