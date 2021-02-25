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

let VIEW_ID = '236089722';
let date = '2021-02-23';

function init() {
    document.getElementById('date').innerHTML = date;
    loadAllMetrics(date);
}

async function loadAllMetrics(date) {
    for (const metric of metrics) {
        queryReports(date, metric);
        await new Promise(r => setTimeout(r, 500));
    }
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
    let metric = response.result.reports[0].columnHeader.metricHeader.metricHeaderEntries[0].name;
    let value = response.result.reports[0].data.totals[0].values;
    console.log(metric + ": " + value);

    const ul = document.getElementById('query-output');
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(metric + ": " + value));
    ul.appendChild(li);
}

function onGetData() {
    let dateControl = document.querySelector('input[type="date"]');
    let userDate = dateControl.value;
    document.getElementById('date').innerHTML = userDate;
    console.log("Get Data for date: " + userDate);
    loadAllMetrics(userDate);
}