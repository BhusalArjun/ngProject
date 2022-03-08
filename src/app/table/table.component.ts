import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    private router:Router
  ) { }


  ngOnInit(): void {
  }

  tableData=[
    {id:'001',
     name:'Aviyan',
    address:'ktm',
     age:'20',
     class:'4th Sem',
    },
    {id:'002',
    name:'Aviyan',
   address:'ktm',
    age:'20',
    class:'4th Sem',
   },
   {id:'003',
     name:'Aviyan',
    address:'ktm',
     age:'20',
     class:'4th Sem',
    },
    {id:'004',
     name:'Aviyan',
    address:'ktm',
     age:'20',
     class:'4th Sem',
    },
  ]

  onDetailView(id:string,paramName:string,address:string,age:string){
    this.router.navigate(['/details/:id',id,'class',id], {
      queryParams:{name:paramName,address:address,age:age},
    });
  }
}
