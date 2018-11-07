import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var squares = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
var turn = 'x';

function checkWinner() {
	  console.log('checking winner now...');
	  if (squares[0] + squares[1] + squares[2] === 'xxx' || squares[0] + squares[1] + squares[2] === '000' ) {
		console.log("WINNER!!!");
	  }
}
  
class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: squares[this.props.pos]
		};
		console.log(this.props.pos + ':' + squares[this.props.pos]);
	}
	
	render() {
		return (
			<button className="square" 
				onClick={(e) => this.btnClicked()} 
				onMouseEnter={this.onMouseEnterHandler()}
                onMouseLeave={this.onMouseLeaveHandler()}>
				{this.state.value}
			</button>
		);
	}
	  
	onMouseEnterHandler() {
		 console.log('inside onMouseEnterHandler'); 
	}
	
	onMouseLeaveHandler() {
		 console.log('inside onMouseLeaveHandlers'); 
	}
	  
	btnClicked() {
		squares[this.props.pos] = turn;
		this.setState ({ value: turn });
		console.log(this.props.pos + ':' + squares[this.props.pos]);
		checkWinner();
		if (turn == 'x') turn = '0'; else turn = 'x';
	}
}


class Board extends React.Component {
  
  render() {
    return (
      <div>
        <div>
		  <Square pos='0'/>
		  <Square pos='1'/>
		  <Square pos='2'/>
		</div>
		<div>
		  <Square pos='3'/>
		  <Square pos='4'/>
		  <Square pos='5'/>
		</div>
		<div>
		  <Square pos='6'/>
		  <Square pos='7'/>
		  <Square pos='8'/>
		</div>
      </div>
    );
  }
}


ReactDOM.render(
	<div>
		<Board/>
	</div>,
  document.getElementById('root')
);
