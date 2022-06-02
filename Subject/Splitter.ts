import { Observer } from "../Observer/Observer"
import { Subject } from "./Subject"

export class Splitter implements Subject {

    observers: Observer[] = []

    attach(observer: Observer): void {
        if (!this.observers.includes(observer)) this.observers.push(observer)
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if (observerIndex === -1) {
            return
        }

        this.observers.splice(observerIndex, 1)
    }

    notify(array: string[]) {
        for (const observer of this.observers) {
            observer.update(array)
            observer.description()
        }
    }

    split(text: string): void {
        const array = text.split(" ")
        this.notify(array)
    }
}