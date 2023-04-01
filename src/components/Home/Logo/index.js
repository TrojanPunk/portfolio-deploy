import './index.scss'
import LogoT from '../../../assets/images/taha-logo.png'
import { useEffect, useRef } from 'react'

const Logo = () => {

    const bgRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        const bgEl = bgRef.current;
        const solidEl = solidLogoRef.current;

        bgEl.style.opacity = 0;

        setTimeout(() => {
            bgEl.style.opacity = 1;
            solidEl.style.animation = 'fade-in-out 5s ease-in-out infinite';

            setTimeout(() => {
                solidEl.style.animation = 'none';
                solidEl.style.opacity = 1;
            }, 5000);
        }, 1000);
    }, []);

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoT} alt='TH'></img>
        </div>
    )
}

export default Logo
