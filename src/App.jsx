import React, {Component} from 'react';

class App extends Component {
  first(json) {
    this.setState({synonym: [
      json[0].word,
      json[1].word,
      json[2].word,
      json[3].word,
      json[4].word
    ]});
  }
  second(json){
    this.setState({antonym: [
      json[0].word,
      json[1].word,
      json[2].word,
      json[3].word,
      json[4].word
    ]});

  }

  constructor(props) {
    super(props);
    this.state = {
      word: "",
      synonym: "",
      antonym: ""
    }
  }

  call1(word) {
    fetch(`https://api.datamuse.com/words?ml=${word}&&max=5`)
    .then(response => response.json())
    .then(json => {
      this.first(json)
    })

  }
  call2(word) {
    fetch(`https://api.datamuse.com/words?rel_ant=${word}&&max=5`)
    .then(response => response.json())
    .then(json => {
      this.second(json)
    })

  }

  render() {
    return (
      <div className="main">
        <h1>Find synonym and antonym</h1>
      <div className="form-inline">
          <div className="form-group">
          <input className="form-control" type="text" placeholder="your word..." onChange={event => this.setState({word: event.target.value})}/>
          <button className="btn btn-success" type="button" onClick={() => {
            this.call2(this.state.word)
            this.call1(this.state.word)}}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className="output">
        <div className="syn">
          <h1>Synonym of {this.state.word} is</h1>
          <h2 id="out">{this.state.synonym[0]}</h2>
          <h2 id="out">{this.state.synonym[1]}</h2>
          <h2 id="out">{this.state.synonym[2]}</h2>
          <h2 id="out">{this.state.synonym[3]}</h2>
          <h2 id="out">{this.state.synonym[4]}</h2>

        </div>
        <div className="ant">
          <h1>Antonym of {this.state.word} is</h1>
          <h2 id="out">{this.state.antonym[0]}</h2>
          <h2 id="out">{this.state.antonym[1]}</h2>
          <h2 id="out">{this.state.antonym[2]}</h2>
          <h2 id="out">{this.state.antonym[3]}</h2>
          <h2 id="out">{this.state.antonym[4]}</h2>
        </div>
      </div>
      <div className="footer">
        <span>Power by React <br /> Develop by Thai Lam Ha <br /> Design by jiichu</span>
      </div>
    </div>)
  }
}

export default App;
