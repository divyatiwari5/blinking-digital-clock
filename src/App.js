import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentTime: '' }
    
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let currDateTime = new Date().toLocaleString();
      let separatedDateTime = currDateTime.split(",");
      let currTime = separatedDateTime[1];

      this.setState({ currentTime: currTime });
      this.getRandomColor()

    }, 1000)
  }

  getRandomColor = () => {
    let color_code = "";
    let used_colors = [];
    while ((color_code.length !== 7) || (color_code.length === 7 && used_colors.includes(color_code))) {
      color_code = Math.floor(Math.random() * 16777215).toString(16);
      color_code = "#" + color_code;
    }

    used_colors.push(color_code);

    return color_code;
  }

  
  render() {

    const { currentTime } = this.state;
    const splitTime = currentTime.split(":");

    return (
      <div className="clock">
        {splitTime.map((time, i) => {
          console.log(splitTime.length, i);
          return (i!==splitTime.length-1) ? (
            <p
              key={i} 
              style={{color: this.getRandomColor()}}
              >{` ${time}:`}
            </p>)
            : (
            <p
            key={i} 
            style={{color: this.getRandomColor()}}
            >{` ${time} `}
            </p>
            )
          })
        }
      </div>
    )
  }
}

export default App;
