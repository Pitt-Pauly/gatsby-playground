import React from 'react'
import Link from 'gatsby-link'

import styles from "./header.module.css";

const ListLink = props =>
  <li className={styles.listlink}>
    <Link to={props.to} className={styles.navlink}>
      {props.children}
    </Link>
  </li>

const Header = ({ siteTitle }) => (
  <div className={styles.site_header}>
    <div className={styles.site_wrapper}>
      <header className={styles.nav_header}>
        <h1 className={styles.site_title}>
          <Link to="/" className={styles.site_title_link}>
            {siteTitle}
          </Link>
        </h1>
        <ul className={styles.navlist}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/hn-feed/">HackerNews feed</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/counter/">Counter</ListLink>
        </ul>
      </header>
    </div>
    
  </div>
)

export default Header
