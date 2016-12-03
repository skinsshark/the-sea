import React from 'react';

class Logo extends React.Component{
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  handleImageErrored() {
    this.setState({ loaded: false });
  }
  render () {
    const { className } = this.props;
    var styleClass = className ? className + ' img' : 'img';
    if (this.state.loaded) {
      styleClass += ' img-loaded';
    }
    return (
      <a href="/">
        <img src="app/images/Logo.png"
          alt="the illustrated encyclopedia of fish"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          className={styleClass}
        />{console.log(styleClass)}
      </a>
    );
  }
}

export default Logo;
