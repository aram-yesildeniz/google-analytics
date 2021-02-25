gapi.analytics.ready(function () {

    /**
     * Authorize the user immediately if the user has already granted access.
     * If no access has been created, render an authorize button inside the
     * element with the ID "embed-api-auth-container".
     */
    gapi.analytics.auth.authorize({
        container: 'embed-api-auth-container',
        clientid: '78689400683-gc302205gr4eef6egoahusje22n2ejc8.apps.googleusercontent.com'
    });


    /**
     * Create a new ViewSelector instance to be rendered inside of an
     * element with the id "view-selector-container".
     */
    var viewSelector = new gapi.analytics.ViewSelector({
        container: 'view-selector-container'
    });

    // Render the view selector to the page.
    viewSelector.execute();

    /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "chart-container".
     */
    var dataChart1 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:pageLoadSample',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-1',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart2 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:speedMetricsSample',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-2',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart3 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:domLatencyMetricsSample',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-3',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart4 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:pageLoadTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-4',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart5 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgPageLoadTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-5',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart6 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:domainLookupTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-6',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart7 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgDomainLookupTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-7',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart8 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:pageDownloadTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-8',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart9 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgPageDownloadTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-9',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart10 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:redirectionTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-10',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart11 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgRedirectionTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-11',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart12 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:serverConnectionTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-12',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart13 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgServerConnectionTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-13',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart14 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:serverResponseTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-14',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart15 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgServerResponseTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-15',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart16 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:domInteractiveTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-16',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart17 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgDomInteractiveTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-17',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart18 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:domContentLoadedTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-18',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });

    var dataChart19 = new gapi.analytics.googleCharts.DataChart({
        query: {
            metrics: 'ga:avgDomContentLoadedTime',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            container: 'chart-container-19',
            type: 'LINE',
            options: {
                width: '100%'
            }
        }
    });


    /**
     * Render the dataChart on the page whenever a new view is selected.
     */
    viewSelector.on('change', async function (ids) {
        dataChart1.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart2.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart3.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart4.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart5.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart6.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart7.set({
            query: {
                ids: ids
            }
        }).execute();
        await new Promise(r => setTimeout(r, 2000));
        dataChart8.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart9.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart10.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart11.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart12.set({
            query: {
                ids: ids
            }
        }).execute();
        await new Promise(r => setTimeout(r, 2000));
        dataChart13.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart14.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart15.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart16.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart17.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart18.set({
            query: {
                ids: ids
            }
        }).execute();
        dataChart19.set({
            query: {
                ids: ids
            }
        }).execute();
    });
});