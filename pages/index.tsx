import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
        </h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.js</code>
          </p>
        </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <MainLayout>
          <DarkLayout>
              {page}
          </DarkLayout>
      </MainLayout>
  )
}