// src/interfaces/quote.ts

export interface SectionData {
    _id: string;
    basis: string;
    unit_of_measurement: string;
    unit: number;
    rate: number;
    amount: number;
  }
  
  export interface Section {
    _id: string;
    section_name: string;
    section_number: number;
    section_currency: string;
    section_data: SectionData[];
  }
  
  export interface Quote {
    _id: string;
    quote_title?: string; // Optional field as it's not always present
    quote_date: string;
    sections: Section[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface QuotesResponse {
    status: string;
    data: Quote[];
    message: string;
    code: number;
  }
  