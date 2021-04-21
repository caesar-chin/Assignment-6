import React from 'react';
import styles from './doggos.css';

export default class displayDoggo extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        dog: [],
        dogURL: '',
      },
    ];
  }

  componentDidMount() {
    fetch('https://random.dog/woof.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ dog: data });
        this.setState({ dogURL: this.state.dog.url });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayDoggo = () => {
    fetch('https://random.dog/woof.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ dog: data });
        this.setState({ dogURL: this.state.dog.url });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  isNewDoggo = () => {
    console.log('Image did not load, Try again');
  };

  render() {
    return (
      <div>
        <h1 className='doggos-header'>
          Tired of corny jokes? You wanna know what isn't corny? DOGS<br></br>{' '}
          <p className='corndogs'>(well...besides corndogs )</p>
        </h1>
        <button className='button' onClick={this.displayDoggo}>
          Click for new doggo
        </button>
        <p className='doggos-note'>
          (may have to click a quite few times to get your new doggo
          fully-loaded and ready to be admired - sorry, some are really shy)
        </p>
        <img
          onError={this.isNewDoggo}
          className='doggo-img'
          src={this.state.dogURL}
          alt='doggo'
        ></img>
      </div>
    );
  }
}
