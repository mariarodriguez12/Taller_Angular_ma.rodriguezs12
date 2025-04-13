import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent implements OnInit{
  series: Serie[] = []
  serieSeleccionada: Serie | null = null;
  promedio: number = 0;

  constructor(private serieService: SerieService) {}
  ngOnInit(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      this.promedio = this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length;
    });
  }

}
