import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatedLetters, AnimatedLettersB } from '../AnimatedLetters'
import TagCloud from "TagCloud";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    let timeoutId;

    useEffect(() => {
        timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover-yellow');
        }, 4000);

        return () => {
        clearTimeout(timeoutId);
        };
    }, []);
    
      // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Python",
        "C++",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Data Analysis",
        "Data Visualization",
        "Tableau",
        "SQL"
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9z7ws4l', 'template_qf50u5f', form.current, 'zrV0RZIodocxkv3mr')
      .then((result) => {
          console.log(result.text);
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLettersB
                            letterClass={letterClass}
                            strArray={['L','e','t',"'",'s',' ', 'g', 'e', 't', ' ', 'i', 'n', ' ', 't', 'o', 'u', 'c', 'h', '!']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in entry-level opportunities as a Full-Stack Developer.
                        If you liked my work and wish to get in touch, use the form provided below
                        to contact me.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name='from_name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        placeholder='Email'
                                        type='email'
                                        name='email_id'
                                        required
                                    />
                                </li>
                                
                                <li>
                                    <textarea  
                                        placeholder='Message'
                                        name='message'
                                        required
                                    />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="text-sphere">
                    {/* span tag className must be "tagcloud"  */}
                    <span className="tagcloud"></span>
                </div>
            </div>
            
            <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Contact