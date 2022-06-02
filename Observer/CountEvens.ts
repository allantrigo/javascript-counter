import { Observer } from "./Observer";

export class CountEvens implements Observer {
    count: number = 0
    
    description(): void {
        console.log(`Número de palavras com número de letras par: ${this.count}`)
        console.log()
    }
    update(array: String[]) {
        let count = 0;
        array.map((value) => {
            if (value.length % 2 == 0) count++
        })
        this.count = count
        return count
    }
}