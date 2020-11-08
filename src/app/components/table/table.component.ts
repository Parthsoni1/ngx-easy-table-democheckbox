import { Component, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public configuration: Config;
  public columns: Columns[];
  public selected = [];
  public data = [
    {name: 'radhika', company:'1', Cname: 'enlight', phone: 8200458555,isSelected: false},
    {name: 'parth', company:'2', Cname: 'rishabh', phone: 8200458555,isSelected: true},
    {name: 'pradhi', company:'3', Cname: 'enrich', phone: 564,isSelected: false},
    {name: 'rapdhi', company:'4', Cname: 'lighbh', phone: 8200458545845455,isSelected: false},
    {name: 'rapdhi', company:'5', Cname: 'lighbh', phone: 8200458545845455,isSelected: false},
    {name: 'rapdhp', company:'6', Cname: 'lighbh', phone: 8200458545845455,isSelected: false},
    {name: 'rapdhis', company:'7', Cname: 'lighbh', phone: 8200458545845455,isSelected: false},
    {name: 'srapdhi', company:'8', Cname: 'lighbh', phone: 8200458545845455,isSelected: false},
  ];
  constructor() { }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.checkboxes = true;
    this.columns = [
      { key: 'name', title: 'Name' },
      { key: 'company', title: 'Company' },
      { key: 'Cname', title: 'Name' },
      { key: 'phone', title: 'Phone' },
    ];
  }
  onChange(row: any,indexrow:any): void {
    console.log(row, indexrow);
    
    const index = this.data.indexOf(row);
    console.log(index);
    
    this.data[index].isSelected = !this.data[index].isSelected;
    if(this.selected.length >=0) {
      if(!this.data[index].isSelected) {
        const selectedIndex = this.selected.indexOf(row);
        console.log(selectedIndex);
        
        this.selected.splice(selectedIndex, 1);
      } else {
        this.selected.push(this.data[index]);
      }
console.log(this.selected);

    }
  }
  eventEmitted($event: { event: string; value: any }): void {

    //   console.log($event.event);

    // switch ($event.event) {
    //   case 'onCheckboxSelect':
    //     console.log('this.selected' ,$event.value.rowId);
        
    //     if (this.selected.has($event.value.rowId)) {
    //       this.selected.delete($event.value.rowId);
    //     } else {
    //       this.selected.add($event.value.rowId);
    //     }
    //     break;
    //   case 'onSelectAll':

    //     this.data.forEach((_, key) => {
    //       console.log('_' ,_);
    //       console.log('key' ,key);
        
    //       if (this.selected.has(key)) {
    //         this.selected.delete(key);
    //       } else {
    //         this.selected.add(key);
    //       }
    //       console.log('this selected' ,            this.selected);
        
    //     });

    //     break;
        
    // }
  }
}
