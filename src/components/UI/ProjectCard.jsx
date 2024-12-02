// import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/me.jpg';
import githubImg from '../../assets/github-icon.svg'
import websiteImg from '../../assets/website-icon.svg'
import './ProjectCard.scss';

const ProjectCard = ({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  repoLink = '#',
  webLink = '#',
  repo = 'GitHub',
  web = 'Website' }) => {
  return (
    <div>
      <div className='projectItem__img'>
        <img src={img} alt="project-img" />
      </div>
      <div className='projectItem__info'>
        <div>
          <h3 className='projectItem__title'>{title}</h3>
        </div>
        <p className='projectItem__desc'>{desc}</p>
        <div className='btns'>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <img src={githubImg} alt="github-icon" />{repo}
          </a>
          <a href={webLink} target="_blank" rel="noopener noreferrer">
            <img src={websiteImg} alt="website-icon" />{web}
          </a>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard;