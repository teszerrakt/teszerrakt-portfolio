import { ReactNode, useEffect, useState } from 'react'
import styles from './SocialMedia.module.scss'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { isDesktop } from 'react-device-detect'

const ICON_LIST: { id: string, icon: any, link: string }[] = [
  {
    id: 'Github',
    icon: BsGithub,
    link: 'https://github.com/teszerrakt',
  },
  {
    id: 'Linkedin',
    icon: BsLinkedin,
    link: 'https://www.linkedin.com/in/zsyihab/',
  },
]
const DURATION = 3000

const SocialMedia = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [currentIconIndex, setCurrentIconIndex] = useState<number>(0)
  const showPopup = isClicked || isHovered

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIconIndex === ICON_LIST.length - 1) {
        setCurrentIconIndex(0)
      } else {
        setCurrentIconIndex(currentIconIndex + 1)
      }
    }, DURATION)

    return () => clearInterval(interval)
  })

  const handleClick = () => {
    setIsHovered(false)
    setIsClicked(!isClicked)
  }

  return (
    <>
      {ICON_LIST.map(({ id, icon, link }) => (
        <SocialMediaPopup key={id} icon={icon()} visible={showPopup} label={id} link={link} />
      ))}
      <div
        className={`${styles.socialMedia} bg-gradient`}
        onMouseEnter={() => isDesktop ? setIsHovered(true) : {}}
        onMouseLeave={() => isDesktop ? setIsHovered(false) : {}}
        onClick={handleClick}
      >
        <i className={styles.icon}>
          {showPopup ?
            <CgClose className={`${(isHovered && !isClicked && isDesktop) ? 'rotate-45' : ''} duration-300`} />
            :
            ICON_LIST[0].icon()
          }
        </i>
        <span className={styles.label}>
          Connect
        </span>
      </div>
    </>
  )
}

interface ISocialMediaIconProps {
  icon: ReactNode
  visible: boolean
  label: string
  link?: string
}

const SocialMediaPopup = ({ visible, icon, label, link }: ISocialMediaIconProps) => {
  return (
    <a
      className={`${styles.socialMediaPopup} ${visible ? '' : '!hidden'} bg-gradient`}
      href={link || '#'}
      target='_blank'
    >
      <i className={styles.icon}>{icon}</i>
      <span className={styles.label}>{label}</span>
    </a>
  )
}

export default SocialMedia