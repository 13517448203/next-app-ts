import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const list = [
    {
      href: '/overview',
      text: 'Next introduction'
    },
    {
      href: '/router',
      text: 'Router'
    },
    {
      href: '/render',
      text: 'Rendering'
    },
    {
      href: '/set-database',
      text: 'Setting up your database'
    },
    {
      href: '/handle-error',
      text: 'Handling errors'
    },
    {
      href: '/form-valid',
      text: 'Form valid'
    },
    {
      href: '/auth',
      text: 'Authentication'
    },
    {
      href: '/metadata',
      text: 'Metadata'
    },
  ]
  return (
    <main className="flex flex-col justify-between">
      <h1>Welcome to the Next.js!</h1>
      <ul>
        {
          list.map(item => (
            <li key={item.href}>
              <Link href={item.href} className="link">{item.text}</Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
