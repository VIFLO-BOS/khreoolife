"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function GetInvolvedForms({ initial = "volunteer" }: { initial?: "volunteer" | "sponsor" }) {
  const [tab, setTab] = useState<"volunteer" | "sponsor">(initial);
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-[.72fr_1.28fr] overflow-hidden rounded-[30px] border border-ink bg-white max-lg:grid-cols-1">
      <aside className="flex min-h-[760px] flex-col justify-between bg-brand-dark p-12 text-white max-lg:min-h-[360px] max-md:p-7">
        <div>
          <div className="eyebrow mb-4 text-yellow">Application</div>
          <h2 className="display-title text-[clamp(44px,5vw,70px)] leading-section">Take the next step.</h2>
          <p className="mt-5 max-w-[380px] text-sm text-white/70 leading-body">Choose the form that fits how you want to contribute. In V1, submissions are followed up manually by the Khreeolife team.</p>
        </div>
        <div className="flex items-center gap-4 font-display text-xl"><span className="logo-smile" />The Ordained Life</div>
      </aside>

      <div className="p-12 max-md:p-7">
        <div className="mb-7 flex gap-2">
          <button onClick={() => { setTab("volunteer"); setSubmitted(false); }} type="button" className={`leading-control rounded-full border border-ink px-4 py-2 text-[10px] font-black ${tab === "volunteer" ? "bg-ink text-white" : ""}`}>Volunteer</button>
          <button onClick={() => { setTab("sponsor"); setSubmitted(false); }} type="button" className={`leading-control rounded-full border border-ink px-4 py-2 text-[10px] font-black ${tab === "sponsor" ? "bg-ink text-white" : ""}`}>Sponsor</button>
        </div>

        {submitted ? (
          <div className="grid min-h-[430px] place-items-center text-center">
            <div className="max-w-md">
              <CheckCircle2 className="mx-auto size-12 text-brand" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-4xl font-normal leading-card">Thank you.</h3>
              <p className="mt-4 text-sm text-[#6f6972] leading-body">Your interest has been captured in this prototype. The production site should submit the form to the selected backend, and the Khreeolife team will be in touch.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-full bg-brand px-5 py-3 text-[11px] font-black text-white leading-control">Submit another response</button>
            </div>
          </div>
        ) : tab === "volunteer" ? (
          <form onSubmit={submit}>
            <div className="mb-7 flex justify-between gap-5 border-b border-ink pb-4 max-sm:flex-col"><strong>Volunteer Application</strong><small className="text-[#6f6972] leading-caption">Fields follow the V1 website architecture.</small></div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 max-md:grid-cols-1">
              <Field label="Full Name"><input required placeholder="Your full name" /></Field>
              <Field label="Email"><input type="email" required placeholder="you@email.com" /></Field>
              <Field label="Phone Number"><input placeholder="+234 ..." /></Field>
              <Field label="Location"><input placeholder="City / State" /></Field>
              <Field label="Area of Interest" full><select defaultValue="Community Development"><option>Community Development</option><option>Education</option><option>Christian Missions</option></select></Field>
              <Field label="Availability"><input placeholder="Weekends / monthly / etc." /></Field>
              <Field label="Why do you want to volunteer?" full><textarea rows={4} placeholder="Tell the team what draws you to the work." /></Field>
              <div className="col-span-full"><button className="rounded-full bg-brand px-6 py-3 text-[11px] font-black text-white transition-colors hover:bg-yellow hover:text-ink leading-control">Submit Volunteer Application ↗</button></div>
            </div>
          </form>
        ) : (
          <form onSubmit={submit}>
            <div className="mb-7 flex justify-between gap-5 border-b border-ink pb-4 max-sm:flex-col"><strong>Sponsor Application</strong><small className="text-[#6f6972] leading-caption">Financial, In-Kind or Partnership interest.</small></div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 max-md:grid-cols-1">
              <Field label="Name / Organisation"><input required placeholder="Name or organisation" /></Field>
              <Field label="Email"><input type="email" required placeholder="you@email.com" /></Field>
              <Field label="Phone"><input placeholder="+234 ..." /></Field>
              <Field label="Type of Sponsorship Interest"><select defaultValue="Financial"><option>Financial</option><option>In-Kind</option><option>Partnership</option></select></Field>
              <Field label="Which Project(s) do you wish to support?" full><select defaultValue="Iloba Outreach"><option>Iloba Outreach</option><option>Help 20 Students Get Into Uni</option><option>Sharing The Ultimate Love Story</option><option>Ibadan Mission Outreach</option></select></Field>
              <div className="col-span-full"><button className="rounded-full bg-brand px-6 py-3 text-[11px] font-black text-white transition-colors hover:bg-yellow hover:text-ink leading-control">Submit Sponsor Application ↗</button></div>
            </div>
          </form>
        )}
        <p className="mt-7 text-[11px] text-[#6f6972] leading-caption">Backend application tracking is future scope in the architecture. This Next.js build currently demonstrates the front-end experience only.</p>
      </div>
    </div>
  );
}

function Field({ label, children, full = false }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={full ? "col-span-full grid gap-2" : "grid gap-2"}>
      <span className="text-[9px] font-black uppercase tracking-[.1em] leading-caption">{label}</span>
      <span className="[&_input]:w-full [&_input]:border-0 [&_input]:border-b [&_input]:border-[#8c858c] [&_input]:bg-transparent [&_input]:px-0 [&_input]:py-3 [&_input]:outline-none [&_select]:w-full [&_select]:border-0 [&_select]:border-b [&_select]:border-[#8c858c] [&_select]:bg-transparent [&_select]:py-3 [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:border-0 [&_textarea]:border-b [&_textarea]:border-[#8c858c] [&_textarea]:bg-transparent [&_textarea]:py-3 [&_textarea]:outline-none">
        {children}
      </span>
    </label>
  );
}
