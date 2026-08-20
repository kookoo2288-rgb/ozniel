import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'אוזניאל - פתרונות שמיעה | פתרון ביתי לנוזלים באוזניים אצל ילדים',
  description:
    'אוזניאל מציעה פתרון ביתי חדשני ולא פולשני שנועד לסייע באוורור האוזן התיכונה ובהתמודדות עם נוזלים ולחץ באוזניים אצל ילדים. פתרון נוח לשימוש בבית, בהתאם להנחיות.',
  keywords: [
    'נוזלים באוזניים',
    'שמיעה אצל ילדים',
    'אוורור האוזן התיכונה',
    'חצוצרת השמע',
    'פתרון ביתי לשמיעה',
    'אוזניאל',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'אוזניאל - פתרונות שמיעה',
    description:
      'פתרון ביתי חדשני לילדים עם נוזלים באוזניים וקשיי שמיעה. עשוי לסייע באוורור האוזן התיכונה בהתאם להתאמה הרפואית.',
    type: 'website',
    locale: 'he_IL',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a6e',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'אוזניאל - פתרונות שמיעה',
      description:
        'פתרונות ביתיים חדשניים לשיפור השמיעה אצל ילדים ולהתמודדות עם נוזלים ולחץ באוזן התיכונה.',
      areaServed: 'IL',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+972-58-444-3326',
        contactType: 'customer service',
        availableLanguage: ['Hebrew'],
      },
    },
    {
      '@type': 'Product',
      name: 'אוזניאל - פתרון שמיעה ביתי',
      description:
        'מכשיר ביתי המיועד ליצור זרימת אוויר מבוקרת דרך האף בזמן בליעה, במטרה לסייע בפתיחת חצוצרת השמע ובאוורור האוזן התיכונה.',
      category: 'Medical Device',
      brand: {
        '@type': 'Brand',
        name: 'אוזניאל',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`light ${heebo.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
