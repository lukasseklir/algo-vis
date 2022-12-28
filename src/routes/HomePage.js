import React from 'react';
import MapView from '../components/MapView'
import React, {Component} from 'react';
import Square from "./components/square";

import {COL_SIZE, ROW_SIZE, emptyBoard} from './components/shape';

const style = {
	width        : "250px",
	height       : "250px",
	margin       : "0 auto",
	display      : "grid",
        borderWidth  : "10px",
 	gridTemplate : `repeat(${COL_SIZE}, 1fr) / repeat(${ROW_SIZE}, 1fr)`,
};

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state  = {board: emptyBoard()};  
    }

    render() {
        const board =  this.state.board.map( (val, pos) => <Square key={pos} name={pos} color={val}/>);
        return (
            <div className="App">
                <h1>  Tetris </h1>
                <div style={style}> {board} </div>
            </div>
        );
    }
}


export default HomePage;