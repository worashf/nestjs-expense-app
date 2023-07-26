import { Controller, Delete, Get , Post, Put, Param} from '@nestjs/common';
import { AppService } from './app.service';
import  {ReportType, data} from  "./data"

@Controller("report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param("type") type:string){
    let reportType  = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return  data.report.filter(report => report.type ==reportType)
  }
  @Get(':id')
  getReportByID(){
  return  {}
  }
  @Post()
  createReport(){
     return "Created"
  }
  @Put(":id")
  updateReport(){
    return "Updated"
  }
  @Delete(":id")
  deleteReport(){
    return "Deleted"
  }
}
