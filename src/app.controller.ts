import { Controller, Get } from '@nestjs/common';

// Controller entities create new endpoints
@Controller('report/income')
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return [];
  }

  @Get('')
  getAllIncomeReports2() {
    return {};
  }
}

// http://localhost:3000/ + controller + method decorators
