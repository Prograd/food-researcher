import { RestClient } from '../helpers/rest-client';
import { Hello } from '@food-researcher/backend/dist/backend.types';

const apiUrl = 'http://localhost:3001';

class Backend {
  private readonly http = new RestClient(apiUrl);

  async test(): Promise<Hello> {
    const { data } = await this.http.request('/', {
      method: 'GET',
    });

    return data;
  }
}

export const backend = new Backend();
