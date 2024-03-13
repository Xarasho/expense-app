export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7500,
      updated_at: new Date(),
      created_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Youtube',
      amount: 2500,
      updated_at: new Date(),
      created_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 500,
      updated_at: new Date(),
      created_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
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

// data.report.push({
//   id: 'UUID',
//   source: 'Salary',
//   amount: 7500,
//   updated_at: new Date(),
//   created_at: new Date(),
//   type: ReportType.INCOME,
// });
