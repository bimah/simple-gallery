import alt from '../alt';

class GalleryActions {
  constructor() {
    this.generateActions(
      'sync',
      'synchronizing',
      'synchronizationSuccess',
      'synchronizationError',
    );
  }
}

export default alt.createActions(GalleryActions);
