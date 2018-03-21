import YoutubeProvider, { YoutubeProviderId } from './content-provider/youtube-content-provider';
import { BingProviderId } from './content-provider/youtube-content-provider';
import { InstagramProviderId } from './content-provider/youtube-content-provider';

export default class YouLink {
    static init(providersOptions = []) {
        this.providers = [];
        web
        providersOptions.forEach(options => {
           if (option.contentProvider === YoutubeProviderId) {
                this.providers.push(new YoutubeProvider(options));
           }
        });
    }

    static async search(searchOptions) {
        const promises = this.providers.map(provider => provider.search(searchOptions));
        const searchResults = await Promise.all(promises);

        return searchResults.reduce((prev, current) => [...prev, ...current], []);
    }

    static async getByUrl(url) {
        const promises = this.providers.map(provider => provider.getByUrl(url));
        const searchResults = await Promise.all(promises);

        return searchResults.reduce((prev, current) => [...prev, ...current], []).find(r => r);
    }
}