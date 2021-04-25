import React, { Component } from "react";
import styles from "./ChuckNorris.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class ChuckNorris extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
    this.getAPI = this.getAPI.bind(this);
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    await fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ quote: json.value });
      })
      .catch((err) => {
        return 0;
      });
  }

  render() {
    return (
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

        <div className={styles.mainWrapper}>
          <div>
            <h3>Tired of dogs and want to get more manly?</h3>
          </div>

          <div className={styles.title}>
            <h1>The Chuck Norris Generator</h1>
          </div>

          <div>
            <button className={styles.button} onClick={this.getAPI}>
              Generate a new fact?
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src="https://fox17.com/resources/media/fcd7a380-eab6-4467-891e-be2ea75fe52b-large3x4_ChuckNorris.jpg?1560772299261"
            />
          </div>

          <div>
            <h2>Did you know that, </h2>
          </div>

          <div className={styles.facts}>
            <p>{this.state.quote}</p>
          </div>
        </div>
      </div>
    );
  }
}
