```graphql
codegen-start
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Reports: [Premium_Report]
    Premium_Adjustments: [Premium_Adjustment]
    Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    # Include fields as required
  }

  input Credit_UnionInput {
    Contract_Number: String!
    Credit_Union_Name: String!
  }

  input Premium_ReportInput {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Premium_AdjustmentInput {
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input Single_Premium_Certificate_ReturnInput {
    # Include input fields as required
  }

  type Query {
    creditUnions: [Credit_Union!]
    premiumReports: [Premium_Report!]
    premiumAdjustments: [Premium_Adjustment!]
    singlePremiumCertificateReturns: [Single_Premium_Certificate_Return!]
  }

  type Mutation {
    addCreditUnion(input: Credit_UnionInput!): Credit_Union
    addPremiumReport(input: Premium_ReportInput!): Premium_Report
    addPremiumAdjustment(input: Premium_AdjustmentInput!): Premium_Adjustment
    addSinglePremiumCertificateReturn(input: Single_Premium_Certificate_ReturnInput!): Single_Premium_Certificate_Return
  }
`;
codegen-end
```

```javascript
codegen-start-resolver
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
codegen-end-resolver
```