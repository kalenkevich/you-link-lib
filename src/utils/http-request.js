export default {
    makeXhr(method, url, data, options, done, error) {
        const xhr = new XMLHttpRequest();
        const defaultHeaders = {'Content-type': 'application/json'};
        const headers = Object.assign({}, defaultHeaders, options.headers);

        xhr.open(method, url, true);

        for (const headerKey in headers) {
            xhr.setRequestHeader(headerKey, headers[headerKey]);
        }

        xhr.onload = function () {
            try {
                let responseJSON = JSON.parse(xhr.response);

                done(responseJSON);
            } catch (e) {
                error(null);
            }
        };
        xhr.onerror = () => error(null);

        xhr.send(data);
    },

    sendRequest(method, url, data, options = {}) {
        return new Promise((resolve, reject) => this.makeXhr(method, url, data, options, resolve, reject));
    }
};
