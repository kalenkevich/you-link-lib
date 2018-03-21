import BaseContentProvider from './base-content-provider';
import HttpRequest from '../utils/http-request';
import Content from '../content/content';

const providerId = 'YouTube';

export default class YouTubeContentProvider extends BaseContentProvider {
    constructor(options) {
        super(...arguments);
    }

    sendRequest({searchQuery}) {
        return HttpRequest.makeRequest('GET', `https://content.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet`);
    }

    getByUrl() {

    }

    adaptContent(contentsRaw) {
        return (contentsRaw.items || []).map(contentRaw => {
            const content = new Content();

            content.type = contentRaw.id.kind;
            content.title = contentRaw.snippet.title;
            content.provider = providerId;
            content.ulr = `https://youtube.com/${contentRaw.id.videoId}`;
            content.preview = {
                imageUrl: contentRaw.snippet.thumbnails.high.url,
                width: contentRaw.snippet.thumbnails.high.width,
                height: contentRaw.snippet.thumbnails.high.height
            };
            content.datePublished = new Date(contentRaw.snippet.publishedAt);
            content.description = new Date(contentRaw.snippet.description);
            content.author = new Date(contentRaw.snippet.channelTitle);

            return content;
        });
    }
}

export { providerId };