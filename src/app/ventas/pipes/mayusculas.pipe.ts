import { Pipe, PipeTransform } from "@angular/core";
import { __values } from "tslib";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{
    transform(value: string, enMayusculas: boolean = true): string {

        if (enMayusculas) {
            return value.toUpperCase();
        } else {
            return value.toLocaleLowerCase();
        }
        
        } 

}