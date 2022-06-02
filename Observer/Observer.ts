export interface Observer {
    description(): void
    update(array: string[]): number
}