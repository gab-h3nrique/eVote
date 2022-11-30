import './../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-indigo-50 ">{children}</body>
    </html>
  )
}
