export const data: Data = {
  report: [],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    updated_at: Date;
    created_at: Date;
    type: ReportType;
  }[];
}

enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

// data.report.push({
//   id: 'UUID',
//   source: 'Salary',
//   amount: 7500,
//   updated_at: new Date(),
//   created_at: new Date(),
//   type: ReportType.INCOME,
// });
