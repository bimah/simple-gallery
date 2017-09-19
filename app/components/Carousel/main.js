import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0,
      loaded: 1, // For lazy loading
    };

    this.buildSlides = this.buildSlides.bind(this);
    this.move = this.move.bind(this);
  }

  buildSlides(items) {
    const { itemsPerSlide, itemsToShow } = this.props;
    const { selectedItem, loaded } = this.state;
    const slides = [];
    const iterations = Math.ceil((itemsToShow * loaded) / itemsPerSlide);

    const windowWidth = window.innerWidth;
    const slideWidth = (windowWidth / 100) * 80; // 80%
    const itemWidth = (slideWidth - (itemsPerSlide * 20)) / itemsPerSlide;

    for (let i = 0; i < iterations; i += 1) {
      const itemsSection = items.slice((i * itemsPerSlide), (itemsPerSlide * (i + 1)));
      slides.push(
        <div className={styles.slide} key={`slide-${i}`} style={{ width: slideWidth }}>
          {itemsSection.map((item, index) => (
            <div className={styles.item} key={`item-${i}-${index}`} style={{ width: itemWidth }}>{item}</div>
          ))}
        </div>);
    }

    return (<div
      className={styles['slides--container']}
      style={{
        width: ((slideWidth * iterations) + (iterations * 10)),
        marginLeft: -(slideWidth * selectedItem) }}
    >
      {slides}
    </div>);
  }

  move(position) {
    const { selectedItem, loaded } = this.state;
    const { itemsPerSlide, itemsToShow } = this.props;

    if (position === 'left' && selectedItem !== 0) {
      this.setState({ selectedItem: selectedItem - 1 });
    }

    if (position === 'right' && selectedItem < Math.ceil((itemsToShow * loaded) / itemsPerSlide) - 1) {
      this.setState({ selectedItem: selectedItem + 1 });
    }
  }

  render() {
    const { items, itemsToShow } = this.props;
    const renderedItems = itemsToShow * this.state.loaded;
    const itemsToshow = items.slice(0, renderedItems);

    return (
      <div className={styles.container} >
        <div className={`${styles.navigation} ${styles.left}`}>
          <button onClick={() => this.move('left')} >&#8592;</button>
        </div>
        <div className={styles.display}>
          {items && this.buildSlides(itemsToshow)}
        </div>
        <div className={`${styles.navigation} ${styles.right}`}>
          <button onClick={() => this.move('right')} >&#8594;</button>
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  items: null,
  itemsToShow: 10,
  itemsPerSlide: 3,
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  itemsToShow: PropTypes.number,
  itemsPerSlide: PropTypes.number,
};

export default Carousel;
