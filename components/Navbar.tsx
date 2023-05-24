import Link from "next/link";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }
        {/* <ActiveLink text="Home" href="/"></ActiveLink>
        <ActiveLink text="About" href="/about"></ActiveLink>
        <ActiveLink text="Contact" href="/contact"></ActiveLink>
        <ActiveLink text="Pricing" href="/pricing"></ActiveLink> */}
    </nav>
  )
}
