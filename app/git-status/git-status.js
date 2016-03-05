(function () {
    'use strict';

    var module;

    function GitStatusCtrl(
        $scope,
        $http
    ) {

        function graphIt (data) {
            $scope.data = [
                {
                    "key" : "Quantity" ,
                    "bar": true,
                    "values" : data
                }
            ];

            $scope.options = {
                chart: {
                    type: 'historicalBarChart',
                    height: 450,
                    margin : {
                        top: 20,
                        right: 20,
                        bottom: 65,
                        left: 50
                    },
                    x: function(d){return d[0];},
                    y: function(d){return d[1];},
                    showValues: true,
                    valueFormat: function(d){
                        return d3.format(',.1f')(d);
                    },
                    duration: 100,
                    xAxis: {
                        axisLabel: 'X Axis',
                        tickFormat: function(d) {
                            return d3.time.format('%x')(new Date(LId))
                        },
                        rotateLabels: 30,
                        showMaxMin: false
                    },
                    yAxis: {
                        axisLabel: 'Y Axis',
                        axisLabelDistance: -10,
                        tickFormat: function(d){
                            return d3.format(',.1f')(d);
                        }
                    },
                    tooltip: {
                        keyFormatter: function(d) {
                            return d3.time.format('%x')(new Date(d));
                        }
                    },
                    zoom: {
                        enabled: true,
                        scaleExtent: [1, 10],
                        useFixedDomain: false,
                        useNiceScale: false,
                        horizontalOff: false,
                        verticalOff: true,
                        unzoomEventType: 'dblclick.zoom'
                    }
                }
            };
        }

        $http.get(
            "https://api.github.com/repos/angular/angular/commits"
        ).then(
            function (response) {
                //If response ...
                var result = response.data.map(
                    function (item, index) {
                        var date = new Date(item.commit.author.date);
                        var formattedDate = new Date(date.getFullYear() + "/" + date.getMonth() + "/" + date.getUTCDate());
                        return [formattedDate.getTime(), 1];
                    }
                ).sort(
                    function(a, b) {
                        return a[0] - b[0];
                    }
                ).reduce(
                    function(acc, curr, index, array) {
                        if (acc[acc.length - 1][0] === curr[0]) {
                            acc[acc.length - 1][1] += curr[1];
                        } else {
                            acc.push(curr);
                        }
                        return acc;
                     }
                );
                graphIt(result);
            }
        );

    }

    module = angular.module(
        'gitmodule',
        [
            'nvd3'
        ]
    );

    module.controller(
        'GitStatusCtrl',
         GitStatusCtrl
    );

}());
