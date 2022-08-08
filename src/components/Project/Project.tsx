import styles from './Project.module.scss'
import kappa from '../../../images/kappa.png'
import portfolio from '../../../images/portfolio.png'
import anico from '../../../images/anico.webp'
import ProjectCard from './ProjectCard'

export interface IProject {
  imgURL: string
  liveURL: string
  githubURL: string
  title: string
  tags: string
  className?: string
}

const projectList: IProject[] = [
  {
    title: 'Kappa - Comic Recommender System',
    tags: 'React, Flask, TailwindCSS',
    githubURL: 'https://github.com/teszerrakt/kappa-comic-recommender',
    liveURL: 'https://kappa.zsyihab.tech',
    imgURL: kappa,
  },
  {
    title: 'Portfolio Website',
    tags: 'React, TypeScript, SCSS, TailwindCSS',
    githubURL: 'https://github.com/teszerrakt/teszerrakt-portfolio',
    liveURL: 'https://zsyihab.tech',
    imgURL: portfolio,
  },
  {
    className: 'col-span-1 sm:col-span-2',
    title: 'AniCo - Anime Collections',
    tags: 'React, TypeScript, GraphQL, Emotion',
    githubURL: 'https://github.com/teszerrakt/anime-collections',
    liveURL: 'https://anico.zsyihab.tech',
    imgURL: anico,
  }
]

const Project = () => {
  return (
    <section id='project' className={styles.projectSection}>
      <div className={styles.projectContainer}>
        <div className={`${styles.title} text-gradient`}>
          MY PROJECTS
        </div>
        <div className={styles.cardContainer}>
          {projectList.map(project =>
            <ProjectCard
              key={project.title}
              className={project.className}
              imgURL={project.imgURL}
              liveURL={project.liveURL}
              githubURL={project.githubURL}
              title={project.title}
              tags={project.tags}
            />,
          )}
        </div>
      </div>
    </section>
  )
}

export default Project