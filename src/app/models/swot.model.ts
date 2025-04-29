export class Swot {
    constructor(id: number) {
        this.id = id;
    }

    id: number;
    employeeId?: number;
    status ?: string;
    updatedById?: number;
    strengths: Array<SwotItem> = [];
    weaknesses: Array<SwotItem> = [];
    opportunities: Array<SwotItem> = [];
    threats: Array<SwotItem> = [];
}

export class SwotItem {
    constructor(swotId: number, description: string) {
        this.id = 0;
        this.swotId = swotId;
        this.description = description;
        this.order = 0;
    }

    id: number;
    swotId?: number;
    description?: string;
    order?: number;
}

export enum SwotItemType {
    strengths = 'strengths',
    weaknesses = 'weaknesses',
    opportunities = 'opportunities',
    threats = 'threats'
}