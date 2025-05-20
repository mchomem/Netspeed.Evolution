import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/apiResponse.model';
import { ActionPlan } from '../models/action-plan.model';

@Injectable({
    providedIn: "root"
})

export class ActionPlanService {

  #apiUrl = 'https://localhost:7011/api/ActionPlain5W2H';
  
  constructor(private http: HttpClient) { }

  public getActions(employeeId: number, cycle: number): Observable<APIResponse> {
      return this.http.get<APIResponse>(`${this.#apiUrl}?employeeId=${employeeId}&cycleId=${cycle}`);
  }

  public postAction(actionData: ActionPlan): Observable<APIResponse> {
      return this.http.post<APIResponse>(`${this.#apiUrl}`, actionData);
  }

  public putAction(actionData: ActionPlan): Observable<APIResponse> {
      return this.http.put<APIResponse>(`${this.#apiUrl}/${actionData.id}`, actionData);
  }

  public deleteAction(actionData: ActionPlan): Observable<APIResponse> {
      return this.http.delete<APIResponse>(`${this.#apiUrl}/${actionData.id}`);
  }
}
