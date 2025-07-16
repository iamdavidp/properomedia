import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">Propero Media</Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/newsroom">Newsroom</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
