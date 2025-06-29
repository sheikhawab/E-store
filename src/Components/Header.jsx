import React from 'react'
import styles from "@/styles/Header.module.css"
import Container from './Container'
import { FiSearch,FiShoppingCart } from 'react-icons/fi'
import Link from 'next/link';


const Header = () => {
    return (
        <header className={`${styles.header} py-3 px-1 shadow`}>
            <Container className={"flex justify-between items-center"}>
                <div className="flex items-center">
                    <span className="text-pink-500 font-bold text-4xl">
                        E-Store<b className='text-black'>.</b>
                    </span>
                </div>

                <div className={`${styles.searchBar} flex items-center`}>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton}>
                        <FiSearch size={18} />
                    </button>
                </div>
                <NavBar />
            </Container>
         </header>
    )
}

export default Header
export const NavBar = () => {
  return (
    <nav className="flex items-center gap-5">
      {/* Navigation Links */}
      <ul className="flex items-center gap-3 font-semibold">
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>

      {/* Icon Section */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart color="black" size={24} />
            <span
              className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}
            >
              3
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};


