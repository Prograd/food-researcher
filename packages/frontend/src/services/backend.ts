import { RestClient } from '../helpers/rest-client';
import { Product } from '@food-researcher/backend/dist/backend.types';

const apiUrl = 'http://localhost:3001';

class Backend {
  private readonly http = new RestClient(apiUrl);

  async fetchProducts(): Promise<Product> {
    const { data } = await this.http.request('/products', {
      method: 'GET',
    });

    return data;
  }

  sendProduct(product: Partial<Product>): Promise<any> {
    return this.http.request('/products', {
      method: 'POST',
      data: product,
    });
  }

  removeProduct(id: number) {
    return this.http.request(`/products/${id}`, {
      method: 'DELETE',
    });
  }
}

export const backend = new Backend();
