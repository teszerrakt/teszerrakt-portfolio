import styles from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerSection}>
      Made with ❤️ by Zaky Syihab Hatmoko {currentYear}
    </footer>
  )
}

export default Footer