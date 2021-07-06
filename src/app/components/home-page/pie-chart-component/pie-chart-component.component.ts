import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pie-chart-component',
  templateUrl: './pie-chart-component.component.html',
  styleUrls: ['./pie-chart-component.component.css'],
})
export class PieChartComponentComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pieChartContainer') chartContainer: ElementRef;
  private destroy$ = new Subject();
  @Input() data: any;

  private htmlElement: HTMLElement;
  private width = 700;
  private height = 700;
  private radius = Math.min(this.width, this.height) / 2;
  private host: d3.Selection<d3.BaseType, {}, d3.BaseType, any>;
  private svg: d3.Selection<SVGElement, {}, d3.BaseType, any>;

  public ngAfterViewInit(): void {
    this.htmlElement = this.chartContainer.nativeElement;
    this.host = d3.select(this.htmlElement);

    this.buildSVG();
    this.buildPieChart();
  }

  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host
      .append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
  }

  private buildPieChart(): void {
    let pie = d3.pie();
    console.log(this.data, 'datata predi map?');
    let values = this.data.map((data) => data.duration);
    console.log(values, 'array of mapped values?!');

    let arcSelection = this.svg
      .selectAll('.arc')
      .data(pie(values))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .on('mouseover', (d, i) => {
        this.svg
          .append('text')
          .attr('dy', '.5em')
          .style('text-anchor', 'middle')
          .style('font-size', 45)
          .attr('class', 'labelText')
          .style('fill', function (d, i) {
            return 'red';
          })
          .text(i.value + ' minutes');
      })
      .on('mouseout', (d, i) => {
        this.svg.select('.labelText').remove();
      });

    this.populatePie(arcSelection);
  }

  private populatePie(arcSelection): void {
    let innerRadius = this.radius;
    let outerRadius = this.radius / 2 - 30;
    let pieColor = d3.scaleOrdinal(d3.schemeCategory10);

    let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    arcSelection
      .append('path')
      .attr('d', arc)
      .attr('fill', (datum, index) => {
        return pieColor(this.data[index].title);
      });

    arcSelection
      .append('text')
      .attr('transform', (datum: any) => {
        datum.innerRadius = 0;
        datum.outerRadius = outerRadius;
        return 'translate(' + arc.centroid(datum) + ')';
      })
      .text((datum, index) => this.data[index].title)
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .attr('dy', '10px');
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
