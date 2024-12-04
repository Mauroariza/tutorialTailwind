// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tutoriales/position">Tutorial</Link>
        </li>
      </ul>
    </nav>
  );
}