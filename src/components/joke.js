import React from "react";
import styles from "./jokes.css";

export default class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    const cout = !isLoaded ? "Joke Loading..." : " Joke Loaded.";
    return (
      <div>
        <h1 className={styles.joking}>{cout}</h1>
        {items.map((item) => (
          //Help needed here
          <div key={item.id} className={styles.joking}>
            {item.setup} {item.punchline}
          </div>
        ))}
      </div>
    );
  }
}
