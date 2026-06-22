import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'https://sethmilchick.github.io/housing-data/locations.json';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.locations ?? [];
  }

  async getHousingLocationById(
    id: number,
  ): Promise<HousingLocation | undefined> {
    const response = await fetch(this.url);
    const data = await response.json();
    const locations: HousingLocation[] = data.locations ?? [];
    return locations.find((location) => location.id === id);
  }

  async submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
