import React, {Component} from 'react';

class App extends Component {

  first(json, k) {
    if (k >= 0) {
      let i = 0;
      for (i; i < k; i++) {
        this.state.synonym.push(json[i].word);
      }
    }
    this.forceUpdate();
  }

  second(json, k) {
    if (k >= 0) {
      let i = 0;
      for (i; i < k; i++) {
        this.state.antonym.push(json[i].word);
      }
    }
    this.forceUpdate();
  }

  constructor(props) {
    super(props);
    this.state = {
      word: "",
      synonym: [],
      antonym: []
    }
  }

  call1(word) {
    fetch(`https://api.datamuse.com/words?ml=${word}&&max=5`).then(response => response.json()).then(json => {
      this.first(json, json.length)
    })
  }

  call2(word) {
    fetch(`https://api.datamuse.com/words?rel_ant=${word}&&max=5`).then(response => response.json()).then(json => {
      this.second(json, json.length)
    })
  }

  outsyn(a) {
      const data =a;
       const listItems = data.map((d) => <div key={d}>{d}</div>);
       return (
         <div>
         {listItems }
         </div>
       );
     }
  outant(a) {
      const data =a;
       const listItems = data.map((d) => <div key={d}>{d}</div>);
       return (
         <div>
         {listItems }
         </div>
       );
     }


  render() {
    return (<div className="main">
      <h1>Find synonym and antonym</h1>
      <div className="form-inline">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="your word..." onChange={event => this.setState({word: event.target.value})}/>
          <button className="btn btn-success" type="button" onClick={() => {
              this.setState({synonym: [], antonym: []})
              this.call2(this.state.word)
              this.call1(this.state.word)
            }}>
            SUBMIT
          </button>
        </div>
      </div>
      <div className="output">
        <div className="syn">
          <h1>Synonym of {this.state.word}
          </h1>
          <h2 id="outsyn">{this.outsyn(this.state.synonym)}</h2>
        </div>
        <div className="ant">
          <h1>Antonym of {this.state.word}
          </h1>
          <h2 id="outant">{this.outant(this.state.antonym)}</h2>

        </div>
      </div>
      <div className="footer">
        <span>Power by datamuse.com API
          <br/>
          Develop by Thai Lam Ha
          <br/></span>
        <span id="contact">
          Contact
          <br/>
          Phone: +841234333198
          <br/>
          email: thaihadev@gmail.com
        </span>
      </div>
    </div>)
  }
}

export default App;
