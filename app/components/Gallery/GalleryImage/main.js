import React from 'react';
import PropTypes from 'prop-types';

import styles from './main.scss';

const GalleryImage = ({ item }) => (
  <div className={styles.container}>
    <div className={styles.image}>
      <img
        src={item.url}
        alt={item.title}
      />
    </div>
    <div className={styles.text}>
      <p>{item.title.substring(0, 30)}...</p>
    </div>
  </div>
);

GalleryImage.propTypes = {
  item: PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
};

export default GalleryImage;
