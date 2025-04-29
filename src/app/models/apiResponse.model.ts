export class APIResponse {
    constructor(success: boolean, message: string, data: any, errors: []){
        this.success = success;
        this.message = message;
        this.data = data;
        this.errors = errors;
    }

    success: boolean;
    message: string;
    data: any;
    errors: []
}