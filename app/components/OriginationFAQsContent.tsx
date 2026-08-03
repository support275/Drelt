"use client";

import { useState } from "react";

type FAQ = { q: string; a: React.ReactNode };
type Section = { title: string; faqs: FAQ[] };

const p = (text: React.ReactNode) => (
  <p className="text-ink-soft leading-relaxed text-[13px]">{text}</p>
);

const callout = (text: React.ReactNode) => (
  <div className="border-l-2 border-amber bg-amber-pale rounded-r-lg px-4 py-3">
    <p className="text-amber leading-relaxed text-[13px]">{text}</p>
  </div>
);

const sections: Section[] = [
  {
    title: "Technology & eligible activities",
    faqs: [
      {
        q: "What types of projects are eligible?",
        a: (
          <>
            {p("Ten business models are eligible: Isolated Mini Grids, Interconnected Mini Grids, C&I / C&E Systems, Stand-Alone Solar (Households & SMEs), Solar for Telecom Towers, Standalone Solar System (SHS), Mesh Grid Systems, Battery-as-a-Service, E-Mobility Solutions, and Energy-as-a-Service revenue models.")}
            {callout(<>⚠️ <strong>Note on SHS:</strong> InfraCredit does not prioritise traditional household-only SHS models due to shorter equipment lifecycles, volatile cash flows and poor long-term performance. Adapted models such as Mesh Grid or SSPU (productive use) are preferred.</>)}
          </>
        ),
      },
      {
        q: "What projects are not eligible?",
        a: p("Projects that are purely fossil-fuel based, utility-scale grid projects without a DRE component, projects with no identifiable off-taker or revenue model, and projects located outside InfraCredit's operational geographies."),
      },
      {
        q: "What is the minimum project size?",
        a: p(<>InfraCredit typically considers loan facilities from <strong>₦500 million</strong> and above. Smaller projects may be aggregated under a portfolio structure.</>),
      },
    ],
  },
  {
    title: "Track record & operations",
    faqs: [
      {
        q: "How much operational experience is required?",
        a: p(<>At least <strong>3 years</strong> of O&M experience with one or more operational sites.</>),
      },
      {
        q: "How many customers are required?",
        a: p(<>At least <strong>200 customers</strong>, with collection efficiency of 90% or higher. For SHS specifically: at least 10 corporate or 50 individual customers.</>),
      },
      {
        q: "What if my business is early-stage?",
        a: p("Growth plans may be acceptable, but the sponsor must demonstrate execution capacity — EPC/OEM partnerships, management depth, and credible deployment history."),
      },
    ],
  },
  {
    title: "Financial performance",
    faqs: [
      {
        q: "What financial thresholds must be met?",
        a: p(<>Average annual revenue of at least <strong>₦100 million</strong> over the past 3 years, positive EBITDA, and acceptable leverage ratios.</>),
      },
      {
        q: "How much equity must sponsors contribute?",
        a: p(<>At least <strong>20% of project cost</strong> in cash equity. Grants do not substitute for equity.</>),
      },
      {
        q: "What debt tenors are acceptable?",
        a: p(<>Debt tenor must be aligned with the useful life of assets and should not exceed the term of the PPA or offtake agreement. Typical tenors range from <strong>5 to 15 years</strong>.</>),
      },
    ],
  },
  {
    title: "Ownership & governance",
    faqs: [
      {
        q: "What UBO disclosure is required?",
        a: p(<>Full Ultimate Beneficial Ownership (UBO) disclosure reconciled with CAC filings is a <strong>Pre-NBC Blocker</strong>. Offshore parents must be fully identified and disclosed.</>),
      },
      {
        q: "Is an SPV required?",
        a: p("Yes. Loan facilities are structured at the SPV level. Contracts, licences, and assets must be novated or assigned to the SPV prior to disbursement."),
      },
      {
        q: "What governance documents are required?",
        a: p("CAC incorporation documents, board resolutions, shareholder agreements, and details of any related-party transactions must be disclosed."),
      },
    ],
  },
  {
    title: "Contracts & offtakers",
    faqs: [
      {
        q: "What offtake agreements are acceptable?",
        a: p(<>Executed PPAs or exclusivity agreements of at least <strong>10 years</strong> are required. MoUs are not acceptable as binding offtake contracts.</>),
      },
      {
        q: "What if offtakers are informal or uncontracted?",
        a: (
          <>
            {p("Informal offtakers significantly increase revenue risk. DRELT will flag this as a Pre-NBC Blocker where the majority of revenue depends on uncontracted customers.")}
            {callout("⚠️ Community tariff acceptance records and demand survey data can partially mitigate this risk during Due Diligence.")}
          </>
        ),
      },
      {
        q: "Are anchor clients required?",
        a: p("For C&I projects, at least one anchor offtaker with a signed PPA is required before NBC submission. Revenue concentration risk must be disclosed and mitigated."),
      },
    ],
  },
  {
    title: "Productive use of energy (PUE)",
    faqs: [
      {
        q: "What qualifies as Productive Use of Energy?",
        a: p("PUE refers to energy used to generate income or improve livelihoods — agro-processing, cold storage, water pumping, milling, welding, or other SME activities powered by the DRE system."),
      },
      {
        q: "Is PUE mandatory?",
        a: (
          <>
            {p("PUE is not mandatory but is strongly preferred. Projects with a meaningful PUE component demonstrate stronger revenue sustainability and align with InfraCredit's development mandate.")}
            {callout("⚠️ Projects with over 60% residential-only load mix may face additional scrutiny on revenue sustainability.")}
          </>
        ),
      },
    ],
  },
  {
    title: "Grants & blended finance",
    faqs: [
      {
        q: "Can grants be part of the project financing?",
        a: p("Grants may form part of the capital structure but must be fully disclosed. The project must demonstrate viability under a scenario where grants are delayed or not received."),
      },
      {
        q: "What DREEF grant facilities are available?",
        a: p("DREEF provides Technical Assistance (TA) grants, viability gap funding, and result-based finance for qualifying DRE projects. Sponsors should apply via the DREEF portal prior to NBC submission."),
      },
      {
        q: "How does blended finance affect the debt structure?",
        a: p(<>Concessional debt and grant components reduce the effective cost of capital. DSCR calculations must reflect the <strong>fully blended</strong> structure, including any subordinated tranches.</>),
      },
    ],
  },
  {
    title: "Documentation & format",
    faqs: [
      {
        q: "What documents are required for NBC submission?",
        a: p("Project Information Memorandum (PIM), financial model, audited accounts (3 years), UBO declaration, CAC documents, land rights evidence, NERC licence, draft PPA or offtake agreement, and an ESG disclosure statement."),
      },
      {
        q: "What financial model format is required?",
        a: (
          <>
            {p("Models must be submitted in unlocked Excel format. All assumptions must be clearly labelled on a separate inputs sheet. Hard-coded values within formula cells are a red flag.")}
            {callout("⚠️ Models that cannot be stress-tested due to locked cells will be returned prior to NBC review.")}
          </>
        ),
      },
      {
        q: "Is there a standard PIM template?",
        a: p("InfraCredit provides a PIM template through the DRELT portal. Sponsors may use their own format provided it covers all required sections: project overview, technical summary, financial projections, ESG, legal structure, and risk matrix."),
      },
    ],
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl transition-colors ${open ? "bg-green-dark" : "bg-green-pale"}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-6 py-4 text-left"
      >
        <span className={`font-semibold flex-1 text-[15px] ${open ? "text-white" : "text-green-dark"}`}>
          {faq.q}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-lg leading-none ${open ? "bg-gold" : "bg-green-dark"}`}
        >
          {open ? "×" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <div className="bg-white rounded-xl p-4 flex flex-col gap-3">
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({ section }: { section: Section }) {
  return (
    <div>
      <h3 className="font-heading font-bold text-[#080808] text-xl mb-3">
        {section.title}
      </h3>
      <hr className="border-border mb-4" />
      <div className="flex flex-col gap-3">
        {section.faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
      </div>
    </div>
  );
}

export default function OriginationFAQsContent() {
  return (
    <section id="origination-faqs" className="bg-[#FCFCFC] py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <div className="max-w-217 mx-auto">
          <p className="font-heading font-normal text-ink-soft mb-12 text-base leading-[26px] tracking-[-0.02em] max-w-125">
            Consolidated FAQs to guide analysts and sponsors at origination and early-stage screening.
          </p>

          <div className="flex flex-col gap-16">
            {sections.map((section) => (
              <AccordionSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
