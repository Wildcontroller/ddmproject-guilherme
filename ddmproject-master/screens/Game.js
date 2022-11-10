import React from 'react'
import { Text } from 'react-native'

function Game() {
  return (
    <Text>Feed</Text>
  )
}
class JogodoGalo extends React.Component {
  render() {
    return (
      <div className="Jogo-do-Galo">
        <h1>Gmae List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

return React.createElement('div', {className: 'Jogo-do-Galo'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

class Tábua extends React.Component {
  rendercaixa(i) {
    return <Square value={i} />;
  }
}

class quadro extends React.Component {
  render() {
    return (
      <botao className="caixa">
        {this.props.value}
      </botao>
    );
  }
}

class caixa extends React.Component {
  render() {
    return (
      <botao className="square" onClick={function() { console.log('click'); }}>
        {this.props.value}
      </botao>
    );
  }
}

class caixa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <botao className="caixa" onClick={() => console.log('click')}>
        {this.props.value}
      </botao>
    );
  }
}

class quadro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <botao
        className="caixa"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </botao>
    );
  }
  
}
class quadro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caixas: Array(9).fill(null),
    };
  }

  rendercaixa(i) {
    return <Square value={i} />;
  }

  [
    'O', null, 'X',
    'X', 'X', 'O',
    'O', null, null,
  ]
  rendercaixa(i) {
    return <Square value={i} />;
  }

  rendercaixa(i) {
    return <caixa value={this.state.squares[i]} />;
  }

  rendercaixa(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  class caixa extends React.Component {
    render() {
      return (
        <botao
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </botao>
      );
    }
  }

  class quadro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        caixas: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const caixas = this.state.caixas.slice();
      caixas[i] = 'X';
      this.setState({squares: squares});
    }
  
    rendercaixa(i) {
      return (
        <caixa
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="Estado do Quadro">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="Estado do Quadro">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="Estado do Quadro">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  var jogador = {pontuacao: 1, nome: 'Joao'};
jogador.pontuacao = 2;

function caixas(props) {
  return (
    <botao className="square" onClick={props.onClick}>
      {props.value}
    </botao>
  );
}

class quadro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caixas: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const caixas = this.state.caixas.slice();
    caixas[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      caixas: caixas,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const status = 'Proximo jogador: ' + (this.state.xIsNext ? 'X' : 'O');

  }

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Proximo Jogador: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="Estado do Quadro">
            {this.rendercaixa(0)}
            {this.rendercaixa(1)}
            {this.rendercaixa(2)}
          </div>
          <div className="Estado do Quadro">
            {this.rendercaixa(3)}
            {this.rendercaixa(4)}
            {this.rendercaixa(5)}
          </div>
          <div className="Estado do Quadro">
            {this.rendercaixa(6)}
            {this.rendercaixa(7)}
            {this.rendercaixa(8)}
          </div>
        </div>
      );
    }
  }

  function calculateWinner(caixas) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (caixas[a] && caixas[a] === caixas[b] && caixas[a] === caixas[c]) {
        return caixas[a];
      }
    }
    return null;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
    }




// Now player is {score: 2, name: 'Gonçalo'}




export default Game;
