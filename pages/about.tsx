import { ReactNode } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
        <h1 className="title">
          Ir a <Link href="/">Home</Link>
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

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
      <MainLayout>
          <DarkLayout>
              {page}
          </DarkLayout>
      </MainLayout>
  )
}
