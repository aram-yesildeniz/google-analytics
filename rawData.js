var metrics = [
    'ga:pageLoadSample',
    'ga:speedMetricsSample',
    'ga:domLatencyMetricsSample',
    'ga:pageLoadTime',
    'ga:avgPageLoadTime',
    'ga:domainLookupTime',
    'ga:avgDomainLookupTime',
    'ga:pageDownloadTime',
    'ga:avgPageDownloadTime',
    'ga:redirectionTime',
    'ga:avgRedirectionTime',
    'ga:serverConnectionTime',
    'ga:avgServerConnectionTime',
    'ga:serverResponseTime',
    'ga:avgServerResponseTime',
    'ga:domInteractiveTime',
    'ga:avgDomInteractiveTime',
    'ga:domContentLoadedTime',
    'ga:avgDomContentLoadedTime',
]

var VIEW_ID = '236089722';
var date = '2021-02-23';

function init() {
    queryReports(date, metrics[0]);
}

// Query the API and print the results to the page.
function queryReports(date, metric) {
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                viewId: VIEW_ID,
                dateRanges: [{
                    startDate: date,
                    endDate: date
                }],
                metrics: [{
                    expression: metric
                }]
            }]
        }
    }).then(displayResults, console.error.bind(console));
}

function displayResults(response) {
    console.log(response);
    var formattedJson = JSON.stringify(response.result, null, 2);
    document.getElementById('query-output').value = formattedJson;
}