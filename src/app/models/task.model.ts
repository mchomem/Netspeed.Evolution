export class Task {
    id: number;
    name: string;
    state: string;
    type: string;

    constructor(id: number, name: string, state: string, type: string) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.type = type;
    }
}