import './globals.css';

export const metadata = {
  title: 'Mettā Muse - E-Commerce Store',
  description: 'Discover our premium collection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
