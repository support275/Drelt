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

const list = (items: React.ReactNode[]) => (
  <ul className="list-disc pl-5 flex flex-col gap-1">
    {items.map((item, i) => (
      <li key={i} className="text-ink-soft leading-relaxed text-[13px]">
        {item}
      </li>
    ))}
  </ul>
);

const sections: Section[] = [
  {
    title: "Technology & eligible activities",
    faqs: [
      {
        q: "What types of projects are eligible?",
        a: (
          <>
            {p(
              "Ten business models are eligible: Isolated Mini Grids, Interconnected Mini Grids, C&I / C&E Systems, Stand-Alone Solar (Households & SMEs), Solar for Telecom Towers, Standalone Solar System (SHS), Mesh Grid Systems, Battery-as-a-Service, E-Mobility Solutions, and Energy-as-a-Service revenue models",
            )}
            {callout(
              <>
                ⚠️ <strong>Note on SHS:</strong> InfraCredit does not prioritise
                traditional household-only SHS models due to shorter equipment
                lifecycles, volatile cash flows and poor long-term performance.
                Adapted models such as Mesh Grid or SSPU (productive use) are
                preferred.
              </>,
            )}
          </>
        ),
      },
      {
        q: "What projects are not eligible?",
        a: p(
          "Pure diesel-only systems or non-renewable projects without a renewable integration component.",
        ),
      },
      {
        q: "What is the minimum project size?",
        a: p(
          <>
            InfraCredit typically considers loan facilities from{" "}
            <strong>₦500 million</strong> and above. Smaller projects may be
            aggregated under a portfolio structure.
          </>,
        ),
      },
    ],
  },
  {
    title: "Track record & operations",
    faqs: [
      {
        q: "How much operational experience is required?",
        a: p(
          <>
            At least <strong>3 years</strong> of O&M experience with one or more
            operational sites.
          </>,
        ),
      },
      {
        q: "How many customers are required?",
        a: p(
          <>
            At least <strong>200 customers</strong>, with collection efficiency
            of 90% or higher.
          </>,
        ),
      },
      {
        q: "What if my business is early-stage?",
        a: p(
          "Growth plans may be acceptable, but the sponsor must demonstrate execution capacity — EPC/OEM partnerships, management depth, and credible deployment history.",
        ),
      },
    ],
  },
  {
    title: "Financial performance",
    faqs: [
      {
        q: "What financial thresholds must be met?",
        a: p(
          <>
            Average annual revenue of at least <strong>₦100 million</strong>{" "}
            over the past 3 years, positive EBITDA, and acceptable leverage
            ratios.
          </>,
        ),
      },
      {
        q: "How much equity must sponsors contribute?",
        a: p(
          <>
            At least <strong>20% of project cost</strong> in cash equity. Grants
            do not substitute for equity.
          </>,
        ),
      },
      {
        q: "What debt tenors are acceptable?",
        a: p(
          <>
            Debt tenor must be aligned with the useful life of assets and should
            not exceed the term of the PPA or offtake agreement. Typical tenors
            range from <strong>5 to 15 years</strong>.
          </>,
        ),
      },
    ],
  },
  {
    title: "Ownership & governance",
    faqs: [
      {
        q: "What UBO disclosure is required?",
        a: p(
          <>
            Full Ultimate Beneficial Ownership (UBO) disclosure reconciled with
            CAC filings is a <strong>Pre-NBC Blocker</strong>. Offshore parents
            must be fully identified and disclosed.
          </>,
        ),
      },
      {
        q: "How are PEP's Treated?",
        a: p(
          "Politically Exposed Persons must be disclosed, with mitigation measures such as independent governance structures.",
        ),
      },
      {
        q: "What governance documents are required?",
        a: p(
          "Board structure, auditor credentials, management CVs, and succession/key-man risk policies.",
        ),
      },
    ],
  },
  {
    title: "Contracts & offtakers",
    faqs: [
      {
        q: "Do I need signed PPAs or exclusivity agreements?",
        a: p(
          <>
            Yes. Executed agreements with at least
            <strong>10 years</strong> are required. MoUs are insufficient and
            will be flagged as a Pre-NBC Blocker.
          </>,
        ),
      },
      {
        q: "What if i have one dominant offtaker ",
        a: (
          <>
            {p(
              "Concentration risk must be mitigated — through offtaker credit quality, pass-through tariffs, or guarantees.",
            )}
          </>
        ),
      },
    ],
  },
  {
    title: "Productive use of energy (PUE)",
    faqs: [
      {
        q: "Why is PUE critical in DRE projects?",
        a: p(
          "PUE provides stable, higher-value loads such as agro-processing, milling, irrigation, cold storage, welding, and water pumping. It reduces reliance on residential demand, which is typically lower and seasonal.",
        ),
      },
      {
        q: "What must a submission include on PUE ",
        a: list([
          "A PUE rollout plan (phased, typically starting 12–18 months after commissioning)",
          "A breakeven demand mix analysis (residential vs PUE customers)",
          "A pipeline of anchor PUE customers with LOIs or MoUs (e.g., rice millers, borehole operators, SMEs)",
        ]),
      },
      {
        q: "What are common weaknesses in PUE presentations?",
        a: list([
          "Assuming PUE will materialise immediately from COD",
          "No anchor customers identified",
          "No plan for appliance financing/SME support",
          "Breakeven model only works if PUE scales instantly",
        ]),
      },
    ],
  },
  {
    title: "Grants & blended finance",
    faqs: [
      {
        q: "Can grants be part of the project financing?",
        a: p(
          "Grants may form part of the capital structure but must be fully disclosed. The project must demonstrate viability under a scenario where grants are delayed or not received.",
        ),
      },
      {
        q: "What DREEF grant facilities are available?",
        a: p(
          "DREEF provides Technical Assistance (TA) grants, viability gap funding, and result-based finance for qualifying DRE projects. Sponsors should apply via the DREEF portal prior to NBC submission.",
        ),
      },
      {
        q: "How does blended finance affect the debt structure?",
        a: p(
          <>
            Concessional debt and grant components does not reduce the cost of
            capital. DSCR calculations must reflect the{" "}
            <strong>fully blended</strong> structure, including any subordinated
            tranches.
          </>,
        ),
      },
    ],
  },
  {
    title: "Documentation & format",
    faqs: [
      {
        q: "What documents are required for NBC submission?",
        a: p(
          "Preliminary Information Document (PID), Land rights evidence “where applicable” should be added.",
        ),
      },
      {
        q: "What financial model format is required?",
        a: (
          <>
            {p(
              "Models must be submitted in unlocked Excel format. All assumptions must be clearly labelled on a separate inputs sheet. Hard-coded values within formula cells are a red flag.",
            )}
            {callout(
              "⚠️ Models that cannot be stress-tested due to locked cells will be returned prior to NBC review.",
            )}
          </>
        ),
      },
      {
        q: "Is there a standard PID template?",
        a: p(
          "InfraCredit provides a PID template through the DRELT portal. Sponsors may use their own format provided it covers all required sections: project overview, technical summary, financial projections, ESG, legal structure, and risk matrix.",
        ),
      },
    ],
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl transition-colors ${open ? "bg-green-dark" : "bg-green-pale"}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-6 py-4 text-left"
      >
        <span
          className={`font-semibold flex-1 text-[15px] ${open ? "text-white" : "text-green-dark"}`}
        >
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
        {section.faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
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
            Consolidated FAQs to guide analysts and sponsors at origination and
            early-stage screening.
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
