import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { data, ReportType } from './data';

// Controller entities are classes that allow us to create new endpoints
@Controller('report/:type') // May have multiple route handlers
export class AppController {
  @Get('')
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post('')
  createReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}

// http://localhost:3000/ + controller + method decorators
