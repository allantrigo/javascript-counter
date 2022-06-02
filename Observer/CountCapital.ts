import { Observer } from "./Observer";

export class CountCapital implements Observer {
    count: number = 0
    
    description(): void {
        console.log(`Número de palavras com a primeira letra maiúscula: ${this.count}`)
        console.log()
    }

    update(array: String[]) {
        let count = 0;
        array.map((value) => {
            if (value.match(RegExp("([A-Z])\w*"))) count++
        })
        this.count = count
        return count
    }
}