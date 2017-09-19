import GalleryActions from '../actions/GalleryActions';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

const GallerySource = {
  sync: {
    remote(state, data) {
      if (data) {
        return Promise.resolve(data);
      }
      return Promise.resolve(fetch(API_ENDPOINT).then(d => d.json()).then(d => d));
    },

    local(state) {
      return state;
    },

    loading: GalleryActions.synchronizing,
    success: GalleryActions.synchronizationSuccess,
    error: GalleryActions.synchronizationError,

    shouldFetch() {
      return true;
    },
  },
};

export default GallerySource;
