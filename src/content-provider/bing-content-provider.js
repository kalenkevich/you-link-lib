import BaseContentProvider from './base-content-provider';
import HttpRequest from "../utils/http-request";
import getYouTubeID from "get-youtube-id";

const providerId = 'Bing';

export default class BingContentProvider extends BaseContentProvider {
    constructor(options) {
        super(...arguments);

        if (!options.apiKey) {
            throw new Error('Api key should be provided');
        }

        this.apiKey = options.apiKey;
    }

    get providerId() {
        return providerId;
    }

    get supportSearch() {
        return true;
    }

    get supportLinkParsing() {
        return false;
    }

    sendSearchRequest({searchQuery}) {
        const options = {headers: {'Ocp-Apim-Subscription-Key': this.apiKey}};

        return HttpRequest.sendRequest('GET', `https://api.cognitive.microsoft.com/bing/v7.0/videos/search?q=${searchQuery}`, null, options);
    }

    adaptContent(contentsRaw = []) {
        return (contentsRaw.value || []).map(contentRaw => {
            const content = {};

            const videoId = getYouTubeID(contentRaw.contentUrl, {fazzy: true});

            content.type = 'video';
            content.title = contentRaw.name;
            content.provider = providerId;
            content.id = videoId;
            content.ulr = contentRaw.contentUrl;
            content.preview = {
                imageUrl: contentRaw.thumbnailUrl,
                width: contentRaw.thumbnail.width,
                height: contentRaw.thumbnail.height
            };
            content.datePublished = new Date(contentRaw.datePublished);
            content.description = contentRaw.description;
            content.author = contentRaw.publisher[0].name;

            return content;
        });
    }
}

export {providerId};
