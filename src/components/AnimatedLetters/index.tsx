import './index.scss'
import React from 'react'

type props = {
    letterClass: 'string',
    strArray: [],
    idx: Number
}

const AnimatedLetters = ({letterClass, strArray, idx}: any) => {
  return (
    <span>
        {
            strArray.map((char:any, i: Number)=> (
                <span key={char + i} className={`${letterClass}_${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters;