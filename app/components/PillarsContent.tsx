"use client";

import { useState } from "react";

const pillars = [
  {
    icon: "🌿",
    title: "ESG Pillar",
    description: "Environmental, Social & Governance compliance with IFC PS, AfDB and FCDO standards",
    checks: [
      "Battery & e-waste recycling and disposal plan",
      "Gender inclusion: jobs, leadership, SME participation",
      "Human rights & supply chain compliance",
      "No forced labour; Xinjiang-linked panels ruled out",
      "Community consultation and tariff acceptance",
      "Stakeholder engagement plan and grievance redress",
      "Climate resilience and adaptation measures",
    ],
    flags: [
      "No recycling/disposal plan for batteries or panels",
      "ESG statement provided without metrics",
      "Gender inclusion or job impact not quantified",
      "No consultation record with local communities",
      "Weak supply chain disclosure",
    ],
    mitigants: [
      "Require ESG management plan before NBC",
      "Independent ESG DD during DD stage",
      "Referral to DREEF TA for recycling and gender strategy",
      "Compliance certificate with IFC PS and AfDB safeguards",
    ],
    caseExample: (
      <>
        A mini-grid developer applied to NBC but had no battery recycling plan. DRELT flagged this
        as a <strong>Pre-NBC Blocker</strong>. The developer was referred to DREEF, which funded a
        recycling partnership with an approved local waste handler. The gap was closed before NBC
        re-submission.
      </>
    ),
  },
  {
    icon: "⚙️",
    title: "Technical Pillar",
    description: "Validation of technical soundness, reliability and scalability of the proposed DRE project",
    checks: [
      "EPC/OEM identified and contracted with track record",
      "Demand forecast methodology linked to household survey data",
      "Pilot project benchmarking against projections",
      "O&M capacity: billing, metering, collections, monitoring",
      "Useful life of equipment consistent with debt tenor",
      "Engineering designs (SLDs, load profiles, GIS maps)",
      "NEMSA, SONCAP, COREN certifications provided",
    ],
    flags: [
      "EPC/OEM listed as \"TBD\"",
      "Demand forecast not backed by raw survey data",
      "Forecasts double industry benchmarks",
      "O&M plan missing",
      "No EPC or OEM warranties",
      "Useful life shorter than financing tenor",
    ],
    mitigants: [
      "Require EPC/OEM selection before NBC",
      "DD to validate forecast methodology",
      "Sensitivity analysis with demand at 50% of projections",
      "Include warranty and O&M guarantees as CPs",
    ],
    caseExample: (
      <>
        A developer proposed a 2MW mini-grid portfolio with EPC listed as TBD. DRELT flagged this
        as a <strong>Pre-NBC Blocker</strong>. The project was paused until a qualified EPC with
        local experience was identified and contracted.
      </>
    ),
  },
  {
    icon: "⚖️",
    title: "Legal Pillar",
    description: "Enforceability of contracts and compliance with Nigerian and sub-national regulations",
    checks: [
      "UBO disclosure and CAC filings reconciled",
      "PPA or exclusivity agreements executed (≥10 years)",
      "Land rights secured (lease, title, access)",
      "Regulatory permits/licences (NERC, state-level)",
      "Novation of contracts from Sponsor to SPV",
      "Dispute resolution provisions and litigation disclosure",
    ],
    flags: [
      "UBO incomplete or offshore parent unreconciled",
      "MoUs presented as binding PPAs",
      "Land lease unregistered or disputed",
      "Licences/permits not mentioned",
      "Pending litigation undisclosed",
    ],
    mitigants: [
      "Require full UBO disclosure before NBC",
      "CP: Registration of land leases and titles",
      "DD: Legal validation of contracts",
      "Referral to InfraCredit legal panel for review",
    ],
    caseExample: (
      <>
        A solar developer submitted with only MoUs signed with communities. DRELT flagged this as a{" "}
        <strong>Pre-NBC Blocker</strong>. The project was deferred until binding PPAs were executed
        and registered with NERC.
      </>
    ),
  },
  {
    icon: "📊",
    title: "Finance Pillar",
    description: "Financial viability, transparent models, adequate equity, and sustainable debt structure",
    checks: [
      "Equity contribution ≥20% in cash with bank evidence",
      "Financial model reconciled with demand assumptions",
      "Sensitivity tests (20–30% downside demand)",
      "Subsidy/grant reliance disclosed and documented",
      "Historical financials of sponsor (audited + mgmt accounts)",
      "DSCR ≥ 1.3x under base and stress scenarios",
      "Debt tenor aligned with asset useful life",
    ],
    flags: [
      "Equity only supported by commitment letters",
      "Model assumptions inconsistent with demand survey",
      "No downside scenario analysis",
      "Project viable only if grants disbursed on time",
      "Sponsor highly leveraged",
    ],
    mitigants: [
      "CP: Equity cash deposit before disbursement",
      "DD: Validate financial model with third-party auditor",
      "Stress-test DSCR under demand shock",
      "DREEF subsidy support for grant-dependent projects",
    ],
    caseExample: (
      <>
        A sponsor presented equity backed only by a commitment letter with no cash evidence. DRELT
        flagged this as a <strong>Pre-NBC Blocker</strong>. Disbursement was conditioned on a
        verified cash deposit into an escrow account before financial close.
      </>
    ),
  },
];

