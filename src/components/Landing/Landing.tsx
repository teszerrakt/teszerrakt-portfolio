import styles from './Landing.module.scss'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Landing = () => {
  return (
    <section id='landing' className={styles.landingSection}>
      <div className={`${styles.title} text-gradient`}>ZSYIHAB.</div>
      <div className={styles.subTitle}>WEB DEVELOPER</div>
      <div className={styles.scrollDownContainer}>
        <span className={styles.text}>Scroll Down</span>
        <BsChevronDoubleDown className={styles.icon}/>
      </div>
    </section>
  )
}

export default Landing