import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faKaggle,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { AnimatedLettersB } from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  let timeoutId;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover-yellow');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLettersB
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a Full Stack Developer who likes to solve problems using the extensive scope of Computer Science.
            I love delving into the new concepts and practices to update myself with the current technologies.
          </p>
          <p align="LEFT">
            I am a team player and can handle and work under pressure in unforseen circumstances. I readily absorb any suggestions and 
            criticisms to work iteratively on projects based on testing and feedbacks.
          </p>
          <p>
            I develop in Python for Backend and HTML5, CSS, JavaScript, and React for Front End. I have a breadth of knowledge and 
            applicative skills in technologies like Data Science, Machine Learning, Deep Learning, and DBMS
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#00759A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faKaggle} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default About
