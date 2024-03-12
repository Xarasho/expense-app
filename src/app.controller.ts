import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

// Controller entities are classes that allow us to create new endpoints
@Controller('report/:type') // May have multiple route handlers
export class AppController {
  @Get('')
  getAllReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
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
