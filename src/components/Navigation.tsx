// src\components\Navigation.tsx

import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <h1>Erik Štvrtecký</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/aboutme">About Me</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
