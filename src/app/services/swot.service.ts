import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/apiResponse.model';
import { Swot } from '../models/swot.model';

@Injectable({
    providedIn: "root"
})

export class SwotService {
    #apiUrl = 'https://localhost:7011/api/Swot';

    constructor(private http: HttpClient) { }

    public getSwotData(employeeId: number, cycle: number): Observable<APIResponse> {
        return this.http.get<APIResponse>(`${this.#apiUrl}?employeeId=${employeeId}&cycleId=${cycle}`);
    }

    public postSwotData(swotData: Swot): Observable<APIResponse> {
        return this.http.post<APIResponse>(`${this.#apiUrl}`, swotData);
    }

    public putSwotData(swotData: Swot): Observable<APIResponse> {
        return this.http.put<APIResponse>(`${this.#apiUrl}?id=${swotData.id}`, swotData);
    }
}