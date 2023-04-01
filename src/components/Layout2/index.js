import './index.scss';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

const Layout2 = () => {
    return (
    <div className="App">
        <NavBar />
        <div className='page'>
            <span className='tags top-tags' style={{fontSize: '12px'}}>
                    def developer(skills, ratings):
                <span style={{display: 'block', paddingLeft: '5rem'}}>
                        return list(zip(skills, ratings))
                </span>            
            </span>

            <Outlet />
            <span className='tags bottom-tags' style={{fontSize: '12px', width: '50%'}}>
                    skills = ['Python', 'C++','Full-Stack', 'Data Science']
                    <span style={{display: 'block', width: '100%'}}>
                    ratings = ['Advanced', 'Upper Intermediate', 'Upper Intermediate', 'Advanced']
                    </span>
                    <span style={{display: 'block', width: '100%'}}>
                    print(developer(skills, ratings)) 
                    </span>
                <span className='bottom-tag-html'>
                    
                </span>
            </span>
        </div>
    </div>
    )
}

export default Layout2;