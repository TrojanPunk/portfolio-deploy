import './index.scss';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className="App">
        <NavBar />
        <div className='page'>
            <span className='tags top-tags' style={{fontSize: '12px'}}>
                class Developer:
                <span style={{display: 'block', paddingLeft: '2rem'}}>
                    def __init__(self, skills, ratings):
                </span>
                <span style={{display: 'block', paddingLeft: '5rem'}}>
                    self.skills = skills
                </span>
                <span style={{display: 'block', paddingLeft: '5rem'}}>
                    self.ratings = ratings
                </span>
                <span style={{display: 'block', paddingLeft: '2rem'}}>
                    def display(self):
                </span>
                <span style={{display: 'block', paddingLeft: '5rem'}}>
                        return list(zip(self.skills, self.ratings))
                </span>            
            </span>

            <Outlet />
            <span className='tags bottom-tags' style={{fontSize: '12px', width: '50%'}}>
                if __name__ == '__main__':
                    <span style={{display: 'block', paddingLeft: '2rem'}}>
                    skills = ['Python', 'C++','Full-Stack', 'Data Science']
                    </span>
                    <span style={{display: 'block', paddingLeft: '2rem', width: '100%'}}>
                    ratings = ['Advanced', 'Upper Intermediate', 'Upper Intermediate', 'Advanced']
                    </span>
                    <span style={{display: 'block', paddingLeft: '2rem', width: '100%'}}>
                    code = Developer(skills, ratings)
                    </span>
                    <span style={{display: 'block', paddingLeft: '2rem', width: '100%'}}>
                    print(code.display()) 
                    </span>
                <span className='bottom-tag-html'>
                    
                </span>
            </span>
        </div>
    </div>
    )
}

export default Layout;