function PillarRow({ pillar, defaultOpen = false }: { pillar: (typeof pillars)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      {/* Header row */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-green-pale/40 transition-colors"
      >
        <div className="w-11 h-11 rounded-xl bg-green-pale flex items-center justify-center shrink-0 text-xl">
          {pillar.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-ink" style={{ fontSize: 15 }}>{pillar.title}</p>
          <p className="text-muted mt-0.5 truncate" style={{ fontSize: 13 }}>{pillar.description}</p>
        </div>
        <span className="text-muted text-lg shrink-0">{open ? "▲" : "▼"}</span>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-border">
          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {/* Key Checks */}
            <div className="bg-green-pale rounded-xl border border-green-mid/20 p-4">
              <p className="text-gold font-bold uppercase mb-3" style={{ fontSize: 11, letterSpacing: "1px", marginBottom: 6 }}>
                ✅ Key Checks
              </p>
              <ul className="flex flex-col gap-2">
                {pillar.checks.map((c, i) => (
                  <li key={i} className="flex gap-2 text-ink-soft" style={{ fontSize: 13 }}>
                    <span className="text-green-mid mt-0.5 shrink-0">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="bg-red-pale rounded-xl border border-red/20 p-4">
              <p className="text-gold font-bold uppercase mb-3" style={{ fontSize: 11, letterSpacing: "1px", marginBottom: 6 }}>
                🚩 Red Flags
              </p>
              <ul className="flex flex-col gap-2">
                {pillar.flags.map((f, i) => (
                  <li key={i} className="flex gap-2 text-ink-soft" style={{ fontSize: 13 }}>
                    <span className="text-red mt-0.5 shrink-0">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mitigants */}
            <div className="bg-[#FDF6EC] rounded-xl border border-amber/20 p-4">
              <p className="text-gold font-bold uppercase mb-3" style={{ fontSize: 11, letterSpacing: "1px", marginBottom: 6 }}>
                🛡️ Mitigants
              </p>
              <ul className="flex flex-col gap-2">
                {pillar.mitigants.map((m, i) => (
                  <li key={i} className="flex gap-2 text-ink-soft" style={{ fontSize: 13 }}>
                    <span className="text-amber mt-0.5 shrink-0">·</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mini case example */}
          <div className="bg-[#FDF6EC] rounded-xl border border-amber/20 p-4">
            <p className="text-gold font-bold uppercase" style={{ fontSize: 11, letterSpacing: "1px", marginBottom: 6 }}>
              📋 Mini Case Example
            </p>
            <p className="text-ink-soft leading-relaxed" style={{ fontSize: 13 }}>
              {pillar.caseExample}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PillarsContent() {
  return (
    <section id="pillars" className="bg-green-pale py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <h2 className="font-serif font-bold text-green-dark" style={{ fontSize: 28, marginBottom: 8 }}>
          Assessment Pillars
        </h2>
        <p className="text-muted mb-8" style={{ fontSize: 14 }}>
          Four core pillars guide credit assessment. Expand each to view key checks, red flags and mitigants.
        </p>

        <hr className="border-border mb-8" />

        <div className="flex flex-col gap-4">
          {pillars.map((pillar, i) => (
            <PillarRow key={pillar.title} pillar={pillar} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
