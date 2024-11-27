import { gql } from 'apollo-server';

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

export default typeDefs;