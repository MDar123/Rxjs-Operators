import { Component } from '@angular/core';
import { ApiServiceService } from '../../../Services/api-service.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
constructor(private service : ApiServiceService){}

fetchedData:any[]=[]
filteredData:any[]=[]
// Making Filter Operator Works
// First Emit Normal Data Below

//  ----start---

fetchData(){
this.service.getDataFromJson().subscribe((res:any)=>{
  this.fetchedData = res;
})
}
//  ---end---

//  Emit filtered Data using Filter Opeartor

//  ---start--

fetchFilteredData(){
  debugger
  this.service.filterData().subscribe((res:any)=>{
    this.filteredData = res;
});
}

//  ---end---

}
