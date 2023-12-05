import { Open_Sans } from 'next/font/google'
import ToasterProvider from '@/app/providers/ToasterProvider';
import { ThemeProvider } from "@/app/components/theme-provider"

import '@/app/global.css'
import Sidebar from '@/app/components/sidebar/Sidebar';

import getCurrentUser from '@/app/actions/getCurrentUser';
import RentModal from '@/app/components/modals/RentModal';
import Footer from '@/app/components/footer/Footer';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/Navbar';
import UnauthorizedSate from './components/UnauthorizedState';

export const metadata = {
  title: 'Hidden santa',
  description: 'Santa app',
}

const font = Open_Sans({
  subsets: ['latin'],
  weight: '400'
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (

      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <UnauthorizedSate />
        </body>
      </html>
    )
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='bg-gray-100 dark:bg-[#181F39] min-h-screen'>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <RentModal />


            <div className="w-full relative flex ">
              <Sidebar />
              <div className="relative md:ml-80 w-full">
                <Navbar currentUser={currentUser} />
                <div
                  className="
                  pt-28
                  mx-auto 
                  w-full 
                  
                "
                >
                  <div
                    className="
                    flex 
                    flex-wrap 
                  "
                  >
                    <div className="w-full ">
                      <div
                        className="
                        relative 
                        flex 
                        flex-col 
                        min-w-0 
                        break-words 
                        w-full
                        
                        text-gray-700 
                        dark:text-gray-100
                      "
                      >
                        <div className='mb-auto'>
                          {children}
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>



          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}