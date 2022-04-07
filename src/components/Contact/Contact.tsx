import styles from './Contact.module.scss'
import { FormEvent, useState } from 'react'
import Utils from '../../utils/Utils'

const FORM_NAME = 'contact-form'
const BOT_FIELD = 'bot-field'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: Utils.encode({ "form-name": FORM_NAME, name, email, message }),
      })
    } catch (error) {
      console.error(error)
    } finally {
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <section id='contact' className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={`${styles.title} text-gradient`}>
          Contact Me
        </div>
        <form
          name={FORM_NAME}
          method='POST'
          className={styles.contactForm}
          data-netlify='true'
          data-netlify-honeypot={BOT_FIELD}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input type='hidden' name='form-name' value={FORM_NAME} />
          <input type='hidden' name={BOT_FIELD} />
          <div className={styles.inputContainer}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={event => setName(event.target.value)}
              className={styles.blue}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
              className={styles.red}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={event => setMessage(event.target.value)}
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