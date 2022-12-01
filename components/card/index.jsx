import { useState } from "react";
import Scoreboard from "../scoreboard";
import "./styles.css"


const Card = ({stackData}) => {
const [votesOptionOne, setVotesOptionOne] = useState(0);
const [votesOptionTwo, setVotesOptionTwo] = useState(0);
const [votesOptionThree, setVotesOptionThree] = useState(0);
const [style, setStyle] = useState(false);

function sumVotes(id) {
if ( id == 1) {
    setVotesOptionOne(votesOptionOne + 1)
} if ( id == 2 ) {
    setVotesOptionTwo(votesOptionTwo + 1)
} if ( id == 3 ){
    setVotesOptionThree(votesOptionThree + 1)
}
}


return (
    <div id="containerPaiCardsEscoreboards">
        <ul>
            {
            stackData.map((lang, index)=> (
                <li className="card" id={index}> 
                <span>{lang.title }</span>
                <div>{<lang.img/>}</div>
                <button onClick={(() => sumVotes(lang.id))}>VOTAR</button>
                </li>
            ))
            }
        </ul>
            <Scoreboard votesOptionOne={votesOptionOne} votesOptionThree={votesOptionThree} votesOptionTwo={votesOptionTwo} style={style}/>
    </div>
    )
}

export default Card


