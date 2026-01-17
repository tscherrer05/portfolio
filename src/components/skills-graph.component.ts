import { Component, ElementRef, ViewChild, AfterViewInit, inject, DestroyRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-skills-graph',
  standalone: true,
  template: `
    <div #graphContainer class="w-full h-full relative overflow-hidden">
      <!-- Fallback text for screen readers -->
      <div class="sr-only">Interactive graph displaying skills: Java, Spring Boot, Kafka, Architecture, and more.</div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsGraphComponent implements AfterViewInit, OnDestroy {
  @ViewChild('graphContainer') graphContainer!: ElementRef<HTMLDivElement>;
  
  private simulation: any;
  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit() {
    this.initGraph();
    this.setupResizeListener();
  }

  ngOnDestroy() {
    if (this.simulation) this.simulation.stop();
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  private setupResizeListener() {
    this.resizeObserver = new ResizeObserver(() => {
      // Debounce could be added here
      this.initGraph();
    });
    this.resizeObserver.observe(this.graphContainer.nativeElement);
  }

  private initGraph() {
    const element = this.graphContainer.nativeElement;
    // Clear previous
    d3.select(element).selectAll('*').remove();

    const width = element.clientWidth;
    const height = element.clientHeight;

    if (width === 0 || height === 0) return;

    // Data
    const nodes = [
      { id: "Timothée", group: 1, r: 40 },
      { id: "Backend", group: 2, r: 30 },
      { id: "Architecture", group: 2, r: 30 },
      { id: "Leadership", group: 2, r: 30 },
      { id: "Java", group: 3, r: 20 },
      { id: "Spring Boot", group: 3, r: 20 },
      { id: "Kafka", group: 3, r: 25 },
      { id: "C# .NET", group: 3, r: 20 },
      { id: "Microservices", group: 3, r: 22 },
      { id: "Event-Driven", group: 3, r: 22 },
      { id: "TDD", group: 3, r: 18 },
      { id: "Mentoring", group: 3, r: 20 },
      { id: "High Traffic", group: 3, r: 20 },
      { id: "DevOps", group: 3, r: 18 },
    ];

    const links = [
      { source: "Timothée", target: "Backend" },
      { source: "Timothée", target: "Architecture" },
      { source: "Timothée", target: "Leadership" },
      { source: "Backend", target: "Java" },
      { source: "Backend", target: "Spring Boot" },
      { source: "Backend", target: "Kafka" },
      { source: "Backend", target: "C# .NET" },
      { source: "Architecture", target: "Microservices" },
      { source: "Architecture", target: "Event-Driven" },
      { source: "Architecture", target: "TDD" },
      { source: "Architecture", target: "High Traffic" },
      { source: "Leadership", target: "Mentoring" },
      { source: "Leadership", target: "DevOps" },
      // Cross links
      { source: "Kafka", target: "Event-Driven" },
      { source: "Microservices", target: "Spring Boot" },
    ];

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    // Simulation
    this.simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius((d: any) => d.r + 5));

    const svg = d3.select(element).append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const link = svg.append("g")
      .attr("stroke", "#94a3b8")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 1.5);

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("circle")
      .attr("r", (d: any) => d.r)
      .attr("fill", (d: any) => d.group === 1 ? '#2563eb' : (d.group === 2 ? '#475569' : '#64748b')) // Blue for self, slate for others
      .attr("opacity", 0.9);

    node.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("dy", ".35em")
      .text((d: any) => d.id)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("stroke", "none")
      .attr("font-size", (d: any) => d.group === 1 ? "12px" : "10px")
      .attr("font-weight", (d: any) => d.group === 1 ? "bold" : "normal")
      .style("pointer-events", "none")
      .style("user-select", "none");

    const sim = this.simulation;

    sim.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) sim.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) sim.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  }
}