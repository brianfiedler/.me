
// var appId = 'YOUR_APP_ID';
// var roleArn = 'YOUR_ROLE_ARN';

// var bucketName = 'YOUR_BUCKET_NAME';
// var bucket = new AWS.S3({
//     params: {
//         Bucket: bucketName
//     }
// });

// bucket.putObject(params, function (err, data) {
//     if (err) {
//         results.innerHTML = 'ERROR: ' + err;
//     } else {
//         listObjs();
//     }
// });

// function listObjs() {
//     var prefix = 'facebook-' + fbUserId;
//     bucket.listObjects({
//         Prefix: prefix
//     }, function (err, data) {
//         if (err) {
//             results.innerHTML = 'ERROR: ' + err;
//         } else {
//             var objKeys = "";
//             data.Contents.forEach(function (obj) {
//                 objKeys += obj.Key + "<br>";
//             });
//             results.innerHTML = objKeys;
//         }
//     });
// }

// AWS.config.region = 'YOUR_BUCKET_REGION';

var params = {
    Filter: { /* Expression */
      And: [
        /* recursive Expression */,
        /* more items */
      ],
      Dimensions: {
        Key:'SERVICE',
        Values: [
          'STRING_VALUE',
          /* more items */
        ]
      },
     /* Not: /* recursive Expression ,*/
      Or: [
        /* recursive Expression */,
        /* more items */
      ],
      Tags: {
        Key: 'STRING_VALUE',
        Values: [
          'STRING_VALUE',
          /* more items */
        ]
      }
    },
    Granularity: 'DAILY',
    GroupBy: [
      {
        Key: 'SERVICE',
        Type: 'DIMENSION'
      },
      /* more items */
    ],
    Metrics: [
      'BlendedCost',
      /* more items */
    ],
    NextPageToken: 'STRING_VALUE',
    TimePeriod: {
      End: '2018-09-01', /* required */
      Start: '2050-01-01' /* required */
    }
  };
  var costexplorer = new AWS.CostExplorer();
  costexplorer.getCostAndUsage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });


