import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})


export class VuelaPipes implements PipeTransform{
valorVuela: boolean=true;

    transform(value: boolean):string {
        return (value)
        ? 'vuela'
        :'no vuela'   
}

}