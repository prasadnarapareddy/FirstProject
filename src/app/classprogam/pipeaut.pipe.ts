import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeaut'
})
export class PipeautPipe implements PipeTransform {
  transform(input:string): string {
    let result:string= "";
    for(var i=input.length; i>=0; i--){
        result=result+input.charAt(i);
    }

return result;

 
  }

}
