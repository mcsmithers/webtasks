// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');

module.exports = function(context, cb) {
    cb(null, {
      // This is from webtask to greet so this proves to start working
        greeting: context.data.name || 'Here is a list of AWS prices in the east region...'
    });

    // Setting up the request
    var request = require('request');

    var awsPrices = request.requestPricing();
    // Event handler for when the prices are received
    awsPrices.on('prices:received', function(retrievedAwsPrices) {
    });

    //count out the price
    awsPrices.on('end', function() {
        console.log('___End of price list___');
    });

    var allPrices = [];

    var priceList = request.requestPricing();
    priceList.on('prices:received', function(retrievedAwsPrices) {
      // Making a list to keep all the prices
        allPrices.push(awsInfoList);
    });

    // Print up the list of the prices
    priceList.on('end', function() {
        console.log(JSON.stringify(allPrices, null, 2));
    });

    

    // process error
    if (error) {
        cb(error, null);
        // Return to stop the function from going any further
        return;
    }
};