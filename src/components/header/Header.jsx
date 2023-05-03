import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header>
        <div className="topNav">
          <Image 
            src={'/image/logo.jpg'}
            width={50}
            height={50}
            alt=""
          />
          <nav>
            <Link href="/"> Home </Link>
            <Link href="/events"> Events </Link>
            <Link href="/about"> About Us </Link>
          </nav>
        </div>
        <h1>This is an event landing page</h1>
    </header>
  )
}
