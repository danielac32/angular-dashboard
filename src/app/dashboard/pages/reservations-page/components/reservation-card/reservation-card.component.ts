import { Component, Input ,OnInit} from '@angular/core';
import { RouterLink,NavigationExtras } from '@angular/router';
import { Reservation,ReservationUser } from '../../interface/reservation.interface';
import { CommonModule } from '@angular/common';
import { ReservationsService } from '../../services/reservations.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers: [ReservationsService],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css'
})
export class ReservationCardComponent implements OnInit {

    @Input() public reservation?: ReservationUser;//Reservation;
    currentDate: Date = new Date();
    startDate?:Date;
    endDate?:Date;

    constructor(
    private reservationsService: ReservationsService,
    private router: Router,
  ) {}


    ngOnInit(): void {
      if(this.reservation){
        this.startDate=new Date(this.reservation?.startDate);
        this.endDate=new Date(this.reservation?.endDate);
        this.startDate?.setHours(this.startDate.getHours() + 4);
        this.endDate?.setHours(this.endDate.getHours() + 4);
      }
    }

    delete(id?: number):void {
        if (id !== undefined) {
            this.reservationsService.deleteReservation(id).subscribe(response => {
              console.log("eliminado: ",id)
              const parametros: NavigationExtras = {
                queryParams: {
                  reload: true,
                }
              };
              this.router.navigate(['/dashboard/reservations/reservaciones'],parametros);
            }, error => {
                console.error('Error en la solicitud :', error);
                alert('Error en la solicitud :');
            });
        } 
    }


    

}

