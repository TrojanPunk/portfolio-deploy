import React from "react";
import { useEffect, useState, useRef } from 'react'
import "./index.scss";
import safeDrive from '../../assets/images/safe-drive-analyzer.png'
import vires from '../../assets/images/vires1.png'
import spots from '../../assets/images/spots.png'
import crypto from '../../assets/images/crypto.png'
import intelligantIrrigation from '../../assets/images/annIrrigation.png'
import { AnimatedLetters, AnimatedLettersB } from "../AnimatedLetters";
import Loader from "react-loaders";


    const cards = [
        {
            title: 'Safe Drive Analyzer',
            imgUrl: safeDrive,
            link: 'https://github.com/TrojanPunk/Safe-Drive-Analyzer'
        },
        {
            title: 'ViRes - Automated Visual Resume Maker',
            imgUrl: vires,
            link: ''
        },
        {
            title: 'Spots - Spotify Voice Assistant',
            imgUrl: spots,
            link: 'https://github.com/TrojanPunk/Spots'
        },
        {
            title: 'Crypto Forecasting 2021',
            imgUrl: crypto,
            link: 'https://www.kaggle.com/code/tahahabib/crypto-forecasting'
        },
        {
            title: 'Intelligent Irrigation System',
            imgUrl: intelligantIrrigation,
            link: ''
        },
        {
            title: 'Safe Drive Analyzer',
            imgUrl: safeDrive,
            link: 'https://github.com/TrojanPunk/Safe-Drive-Analyzer'
        }
    ];

    const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    let timeoutId;

    useEffect(() => {
        timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover-yellow');
        }, 4000);

        return () => {
        clearTimeout(timeoutId);
        };
    }, []);
        return (
          <>
            <div className="portfolio">
              <h1>
                  <AnimatedLettersB
                      letterClass={letterClass}
                      strArray={['P','o','r',"t",'f','o', 'l', 'i', 'o']}
                      idx={15}
                  />
                </h1>
              <div className="card-container">
                {cards.map((card, index) => (
                  <div key={index} className="card">
                    <img src={card.imgUrl} alt={card.title} />
                    <a href={card.link}><div className="overlay">{card.title}</div></a>
                  </div>
                ))}
              </div>
            </div>
            <Loader type="line-scale-pulse-out-rapid" />
          </>
        );
      };
      
      export default Portfolio;