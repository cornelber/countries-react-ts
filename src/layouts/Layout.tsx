import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <main className='mt-12'>
        <div className="container mx-auto px-6">
            {children}
        </div>
    </main>
  )
}

export default Layout