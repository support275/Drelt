"use client";

import { useState } from "react";

type Tag = "pre-nbc" | "dd-item" | "cp";

const tagStyle: Record<Tag, string> = {
  "pre-nbc": "bg-red-pale text-red border border-red/20",
  "dd-item":  "bg-amber-pale text-amber border border-amber/20",
  "cp":       "bg-blue-pale text-blue border border-blue/20",
};

const tagLabel: Record<Tag, string> = {
  "pre-nbc": "PRE-NBC",
  "dd-item":  "DD ITEM",
  "cp":       "CP",
};

type Item = { label: string; tag: Tag };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "ESG / Environmental & Social",
    items: [
      { label: "EIA Certificate", tag: "pre-nbc" },
      { label: "ESMP (Environmental & Social Management Plan)", tag: "dd-item" },
      { label: "Waste / Battery Recycling Plan", tag: "pre-nbc" },
      { label: "Stakeholder Engagement Plan", tag: "dd-item" },
      { label: "Grievance Redress Mechanism", tag: "dd-item" },
      { label: "Gender & Inclusion Metrics (quantified)", tag: "dd-item" },
      { label: "GHG Inventory and ESG Policy", tag: "dd-item" },
      { label: "Supply Chain Audit (HSE Policy, Component Recycling)", tag: "dd-item" },
    ],
  },
  {
    title: "Technical",
    items: [
      { label: "EPC/OEM Contracted (named, track record, warranties)", tag: "pre-nbc" },
      { label: "Feasibility Report (technical & financial)", tag: "dd-item" },
      { label: "Demand Load Survey with raw data", tag: "pre-nbc" },
      { label: "System Design Package (SLD, load profiles, GIS maps)", tag: "dd-item" },
      { label: "O&M Manual and Implementation Plan", tag: "dd-item" },
      { label: "COREN, SONCAP, NEMSA Certifications", tag: "cp" },
      { label: "Commissioning Report (for existing sites)", tag: "dd-item" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "UBO Disclosure reconciled with CAC filings", tag: "pre-nbc" },
      { label: "Executed PPAs / Exclusivity Agreements (≥10 years)", tag: "pre-nbc" },
      { label: "Land Title / Lease Agreement (registered)", tag: "cp" },
      { label: "NERC Mini-Grid Permit", tag: "cp" },
      { label: "State-Level Electricity Permit", tag: "cp" },
      { label: "Novation Agreements (Sponsor → SPV)", tag: "dd-item" },
      { label: "Litigation History and Dispute Resolution Disclosure", tag: "dd-item" },
      { label: "Tax Compliance Certificates", tag: "cp" },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Cash Equity Evidence ≥20% (bank statement)", tag: "pre-nbc" },
      { label: "Financial Model (base, downside, extreme scenarios)", tag: "pre-nbc" },
      { label: "Sensitivity Analysis (demand shock, grant delay)", tag: "dd-item" },
      { label: "Breakeven Mix Analysis (Residential vs PUE)", tag: "dd-item" },
      { label: "5-Year Audited Financial Accounts", tag: "pre-nbc" },
      { label: "Grant / Concession Agreements (confirmed, signed)", tag: "cp" },
      { label: "Escrow and DSRA Funding Confirmed", tag: "cp" },
      { label: "Binding Insurance Policies", tag: "cp" },
    ],
  },
  {
    title: "Productive Use of Energy (PUE)",
    items: [
      { label: "PUE Rollout Plan (phased, 12–18m post-COD)", tag: "dd-item" },
      { label: "Anchor Client Identification Matrix (LOIs / MoUs)", tag: "dd-item" },
      { label: "Separate Load Profiles: Residential vs PUE", tag: "dd-item" },
      { label: "PUE Sensitivity Scenarios (50% of forecast)", tag: "dd-item" },
      { label: "Seasonal Load Variation Profile", tag: "dd-item" },
    ],
  },
];

const allItems = sections.flatMap((s) => s.items);
const total = allItems.length;

export default function ChecklistContent() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const completed = checked.size;
  const pct = Math.round((completed / total) * 100);

  return (
    <section id="checklist" className="bg-white py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">

        <p className="text-ink-soft mb-12 text-[15px] leading-relaxed max-w-175">
          Track your project&apos;s DD readiness across all pillars. Check off items as they are completed.
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 bg-border rounded-full h-2 overflow-hidden">
            <div
              className="bg-green-mid h-2 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-muted font-medium whitespace-nowrap shrink-0 text-[13px]">
            {completed} / {total} completed ({pct}%)
          </span>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5">
          {sections.map((section) => (
            <div key={section.title} className="bg-[#FCFCFC] rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-heading font-bold text-[#080808] text-[17px]">
                  {section.title}
                </h3>
              </div>
              <ul>
                {section.items.map((item) => {
                  const key = `${section.title}:${item.label}`;
                  const done = checked.has(key);
                  return (
                    <li
                      key={key}
                      onClick={() => toggle(key)}
                      className={`flex items-center gap-4 px-6 py-3.5 border-b border-border last:border-0 cursor-pointer transition-colors ${done ? "bg-green-pale/50" : "hover:bg-green-pale/30"}`}
                    >
                      {/* Checkbox */}
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${done ? "bg-green-mid border-green-mid" : "border-border bg-white"}`}>
                        {done && <span className="text-white text-[10px] font-bold leading-none">✓</span>}
                      </div>

                      {/* Label */}
                      <span
                        className={`flex-1 leading-relaxed transition-colors text-[13px] ${done ? "text-muted line-through" : "text-ink-soft"}`}
                      >
                        {item.label}
                      </span>

                      {/* Tag */}
                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full font-bold text-[10px] tracking-[0.06em] ${tagStyle[item.tag]}`}
                      >
                        {tagLabel[item.tag]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
