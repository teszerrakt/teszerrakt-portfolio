import styles from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerSection}>
      <span className={styles.footerText}>
        Made with ❤️ by <span className='text-gradient'>Zaky Syihab Hatmoko</span> in {currentYear}
      </span>
    </footer>
  )
}

export default Footer