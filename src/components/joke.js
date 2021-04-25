import React from "react";
import styles from "./jokes.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    const cout = !isLoaded ? "Jokes Loading..." : " Jokes Loaded.";
    return (
      <div>
        <div>
          <nav className={styles.navbar}>
            <div className={styles.navbarDiv}>
              <Link to={"/"} className={styles.linkItems}>
                <div className={styles.navbarItem}>
                  <li>Jokes</li>
                </div>
              </Link>
            </div>

            <div className={styles.navbarDiv}>
              <Link to={"/doggos"} className={styles.linkItems}>
                <div className={styles.navbarItem}>
                  <li>Doggos</li>
                </div>
              </Link>
            </div>

            <div className={styles.navbarDiv}>
              <Link to={"/chucknorris"} className={styles.linkItems}>
                <div className={styles.navbarItem}>
                  <li>Chuck Norris</li>
                </div>
              </Link>
            </div>
          </nav>
        </div>

        <div className={styles.allall}>
          <h1 style={{ textAlign: "center" }}>{cout}</h1>
          {items.map((item) => (
            //Help needed here
            <div key={item.id} className={styles.all}>
              <div className={styles.joking}> {item.setup} </div>
              <div className={styles.answer}> {item.punchline} </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
