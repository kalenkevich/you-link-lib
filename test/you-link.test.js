import assert from 'assert';
import sinon from 'sinon';
import chai from 'chai';

import YouLink from '../src/you-link';
import {providerId as YoutubeProviderId} from '../src/content-provider/youtube-content-provider';
import {providerId as BingProviderId} from '../src/content-provider/bing-content-provider';

const expect = chai.expect;
const should = chai.should();

describe('YouLink', function () {
    it('init method', function () {
        expect(YouLink.init()).equal(true);
        expect(YouLink.init([])).equal(true);
        expect(YouLink.init(null)).equal(true);
        expect(YouLink.init([{
            contentProvider: YoutubeProviderId,
            apiKey: 'test-api-key'
        }, {
            contentProvider: BingProviderId,
            apiKey: 'test-api-key'
        }])).equal(true);
    });

    it('search method', function () {
        expect(YouLink.init()).equal(true);
    });
});