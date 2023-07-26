import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from "./data"
import { v4 as uuid } from "uuid"


@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAllReports(@Param("type") type: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter(report => report.type == reportType)
  }
  @Get(':id')
  getReportByID(@Param("type") type: string, @Param("id") id: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter(report => report.type === reportType).find(repo => repo.id === id)
  }
  @Post()
  createReport(@Body() { source, amount }: { source: string, amount: number },
    @Param("type") type: string) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType
    }
    data.report.push(newReport)
    return newReport
  }
  @Put(":id")
  updateReport(@Param("type") type :string,
  @Param("id") id :string, 
  @Body() reportBody: {source: string, amount:number}) {
    let reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
const reportToUpdate  = data.report.filter(report => report.type === reportType).find(repo => repo.id === id)
if(!reportToUpdate) return
let reportIndex = data.report.findIndex(report => report.id  === reportToUpdate.id)
data.report[reportIndex] ={
  ...data.report[reportIndex],
  ...reportBody
}
 return  data.report[reportIndex]
}
  @Delete(":id")
  @HttpCode(204)
  deleteReport(@Param("id") id:string) {
    let reportIndex  = data.report.findIndex(report => report.id  === id)
    if(reportIndex ===  -1) return
    data.report.splice(reportIndex, 1)
    return;
  }
}
