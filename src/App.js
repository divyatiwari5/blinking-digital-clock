import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentTime: new Date().toString()}
    
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let currDateTime = new Date().toString();

      this.setState({ currentTime: currDateTime });
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
    const splitDateTime = currentTime.split(" ");

    return (
      <div className="clock">
        {splitDateTime.map((datetime, i) => {
           return <p
              key={i} 
              style={{color: this.getRandomColor()}}
              >{`${datetime} `}
            </p>
          })
        }
      </div>
    )
  }
}

export default App;
