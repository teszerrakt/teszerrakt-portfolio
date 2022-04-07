import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section id='contact' className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={`${styles.title} text-gradient`}>
          Contact Me
        </div>
        <form
          name='contact-form'
          method='POST'
          className={styles.contactForm}
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <input type='hidden' name='form-name' value='contact-form' />
          <input type='hidden' name='bot-field' />
          <div className={styles.inputContainer}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className={styles.blue}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className={styles.red}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              className={`${styles.blue} scrollbar`}
            />
          </div>
          <button
            type='submit'
            className={`${styles.btnSubmit} bg-gradient`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact