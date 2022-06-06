import { City } from './City';
import { RestaurantType } from './RestaurantType';

export interface Hello {
  nameRestaurant: string;
  typeRestaurant: string;
  city: string;
  street: string;
  apartmentNumber: number;
  numberOfSeats: number;
  cardPayments: boolean;
  description: string;
}
