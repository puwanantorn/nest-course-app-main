import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'siri';
  }

  getName(): string{
    return 'kwpanz';
  }
  getLove(): string{
    return 'some one';
}
  getJson(): object {
    return{
    name: 'arigato',
    surname:'chadoteeprang',
    age : 67
    };
    }
    getJson2() {
  return {
    name: 'asda',
    lastname: 'awd',
    age: 67,
  };
}
}
