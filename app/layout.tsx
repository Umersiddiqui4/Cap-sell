import type { Metadata } from 'next'
import './globals.css'
import { LayoutWithNavSidebar } from '@/components/layout-with-nav-sidebar'

export const metadata: Metadata = {
  title: 'Cap-Store',
  description: 'Cap Store - Your one-stop shop for premium caps',
  keywords: 'caps, hats, fashion, accessories, premium caps',
  generator: 'v0.dev',
  icons: {
    icon: 'https://wallpapers.com/images/hd/one-piece-luffy-straw-hat-smile-cgw4dpquwyu9jhqj-2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const categories = [
    {
      id: "sports",
      name: "Sports Caps",
      description: "Performance caps for athletes and sports enthusiasts",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "casual",
      name: "Casual Caps",
      description: "Everyday caps for a relaxed, stylish look",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "trucker",
      name: "Trucker Caps",
      description: "Classic mesh-backed caps with modern designs",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "premium",
      name: "Premium Collection",
      description: "Luxury caps crafted with premium materials",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]
  
  return (
    <html lang="en">
      <body>
      <LayoutWithNavSidebar categories={categories}>
        {children} 
         </LayoutWithNavSidebar>
        </body>
    </html>
  )
}
