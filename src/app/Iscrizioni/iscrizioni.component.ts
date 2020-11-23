import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IIscrizione } from './IIscrizione';
import { IscrizioniService } from './iscrizioni.service';

@Component({
  selector: 'app-iscrizioni',
  templateUrl: './iscrizioni.component.html',
  styleUrls: ['./iscrizioni.component.css']
})
export class IscrizioniComponent implements OnInit {

  displayedColumns: string[] = ['id','idCorso','idStudente','titoloCorso','nomeStudente','cognomeStudente','valutazioneStudente','valutazioneCorso','deleteIscrizione'];
  iscrizioni: IIscrizione[] = [];
  errorMessage = '';
  dataSource:MatTableDataSource<IIscrizione>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private iscrizioniService: IscrizioniService) { }

  ngOnInit(): void {
    this.getIscrizioniList();
  }

  getIscrizioniList():void{
    this.iscrizioniService.getIscrizioni().subscribe({
      next: iscrizioni => {
        this.iscrizioni = iscrizioni;
        this.dataSource = new MatTableDataSource<IIscrizione>(this.iscrizioni);
        this.dataSource.paginator = this.paginator;
      },
      error: err => this.errorMessage = err
    });
  }

  onClickDeleteIscrizione(id:number):void{
    this.iscrizioniService.deleteIscrizione(id).subscribe(()=> this.getIscrizioniList());
  }

  confirmDelete(id:number):void{
    if(confirm("Sicuro di voler cancellare l'iscrizione con id "+id+ "?")) {
      this.onClickDeleteIscrizione(id);
    }
  }

}
