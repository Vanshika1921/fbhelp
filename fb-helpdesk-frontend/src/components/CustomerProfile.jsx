import React from 'react';

export default function CustomerProfile({ customer }) {
  if (!customer) return null;
  return (
    <div className="p-6 sticky top-0">
      <img
        src={customer.profilePic}
        alt={customer.customerName}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-center mt-4 text-xl font-semibold">{customer.customerName}</h3>
      <p className="text-center mt-2 text-gray-600">Facebook Customer</p>
    </div>
  );
}
