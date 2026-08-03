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

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-bold text-ink mb-3 text-[15px]">{title}</p>
      <ol className="flex flex-col gap-2.5 list-decimal list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-ink-soft text-[15px] leading-relaxed">
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PillarsContent() {
  const [active, setActive] = useState<number | null>(0);
  const activePillar = active !== null ? pillars[active] : null;

  return (
    <section id="pillars" className="bg-[#EFF2F0] py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left: pillar list */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-pale flex items-center justify-center text-xl shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-green-dark text-lg mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-ink-soft text-[13px] leading-relaxed">{pillar.description}</p>
                </div>
                <button
                  onClick={() => setActive(i)}
                  className="self-start bg-green-pale text-green-dark text-sm font-medium px-4 py-2 rounded-full hover:bg-green-pale2 transition-colors"
                >
                  View more
                </button>
              </div>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="lg:sticky lg:top-32">
            {activePillar ? (
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="font-heading font-bold text-green-dark text-3xl">
                    {activePillar.title}
                  </h2>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center transition-colors shrink-0 text-lg"
                  >
                    ×
                  </button>
                </div>
                <hr className="border-border mb-6" />

                <div className="flex flex-col gap-6">
                  <DetailList title="Key Checks" items={activePillar.checks} />
                  <hr className="border-border" />
                  <DetailList title="Red Flags" items={activePillar.flags} />
                  <hr className="border-border" />
                  <DetailList title="Mitigants" items={activePillar.mitigants} />
                  <hr className="border-border" />
                  <div>
                    <p className="font-bold text-ink mb-3 text-[15px]">Mini Case Example</p>
                    <p className="text-ink-soft text-[15px] leading-relaxed">
                      {activePillar.caseExample}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 flex items-center justify-center text-muted text-sm min-h-100">
                Select a pillar to view details
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
