import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Christian M. Miclat - Virtual Assistant & Tech Operations Specialist',
  description: 'Professional Virtual Assistant specializing in tech operations, backend admin, SEO, and ecommerce solutions with Shopify and WordPress.',
  keywords: 'virtual assistant, tech operations, SEO specialist, Shopify, WordPress, WooCommerce, data entry, lead generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}