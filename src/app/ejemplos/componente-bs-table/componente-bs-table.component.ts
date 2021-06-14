import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-bs-table',
  templateUrl: './componente-bs-table.component.html',
  styleUrls: ['./componente-bs-table.component.scss']
})
export class ComponenteBsTableComponent implements OnInit {

  lstAlumnos = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
