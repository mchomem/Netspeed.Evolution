import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/apiResponse.model';
import { Swot } from '../models/swot.model';

@Injectable({
    providedIn: "root"
})

export class ActionPlanService {

  #apiUrl = 'https://localhost:7011/api/Swot';
  
  constructor(private http: HttpClient) { }

  public getActionsData(employeeId: number, cycle: number): Observable<APIResponse> {
      return this.http.get<APIResponse>(`${this.#apiUrl}?employeeId=${employeeId}&cycleId=${cycle}`);
  }

  public postActionData(actionData: Swot): Observable<APIResponse> {
      return this.http.post<APIResponse>(`${this.#apiUrl}`, actionData);
  }

  public putActionData(actionData: Swot): Observable<APIResponse> {
      return this.http.put<APIResponse>(`${this.#apiUrl}?id=${actionData.id}`, actionData);
  }

  public deleteAction(actionData: Swot): Observable<APIResponse> {
      return this.http.put<APIResponse>(`${this.#apiUrl}?id=${actionData.id}`, actionData);
  }
}
