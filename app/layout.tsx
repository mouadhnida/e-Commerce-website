import './globals.css'
import Head from './head';
import NavBar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='overflow-x-hidden overflow-y-auto'>
        {children}
      </body>
    </html>
  )
}
