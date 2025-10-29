import { CustomerData } from '@/components/features/customer/types/customer-types';

export const getMockCustomerData = (customerId: string): CustomerData => {
  const customers = {
    '1': {
      id: '1',
      name: 'Acme Corporation',
      businessType: 'Manufacturing',
      revenue: '£1,256,000',
      bbrm: 'Sarah Johnson',
      channelPreference: 'email' as const,
      description: 'Acme Corporation is a mid-sized manufacturing company with a strong focus on sustainable practices. They have been an HSBC customer since 2019 and utilize multiple banking services including commercial accounts, international payments, and trade finance solutions.',
      keyContacts: [
        {
          name: 'Jane Smith',
          role: 'Chief Financial Officer',
          email: 'jane.smith@acmecorp.com',
          phone: '+44 20 1234 5678'
        },
        {
          name: 'Michael Johnson',
          role: 'Treasury Manager',
          email: 'michael.johnson@acmecorp.com',
          phone: '+44 20 1234 5679'
        },
        {
          name: 'Sarah Williams',
          role: 'Accounts Payable Manager',
          email: 'sarah.williams@acmecorp.com',
          phone: '+44 20 1234 5680'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 456000,
          onboardDate: 'Sep 2019',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 234000,
          onboardDate: 'Dec 2020',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 345000,
          onboardDate: 'Mar 2021',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 221000,
          onboardDate: 'Jun 2021',
          status: 'active' as const
        },
        {
          name: 'Corporate Credit Card',
          revenue: 0,
          onboardDate: 'Apr 2022',
          status: 'inactive' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Feb 15, 2023',
          issue: 'Delays in international payment processing affecting supplier relationships',
          status: 'resolved' as const,
          resolution: 'Implemented expedited processing for recurring payments to key suppliers'
        },
        {
          id: '2',
          date: 'Sep 8, 2023',
          issue: 'Issues with online banking platform accessibility during system upgrade',
          status: 'resolved' as const,
          resolution: 'Provided temporary access through alternative channel and compensation'
        },
        {
          id: '3',
          date: 'Mar 22, 2024',
          issue: 'Dispute regarding foreign exchange fees on large international transaction',
          status: 'pending' as const
        }
      ],
      npsScore: 8.5,
      npsHistory: [
        { quarter: 'Q2 2022', score: 7.2 },
        { quarter: 'Q3 2022', score: 7.5 },
        { quarter: 'Q4 2022', score: 7.8 },
        { quarter: 'Q1 2023', score: 8.1 },
        { quarter: 'Q2 2023', score: 8.3 },
        { quarter: 'Q3 2023', score: 8.2 },
        { quarter: 'Q4 2023', score: 8.4 },
        { quarter: 'Q1 2024', score: 8.5 }
      ],
      surveys: [
        {
          date: 'Jan 12, 2024',
          score: 9,
          feedback: 'The trade finance team has been exceptionally responsive to our needs during our recent expansion into European markets.'
        },
        {
          date: 'Mar 5, 2024',
          score: 7,
          feedback: 'Overall satisfied with services but would appreciate more tailored solutions for our industry-specific challenges.'
        }
      ],
      networkRelationships: [
        {
          cin: '1047382956',
          parent: 'Acme Corporation PLC',
          mg: '1025'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 456000 },
        { name: 'Commercial Cards', revenue: 234000 },
        { name: 'Trade Finance', revenue: 345000 },
        { name: 'Foreign Exchange', revenue: 221000 },
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 56000 },
        { month: 'Feb', revenue: 62000 },
        { month: 'Mar', revenue: 58000 },
        { month: 'Apr', revenue: 65000 },
        { month: 'May', revenue: 75000 },
        { month: 'Jun', revenue: 90000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Sep 2019', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '09:30'
        },
        { 
          id: '2', 
          title: 'Business banking account opened', 
          date: 'Sep 2019', 
          type: 'account' as const,
          subtitle: 'Primary business account created',
          status: 'completed' as const,
          time: '14:15'
        },
        { 
          id: '3', 
          title: 'Commercial card issued', 
          date: 'Dec 2020', 
          type: 'product' as const,
          subtitle: 'Business credit card activated',
          status: 'completed' as const,
          time: '11:45'
        },
        { 
          id: '4', 
          title: 'Filed complaint about international payment delays', 
          date: 'Feb 2023', 
          type: 'complaint' as const,
          subtitle: 'Delays in international payment processing',
          status: 'completed' as const,
          time: '16:20'
        },
        {
          id: '5',
          title: 'Filed complaint about online banking platform',
          date: 'Sep 2023',
          type: 'complaint' as const,
          subtitle: 'Issues with online banking platform accessibility',
          status: 'completed' as const,
          time: '10:45'
        },
        {
          id: '6',
          title: 'Customer survey submitted - Score: 9/10',
          date: 'Jan 2024',
          type: 'survey' as const,
          subtitle: 'Positive feedback on trade finance team',
          status: 'completed' as const,
          time: '14:25'
        },
        {
          id: '7',
          title: 'Customer survey submitted - Score: 7/10',
          date: 'Mar 2024',
          type: 'survey' as const,
          subtitle: 'Requested more tailored industry solutions',
          status: 'completed' as const,
          time: '09:15'
        },
        {
          id: '8',
          title: 'Filed complaint about foreign exchange fees',
          date: 'Mar 2024',
          type: 'complaint' as const,
          subtitle: 'Dispute regarding foreign exchange fees',
          status: 'current' as const,
          time: '11:30'
        },
        { 
          id: '9', 
          title: 'Closed commercial card account', 
          date: 'Apr 2024', 
          type: 'closure' as const,
          subtitle: 'Card account terminated by customer request',
          status: 'current' as const,
          time: '10:05'
        },
      ],
    },
    '2': {
      id: '2',
      name: 'Dynamic Solutions Ltd',
      businessType: 'Technology',
      revenue: '£2,345,000',
      bbrm: 'Thomas Miller',
      channelPreference: 'phone' as const,
      description: 'Dynamic Solutions Ltd is a fast-growing technology firm specializing in enterprise software solutions. They have been expanding their international presence and require comprehensive banking services.',
      keyContacts: [
        {
          name: 'Robert Chen',
          role: 'Chief Executive Officer',
          email: 'robert.chen@dynamicsolutions.com',
          phone: '+44 20 4567 8901'
        },
        {
          name: 'Emma Watson',
          role: 'Finance Director',
          email: 'emma.watson@dynamicsolutions.com',
          phone: '+44 20 4567 8902'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 583000,
          onboardDate: 'Mar 2020',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 321000,
          onboardDate: 'May 2020',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 453000,
          onboardDate: 'Aug 2020',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Nov 12, 2023',
          issue: 'Repeated technical issues with online banking platform',
          status: 'resolved' as const,
          resolution: 'Provided dedicated technical support and system upgrades'
        }
      ],
      npsScore: 7.5,
      npsHistory: [
        { quarter: 'Q2 2022', score: 6.8 },
        { quarter: 'Q3 2022', score: 7.0 },
        { quarter: 'Q4 2022', score: 7.2 },
        { quarter: 'Q1 2023', score: 7.4 },
        { quarter: 'Q2 2023', score: 7.5 },
        { quarter: 'Q3 2023', score: 7.5 },
        { quarter: 'Q4 2023', score: 7.6 },
        { quarter: 'Q1 2024', score: 7.5 }
      ],
      surveys: [
        {
          date: 'Dec 18, 2023',
          score: 8,
          feedback: 'Good service overall, but need better integration with our financial systems.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 583000 },
        { name: 'Commercial Cards', revenue: 321000 },
        { name: 'Foreign Exchange', revenue: 453000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 62000 },
        { month: 'Feb', revenue: 65000 },
        { month: 'Mar', revenue: 70000 },
        { month: 'Apr', revenue: 72000 },
        { month: 'May', revenue: 85000 },
        { month: 'Jun', revenue: 93000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Mar 2020', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '10:15'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Aug 2020', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '14:30'
        },
        {
          id: '3',
          title: 'Filed complaint about online banking platform',
          date: 'Nov 2023',
          type: 'complaint' as const,
          subtitle: 'Repeated technical issues with online banking',
          status: 'completed' as const,
          time: '09:20'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Dec 2023',
          type: 'survey' as const,
          subtitle: 'Requested better financial systems integration',
          status: 'completed' as const,
          time: '15:45'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Green Energy Partners',
      businessType: 'Energy',
      revenue: '£987,000',
      bbrm: 'Rebecca Taylor',
      channelPreference: 'letter' as const,
      description: 'Green Energy Partners focuses on renewable energy solutions and sustainability consulting. They are experiencing steady growth as demand for green energy increases globally.',
      keyContacts: [
        {
          name: 'Daniel Green',
          role: 'Managing Director',
          email: 'daniel.green@greenenergypartners.com',
          phone: '+44 20 5678 9012'
        },
        {
          name: 'Laura Martinez',
          role: 'Finance Manager',
          email: 'laura.martinez@greenenergypartners.com',
          phone: '+44 20 5678 9013'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 297000,
          onboardDate: 'Jun 2021',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 214000,
          onboardDate: 'Sep 2021',
          status: 'active' as const
        }
      ],
      complaints: [],
      npsScore: 8.1,
      npsHistory: [
        { quarter: 'Q3 2022', score: 7.8 },
        { quarter: 'Q4 2022', score: 7.9 },
        { quarter: 'Q1 2023', score: 8.0 },
        { quarter: 'Q2 2023', score: 8.1 },
        { quarter: 'Q3 2023', score: 8.1 },
        { quarter: 'Q4 2023', score: 8.2 },
        { quarter: 'Q1 2024', score: 8.1 }
      ],
      surveys: [
        {
          date: 'Feb 5, 2024',
          score: 9,
          feedback: 'Excellent support for our sustainable financing initiatives.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 297000 },
        { name: 'Trade Finance', revenue: 214000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 45000 },
        { month: 'Mar', revenue: 48000 },
        { month: 'Apr', revenue: 52000 },
        { month: 'May', revenue: 56000 },
        { month: 'Jun', revenue: 60000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Jun 2021', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '11:20'
        },
        { 
          id: '2', 
          title: 'Trade finance facilities activated', 
          date: 'Sep 2021', 
          type: 'product' as const,
          subtitle: 'International trade support enabled',
          status: 'completed' as const,
          time: '15:45'
        },
        {
          id: '3',
          title: 'Customer survey submitted - Score: 9/10',
          date: 'Feb 2024',
          type: 'survey' as const,
          subtitle: 'Positive feedback on sustainable financing',
          status: 'completed' as const,
          time: '13:10'
        }
      ]
    },
    '4': {
      id: '4',
      name: 'Metro Hospitality Group',
      businessType: 'Hospitality',
      revenue: '£3,421,000',
      bbrm: 'Andrew Wilson',
      channelPreference: 'email' as const,
      description: 'Metro Hospitality Group owns and operates a chain of hotels and restaurants across major cities. They require comprehensive financial services to support their multi-location operations.',
      keyContacts: [
        {
          name: 'Victoria Lewis',
          role: 'Chief Executive Officer',
          email: 'victoria.lewis@metrohospitality.com',
          phone: '+44 20 6789 0123'
        },
        {
          name: 'James Parker',
          role: 'Financial Controller',
          email: 'james.parker@metrohospitality.com',
          phone: '+44 20 6789 0124'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 876000,
          onboardDate: 'Feb 2019',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 654000,
          onboardDate: 'Apr 2019',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 542000,
          onboardDate: 'Jul 2019',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Oct 5, 2023',
          issue: 'Delayed settlement of card transactions affecting cash flow',
          status: 'resolved' as const,
          resolution: 'Adjusted settlement timing and provided temporary overdraft facility'
        }
      ],
      npsScore: 7.9,
      npsHistory: [
        { quarter: 'Q1 2022', score: 7.2 },
        { quarter: 'Q2 2022', score: 7.4 },
        { quarter: 'Q3 2022', score: 7.5 },
        { quarter: 'Q4 2022', score: 7.6 },
        { quarter: 'Q1 2023', score: 7.7 },
        { quarter: 'Q2 2023', score: 7.8 },
        { quarter: 'Q3 2023', score: 7.9 },
        { quarter: 'Q4 2023', score: 7.9 },
        { quarter: 'Q1 2024', score: 7.9 }
      ],
      surveys: [
        {
          date: 'Nov 15, 2023',
          score: 8,
          feedback: 'Strong international payment capabilities have helped our expansion.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 876000 },
        { name: 'Commercial Cards', revenue: 654000 },
        { name: 'Foreign Exchange', revenue: 542000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 92000 },
        { month: 'Feb', revenue: 98000 },
        { month: 'Mar', revenue: 105000 },
        { month: 'Apr', revenue: 110000 },
        { month: 'May', revenue: 120000 },
        { month: 'Jun', revenue: 125000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Feb 2019', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '09:45'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Jul 2019', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '13:30'
        },
        {
          id: '3',
          title: 'Filed complaint about card transaction settlements',
          date: 'Oct 2023',
          type: 'complaint' as const,
          subtitle: 'Delayed settlements affecting cash flow',
          status: 'completed' as const,
          time: '11:15'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Nov 2023',
          type: 'survey' as const,
          subtitle: 'Positive feedback on international payments',
          status: 'completed' as const,
          time: '14:50'
        }
      ]
    },
    '5': {
      id: '5',
      name: 'Patterson Healthcare',
      businessType: 'Healthcare',
      revenue: '£5,678,000',
      bbrm: 'Jennifer Adams',
      channelPreference: 'phone' as const,
      description: 'Patterson Healthcare operates a network of private clinics and healthcare facilities. They require specialized financial services to support their growth and acquisition strategy.',
      keyContacts: [
        {
          name: 'Richard Patterson',
          role: 'Chief Financial Officer',
          email: 'richard.patterson@pattersonhealthcare.com',
          phone: '+44 20 7890 1234'
        },
        {
          name: 'Susan Campbell',
          role: 'Treasury Director',
          email: 'susan.campbell@pattersonhealthcare.com',
          phone: '+44 20 7890 1235'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 1245000,
          onboardDate: 'Oct 2018',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 987000,
          onboardDate: 'Jan 2019',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 876000,
          onboardDate: 'Mar 2019',
          status: 'active' as const
        }
      ],
      complaints: [],
      npsScore: 8.3,
      npsHistory: [
        { quarter: 'Q1 2022', score: 7.6 },
        { quarter: 'Q2 2022', score: 7.7 },
        { quarter: 'Q3 2022', score: 7.9 },
        { quarter: 'Q4 2022', score: 8.0 },
        { quarter: 'Q1 2023', score: 8.1 },
        { quarter: 'Q2 2023', score: 8.2 },
        { quarter: 'Q3 2023', score: 8.3 },
        { quarter: 'Q4 2023', score: 8.3 },
        { quarter: 'Q1 2024', score: 8.3 }
      ],
      surveys: [
        {
          date: 'Jan 25, 2024',
          score: 9,
          feedback: 'The dedicated healthcare sector team understands our specific needs very well.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 1245000 },
        { name: 'Trade Finance', revenue: 987000 },
        { name: 'Foreign Exchange', revenue: 876000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 130000 },
        { month: 'Feb', revenue: 140000 },
        { month: 'Mar', revenue: 145000 },
        { month: 'Apr', revenue: 150000 },
        { month: 'May', revenue: 160000 },
        { month: 'Jun', revenue: 170000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Oct 2018', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '10:30'
        },
        { 
          id: '2', 
          title: 'Trade finance facilities activated', 
          date: 'Jan 2019', 
          type: 'product' as const,
          subtitle: 'International trade support enabled',
          status: 'completed' as const,
          time: '14:15'
        },
        {
          id: '3',
          title: 'Customer survey submitted - Score: 9/10',
          date: 'Jan 2024',
          type: 'survey' as const,
          subtitle: 'Praised dedicated healthcare sector team',
          status: 'completed' as const,
          time: '09:40'
        }
      ]
    },
    '6': {
      id: '6',
      name: 'Global Logistics Ltd',
      businessType: 'Transport',
      revenue: '£4,127,000',
      bbrm: 'Michael Roberts',
      channelPreference: 'letter' as const,
      description: 'Global Logistics Ltd is an international shipping and logistics company with operations in over 30 countries. They require robust international banking services and trade finance solutions.',
      keyContacts: [
        {
          name: 'Christopher White',
          role: 'Chief Executive Officer',
          email: 'christopher.white@globallogistics.com',
          phone: '+44 20 8901 2345'
        },
        {
          name: 'Olivia Brown',
          role: 'Head of Finance',
          email: 'olivia.brown@globallogistics.com',
          phone: '+44 20 8901 2346'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 965000,
          onboardDate: 'Apr 2020',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 823000,
          onboardDate: 'Jun 2020',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 754000,
          onboardDate: 'Aug 2020',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Jul 18, 2023',
          issue: 'Foreign exchange rate discrepancies on high-volume transactions',
          status: 'resolved' as const,
          resolution: 'Implemented tailored FX solution with preferential rates'
        }
      ],
      npsScore: 7.7,
      npsHistory: [
        { quarter: 'Q2 2022', score: 7.0 },
        { quarter: 'Q3 2022', score: 7.2 },
        { quarter: 'Q4 2022', score: 7.3 },
        { quarter: 'Q1 2023', score: 7.4 },
        { quarter: 'Q2 2023', score: 7.5 },
        { quarter: 'Q3 2023', score: 7.6 },
        { quarter: 'Q4 2023', score: 7.7 },
        { quarter: 'Q1 2024', score: 7.7 }
      ],
      surveys: [
        {
          date: 'Oct 9, 2023',
          score: 8,
          feedback: 'Strong international capabilities, but need more flexibility in trade finance terms.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 965000 },
        { name: 'Trade Finance', revenue: 823000 },
        { name: 'Foreign Exchange', revenue: 754000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 110000 },
        { month: 'Feb', revenue: 115000 },
        { month: 'Mar', revenue: 120000 },
        { month: 'Apr', revenue: 125000 },
        { month: 'May', revenue: 135000 },
        { month: 'Jun', revenue: 145000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Apr 2020', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '11:15'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Aug 2020', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '16:30'
        },
        {
          id: '3',
          title: 'Filed complaint about FX rate discrepancies',
          date: 'Jul 2023',
          type: 'complaint' as const,
          subtitle: 'Issues with high-volume transaction rates',
          status: 'completed' as const,
          time: '13:25'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Oct 2023',
          type: 'survey' as const,
          subtitle: 'Requested more flexible trade finance terms',
          status: 'completed' as const,
          time: '10:35'
        }
      ]
    },
    '7': {
      id: '7',
      name: 'TechVision Innovations',
      businessType: 'Technology',
      revenue: '£2,865,000',
      bbrm: 'David Thompson',
      channelPreference: 'email' as const,
      description: 'TechVision Innovations is a rapidly growing tech startup focusing on AI solutions for enterprise clients. They need scalable financial services to support their international expansion.',
      keyContacts: [
        {
          name: 'Sophia Lee',
          role: 'Chief Financial Officer',
          email: 'sophia.lee@techvision.com',
          phone: '+44 20 9012 3456'
        },
        {
          name: 'Mark Davidson',
          role: 'Treasury Manager',
          email: 'mark.davidson@techvision.com',
          phone: '+44 20 9012 3457'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 687000,
          onboardDate: 'Sep 2021',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 543000,
          onboardDate: 'Nov 2021',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 476000,
          onboardDate: 'Jan 2022',
          status: 'active' as const
        }
      ],
      complaints: [],
      npsScore: 8.2,
      npsHistory: [
        { quarter: 'Q4 2022', score: 7.8 },
        { quarter: 'Q1 2023', score: 7.9 },
        { quarter: 'Q2 2023', score: 8.0 },
        { quarter: 'Q3 2023', score: 8.1 },
        { quarter: 'Q4 2023', score: 8.2 },
        { quarter: 'Q1 2024', score: 8.2 }
      ],
      surveys: [
        {
          date: 'Mar 15, 2024',
          score: 9,
          feedback: 'Excellent digital banking experience that integrates well with our systems.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 687000 },
        { name: 'Commercial Cards', revenue: 543000 },
        { name: 'Foreign Exchange', revenue: 476000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 78000 },
        { month: 'Feb', revenue: 82000 },
        { month: 'Mar', revenue: 85000 },
        { month: 'Apr', revenue: 90000 },
        { month: 'May', revenue: 95000 },
        { month: 'Jun', revenue: 100000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Sep 2021', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '13:45'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Jan 2022', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '10:30'
        },
        {
          id: '3',
          title: 'Customer survey submitted - Score: 9/10',
          date: 'Mar 2024',
          type: 'survey' as const,
          subtitle: 'Praised digital banking integration',
          status: 'completed' as const,
          time: '15:20'
        }
      ]
    },
    '8': {
      id: '8',
      name: 'Harrison Construction',
      businessType: 'Construction',
      revenue: '£6,215,000',
      bbrm: 'Elizabeth Cooper',
      channelPreference: 'phone' as const,
      description: 'Harrison Construction is a major player in commercial and residential property development with projects across the country. They require comprehensive financial services including project financing.',
      keyContacts: [
        {
          name: 'Peter Harrison',
          role: 'Managing Director',
          email: 'peter.harrison@harrisonconstruction.com',
          phone: '+44 20 0123 4567'
        },
        {
          name: 'Amanda Turner',
          role: 'Finance Director',
          email: 'amanda.turner@harrisonconstruction.com',
          phone: '+44 20 0123 4568'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 1456000,
          onboardDate: 'Jul 2019',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 987000,
          onboardDate: 'Sep 2019',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 876000,
          onboardDate: 'Dec 2019',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Sep 10, 2023',
          issue: 'Delays in accessing project financing affecting construction timeline',
          status: 'resolved' as const,
          resolution: 'Streamlined approval process and provided interim financing'
        }
      ],
      npsScore: 7.8,
      npsHistory: [
        { quarter: 'Q1 2022', score: 7.3 },
        { quarter: 'Q2 2022', score: 7.4 },
        { quarter: 'Q3 2022', score: 7.5 },
        { quarter: 'Q4 2022', score: 7.6 },
        { quarter: 'Q1 2023', score: 7.7 },
        { quarter: 'Q2 2023', score: 7.8 },
        { quarter: 'Q3 2023', score: 7.8 },
        { quarter: 'Q4 2023', score: 7.8 },
        { quarter: 'Q1 2024', score: 7.8 }
      ],
      surveys: [
        {
          date: 'Dec 8, 2023',
          score: 8,
          feedback: 'Good understanding of construction industry challenges, but need faster financing approvals.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 1456000 },
        { name: 'Commercial Cards', revenue: 987000 },
        { name: 'Trade Finance', revenue: 876000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 145000 },
        { month: 'Feb', revenue: 155000 },
        { month: 'Mar', revenue: 160000 },
        { month: 'Apr', revenue: 170000 },
        { month: 'May', revenue: 185000 },
        { month: 'Jun', revenue: 200000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Jul 2019', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '10:45'
        },
        { 
          id: '2', 
          title: 'Trade finance facilities activated', 
          date: 'Dec 2019', 
          type: 'product' as const,
          subtitle: 'Project financing capabilities enabled',
          status: 'completed' as const,
          time: '14:30'
        },
        {
          id: '3',
          title: 'Filed complaint about project financing delays',
          date: 'Sep 2023',
          type: 'complaint' as const,
          subtitle: 'Delays affecting construction timeline',
          status: 'completed' as const,
          time: '09:50'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Dec 2023',
          type: 'survey' as const,
          subtitle: 'Requested faster financing approvals',
          status: 'completed' as const,
          time: '11:25'
        }
      ]
    },
    '9': {
      id: '9',
      name: 'Emerald Retail Group',
      businessType: 'Retail',
      revenue: '£3,750,000',
      bbrm: 'Robert Jackson',
      channelPreference: 'letter' as const,
      description: 'Emerald Retail Group operates a chain of department stores and online retail platforms. They require robust payment processing solutions and working capital facilities.',
      keyContacts: [
        {
          name: 'Natalie Green',
          role: 'Chief Financial Officer',
          email: 'natalie.green@emeraldretail.com',
          phone: '+44 20 1234 5678'
        },
        {
          name: 'Paul Richards',
          role: 'Head of Treasury',
          email: 'paul.richards@emeraldretail.com',
          phone: '+44 20 1234 5679'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 875000,
          onboardDate: 'Mar 2020',
          status: 'active' as const
        },
        {
          name: 'Commercial Cards',
          revenue: 654000,
          onboardDate: 'May 2020',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 543000,
          onboardDate: 'Aug 2020',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Jun 5, 2023',
          issue: 'Issues with payment processing system integration',
          status: 'pending' as const
        }
      ],
      npsScore: 7.6,
      npsHistory: [
        { quarter: 'Q2 2022', score: 7.1 },
        { quarter: 'Q3 2022', score: 7.2 },
        { quarter: 'Q4 2022', score: 7.3 },
        { quarter: 'Q1 2023', score: 7.4 },
        { quarter: 'Q2 2023', score: 7.5 },
        { quarter: 'Q3 2023', score: 7.5 },
        { quarter: 'Q4 2023', score: 7.6 },
        { quarter: 'Q1 2024', score: 7.6 }
      ],
      surveys: [
        {
          date: 'Jan 20, 2024',
          score: 8,
          feedback: 'Good service, but need better integration with our e-commerce platform.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 875000 },
        { name: 'Commercial Cards', revenue: 654000 },
        { name: 'Foreign Exchange', revenue: 543000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 95000 },
        { month: 'Feb', revenue: 98000 },
        { month: 'Mar', revenue: 103000 },
        { month: 'Apr', revenue: 110000 },
        { month: 'May', revenue: 118000 },
        { month: 'Jun', revenue: 125000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Mar 2020', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '09:15'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Aug 2020', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '15:45'
        },
        {
          id: '3',
          title: 'Filed complaint about payment processing',
          date: 'Jun 2023',
          type: 'complaint' as const,
          subtitle: 'System integration issues',
          status: 'current' as const,
          time: '14:10'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Jan 2024',
          type: 'survey' as const,
          subtitle: 'Requested better e-commerce integration',
          status: 'completed' as const,
          time: '10:20'
        }
      ]
    },
    '10': {
      id: '10',
      name: 'Heritage Foods Ltd',
      businessType: 'Food & Beverage',
      revenue: '£1,980,000',
      bbrm: 'Alice Palmer',
      channelPreference: 'email' as const,
      description: 'Heritage Foods Ltd produces specialty food products with a focus on sustainability and organic ingredients. They are expanding their export markets and need international banking support.',
      keyContacts: [
        {
          name: 'William Bradley',
          role: 'Managing Director',
          email: 'william.bradley@heritagefoods.com',
          phone: '+44 20 2345 6789'
        },
        {
          name: 'Claire Nelson',
          role: 'Finance Manager',
          email: 'claire.nelson@heritagefoods.com',
          phone: '+44 20 2345 6790'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 465000,
          onboardDate: 'Nov 2022',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 320000,
          onboardDate: 'Jan 2023',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 278000,
          onboardDate: 'Mar 2023',
          status: 'active' as const
        }
      ],
      complaints: [],
      npsScore: 8.4,
      npsHistory: [
        { quarter: 'Q1 2023', score: 8.0 },
        { quarter: 'Q2 2023', score: 8.1 },
        { quarter: 'Q3 2023', score: 8.2 },
        { quarter: 'Q4 2023', score: 8.3 },
        { quarter: 'Q1 2024', score: 8.4 }
      ],
      surveys: [
        {
          date: 'Feb 28, 2024',
          score: 9,
          feedback: 'Excellent support for our export financing needs and sustainability initiatives.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 465000 },
        { name: 'Trade Finance', revenue: 320000 },
        { name: 'Foreign Exchange', revenue: 278000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 54000 },
        { month: 'Feb', revenue: 56000 },
        { month: 'Mar', revenue: 58000 },
        { month: 'Apr', revenue: 61000 },
        { month: 'May', revenue: 65000 },
        { month: 'Jun', revenue: 70000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'Nov 2022', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '11:30'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Mar 2023', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '16:15'
        },
        {
          id: '3',
          title: 'Customer survey submitted - Score: 9/10',
          date: 'Feb 2024',
          type: 'survey' as const,
          subtitle: 'Praised export financing support',
          status: 'completed' as const,
          time: '13:45'
        }
      ]
    },
    '11': {
      id: '11',
      name: 'Quantum Electronics',
      businessType: 'Manufacturing',
      revenue: '£3,250,000',
      bbrm: 'George Williams',
      channelPreference: 'phone' as const,
      description: 'Quantum Electronics manufactures specialized electronic components for industrial applications. They have a global supply chain and need comprehensive international banking services.',
      keyContacts: [
        {
          name: 'Katherine Zhang',
          role: 'Chief Financial Officer',
          email: 'katherine.zhang@quantumelectronics.com',
          phone: '+44 20 3456 7890'
        },
        {
          name: 'John Foster',
          role: 'Treasury Manager',
          email: 'john.foster@quantumelectronics.com',
          phone: '+44 20 3456 7891'
        }
      ],
      products: [
        {
          name: 'Retail Payments',
          revenue: 765000,
          onboardDate: 'May 2021',
          status: 'active' as const
        },
        {
          name: 'Trade Finance',
          revenue: 654000,
          onboardDate: 'Aug 2021',
          status: 'active' as const
        },
        {
          name: 'Foreign Exchange',
          revenue: 532000,
          onboardDate: 'Oct 2021',
          status: 'active' as const
        }
      ],
      complaints: [
        {
          id: '1',
          date: 'Nov 15, 2023',
          issue: 'Challenges with documentary credits for international suppliers',
          status: 'resolved' as const,
          resolution: 'Dedicated trade specialist assigned to streamline documentary processes'
        }
      ],
      npsScore: 7.9,
      npsHistory: [
        { quarter: 'Q3 2022', score: 7.5 },
        { quarter: 'Q4 2022', score: 7.6 },
        { quarter: 'Q1 2023', score: 7.7 },
        { quarter: 'Q2 2023', score: 7.8 },
        { quarter: 'Q3 2023', score: 7.8 },
        { quarter: 'Q4 2023', score: 7.9 },
        { quarter: 'Q1 2024', score: 7.9 }
      ],
      surveys: [
        {
          date: 'Jan 10, 2024',
          score: 8,
          feedback: 'Good trade finance support, would like more streamlined documentation process.'
        }
      ],
      productRevenue: [
        { name: 'Retail Payments', revenue: 765000 },
        { name: 'Trade Finance', revenue: 654000 },
        { name: 'Foreign Exchange', revenue: 532000 }
      ],
      revenueHistory: [
        { month: 'Jan', revenue: 85000 },
        { month: 'Feb', revenue: 88000 },
        { month: 'Mar', revenue: 92000 },
        { month: 'Apr', revenue: 95000 },
        { month: 'May', revenue: 100000 },
        { month: 'Jun', revenue: 110000 },
      ],
      timeline: [
        { 
          id: '1', 
          title: 'Customer onboarded to HSBC', 
          date: 'May 2021', 
          type: 'onboard' as const,
          subtitle: 'Initial account setup completed',
          status: 'completed' as const,
          time: '10:15'
        },
        { 
          id: '2', 
          title: 'Foreign exchange services activated', 
          date: 'Oct 2021', 
          type: 'product' as const,
          subtitle: 'International payment capabilities enabled',
          status: 'completed' as const,
          time: '15:30'
        },
        {
          id: '3',
          title: 'Filed complaint about documentary credits',
          date: 'Nov 2023',
          type: 'complaint' as const,
          subtitle: 'Issues with international supplier documentation',
          status: 'completed' as const,
          time: '11:05'
        },
        {
          id: '4',
          title: 'Customer survey submitted - Score: 8/10',
          date: 'Jan 2024',
          type: 'survey' as const,
          subtitle: 'Requested more streamlined documentation',
          status: 'completed' as const,
          time: '09:30'
        }
      ]
    }
  };
  
  // Return the requested customer or the default one if not found
  return customers[customerId] || customers['1'];
};

// Export a list of all available customers for search and dashboard use
export const getAllCustomers = () => {
  return [
    { id: '1', name: 'Acme Corporation', industry: 'Manufacturing' },
    { id: '2', name: 'Dynamic Solutions Ltd', industry: 'Technology' },
    { id: '3', name: 'Green Energy Partners', industry: 'Energy' },
    { id: '4', name: 'Metro Hospitality Group', industry: 'Hospitality' },
    { id: '5', name: 'Patterson Healthcare', industry: 'Healthcare' },
    { id: '6', name: 'Global Logistics Ltd', industry: 'Transport' },
    { id: '7', name: 'TechVision Innovations', industry: 'Technology' },
    { id: '8', name: 'Harrison Construction', industry: 'Construction' },
    { id: '9', name: 'Emerald Retail Group', industry: 'Retail' },
    { id: '10', name: 'Sterling Finance Group', industry: 'Finance' },
    { id: '11', name: 'Quantum Electronics', industry: 'Manufacturing' },
  ];
};
