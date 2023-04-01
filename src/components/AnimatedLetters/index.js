import './index.scss'

const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + idx}`} style={{color: i < 5 ? "#FFD600" : "#00759A"}}>
                        {char}
                    </span>    
                ))
            }
        </span>
    )
};

const AnimatedLettersB = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>    
                ))}
        </span>
    )
};

export {AnimatedLetters, AnimatedLettersB}
