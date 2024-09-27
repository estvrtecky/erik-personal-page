// src\app\page.tsx

import Image from "next/image";

export default function Page() {
  return (
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
  );
}
