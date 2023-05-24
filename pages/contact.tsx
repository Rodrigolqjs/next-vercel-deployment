  import Link from 'next/link'
  import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

  export default function ContactPage() {
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

  ContactPage.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
  }