"use client";

import { useState, useMemo } from "react";

const terms = [
  {
    term: "NBC",
    definition:
      "New Business Committee — the governance body that reviews project submissions before due diligence.",
  },
  {
    term: "CC",
    definition:
      "Credit Committee — approves or declines the final guarantee/credit facility request.",
  },
  {
    term: "CP",
    definition:
      "Condition Precedent — a contractual requirement that must be satisfied before financial close.",
  },
  {
    term: "DD",
    definition:
      "Due Diligence — systematic verification of project claims by independent technical, legal, financial and ESG advisers.",
  },
  {
    term: "PMT",
    definition:
      "Project Management Team — the internal InfraCredit team responsible for managing project lifecycle from origination to close.",
  },
  {
    term: "DREEF",
    definition:
      "Distributed Renewable Energy Enhancement Facility — provides TA,  capacity building to bankability-stage DRE developers.",
  },
  {
    term: "DRELT",
    definition:
      "Distributed Renewable Energy Lending Toolkit — the comprehensive framework for standardising DRE credit assessment.",
  },
  {
    term: "FCDO",
    definition:
      "Foreign, Commonwealth & Development Office (UK) — a key funder of the DRE blended finance ecosystem in Nigeria.",
  },
  {
    term: "DARES",
    definition:
      "Distributed Access to Renewable Energy Scale-up programme — World Bank-funded subsidy programme for DRE projects in Nigeria.",
  },
  {
    term: "RSBF",
    definition:
      "Risk Sharing Backstop Facility — a risk-sharing instrument used to de-risk lending to DRE projects.",
  },
  {
    term: "O&M",
    definition:
      "Operations & Maintenance — the ongoing management of installed DRE systems including billing, metering and technical support.",
  },
  {
    term: "PPA",
    definition:
      "Power Purchase Agreement — a binding long-term contract between a power provider and an offtaker for electricity supply.",
  },
  {
    term: "UBO",
    definition:
      "Ultimate Beneficial Owner — the natural person who ultimately owns or controls an entity, required for AML/KYC compliance.",
  },
  {
    term: "PEP",
    definition:
      "Politically Exposed Person — an individual with a prominent public function, requiring enhanced due diligence.",
  },
  {
    term: "PUE",
    definition:
      "Productive Use of Energy — income-generating energy applications such as agro-processing, milling, irrigation and cold storage.",
  },
  {
    term: "MROC",
    definition:
      "Management Risk & Operations Committee — a governance committee that reviews project progress and risk positions.",
  },
  {
    term: "EPC",
    definition:
      "Engineering, Procurement and Construction — the contractor responsible for designing and building the DRE system.",
  },
  {
    term: "OEM",
    definition:
      "Original Equipment Manufacturer — supplier of key system components such as panels, batteries and inverters.",
  },
  {
    term: "DSCR",
    definition:
      "Debt Service Coverage Ratio — the ratio of project cash flow available to service debt; a key bankability metric.",
  },
  {
    term: "DSRA",
    definition:
      "Debt Service Reserve Account — a reserve fund covering a set number of months of debt service, required as a CP.",
  },
  {
    term: "NERC",
    definition:
      "Nigerian Electricity Regulatory Commission — the national regulatory body for electricity in Nigeria.",
  },
  {
    term: "NEMSA",
    definition:
      "Nigerian Electricity Management Services Agency — issues metering and safety standards compliance certificates.",
  },
  {
    term: "SONCAP",
    definition:
      "Standard Organisation of Nigeria Conformity Assessment Programme — product conformity certification.",
  },
  {
    term: "COREN",
    definition:
      "Council for the Regulation of Engineering in Nigeria — professional body that certifies engineering designs.",
  },
  {
    term: "CAC",
    definition:
      "Corporate Affairs Commission — Nigeria's corporate registry; source for entity verification and UBO reconciliation.",
  },
  {
    term: "IFC PS",
    definition:
      "IFC Performance Standards — international ESG standards required for development finance-backed projects.",
  },
  {
    term: "SPV",
    definition:
      "Special Purpose Vehicle — a ring-fenced legal entity created specifically for a project, to which contracts are novated.",
  },
  // {
  //   term: "SHS",
  //   definition:
  //     "Standalone Solar System — small modular solar systems for households; formerly called Solar Home Systems.",
  // },
  {
    term: "COD",
    definition:
      "Commercial Operations Date — the date on which a DRE project begins generating revenue.",
  },
  {
    term: "IRR",
    definition:
      "Internal Rate of Return — the annualised return on investment; used to assess project financial attractiveness.",
  },
  {
    term: "C&I",
    definition:
      "Commercial & Industrial — a category of DRE offtakers comprising factories, warehouses and industrial clusters.",
  },
  {
    term: "WTP",
    definition:
      "Willingness-to-Pay — demonstrated ability and readiness of end-users to pay the proposed tariff.",
  },
  {
    term: "PAYGO",
    definition:
      "Pay-As-You-Go — a metered prepayment revenue model common in rural DRE access markets.",
  },
  {
    term: "BII",
    definition:
      "British International Investment — UK development finance institution and investor in DRE projects.",
  },
];

export default function GlossaryContent() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return q
      ? terms.filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.definition.toLowerCase().includes(q),
        )
      : terms;
  }, [search]);

  return (
    <section id="glossary" className="bg-[#EFF2F0] py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          <p className="text-[#080808]text-[15px] w-full md:max-w-sm leading-relaxed max-w-125">
            Quick-reference definitions of acronyms, technical terms and key
            concepts used in NBC, DD and Credit Committee submissions.
          </p>

          <div className="relative w-full sm:w-100 shrink-0">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search terms and acronyms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white rounded-full pl-11 pr-4 py-3 text-ink outline-none focus:ring-2 focus:ring-green-mid/30 transition-colors text-sm"
            />
          </div>
        </div>

        {/* Card grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((t) => {
              const [name, ...rest] = t.definition.split(" — ");
              return (
                <div
                  key={t.term}
                  className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm"
                >
                  <span className="self-start px-2.5 py-1 rounded-full bg-green-dark text-white font-bold text-[11px] tracking-[0.04em]">
                    {t.term}
                  </span>
                  <p className="text-ink-soft leading-relaxed text-[13px]">
                    <strong className="text-[#080808]">{name}</strong> —{" "}
                    {rest.join(" — ")}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-muted text-center py-10 text-sm">
            No terms found for &ldquo;{search}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
