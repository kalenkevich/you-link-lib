export default class BaseContentProvider {
    constructor(options) {
        this.canSearch = options.searchEnabled || true;
        this.canGetByUrl = options.getByUrlEnabled || true;
    }

    async search(searchOptions) {
        const result = await this.sendRequest(searchOptions);

        return this.adaptContent(result);
    }

    getByUrl() {
        throw 'should be overridden';
    }

    sendRequest() {
        throw 'should be overridden';
    }

    adaptContent() {
        throw 'should be overridden';
    }
}