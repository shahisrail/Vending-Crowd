"use client";

import { useState } from "react";

type FormData = {
  warehouseRent: number;
  warehouseUtilities: number;
  truckLoan: number;
  truckInsurance: number;
  rentalTruck: number;
  sprinterVan: number;
  gas: number;
  truckRepairs: number;
  warehousePayroll: number;
  expiredInventory: number;
  driverPayroll: number;
  machines: number;
  refills: number;
  workHours: number;
  tolls: number;
};

const initialData: FormData = {
  warehouseRent: 0,
  warehouseUtilities: 0,
  truckLoan: 0,
  truckInsurance: 0,
  rentalTruck: 0,
  sprinterVan: 0,
  gas: 0,
  truckRepairs: 0,
  warehousePayroll: 0,
  expiredInventory: 0,
  driverPayroll: 0,
  machines: 0,
  refills: 0,
  workHours: 0,
  tolls: 0,
};

export default function SavingsCalculator() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);

  const handleChange = (key: keyof FormData, value: string) => {
    setData({ ...data, [key]: Number(value || 0) });
  };

  const total = Object.values(data).reduce((a, b) => a + b, 0);

  return (
    <section className="bg-[#FFF9EE] py-20">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
        Savings Calculator
      </h2>

      <div className="max-w-7xl mx-auto bg-[#F3F4FA] rounded-[32px] p-8 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Your Current Operational Costs (Monthly)
          </p>
          <p className="text-xs text-gray-400 mb-6">
            Enter roughly how much you currently spend each month to operate.
          </p>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-10 rounded-full ${
                  step >= s ? "bg-green-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <>
              <h3 className="text-xl font-semibold mb-6">
                Step 1: Warehouse & Vehicle Fixed Costs
              </h3>
              <Grid>
                <Input label="Warehouse Rent" onChange={(v) => handleChange("warehouseRent", v)} />
                <Input label="Warehouse Utilities" onChange={(v) => handleChange("warehouseUtilities", v)} />
                <Input label="Truck Loan/Lease" onChange={(v) => handleChange("truckLoan", v)} />
                <Input label="Truck Insurance" onChange={(v) => handleChange("truckInsurance", v)} />
                <Input label="Rental Truck (Monthly)" onChange={(v) => handleChange("rentalTruck", v)} />
                <Input label="Sprinter Van (Monthly)" onChange={(v) => handleChange("sprinterVan", v)} />
              </Grid>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-xl font-semibold mb-6">
                Step 2: Operational & Variable Costs
              </h3>
              <Grid>
                <Input label="Fuel (Gas)" onChange={(v) => handleChange("gas", v)} />
                <Input label="Truck Repairs (Avg)" onChange={(v) => handleChange("truckRepairs", v)} />
                <Input label="Warehouse Payroll (Avg)" onChange={(v) => handleChange("warehousePayroll", v)} />
                <Input label="Expired Inventory (Avg)" onChange={(v) => handleChange("expiredInventory", v)} />
                <Input label="Driver Payroll" onChange={(v) => handleChange("driverPayroll", v)} />
              </Grid>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-xl font-semibold mb-6">
                Step 3: Your Operations & Time
              </h3>
              <Grid>
                <Input label="Machines You Own" onChange={(v) => handleChange("machines", v)} />
                <Input label="Machine Refills / Month" onChange={(v) => handleChange("refills", v)} />
                <Input label="Your Work Hours (Monthly)" onChange={(v) => handleChange("workHours", v)} />
                <Input label="Tolls (Avg)" onChange={(v) => handleChange("tolls", v)} />
              </Grid>
            </>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-between mt-10">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium"
              >
                ← Go To Previous
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="ml-auto px-6 py-3 rounded-full bg-indigo-600 text-white font-medium"
              >
                Continue To Next →
              </button>
            ) : (
              <button className="ml-auto px-8 py-3 rounded-full bg-indigo-600 text-white font-medium">
                Calculate
              </button>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#F7F8FD] rounded-[28px] p-6 flex flex-col">
          {/* Gauge */}
          <div className="text-center mb-6">
            <div className="relative mx-auto w-48 h-24 overflow-hidden">
              <div className="absolute inset-0 rounded-t-full border-[12px] border-pink-100 border-b-0" />
            </div>
            <div className="text-4xl font-bold -mt-2">${total.toFixed(0)}</div>
            <p className="text-sm text-gray-500">Your Total Monthly Spend</p>
          </div>

          <div className="bg-white rounded-xl p-4 text-xs text-gray-600 mb-6">
            NOTE: This savings calculation assumes that you fill your vending
            machines at least twice per month.
          </div>

          <div className="flex-1 text-sm space-y-2">
            <h4 className="font-semibold">Your Savings!</h4>
            <p className="text-gray-500">
              This is how VendingCrowd can save you time and $$$!
            </p>

            <div className="pt-3 border-t text-black space-y-2">
              <Row label="Total Cost" value={`$${total.toFixed(2)}`} />
              <Row label="Savings In %" value="0%" />
              <Row label="Cost Savings $" value="$0" />
              <Row label="Cost Savings $ Per Year" value="$0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>;
}

function Input({
  label,
  onChange,
}: {
  label: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-700">{label}</label>
      <input
        type="number"
        placeholder="Type here"
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
