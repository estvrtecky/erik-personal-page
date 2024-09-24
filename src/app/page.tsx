// src\app\page.tsx

import Image from "next/image";

export default function Page() {
  return (
    <div>
      <header>
        <nav>
          <h1>Erik Štvrtecký</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutme">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <h1>
            Hi, <br /> I&apos;m Erik!
          </h1>
          <h2>Programmer & Graphic Designer</h2>
          <p>
            I&apos;m a programming student with a keen interest in graphic design. I&apos;m passionate about creating beautiful and functional websites and applications. I&apos;m always looking for new challenges and opportunities to learn and grow.
          </p>
        </div>
        <div>
          <Image src="/me.jpeg" alt="Photo of Me" width={375} height={500} />
        </div>
      </main>
    </div>
  );
}
