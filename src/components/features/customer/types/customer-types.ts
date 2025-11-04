
export interface Contact {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface ProductUsage {
  name: string;
  revenue: number;
  onboardDate: string;
  status: 'active' | 'inactive';
}

export interface Complaint {
  id: string;
  date: string;
  issue: string;
  status: 'resolved' | 'pending';
  resolution?: string;
}

export interface Survey {
  date: string;
  score: number;
  feedback: string;
}

export interface NetworkRelationship {
  cin: string;
  parent: string;
  mg: string;
  linkedBusinesses: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: 'onboard' | 'account' | 'product' | 'complaint' | 'survey' | 'closure';
  subtitle?: string;
  status?: 'completed' | 'current' | 'pending';
  time?: string;
}

export interface MonthlyRevenue {
  month: string;
  currentYearRevenue: number;
  previousYearRevenue: number;
}

export interface MonthlyProductRevenue {
  month: string;
  [productName: string]: string | number;
}

export interface Transaction {
  id: string;
  date: string;
  product: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}

export interface CustomerData {
  id: string;
  name: string;
  businessType: string;
  revenue: string;
  description: string;
  keyContacts: Contact[];
  products: ProductUsage[];
  complaints: Complaint[];
  npsScore: number;
  npsHistory: Array<{ quarter: string; score: number }>;
  surveys: Survey[];
  productRevenue: Array<{ name: string; revenue: number }>;
  revenueHistory: Array<{ month: string; revenue: number }>;
  timeline?: TimelineEvent[];
  bbrm?: string;
  channelPreference?: 'email' | 'phone' | 'letter';
  monthlyRevenue?: MonthlyRevenue[];
  monthlyProductRevenue?: MonthlyProductRevenue[];
  transactions?: Transaction[];
  networkRelationships?: NetworkRelationship[];
  customerType?: string;
  vulnerability?: string;
  bibStatus?: string;
  dormancy?: string;
  inhibits?: string;
}
