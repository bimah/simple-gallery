import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/main';
import GalleryImage from './GalleryImage/main';

import styles from './main.scss';

import GalleryStore from '../../stores/GalleryStore';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
    };

    this.onGalleryStoreUpdate = this.onGalleryStoreUpdate.bind(this);
  }

  componentDidMount() {
    GalleryStore.sync();
    GalleryStore.listen(this.onGalleryStoreUpdate);
  }

  componentWillUnmount() {
    GalleryStore.unlisten(this.onGalleryStoreUpdate);
  }

  onGalleryStoreUpdate(response) {
    if (response.data && response.data.length > 0) {
      this.setState({
        images: response.data,
        loading: false,
      });
    }
  }

  render() {
    const { images } = this.state;
    const { title } = this.props;
    return (
      <div className={styles.container}>
        {title && <div className={styles.title}>
          <h1>{title}</h1>
        </div>}
        {<Carousel
          items={images && images.map(image => <GalleryImage item={image} />)}
          itemsToShow={15}
          itemsPerSlide={3}
        />}
      </div>
    );
  }
}

Gallery.defaultProps = {
  title: null,
};

Gallery.propTypes = {
  title: PropTypes.string,
};

export default Gallery;
