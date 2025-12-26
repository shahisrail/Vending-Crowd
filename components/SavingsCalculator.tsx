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
  const [showMore, setShowMore] = useState(false);

  const handleChange = (key: keyof FormData, value: string) => {
    setData({ ...data, [key]: Number(value || 0) });
  };

  const total = Object.values(data).reduce((a, b) => a + b, 0);

  const rows = [
    { label: "Warehouse Rent/Mortgage", value: data.warehouseRent },
    { label: "Warehouse Utilities", value: data.warehouseUtilities },
    { label: "Truck Cost", value: data.truckLoan },
    { label: "Truck Insurance", value: data.truckInsurance },
    { label: "Rental Truck Cost", value: data.rentalTruck },
    { label: "Sprinter Van", value: data.sprinterVan },
    { label: "Gas", value: data.gas },
    { label: "Truck Repairs (monthly average)", value: data.truckRepairs },
    { label: "Warehouse worker Payroll (monthly average)", value: data.warehousePayroll },
    { label: "Inventory Lost To Expiration (monthly average)", value: data.expiredInventory },
    { label: "Vending Driver Payroll", value: data.driverPayroll },
    { label: "Cost per number of machines", value: data.machines },
    { label: "Hours Spent servicing and filling machines", value: data.workHours },
    { label: "VendingCrowd Plan Need", value: 0 },
    { label: "Tolls", value: data.tolls },
  ];

  const visibleRows = showMore ? rows : rows.slice(0, 7);

  return (
    <section className="bg-[#FFF9EE] py-24">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
        Savings Calculator
      </h2>

      <div className=" mx-3 semi-sm:mx-5 lg:mx-10 bg-[#F3F4FA] rounded-[32px] p-8 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Your Current Operational Costs (Monthly)
          </p>

          {/* Progress */}
          <div className="flex items-center gap-1 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full ${
                  step >= i ? "bg-green-400" : "bg-gray-200"
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
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-7 py-3 rounded-full bg-[#736ECA] text-white font-medium"
              >
                ← Go To Previous
              </button>
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="mr-auto px-7 py-3 rounded-full bg-[#736ECA] text-white font-medium"
              >
                Continue To Next →
              </button>
            ) : (
              <button className="ml-auto px-7 py-3 rounded-full bg-[#736ECA] text-white font-medium">
                Calculate
              </button>
            )}
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-[#F7F8FD] rounded-[28px] p-8 flex flex-col">
          {/* Gauge */}
          <div className="relative flex justify-center mb-6">
            <div className="w-56 h-28 border-[14px] border-pink-100 border-b-0 rounded-t-full" />
            <div className="absolute bottom-0 text-center">
              <div className="text-4xl font-bold">${total.toFixed(0)}</div>
              <p className="text-sm text-gray-500">Your Total Monthly Spend</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 text-sm text-gray-600 mb-6">
            NOTE: This savings calculation assumes that you fill your vending
            machines at least twice per month.
          </div>

          <div className="text-sm space-y-3 mb-4">
            <h4 className="font-semibold">Your Savings!</h4>

            {visibleRows.map((row) => (
              <div key={row.label} className="flex justify-between">
                <span>{row.label}</span>
                <strong>${row.value.toFixed(2)}</strong>
              </div>
            ))}

            <button
              onClick={() => setShowMore(!showMore)}
              className="text-indigo-600 text-xs underline mt-2"
            >
              {showMore ? "show less" : "show more"}
            </button>

            <hr className="my-3" />

            <div className="flex justify-between font-medium">
              <span>Total Cost</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <div className="flex justify-between">
              <span>Savings In %</span>
              <strong>0%</strong>
            </div>
            <div className="flex justify-between">
              <span>Cost Savings $</span>
              <strong>$0</strong>
            </div>
            <div className="flex justify-between">
              <span>Cost Savings $ Per Year</span>
              <strong>$0</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {children}
    </div>
  );
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
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}
