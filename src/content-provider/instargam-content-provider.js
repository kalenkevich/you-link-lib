import BaseContentProvider from './base-content-provider';

const providerId = 'Instagram';

export default class InstagramContentProvider extends BaseContentProvider {
    constructor(options) {
        super(...arguments);
    }

    search() {

    }

    getByUrl() {

    }
}

export { providerId };