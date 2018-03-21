export default class BaseContentProvider {
    constructor(options) {
        this.canSearch = options.searchEnabled || true;
        this.canGetByUrl = options.getByUrlEnabled || true;
    }

    async search(searchOptions) {
        const result = await this.sendSearchRequest(searchOptions);

        return this.adaptContent(result);
    }

    async getByUrl(url) {
        const contentId = this.parseContentId(url);

        if (contentId) {
            const result = await this.sendGetContentByIdRequest(contentId);

            return this.adaptContent(result);
        }

        return Promise.resolve([]);
    }

    get providerId() {
        throw 'should be overridden';
    }

    sendSearchRequest() {
        throw 'should be overridden';
    }

    sendGetContentByIdRequest() {
        throw 'should be overridden';
    }

    adaptContent() {
        throw 'should be overridden';
    }

    parseContentId() {
        throw 'should be overridden';
    }
}
