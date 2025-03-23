import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
