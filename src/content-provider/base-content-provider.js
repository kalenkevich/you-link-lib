export default class BaseContentProvider {
    constructor() {}

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
        throw new Error('should be overridden');
    }

    get supportSearch() {
        throw new Error('should be overridden');
    }

    get supportLinkParsing() {
        throw new Error('should be overridden');
    }

    adaptContent() {
        throw new Error('should be overridden');
    }

    sendSearchRequest() {}

    sendGetContentByIdRequest() {}

    parseContentId() {}
}
