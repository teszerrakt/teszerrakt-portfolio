import styles from './About.module.scss'

const About = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        <div className={`${styles.title} text-gradient`}>
          ABOUT ME
        </div>
        <div className={styles.descriptionContainer}>
          Hello, my name is <span className={`text-gradient ${styles.name}`}>Zaky Syihab Hatmoko</span>. I am a Frontend Engineer.
          <br />
          I recently graduated from Computer Science Major at Universitas Gadjah Mada.
          <br />
          I love to create a beautiful and functional website to use from mobile
          to desktop.
          <br />
          I am passionate about learning new things, currently engrossed
          in Frontend Web Development.
        </div>
      </div>
    </section>
  )
}

export default About