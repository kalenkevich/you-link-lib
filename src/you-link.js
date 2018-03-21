import YoutubeProvider, {providerId as YoutubeProviderId} from './content-provider/youtube-content-provider';
import BingProvider, {providerId as BingProviderId} from './content-provider/bing-content-provider';

export default class YouLink {
    static init(providersOptions = []) {
        this.providers = [];

        providersOptions.forEach(options => {
            switch (options.contentProvider) {
                case YoutubeProviderId:
                    this.providers.push(new YoutubeProvider(options));
                    break;
                case BingProviderId:
                    this.providers.push(new BingProvider(options));
                    break;
                default:
                    throw `No such provider: ${options.contentProvider}`;
            }
        });
    }

    static async search(searchOptions, eligibleProvidersIds) {
        const providers = this.getEligibleProviders(eligibleProvidersIds);
        const promises = providers.map(provider => provider.search(searchOptions));
        const searchResults = await Promise.all(promises);

        return searchResults.reduce((prev, current) => [...prev, ...current], []);
    }

    static async getByUrl(url, eligibleProvidersIds) {
        const providers = this.getEligibleProviders(eligibleProvidersIds);
        const promises = providers.map(provider => provider.getByUrl(url));
        const searchResults = await Promise.all(promises);

        return searchResults.reduce((prev, current) => [...prev, ...current], []).find(r => r);
    }

    static getEligibleProviders(eligibleProvidersIds) {
        if (!eligibleProvidersIds || !eligibleProvidersIds.length) {
            return this.providers;
        }

        const eligibleProviders = [];

        eligibleProvidersIds.forEach(eligibleProviderId => {
            const eligibleProvider = this.providers.find(provider => provider.providerId === eligibleProviderId);

            if (!eligibleProvider) {
                throw `No such provider: ${eligibleProviderId}`
            }

            eligibleProviders.push(eligibleProvider);
        });

        return eligibleProviders;
    }
}
