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
    age : 67,
    version : process.env.API_VERSION,
    };
  }oiuyutyhjkl
  getJson2() {
    return {
    name: 'asda',
    lastname: 'awd',
    age: 67,
    };
  }
}
