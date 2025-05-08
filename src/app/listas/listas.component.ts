import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoisasService } from '../coisas.service';
import { Coisas } from '../models/coisas.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  id: string | null = null;
  coisas: Coisas[] = [];

  constructor(private activatedRoute: ActivatedRoute, private coisasSerivice: CoisasService) {}

  ngOnInit() : void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getCoisas(this.id);
    }, 1000);
    ;
  }

  getCoisas(tipo: string | null) : void {
    var tipoStr = String(tipo ?? '');
    this.coisasSerivice.getCoisasByTipo(tipoStr.toLocaleLowerCase()).subscribe(coisas => {
      this.coisas = coisas;
    });
  }
}
