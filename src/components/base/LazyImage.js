import React from 'react';

class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: false
    };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          observer.unobserve(this.imgRef.current);
        }
      });
    });

    observer.observe(this.imgRef.current);
  }

  loadImage() {
    const imgEl = this.imgRef.current;
    imgEl.src = imgEl.dataset.src;
    imgEl.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { aspectRatio, src, alt, classNames, width, height } = this.props;
    console.log("aspectRatio", aspectRatio);
    const paddingStyle = { paddingTop: `${aspectRatio * 100}%` };
    
    return (
      <div style={{ position: 'relative', ...paddingStyle }}>
        <img
          ref={this.imgRef}
          data-src={src}
          alt={alt}
          className={classNames}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: this.state.loaded ? 1 : 0, transition: 'opacity 0.3s' }}
          loading="lazy"
          width={width ? width : null} 
          height={height ? height : null}
        />
      </div>
    );
  }
}

export default LazyImage;