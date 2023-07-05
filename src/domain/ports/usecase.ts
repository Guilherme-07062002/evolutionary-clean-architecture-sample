export interface useCase<T = unknown, Z = unknown> {
    execute(data: T): Promise<Z>
}