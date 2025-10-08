import React from 'react';
import { RevenueChart } from './RevenueChart';
import { FastGrowthCompanies } from './FastGrowthCompanies';
import { LendingPropensity } from './LendingPropensity';
import { LowNPSCustomers } from './LowNPSCustomers';
import { LongInactiveCustomers } from './LongInactiveCustomers';
import { TopRevenueCustomers } from './TopRevenueCustomers';

export const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
      <RevenueChart />
      <FastGrowthCompanies />
      <LendingPropensity />
      <LowNPSCustomers />
      <LongInactiveCustomers />
      <TopRevenueCustomers />
    </div>
  );
};
