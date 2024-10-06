import React from 'react'
import ErrorMessage from '../components/ErrorMessage';

interface LayoutProps {
    children: React.ReactNode,
    error?: string | null;
}

const Layout = ({children, error} : LayoutProps) => {
  return (
    <main>
        {error && <ErrorMessage error={error} />}
        <div className="container mx-auto px-6 pt-36 pb-12">
            {children}
        </div>
    </main>
  )
}

export default Layout