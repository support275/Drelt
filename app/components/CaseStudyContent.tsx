const submissionGaps = [
  "EPC not identified (TBD in NBC paper)",
  "Only MoUs signed with anchor customers (no PPAs)",
  "No raw data or survey methodology for demand forecast",
  "Equity support letters only — no bank evidence",
  "Reliance on unconfirmed DARES subsidy",
  "No PUE rollout plan; productive demand assumed from COD",
];

const preNBC = [
  "EPC/OEM not identified — must be fixed before NBC",
  "UBO disclosure incomplete — CAC filings required",
  "Equity proof missing — bank evidence required",
];

const dueDiligence = [
  "Demand forecast validation vs pilot performance",
  "Permits/licences for three sites",
  "O&M capacity and billing system",
];

const conditionsPrecedent = [
  "Executed grant agreement and confirmation",
  "Insurance cover binding before disbursement",
  "Pilot PUE project implementation",
];

const dreefSupport = [
  "Technical assistance on demand survey methodology",
  "ESG support for community engagement and battery recycling plan",
  "Capacity-building on financial model sensitivity analysis",
  "Legal support to review PPAs and anchor customer contracts",
];

const revisedSubmission = [
  "EPC with proven track record contracted",
  "Bank statement provided for ₦800m equity contribution",
  "Two signed PPAs with anchor customers (rice mill, cold storage)",
  "DARES subsidy disclosed with signed notice of qualification",
  "Demand survey data annexed and reconciled to model",
  "PUE rollout plan phased over 18 months post-COD",
];

const lessonsLearned = [
  <>
    EPC and OEM identification must be completed <strong>at NBC stage</strong>.
  </>,
  <>
    UBO disclosure is a <strong>Pre-NBC critical requirement</strong>.
  </>,
  <>
    Equity must be evidenced by <strong>cash in bank</strong>, not letters.
  </>,
  <>
    Demand forecasting must <strong>link raw data</strong> to the financial
    model.
  </>,
  <>
    PUE demand must be <strong>phased</strong>, not assumed from COD.
  </>,
  <>
    Subsidies must be disclosed, with{" "}
    <strong>project viability tested without them</strong>.
  </>,
];

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-2 text-ink-soft leading-relaxed text-[13px]"
        >
          <span className="text-green-mid shrink-0">▸</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyContent() {
  return (
    <section id="case-study" className="bg-white py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <div className="max-w-217 mx-auto">
          {/* Project Background */}
          <h2 className="font-heading font-bold text-[#080808] text-[32px] mb-4">
            Project Background
          </h2>
          <hr className="border-border mb-6" />
          <p className="text-ink-soft leading-relaxed text-[13px] mb-12">
            A mid-sized DRE developer proposed a{" "}
            <strong>10-site mini-grid portfolio</strong> (approx. 1.5 MWp, 6,000
            connections). The project sought <strong>₦3.2bn in debt</strong>{" "}
            with <strong>₦0.8bn equity</strong>. The sponsor had previously
            built two pilot mini-grids but had no track record of scaling to
            multi-site portfolios.
          </p>

          {/* Initial Submission Gaps */}
          <h2 className="font-heading font-bold text-[#080808] text-[32px] mb-4">
            Initial Submission Gaps
          </h2>
          <hr className="border-border mb-6" />
          <ul className="flex flex-col gap-2 mb-12">
            {submissionGaps.map((gap, i) => (
              <li
                key={i}
                className="flex gap-2 text-ink-soft leading-relaxed text-[13px]"
              >
                <span className="text-red shrink-0">✕</span>
                {gap}
              </li>
            ))}
          </ul>

          {/* DRELT Classification & DREEF Support */}
          <h2 className="font-heading font-bold text-[#080808] text-[32px] mb-4">
            DRELT Classification &amp; DREEF Support
          </h2>
          <hr className="border-border mb-6" />
          <div className="flex flex-col gap-8 mb-12">
            <div>
              <p className="text-gold font-bold uppercase tracking-[1px] text-[11px] mb-3">
                Pre-NBC Blockers
              </p>
              <ArrowList items={preNBC} />
            </div>
            <div>
              <p className="text-gold font-bold uppercase tracking-[1px] text-[11px] mb-3">
                Due Diligence Items
              </p>
              <ArrowList items={dueDiligence} />
            </div>
            <div>
              <p className="text-gold font-bold uppercase tracking-[1px] text-[11px] mb-3">
                Conditions Precedent
              </p>
              <ArrowList items={conditionsPrecedent} />
            </div>
            <div>
              <p className="text-gold font-bold uppercase tracking-[1px] text-[11px] mb-3">
                DREEF Support Provided
              </p>
              <ArrowList items={dreefSupport} />
            </div>
          </div>

          {/* Revised Submission */}
          <h2 className="font-heading text-[32px] mb-4">
            <span className="font-bold text-[#080808]">Revised Submission</span>{" "}
            <span className="font-normal text-[#080808]">
              — After DRELT + DREEF
            </span>
          </h2>
          <hr className="border-border mb-6" />
          <ul className="flex flex-col gap-2 mb-12">
            {revisedSubmission.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-ink-soft leading-relaxed text-[13px]"
              >
                <span className="text-green-mid shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Lessons Learned */}
          <h2 className="font-heading font-bold text-[#080808] text-[32px] mb-4">
            Lessons Learned
          </h2>
          <hr className="border-border mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lessonsLearned.map((lesson, i) => (
              <div
                key={i}
                className="bg-green-pale rounded-xl px-4 py-3 text-ink-soft leading-relaxed text-[13px]"
              >
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
