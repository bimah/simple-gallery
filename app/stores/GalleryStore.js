import alt from '../alt';

import Actions from '../actions/GalleryActions';
import Source from '../sources/GallerySource';

class GalleryStore {
  constructor() {
    this.state = {
      data: {},
    };

    this.bindActions(Actions);
    this.registerAsync(Source);
  }

  onSync() {
    if (!this.getInstance().isLoading()) {
      this.getInstance().sync();
    }
  }

  onSynchronizing() {
    return false;
  }

  onSynchronizationSuccess(data) {
    this.setState({ data });
  }

  onSynchronizationError(err) {
    console.log('VehiclesStore sync error');
    console.log(err);
    console.log('----------------');
  }
}

export default alt.createStore(GalleryStore, 'GalleryStore');
