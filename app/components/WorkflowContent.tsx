"use client";

const steps = [
  {
    n: 1,
    title: "Origination & Screening",
    description:
      "Eligibility criteria applied. Basic sponsor and project checks completed.",
    duration: "1–2 months",
  },
  {
    n: 2,
    title: "NBC Preparation",
    description:
      "Smart NBC Review Tool and FAQs used to flag potential blockers.",
    duration: "1 month",
  },
  {
    n: 3,
    title: "NBC Review",
    description: "Issues classified as Pre-NBC Blockers, DD Items, or CPs.",
    duration: "2–3 weeks",
  },
  {
    n: 4,
    title: "Due Diligence",
    description:
      "Independent advisers validate DD items (technical, legal, financial, ESG).",
    duration: "2–3 months",
  },
  {
    n: 5,
    title: "Credit Committee",
    description: "Credit Memo incorporates DD findings and CPs for approval.",
    duration: "2 weeks",
  },
  {
    n: 6,
    title: "Financial Close & Post-Close",
    description:
      "CPs satisfied before disbursement. Handover to monitoring team.",
    duration: "1–2 months",
  },
];

export default function WorkflowContent() {
  return (
    <>
    <section id="workflow" className="bg-[#EFF2F0] py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <div className="max-w-217 mx-auto">
          <p className="text-ink-soft mb-12 text-[15px] leading-relaxed max-w-175">
            How DRELT integrates into InfraCredit&apos;s project lifecycle from
            origination through portfolio monitoring.
          </p>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-green-pale2 text-green-dark text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Step {step.n}
                  </span>
                  <span className="text-gold text-[11px] font-semibold uppercase tracking-wide">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-green-dark text-xl">
                  {step.title}
                </h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Total Timeline */}
          <div className="mt-6 bg-white border border-border rounded-2xl px-6 py-4 flex items-center gap-3">
            <span className="text-xl">🕐</span>
            <p
              className="font-serif font-bold text-green-dark"
              style={{ fontSize: 18 }}
            >
              Total Timeline: 6–9 months (origination to close)
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* RACI Responsibilities */}
    <section className="bg-white py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-[#080808] text-[40px] mb-4">
            RACI Responsibilities
          </h2>
          <hr className="border-border mb-8" />

          <div className="rounded-2xl overflow-hidden overflow-x-auto shadow-sm bg-white">
            <table className="w-full border-collapse min-w-200">
              <thead>
                <tr className="bg-green-dark">
                  {[
                    "Stage",
                    "Responsible (R)",
                    "Accountable (A)",
                    "Consulted (C)",
                    "Informed (I)",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-white font-semibold uppercase tracking-[0.08em] text-[11px]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Origination & Screening",
                    "Origination Analyst",
                    "Head, Origination",
                    "Legal, ESG Specialists",
                    "PMT",
                  ],
                  [
                    "NBC Preparation",
                    "Deal Analyst",
                    "Head, PMT",
                    "Technical Adviser, ESG Adviser",
                    "MROC Secretariat",
                  ],
                  [
                    "NBC Review",
                    "PMT",
                    "Chief Risk Officer",
                    "Transactor, Legal",
                    "MROC Members",
                  ],
                  [
                    "Due Diligence",
                    "PMT",
                    "CRO & Head, PMT",
                    "External Consultants",
                    "Transactor",
                  ],
                  [
                    "Credit Committee",
                    "Risk Division",
                    "CRO",
                    "PMT, Legal, Finance",
                    "CC Members",
                  ],
                  [
                    "Financial Close & Post-Close",
                    "Legal & Portfolio Mgmt",
                    "Head, Portfolio Mgmt",
                    "PMT, Risk",
                    "Board, Lenders",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-border hover:bg-green-pale/30 transition-colors"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 text-ink-soft leading-relaxed text-[13px] ${j === 0 ? "font-heading font-bold text-[#080808]" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </section>
    </>
  );
}
