
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation, ReservationResponse,ReservationResponse2,ReservationResponse3 } from '../interface/reservation.interface';
import { CreateReservation } from '../interface/create-reservation.interface';
import { StatusReserveTypes } from '../interface/status-reserve.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private baseUrl = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }
  
  deleteReservation(id:number):Observable<Reservation>{
     const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });

          return this.httpClient.delete<Reservation>(`${ this.baseUrl }/reservations/${id}`,{ headers });
      }
      return new Observable<Reservation>();
  }


  createReservation(createReservation: CreateReservation): Observable<Reservation> {
      const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });

          return this.httpClient.post<Reservation>(`${ this.baseUrl }/reservations`, {
            ...createReservation
          },{ headers });
      }
      return new Observable<Reservation>();
  }

  allReservationByUser(term: string,state?:string): Observable<ReservationResponse3> {
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          console.log(term)
          console.log(state)
          return this.httpClient.get<ReservationResponse3>(`${ this.baseUrl }/users/${ term }/reservations?state=${state}`,{ headers })
      }
      return new Observable<ReservationResponse3>();
  }


  allReservations(status?: string): Observable<ReservationResponse> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.httpClient.get<ReservationResponse>(`${ this.baseUrl}/reservations?state=${ status }`,{ headers });
    } 
    return new Observable<ReservationResponse>();
  }

  reservationById(id: string): Observable<ReservationResponse2> {
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.get<ReservationResponse2>(`${ this.baseUrl }/reservations/${ id }`,{ headers })
      }
      return new Observable<ReservationResponse2>();
  }

  changeStatusInReservation(id: number, newStatus: string): Observable<Reservation> {
    const token = localStorage.getItem('accessToken');
      if (token) {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.httpClient.patch<Reservation>(`${ this.baseUrl }/reservations/${ id }/change-status`, {
            status: newStatus
          },{ headers });
      }
      return new Observable<Reservation>();
  }
}
