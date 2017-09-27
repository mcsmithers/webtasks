module.exports = function(context, cb) {
  cb(null, {greeting: context.data.name || 'Here is a list of AWS prices in the east region' });
  
  var request = require('request');

  for (var aws_price in aws_prices) {
    var all_prices = price_by_region[region];
    
    request({
      method: 'GET',
      url: 'https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json', 
      headers: {
        region: '',
        price: ''
      },
      data: all_prices
    }, function (error, res, body) {
      // process error
      if(err){
        cb(err, null);
        return ;//return to stop the function from doing anything else
  }
  cb(null, {'badEndpoint': 'Uh oh, something goofed'};
    });
  }
  
  cb(null, {aws_price: context.data.price, region: context.data.region});
};

