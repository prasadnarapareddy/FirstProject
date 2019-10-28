import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'reverseString'
})

export class ReverseStringPipe implements PipeTransform{
  transform(input:string): string {
      let result:string= "";
      for(var i=input.length; i>=0; i--){
          result=input.charAt(i)+result;
      }

return result;


  }



}