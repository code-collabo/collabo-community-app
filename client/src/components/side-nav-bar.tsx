import Link from 'next/link';
import styles from '@/styles/SideNavBar.module.css';

export default function SideNavBar() {
  return (
    <>
      <nav className="nav-container">
        <Link className="nav-link" href="/">
          HOME
        </Link>
        <Link className="nav-link" href="/internships">
          INTERNSHIP
        </Link>
        <Link className="nav-link" href="/about">
          ABOUT
        </Link>
        <Link className="nav-link" href="/contact">
          CONTACT
        </Link>
      </nav>
    </>
  );
}
