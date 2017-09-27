// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');

module.exports = function(context, cb) {
        cb(null, {
            greeting: context.data.name || 'Here is a list of AWS prices in the east region'
        });

        var request = require('request');

        for (var aws_price in aws_prices) {
            var all_prices = price_by_region[region];

            // call S3 to retrieve CORS configuration for selected bucket
            s3.getBucketCors(bucketParams, function(err, data) {
                if (err) {
                    console.log(err);
                } else if (data) {
                    console.log(JSON.stringify(data));
                }
            });

            // request({
            //         method: 'GET',
            //         url: 'https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json',
            //         headers: {
            //             region: '',
            //             price: ''
            //         },
            //         data: all_prices
                }, function(error, res, body) {
                    // process error
                    if (error) {
                        cb(error, null);
                        return; //return to stop the function from doing anything else
                    }
                },

            }

            cb(null, {
                aws_price: context.data.price,
                region: context.data.region
            });
        };