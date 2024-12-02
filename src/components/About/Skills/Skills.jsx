import './Skills.scss';
import htmlIcon from '../../../assets/html.png';
import cssIcon from '../../../assets/css.png';
import jsIcon from '../../../assets/js.png';
import reactIcon from '../../../assets/react.png';
import sassIcon from '../../../assets/scss.svg';
import gitIcon from '../../../assets/git.png';
import githubIcon from '../../../assets/github.png';
import canvaIcon from '../../../assets/canva.png';

const Skills = () => {
  return (
    <section className='skills-section' id='about'>
      <div className='container'>

        <div className='section__title center'>
          <h1>My Skills</h1>
        </div>
        <div className='skill-items'>

          <img
            className='skill-icons'
            src={htmlIcon}
            alt="Html"
            width="80px" />
          <img
            className='skill-icons'
            src={cssIcon}
            alt="Css"
            width="80px" />
          <img
            className='skill-icons'
            src={jsIcon}
            alt="JavaScript"
            width="80px" />
          <img
            className='skill-icons'
            src={reactIcon}
            alt="React"
            width="80px" />
          <img
            className='skill-icons'
            src={sassIcon}
            alt="Sass"
            width="80px" />
          <img
            className='skill-icons'
            src={githubIcon}
            alt="Git"
            width="80px" />
          <img
            className='skill-icons'
            src={gitIcon}
            alt="Github"
            width="80px" />
          <img
            className='skill-icons'
            src={canvaIcon}
            alt="Canva"
            width="80px" />

        </div>
      </div>
    </section>
  )
}

export default Skills;