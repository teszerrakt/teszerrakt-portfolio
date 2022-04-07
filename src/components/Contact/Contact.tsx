import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section id='contact' className={styles.contactSection}>
      <form
        name='contact-form'
        method='POST'
        className={styles.contactForm}
        data-netlify='true'
      >
        <div className={`${styles.title} text-gradient`}>
          Contact Me
        </div>
        <input type='hidden' name='form-name' value='contact-form'/>
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className={styles.blue}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className={styles.red}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            className={styles.blue}
          />
        </div>
        <button
          type='submit'
          className={`${styles.btnSubmit} bg-gradient`}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact