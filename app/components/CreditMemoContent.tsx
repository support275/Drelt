"use client";

import { useState } from "react";

type ListSection = { kind: "list"; title: string; items: string[] };
type TableRow = { category: string; description: string; mitigants: string };
type TableSection = { kind: "table"; title: string; rows: TableRow[] };
type Section = ListSection | TableSection;

const sections: Section[] = [
  {
    kind: "list",
    title: "Executive Summary",
    items: [
      "Project name, sponsor, and sector",
      "Business model (e.g., mini-grid, C&I solar, e-mobility)",
      "Transaction amount, tenor, and guarantee request",
      "Key risks and mitigants summary table",
      "Decision required (approval of InfraCredit guarantee)",
    ],
  },
  {
    kind: "list",
    title: "Sponsor / Developer Assessment",
    items: [
      "UBO disclosure and ownership structure",
      "Track record: number of operational sites, P&L performance",
      "Management and governance capability",
      "Financial strength: audited accounts, leverage, EBITDA",
    ],
  },
  {
    kind: "list",
    title: "Project Overview",
    items: [
      "Description of the project and scope",
      "Technical design (EPC/OEM, system size, useful life)",
      "Offtakers and contracts (PPAs, lease agreements)",
      "Expansion plan / pipeline of future projects",
    ],
  },
  {
    kind: "list",
    title: "Market & Regulatory Context",
    items: [
      "Demand analysis and willingness-to-pay evidence",
      "Tariff structure and subsidy reliance",
      "Regulatory approvals/licences (NERC, state permits)",
      "Policy alignment with Nigeria's Energy Transition Plan",
    ],
  },
  {
    kind: "list",
    title: "Financial Analysis",
    items: [
      "Capital structure (Debt: Equity split)",
      "Uses and sources of funds",
      "Financial model: DSCR, IRR, breakeven point",
      "Base case, downside, and extreme scenarios",
      "Sensitivity analysis (e.g., 50% PUE uptake, grant delay)",
      "Exposure limits check vs InfraCredit thresholds",
    ],
  },
  {
    kind: "list",
    title: "Due Diligence Findings",
    items: [
      "Technical DD — EPC/OEM validation, capacity factors, O&M plan",
      "Legal DD — enforceability of contracts, land rights, permits",
      "Financial DD — stress test, subsidy reliance analysis",
      "ESG DD — IFC PS compliance, battery recycling, gender inclusion",
    ],
  },
  {
    kind: "table",
    title: "Risk Analysis & Mitigants",
    rows: [
      { category: "Construction Risk", description: "Delay in EPC/OEM delivery, cost overruns", mitigants: "Contracted EPC with track record, warranties, performance bonds" },
      { category: "Demand Risk", description: "Lower consumption or delayed PUE uptake", mitigants: "Phased rollout, anchor customers secured, sensitivity modelling" },
      { category: "Regulatory Risk", description: "Licences/permits delayed or revoked", mitigants: "NERC/state permits obtained pre-disbursement, legal DD" },
      { category: "Financial Risk", description: "Equity shortfall, reliance on subsidies", mitigants: "Bank evidence of equity, disclose grants, stress-test model" },
      { category: "ESG Risk", description: "Battery disposal, weak gender inclusion", mitigants: "Recycling plan, ESG KPIs, IFC PS compliance" },
    ],
  },
  {
    kind: "list",
    title: "Conditions Precedent (CPs)",
    items: [
      "Execution of binding PPAs",
      "Proof of equity funding (bank statement)",
      "Subsidy disbursement confirmation",
      "Binding insurance policies",
      "Land title/lease registration",
      "Escrow and DSRA funding",
    ],
  },
  {
    kind: "list",
    title: "Recommendation & Approval",
    items: [
      "InfraCredit PMT recommendation (including lessons learned from NBC)",
      "CRO/Risk Division endorsement",
      "Decision request: approval of guarantee subject to CPs",
    ],
  },
  {
    kind: "list",
    title: "Appendices",
    items: [
      "Financial model outputs",
      "Sponsor's historical financials",
      "Management CVs",
      "Exposure compliance tables",
      "ESG due diligence summary",
      "Abbreviations and glossary",
    ],
  },
];

function MemoSection({ section, index }: { section: Section; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl overflow-hidden border border-border">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-green-dark px-6 py-4 text-left"
      >
        <span className="font-serif font-bold text-white" style={{ fontSize: 15 }}>
          {index + 1}. {section.title}
        </span>
        <span className="text-white/70 text-lg">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        section.kind === "table" ? (
          <div className="bg-white overflow-x-auto">
            <table className="w-full border-collapse" style={{ fontSize: 13 }}>
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left px-6 py-3 font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.08em", width: "22%" }}>Risk Category</th>
                  <th className="text-left px-6 py-3 font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.08em", width: "39%" }}>Description</th>
                  <th className="text-left px-6 py-3 font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.08em" }}>Mitigants</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-6 py-3 font-bold text-ink" style={{ fontSize: 13 }}>{row.category}</td>
                    <td className="px-6 py-3 text-ink-soft leading-relaxed">{row.description}</td>
                    <td className="px-6 py-3 text-ink-soft leading-relaxed">{row.mitigants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <ul className="bg-white">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 px-6 py-3 border-b border-border last:border-0 text-ink-soft leading-relaxed"
                style={{ fontSize: 13 }}
              >
                <span className="text-green-mid shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default function CreditMemoContent() {
  return (
    <section id="credit-memo" className="bg-green-pale py-16 min-h-screen">
      <div className="max-w-350 mx-auto px-4 sm:px-6">

        <h2 className="font-serif font-bold text-green-dark" style={{ fontSize: 28, marginBottom: 8 }}>
          Credit Memo Template
        </h2>
        <p className="text-muted mb-8" style={{ fontSize: 14 }}>
          Structured template for Credit Committee submissions. Expand each section to view required content.
        </p>

        <hr className="border-border mb-8" />

        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <MemoSection key={section.title} section={section} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
