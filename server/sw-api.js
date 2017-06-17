require('isomorphic-fetch');
const url = require('url')
const BASE_URL = "http://swapi.co/api/";

function sendGetRequest(URL, customHeaders = null) {
    let headers  = {
        'Content-Type' : 'application/json',
    };

    if (customHeaders) {
        headers = customHeaders;
    }

    return fetch(URL, {
        method      : 'GET',
        headers     : headers,
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

    searchUser(searchParam) {
        const query = url.format({ query: searchParam })
        const fullUrl = BASE_URL+'people/'+query;
        console.log("Search Url:"+fullUrl);
        return sendGetRequest(fullUrl);
    },

    searchPlanet(data) {
        const query = url.format({ query: data })
        const fullUrl = BASE_URL+'planets/'+query;
        console.log("Search Url:"+fullUrl);
        return sendGetRequest(fullUrl);
    }
};


