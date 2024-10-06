import React, { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage';

interface LayoutProps {
    children: React.ReactNode,
    error?: string | null;
}

const Layout = ({children, error} : LayoutProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

  const slideUpClass = `transition-transform duration-700 ease-in-out translate-y-0 opacity-100`;
  const hiddenClass = `translate-y-10 opacity-0`;

  return (
    <main className={`${isVisible ? slideUpClass : hiddenClass}`}>
        {error && <ErrorMessage error={error} />}
        <div className="container mx-auto px-6 pt-36 pb-12">
            {children}
        </div>
    </main>
  )
}

export default Layout