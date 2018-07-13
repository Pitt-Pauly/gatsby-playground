import React from 'react'

import styles from "./footer.module.css";

const Footer = ({text}) => (
  <div className={styles.footer}>
    <div className={styles.site_wrapper}>
        <footer className={styles.footer_content}>
        <div className={styles.footer_text}>{text}</div>
        </footer>
    </div>
  </div>
)

export default Footer