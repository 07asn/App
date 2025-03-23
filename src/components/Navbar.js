import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-white hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-blue-500">Contact</Link>
        </li>
        <li>
          <Link href="/login" className="text-white hover:text-blue-500">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
