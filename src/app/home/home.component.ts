import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoCoisas } from '../models/tipo-coisas.model';
import { TipoCoisasService } from '../tipo-coisas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit{

  selectedItem: any = null;

  menuItems: TipoCoisas[] = [];

  constructor(private router: Router, private service: TipoCoisasService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(tipos => {
      tipos.forEach(tipo => {
        tipo.tipo = tipo.tipo.charAt(0).toUpperCase() + tipo.tipo.slice(1);
      })
      this.menuItems = tipos;
    });
  }

  selectItem(link: string) {
    this.router.navigate(['/listas', link]);
  }

}
