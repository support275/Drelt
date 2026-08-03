"use client";

const steps = [
  {
    n: 1,
    title: "Origination & Screening",
    description: "Eligibility criteria applied. Basic sponsor and project checks completed.",
    duration: "1–2 months",
  },
  {
    n: 2,
    title: "NBC Preparation",
    description: "Smart NBC Review Tool and FAQs used to flag potential blockers.",
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
    description: "Independent advisers validate DD items (technical, legal, financial, ESG).",
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
    description: "CPs satisfied before disbursement. Handover to monitoring team.",
    duration: "1–2 months",
  },
];

export default function WorkflowContent() {
  return (
    <section id="workflow" className="bg-white py-16 min-h-screen">
      <div className="max-w-350 mx-auto px-4 sm:px-6">

        {/* Header */}
        <h2 className="font-serif font-bold text-green-dark" style={{ fontSize: 28, marginBottom: 8 }}>
          Implementation Workflow
        </h2>
        <p className="text-muted mb-8" style={{ fontSize: 14 }}>
          How DRELT integrates into InfraCredit&apos;s project lifecycle from origination through portfolio monitoring.
        </p>

        <hr className="border-border mb-10" />

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.flatMap((step, i) => {
            const card = (
              <div key={`card-${step.n}`} className="flex-1 bg-white border border-border rounded-2xl p-5 flex flex-col gap-3 transition-colors hover:border-green-dark">
                <div className="w-10 h-10 rounded-full bg-green-dark flex items-center justify-center shrink-0">
                  <span className="text-white font-bold" style={{ fontSize: 15 }}>{step.n}</span>
                </div>
                <p className="font-bold text-ink uppercase tracking-[0.06em] leading-tight" style={{ fontSize: 11 }}>
                  {step.title}
                </p>
                <p className="text-ink-soft leading-relaxed flex-1" style={{ fontSize: 13 }}>
                  {step.description}
                </p>
                <p className="text-gold font-semibold" style={{ fontSize: 12 }}>
                  {step.duration}
                </p>
              </div>
            );
            if (i < steps.length - 1) {
              return [
                card,
                <div key={`arrow-${step.n}`} className="hidden lg:flex items-center justify-center shrink-0 px-2">
                  <span style={{ fontSize: 18, color: "#C89739" }}>→</span>
                </div>,
              ];
            }
            return [card];
          })}
        </div>

        {/* Total Timeline */}
        <div className="mt-6 bg-white border border-border rounded-2xl px-6 py-4 flex items-center gap-3">
          <span className="text-xl">🕐</span>
          <p className="font-serif font-bold text-green-dark" style={{ fontSize: 18 }}>
            Total Timeline: 6–9 months (origination to close)
          </p>
        </div>

        {/* RACI Responsibilities */}
        <div className="mt-6 bg-white border border-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-serif font-bold text-green-dark" style={{ fontSize: 18 }}>
              RACI Responsibilities
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-200">
              <thead>
                <tr className="bg-green-dark">
                  {["Stage", "Responsible (R)", "Accountable (A)", "Consulted (C)", "Informed (I)"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-white font-semibold uppercase tracking-[0.08em]"
                      style={{ fontSize: 11 }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Origination & Screening", "Origination Analyst", "Head, Origination", "Legal, ESG Specialists", "PMT"],
                  ["NBC Preparation", "Deal Analyst", "Head, PMT", "Technical Adviser, ESG Adviser", "MROC Secretariat"],
                  ["NBC Review", "PMT", "Chief Risk Officer", "Transactor, Legal", "MROC Members"],
                  ["Due Diligence", "PMT", "CRO & Head, PMT", "External Consultants", "Transactor"],
                  ["Credit Committee", "Risk Division", "CRO", "PMT, Legal, Finance", "CC Members"],
                  ["Financial Close & Post-Close", "Legal & Portfolio Mgmt", "Head, Portfolio Mgmt", "PMT, Risk", "Board, Lenders"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border hover:bg-green-pale/30 transition-colors">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 text-ink-soft leading-relaxed ${j === 0 ? "font-semibold text-ink" : ""}`}
                        style={{ fontSize: 13 }}
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

      </div>
    </section>
  );
}
