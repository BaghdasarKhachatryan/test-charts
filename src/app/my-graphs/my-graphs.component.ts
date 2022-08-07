import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { dataSeries } from './data-series';


export function makeSeries(seriesCount: number, points: number) {
    return Array(seriesCount)
        .fill({
            data: [],
        })
        .map(s => {
            return {
                data: Array(points)
                    .fill(1)
                    .map((d, i) => [
                        new Date(Date.now() - i * 3600000),
                        Math.max(250, (Math.random() * 3000) | 0),
                    ]),
            }
        })
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-my-graphs',
  templateUrl: './my-graphs.component.html',
  styleUrls: ['./my-graphs.component.scss']
})
export class MyGraphsComponent {
  public series1!: ApexAxisChartSeries;
  public chart1!: ApexChart;
  public dataLabels1!: ApexDataLabels;
  public markers1!: ApexMarkers;
  public title1!: ApexTitleSubtitle;
  public fill1!: ApexFill;
  public yaxis1!: ApexYAxis;
  public xaxis1!: ApexXAxis;
  public tooltip1!: ApexTooltip;
  public series2!: ApexAxisChartSeries;
  public chart2!: ApexChart;
  public dataLabels2!: ApexDataLabels;
  public markers2!: ApexMarkers;
  public title2!: ApexTitleSubtitle;
  public fill2!: ApexFill;
  public yaxis2!: ApexYAxis;
  public xaxis2!: ApexXAxis;
  public tooltip2!: ApexTooltip;

  constructor() {
    this.initChartData1();
    this.initChartData2()
  }

  defaultOptions = {
    group:'same',
    height:300
  }

  public initChartData1(): void {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 2500; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2,makeSeries(1,10)[0].data[1][1] as any]);
    }

    console.log('dddddddddddddddd',dates.length)
    this.series1 = [
      {
        name: "XYZ MOTORS",
        data: dates as any
      }
    ];
    this.chart1 = {
      ...this.defaultOptions,
      id:'first',
      type: "bar",
      stacked: false,
      animations:{
        enabled:false
      },
      
      events:{
        // updated(chart, options?) {
        //   console.log('chart is ',chart)
        // },
      },
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      },
    };
    this.dataLabels1 = {
      enabled: false
    };
    this.markers1 = {
      size: 0
    };
    this.title1 = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill1= {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis1 = {
      labels: {
        // formatter: function(val) {
        //   return (val / 1000000).toFixed(0);
        // }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis1 = {
      type: "datetime"
    };
    this.tooltip1 = {
      shared: false,
      y: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
  public initChartData2(): void {
    let ts2 = 1484428600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series2 = [
      {
        name: "XYZ MOTORS",
        data: dates as any
      }
    ];
    this.chart2 = {
      id:'second',
      ...this.defaultOptions,
      type: "area",
      stacked: false,
    
      events:{
        // updated(chart, options?) {
        //   console.log('chart is ',chart)
        // },
      },
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels2 = {
      enabled: false
    };
    this.markers2 = {
      size: 0
    };
    this.title2 = {
      text: "Stock Price Movement",
      align: "left"
    };
    this.fill2= {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis2 = {
      labels: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis2 = {
      type: "datetime"
    };
    this.tooltip2 = {
      shared: false,
      y: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
}
