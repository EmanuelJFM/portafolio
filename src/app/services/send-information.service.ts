import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoints } from '../config/endpoint.enum';

@Injectable({
  providedIn: 'root'
})
export class SendInformationService {

  constructor(private httpClient: HttpClient) { }

  sendContactForm(form: any): Observable<any> {
    return this.httpClient.post(Endpoints.SEND_INFORMATION, form);
  }
}
