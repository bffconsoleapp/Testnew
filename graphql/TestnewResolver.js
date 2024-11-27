const creditUnions = [
  {
    id: '1',
    Contract_Number: '12345',
    Credit_Union_Name: 'Credit Union A',
    Premium_Reports: [],
    Premium_Adjustments: [],
    Single_Premium_Certificate_Returns: [],
  },
];

const premiumReports = [
  {
    id: '1',
    Product_Name: 'Product A',
    Report_Period: '2023-09',
    Status: 'Pending',
    Last_Update: '2023-10-01',
    Period_Ending: '2023-10-30',
    Adjustment_Type_to_the_Credit_Union: 'Adjustment A',
    Comment: 'Sample Comment',
    Total_Borrower_Fees_: 100.0,
    CU_Retail_Rate: 5.5,
    Protected_Loan_Amount: 1000.0,
    Pay_Rate: 3.5,
    Premium_Due: 150.0,
    Total_Amount: 1200.0,
  },
];

const resolvers = {
  Query: {
    creditUnions: () => creditUnions,
    premiumReports: () => premiumReports,
    premiumAdjustments: () => [],  // Provide your data as needed
    singlePremiumCertificateReturns: () => [], // Provide your data as needed
  },
  Mutation: {
    addCreditUnion: (_, { input }) => {
      const newCreditUnion = { id: String(creditUnions.length + 1), ...input, Premium_Reports: [], Premium_Adjustments: [], Single_Premium_Certificate_Returns: [] };
      creditUnions.push(newCreditUnion);
      return newCreditUnion;
    },
    addPremiumReport: (_, { input }) => {
      const newReport = { id: String(premiumReports.length + 1), ...input };
      premiumReports.push(newReport);
      return newReport;
    },
    addPremiumAdjustment: (_, { input }) => {
      // Add logic to add a Premium Adjustment
      return {}; // Replace with actual return
    },
    addSinglePremiumCertificateReturn: (_, { input }) => {
      // Add logic to add a Single Premium Certificate Return
      return {}; // Replace with actual return
    },
  },
};

export default resolvers;