import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const list = [
    {
      href: '/overview',
      text: 'Next introduction'
    },
    {
      href: '/',
      text: 'todo SSR、ISR、SSG'
    },
    {
      href: '/layout-page',
      text: 'Pages and layouts'
    },
    {
      href: '/link',
      text: 'Linking and navigating'
    },
    {
      href: '/set-database',
      text: 'Setting up your database'
    },
  ]
  return (
    <main className="flex flex-col justify-between">
      <h1>Welcome to the Next.js!</h1>
      <ul>
        {
          list.map(item => (
            <li>
              <Link href={item.href} className="link">{item.text}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
