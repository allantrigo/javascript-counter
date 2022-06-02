import { Observer } from "./Observer";

export class Count implements Observer {
    count: number = 0
    
    description(): void {
        console.log(`Número de palavras: ${this.count}`)
        console.log()
    }
    

    update(array: String[]) {
        let count = array.length
        this.count = count
        return count
    }
}