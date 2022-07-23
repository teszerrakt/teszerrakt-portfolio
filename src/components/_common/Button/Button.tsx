import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface IProps {
  url: string
  icon?: ReactNode
  text: string
  className?: string
}

const Button = (props: IProps) => {
  const {
    url,
    icon,
    text,
  } = props

  return (
    <a
      className={`${styles.button} bg-gradient`}
      href={url}
      target='_blank'
    >
      {icon && <i className={styles.icon}>{icon}</i>}
      {text}
    </a>
  )
}

export default Button