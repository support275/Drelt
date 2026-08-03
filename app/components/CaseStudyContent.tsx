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
  { icon: "📊", text: "Technical assistance on demand survey methodology" },
  { icon: "🌿", text: "ESG support for community engagement and battery recycling plan" },
  { icon: "📋", text: "Capacity-building on financial model sensitivity analysis" },
  { icon: "⚖️", text: "Legal support to review PPAs and anchor customer contracts" },
];

function ArrowList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className={`flex gap-2 ${color} leading-relaxed text-[13px]`}>
          <span className="shrink-0">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyContent() {
  return (
    <section id="case-study" className="bg-green-pale py-16 min-h-screen">
      <div className="max-w-350 mx-auto px-4 sm:px-6">

        {/* Header */}
        <h2 className="font-serif font-bold text-green-dark text-[28px] mb-2">
          Expanded Case Study
        </h2>
        <p className="text-muted mb-2 text-sm">
          An illustrative case study showing how the Toolkit is applied in practice — from a project submission with
        </p>
        <p className="text-muted mb-8 text-sm">
          gaps to NBC approval.
        </p>

        <hr className="border-border mb-8" />

        {/* Top two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          {/* Project Background */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <p className="font-bold text-ink mb-3 text-sm">
              📋 Project Background
            </p>
            <p className="text-ink-soft leading-relaxed text-[13px]">
              A mid-sized DRE developer proposed a <strong>10-site mini-grid portfolio</strong> (approx. 1.5 MWp,
              6,000 connections). The project sought <strong>₦3.2bn in debt</strong> with <strong>₦0.8bn equity</strong>.
              The sponsor had previously built two pilot mini-grids but had no track record of scaling to multi-site portfolios.
            </p>
          </div>

          {/* Initial Submission Gaps */}
          <div className="bg-red-pale border border-red/20 rounded-2xl p-6">
            <p className="font-bold text-red mb-3 text-sm">
              ⚠️ Initial Submission Gaps
            </p>
            <ul className="flex flex-col gap-2">
              {submissionGaps.map((gap, i) => (
                <li key={i} className="flex gap-2 text-ink-soft leading-relaxed text-[13px]">
                  <span className="text-red shrink-0">❌</span>
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DRELT Classification & DREEF Support */}
        <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
          <p className="font-bold text-ink mb-6 text-[15px]">
            🔗 DRELT Classification &amp; DREEF Support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Classifications */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-red font-bold uppercase tracking-[1px] text-[11px]">
                  🚫 Pre-NBC Blockers
                </p>
                <ArrowList items={preNBC} color="text-ink-soft" />
              </div>
              <div>
                <p className="text-amber font-bold uppercase tracking-[1px] text-[11px]">
                  🔍 Due Diligence Items
                </p>
                <ArrowList items={dueDiligence} color="text-ink-soft" />
              </div>
              <div>
                <p className="text-green-mid font-bold uppercase tracking-[1px] text-[11px]">
                  ✅ Conditions Precedent
                </p>
                <ArrowList items={conditionsPrecedent} color="text-ink-soft" />
              </div>
            </div>

            {/* Right: DREEF Support */}
            <div>
              <p className="text-amber font-bold uppercase tracking-[1px] mb-4 text-[11px]">
                📊 DREEF Support Provided
              </p>
              <ul className="flex flex-col">
                {dreefSupport.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-ink-soft leading-relaxed py-3 border-b border-border last:border-0 text-[13px]"
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Revised Submission */}
        <div className="mt-5 bg-white border border-border rounded-2xl p-6 sm:p-8">
          <p className="font-bold text-ink mb-5 text-[15px]">
            ✅ Revised Submission — After DRELT + DREEF
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "EPC with proven track record contracted",
              "Bank statement provided for ₦800m equity contribution",
              "Two signed PPAs with anchor customers (rice mill, cold storage)",
              "DARES subsidy disclosed with signed notice of qualification",
              "Demand survey data annexed and reconciled to model",
              "PUE rollout plan phased over 18 months post-COD",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 text-ink-soft leading-relaxed text-[13px]">
                <span className="text-green-mid shrink-0">✅</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mt-5 bg-white border-l-4 border-gold rounded-2xl p-6 sm:p-8">
          <p className="font-serif font-bold text-ink mb-5 text-lg">
            🌟 Lessons Learned
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { text: <>EPC and OEM identification must be completed <strong>at NBC stage</strong>.</> },
              { text: <>UBO disclosure is a <strong>Pre-NBC critical requirement</strong>.</> },
              { text: <>Equity must be evidenced by <strong>cash in bank</strong>, not letters.</> },
              { text: <>Demand forecasting must <strong>link raw data</strong> to the financial model.</> },
              { text: <>PUE demand must be <strong>phased</strong>, not assumed from COD.</> },
              { text: <>Subsidies must be disclosed, with <strong>project viability tested without them</strong>.</> },
            ].map((lesson, i) => (
              <div key={i} className="bg-gold-pale rounded-xl px-4 py-3 text-ink-soft leading-relaxed text-[13px]">
                {lesson.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
