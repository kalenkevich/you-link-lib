export default class HttpRequest {
    static makeXhrRequest(method, url, data, options, done, error) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', options && options.contentType || 'application/json');

        xhr.onload = () => {
            try {
                const responseJSON = JSON.parse(xhr.response);

                done(!responseJSON.errorCode ? responseJSON : null);
            } catch (e) {
                error(null);
            }
        };
        xhr.onerror = function () {
            error(null);
        };

        xhr.send(data);
    }

    static makeRequest(method, url, data, options) {
        return new Promise((resolve, reject) => this.makeXhrRequest(method, url, data, options, resolve, reject));
    }
};