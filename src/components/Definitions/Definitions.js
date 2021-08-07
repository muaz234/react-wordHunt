import React from 'react'
import './Definitions.css'
const Definitions = ({ word, category, meanings, LightMode }) => {
    return (
        <div className="meanings">
            {meanings[0] && word && category === "en" && (
                <audio src={meanings[0].phonetics[0]} style={{backgroundColor: '#fff', borderRadius: 10 }}>
                    Your browser does not support audio element
                    </audio>
            )}
            {word === "" ? (<span className="subTitle">Start by typing a word in Search</span> )
            :  
            ( meanings.map((a, b) => 
                a.meanings.map((i) => 
                    i.definitions.map((d) => 
                <div className="singleMean" style={{backgroundColor: LightMode ? 'black' : 'white', color: LightMode ? 'white' : 'black' }}>
                    <b>{d.definition}</b>
                    <hr  style={{backgroundColor: 'black', width: '100%'}}/>
                    {d.example && (<span>
                        <b>Example: </b>
                        {d.example}
                    </span>)}
                    {d.synonyms && (<span>
                        <b>Example: </b>
                        {d.synonyms.map((s) => `${s}, `)}
                    </span>)}
                </div>
                )))
            )}
        </div>
    )
}

export default Definitions
