export class Swot {
    constructor(id: number) {
        this.id = id;
    }

    id: number;
    employeeId?: number;
    strengths?: string;
    weaknesses?: string;
    opportunities?: string;
    threats?: string;
    status ?: string;
}