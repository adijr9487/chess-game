import React from 'react'
import Chess from "chess.js"

//component
import Cell from '../Cell/Cell'


//classes
import classes from "./Board.css"


const positions = [
    ['8a', '8b', '8c', '8d', '8e', '8f', '8g', '8h'],
    ['7a', '7b', '7c', '7d', '7e', '7f', '7g', '7h'],
    ['6a', '6b', '6c', '6d', '6e', '6f', '6g', '6h'],
    ['5a', '5b', '5c', '5d', '5e', '5f', '5g', '5h'],
    ['4a', '4b', '4c', '4d', '4e', '4f', '4g', '4h'],
    ['3a', '3b', '3c', '3d', '3e', '3f', '3g', '3h'],
    ['2a', '2b', '2c', '2d', '2e', '2f', '2g', '2h'],
    ['1a', '1b', '1c', '1d', '1e', '1f', '1g', '1h'],
]

//chess vars
const chess = new Chess();

while (!chess.game_over()) {
    const moves = chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move(move)
    console.log(chess.pgn())
    console.log(chess.ascii())
}

const Board = (props) => {
    return (
        <div className={classes.Board}>
            <div className={classes.edge}></div>
            <div className={classes.top}>
                {
                    positions[0].map((val, index)=>{
                        return <p className={classes.alpha}>{val[1]}</p>
                    })
                }
            </div>
            <div className={classes.edge}></div>

            {/* ------------------------------------------- */}

            <div className={classes.left}>
                {
                    positions[0].map((val, index)=>{
                        return <p className={classes.num}>{8-index}</p>
                    })
                }
            </div>
            <div className={classes.main}>

            {
                positions.map((row, inRow)=>{
                    return <div className={classes.Row}>
                        {positions[inRow].map((cell, index)=>{
                            return <Cell positions={[inRow, index]} name={cell}/>
                        })}
                    </div>
                })
            }

            </div>

            <div className={classes.left}>
                {
                    positions[0].map((val, index)=>{
                        return <p className={classes.num}>{8-index}</p>
                    })
                }
            </div>
            
            {/* ------------------------------------------- */}
            
            <div className={classes.edge}></div>
            <div className={classes.top}>
                {
                    positions[0].map((val, index)=>{
                        return <p className={classes.alpha}>{val[1]}</p>
                    })
                }
            </div>
            <div className={classes.edge}></div>
        </div>
    )
}

export default Board
