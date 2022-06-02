import { Observer } from "../Observer/Observer"

export interface Subject {

    attach(observer: Observer): void

    detach(observer: Observer): void

    notify(array: string[]): void
}
