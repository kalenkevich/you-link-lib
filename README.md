# YouLink Lib

Simple library which helps work with different search API such [YouType Data Api](https://developers.google.com/youtube/v3/docs/)

# Demo

Simple [application](https://you-link-app.herokuapp.com/) on Angular 5 

# Supported API

* [YouType Data Api](https://developers.google.com/youtube/v3/docs/)
* [Bing Web Search API](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-web-api-v7-reference)

# Can't Support

* [~~Twitter~~](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets) 
as [Application-only authentication](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only) available only server

# Usage

```javascript
    import YouLink, {YoutubeProviderId, BingProviderId} from 'you-link';

    YouLink.init([{
      contentProvider: YoutubeProviderId,
      apiKey: 'some-api-key'
    }, {
      contentProvider: BingProviderId,
      apiKey: 'some-api-key'
    }]);
```

# Create new provider

1. Extends from *BaseContentProvider*
2. Implement this methods 
```javascript
    get providerId()

    get supportSearch()

    get supportLinkParsing()

    adaptContent()

    sendSearchRequest()

    sendGetContentByIdRequest()

    parseContentId()
```
3. Register this provider on *init* method in *YouLink*
```javascript
    case YourProvider:
        this.providers.push(new YourProvider(options));
    break;
   
```
4. **Write unit test!!!**