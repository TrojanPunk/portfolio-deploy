import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AnimatedLetters, AnimatedLettersB } from '../AnimatedLetters'
import Logo from './Logo'
import'./index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','T','a','h','a',' ','H','a','b','i','b']
    const jobArray = ['F','u','l','l','-','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r']
    let timeoutId;

    useEffect(() => {
      timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 5000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);


    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>e</span> 
                  <span className={`${letterClass} _13`}>y</span> 
                  <span className={`${letterClass} _14`}>,</span>
                  <br />
                  <span className={`${letterClass} _15`}>I</span> 
                  <span className={`${letterClass} _16`}>'</span>
                  <span className={`${letterClass} _17`}>m</span> 
                  <AnimatedLetters letterClass={letterClass}
                  strArray={nameArray}
                  idx={18} />
                  <br />
                  <AnimatedLettersB letterClass={letterClass}
                  strArray={jobArray}
                  idx={29} />
                </h1>
                <h2>Python Developer | Frontend Developer | Data Analyst<br /><br /></h2>
                <h2 style={{color: '#FFD600', fontWeight: 500}}>Wish to get in touch?</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
              </div>
            <Logo />
          </div>
          <Loader type="line-scale-pulse-out-rapid" />
        </>
    );
}

export default Home