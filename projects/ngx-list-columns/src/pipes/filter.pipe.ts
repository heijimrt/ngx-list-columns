import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform
{
    transform(value: any, filter: string): any
    {
        if (!filter) return value;
        return this.getFilteredValue(value, filter);
    }

    /**
     * Find on value to get filtered
     * 
     * @param value 
     * @param filter 
     */
    public getFilteredValue(
        value: any,
        filter: string,
    ): any {

        const match = new RegExp(filter, 'gi');
        for (let item of value) {
            if (match.test(item.label)) return value;
        }

    }
}