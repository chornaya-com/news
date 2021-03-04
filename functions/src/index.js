const functions = require('firebase-functions');
const axios = require('axios');

exports.queryNews = functions.https.onRequest((request, response) => {
    const params = request.query;
    const url = `http://api.datanews.io/v1/news?q=${params.q}&from=${params.from}`;

    axios({method: 'get', url: url, headers: {'x-api-key': '0d78lcz1fby1lgcl5vlikn0lp'}})
        .then((apiResponse) => {
            return response.set('Access-Control-Allow-Origin', '*').json(apiResponse.data);
        })
        .catch((error) => {
            functions.logger.error(error);
        });
});
