import { Injectable } from '@nestjs/common';
import { Hello } from './backend.types';

@Injectable()
export class AppService {
  getHello(): Hello {
    return {
      nameRestaurant: 'Tapasta',
      typeRestaurant: 'Włoska',
      city: 'Poznań',
      street: 'kwiatowa',
      apartmentNumber: 3,
      numberOfSeats: 20,
      cardPayments: true,
      description: "Studencka zniżka 20% od poniedziałku do środy"
    };
  }
}
