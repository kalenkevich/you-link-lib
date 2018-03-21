import BaseContentProvider from './base-content-provider';

const providerId = 'Bing';

export default class BingContentProvider extends BaseContentProvider {
    constructor(options) {
        super(...arguments);
    }

    search() {

    }

    getByUrl() {

    }
}

export { providerId };