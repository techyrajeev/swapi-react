import 'isomorphic-fetch';

function sendPostRequest(URL, dataToSend, customHeaders = null, sessionToken = null) {
    let headers  = {
        'Content-Type' : 'application/json',
    };

    if (customHeaders) {
        headers = customHeaders;
    }

    if (sessionToken) {
        headers['Authorization'] = 'Bearer ' + sessionToken
    }

    return fetch(URL, {
        method      : 'POST',
        headers     : headers,
        body        : JSON.stringify(dataToSend)
    })
    .then(checkResponseStatus)
    .then(parseJSON);
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

module.exports =  {
    login(data) {
        const URL = '/api/login';
        return sendPostRequest(URL, data);
    },

    search(searchTerm) {
        const URL          = '/api/search';
        const data         = { searchTerm };
        const sessionToken = localStorage.getItem('sessionToken');
        return sendPostRequest(URL, data, null, sessionToken);
    }
};


