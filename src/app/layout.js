import { Open_Sans } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/styledComponentRegistry'
import Provider from '@/providers/Providers';

import 'react-toastify/dist/ReactToastify.css';
import { LayoutStyled } from '@/components/Layout/LayoutStyled';
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Secret Word',
  description: 'Created by Pablo Herrero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <Provider>
          <LayoutStyled>
          {children}
          </LayoutStyled>
        </Provider>
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
