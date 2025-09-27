import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MLRC - Madhesh Library & Research Center',
  description: 'Building a conscious Madheshi intelligentsia through research, discussion, and knowledge production. Founded in July 2023 by Aavash Guru, located in Alok Nagar, Kathmandu.',
  keywords: 'MLRC, Madhesh, library, research center, Aavash Guru, Anshu Kumar, intelligentsia, identity, representation',
  authors: [{ name: 'Madhesh Library & Research Center' }],
  openGraph: {
    title: 'MLRC - Madhesh Library & Research Center',
    description: 'Building a conscious Madheshi intelligentsia through research and discourse',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}