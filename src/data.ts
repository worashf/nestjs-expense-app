export enum  ReportType  {
    INCOME ="income",
    EXPENSE = "expense"
  
  }
interface  Data {
    report:{
        id: string,
        source: string,
        amount:  number,
        created_at: Date,
        updated_at:  Date,
        type: ReportType

    }[]
}

 export const data :Data = {
    report : []
}

data.report.push({
    id: "uuid1",
    source: "Sallary",
    amount: 5000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME

})
data.report.push({
    id: "uuid2",
    source: "Freelacing",
    amount: 1580,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME

})
data.report.push({
    id: "uuid3",
    source: "Part time",
    amount: 500,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME

})
data.report.push({
    id: "uuid4",
    source: "Housing",
    amount: 500,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE

})
data.report.push({
    id: "uuid5",
    source: "Food",
    amount: 800,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE

})