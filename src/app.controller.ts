import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from "./data"



@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllReports(@Param("type") type: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.findAllReports(reportType);
  }
  @Get(':id')
  getReportByID(@Param("type") type: string, @Param("id") id: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.findReportById(reportType, id);
  }
  @Post()
  createReport(@Body() { source, amount }: { source: string, amount: number },
    @Param("type") type: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE

    return this.appService.saveReport({source, amount}, reportType);
  }
  @Put(":id")
  updateReport(@Param("type") type :string,
  @Param("id") id :string, 
  @Body() reportBody: {source: string, amount:number}) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE 
 return    this.appService.editReport(reportType,id, reportBody);
}
  @Delete(":id")
  @HttpCode(204)
  deleteReport(@Param("id") id:string) {
    this.appService.removereport(id);
  }


}
