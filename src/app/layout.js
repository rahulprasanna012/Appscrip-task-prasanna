import "./globals.css";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";

export const metadata = { title: "Store", description: "Fake Store Demo" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
