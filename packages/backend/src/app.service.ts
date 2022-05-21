import { Injectable } from '@nestjs/common';
import { Hello } from './backend.types';

@Injectable()
export class AppService {
  getHello(): Hello {
    return {
      test: 'test',
    };
  }
}
