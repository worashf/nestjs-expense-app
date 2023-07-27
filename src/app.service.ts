import { Injectable } from '@nestjs/common';
import { v4 as uuid } from "uuid"
import { ReportType, data } from "./data"
@Injectable()
export class AppService {
  findAllReports(type: string) {
    return data.report.filter(report => report.type == type)
  }
  findReportById(type: string, id: string) {
    return data.report.filter(report => report.type === type).find(repo => repo.id === id)
  }
  saveReport({ source, amount }: { source: string, amount: number }, type: string) {
    const newReport = {
      id: uuid() as string,
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type as ReportType
    }
    data.report.push(newReport)
    return newReport
  }
editReport(type:ReportType, id :string, reportBody:{source:string, amount: number}){
  const reportToUpdate  = data.report.filter(report => report.type === type).find(repo => repo.id === id)
if(!reportToUpdate) return
let reportIndex = data.report.findIndex(report => report.id  === reportToUpdate.id)
data.report[reportIndex] ={
  ...data.report[reportIndex],
  ...reportBody
}
 return  data.report[reportIndex]
}
removereport(id:string){
  let reportIndex  = data.report.findIndex(report => report.id  === id)
  if(reportIndex ===  -1) return
  data.report.splice(reportIndex, 1)
 return ;
}

}
