import React from 'react'
import ErrorMessage from '../components/ErrorMessage';

interface LayoutProps {
    children: React.ReactNode,
    error?: string | null;
}

const Layout = ({children, error} : LayoutProps) => {
  return (
    <main className='my-12'>
        {error && <ErrorMessage error={error} />}
        <div className="container mx-auto px-6">
            {children}
        </div>
    </main>
  )
}

export default Layout