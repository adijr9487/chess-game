import React from 'react'

//component


//classes
import classes from "./Cell.css"

const Cell = (props) => {

    //style

    let gameSet = {
        color1: '#67B9E2',
        color2: '#5D5D5D',
    }

    let style = {
       backgroundColor: (props.positions[1] + props.positions[0]) % 2 ? gameSet.color2 : gameSet.color1, 
    }

    return (
        <div style={style} className={classes.Cell}>
            {props.positions[1]}
            <br />
            {props.positions[0]}
        </div>
    )
}

export default Cell
