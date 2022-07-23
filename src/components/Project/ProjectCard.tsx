import styles from './ProjectCard.module.scss'
import Button from '../_common/Button/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { IProject } from './Project'

const ProjectCard = (props: IProject) => {
  const {
    title,
    tags,
    liveURL,
    githubURL,
    imgURL,
  } = props

  return (
    <div className={styles.projectCard}>
      <img src={imgURL} className={styles.image} alt={title} />
      <div className={`${styles.title} text-gradient`}>{title}</div>
      <div className={styles.tags}>{tags}</div>
      <div className={styles.btnContainer}>
        <Button url={githubURL} text='GitHub' icon={<BsGithub />} />
        <Button url={liveURL} text='Live Site' icon={<CgWebsite />} />
      </div>
    </div>
  )
}

export default ProjectCard