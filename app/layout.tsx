import { Roboto } from 'next/font/google'
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

export const metadata = {
  title: 'Hidden santa',
  description: 'Santa app',
}

const font = Roboto({
  subsets: ['latin'],
  weight: '400'
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='bg-gray-100 dark:bg-[#17142A]'>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <RentModal />


            <div className="w-full relative flex ">
              <Sidebar />
              <div className="relative md:ml-80 w-full">
                <Navbar  currentUser={currentUser}/>
                <div
                  className="
                  px-4
                  md:px-6
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
                        
                        min-h-screen
                      "
                      >
                        <div className='mb-auto'>
                          {children}
                        </div>
                        <div >
                          <Footer />
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