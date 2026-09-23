"use client";

import { useState } from "react";

const amounts = ["₦5,000", "₦10,000", "₦25,000", "₦50,000", "₦100,000", "Custom"];

export function DonationIntent() {
  const [selected, setSelected] = useState(amounts[0]);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="rounded-[28px] border border-ink bg-white p-9 shadow-soft max-md:p-6">
      <div className="mb-6 flex justify-between gap-5 border-b border-ink pb-4 max-sm:flex-col">
        <strong>Donation intent</strong>
        <small className="text-[#6f6972] leading-caption">Prototype — payment gateway is future scope.</small>
      </div>
      <label className="text-[9px] font-black uppercase tracking-[.1em] leading-caption">Choose an amount</label>
      <div className="my-4 grid grid-cols-3 gap-2 max-sm:grid-cols-2">
        {amounts.map((amount) => (
          <button key={amount} onClick={() => setSelected(amount)} className={`leading-control rounded-xl border border-ink px-3 py-4 text-sm font-black transition-colors ${selected === amount ? "bg-brand text-white" : "hover:bg-yellow"}`}>{amount}</button>
        ))}
      </div>
      <label className="mt-6 grid gap-2"><span className="text-[9px] font-black uppercase tracking-[.1em] leading-caption">Support Area</span><select className="border-0 border-b border-[#8c858c] bg-transparent py-3 outline-none"><option>Where needed most</option><option>Community Development</option><option>Education</option><option>Christian Missions</option></select></label>
      <button onClick={() => setMessage("Payment gateway integration is future scope in the current architecture.")} className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-[11px] font-black text-white transition-colors hover:bg-yellow hover:text-ink leading-control">Continue to Donation ↗</button>
      {message ? <p className="mt-5 rounded-xl bg-brand-soft p-4 text-sm text-brand-dark leading-body">{message}</p> : null}
      <p className="mt-5 text-[11px] text-[#6f6972] leading-caption">No online payment is processed in V1. This component is ready to connect to a payment provider when that phase is approved.</p>
    </div>
  );
}
