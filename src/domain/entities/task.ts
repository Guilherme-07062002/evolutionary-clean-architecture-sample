export class Task {
    public id: number;
    public description: string;

    constructor(id: number, description: string) {
        this.id = id
        this.description = description
    }

    toJSON() {
        return {
            id: this.id,
            description: this.description
        }
    }
}