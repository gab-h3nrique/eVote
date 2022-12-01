import "./style.css"
"use client"

const Scoreboard = ({votesOptionOne,
votesOptionThree,
votesOptionTwo, style}) => {

    
    return (
    <ul id="containerScoreboard">
     <li className={style ? "liEffect" : "liNormal"}><span>Votos Vue</span> <span className="countVotes">{votesOptionOne}</span> </li>   
     <li className={style ? "liEffect" : "liNormal"}><span>Votos React</span> <span className="countVotes">{votesOptionTwo}</span> </li>   
     <li className={style ? "liEffect" : "liNormal"}><span>Votos Angular</span> <span className="countVotes">{votesOptionThree}</span> </li>   
    </ul>
        )
}

export default Scoreboard