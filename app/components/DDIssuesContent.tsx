type Classification = "pre-nbc" | "due-diligence" | "condition-precedent";

const badge: Record<Classification, { label: string; className: string }> = {
  "pre-nbc": {
    label: "PRE-NBC BLOCKER",
    className: "bg-red-pale text-red border border-red/20",
  },
  "due-diligence": {
    label: "DUE DILIGENCE",
    className: "bg-amber-pale text-amber border border-amber/20",
  },
  "condition-precedent": {
    label: "CONDITION PRECEDENT",
    className: "bg-blue-pale text-blue border border-blue/20",
  },
};

const issues = [
  {
    area: "Ownership & UBO",
    weakness: "UBO disclosure incomplete or offshore parent not reconciled",
    quickCheck:
      "Check CAC filings, require PEP declaration, reconcile with parent structure",
    classification: "pre-nbc" as Classification,
    action: "Multiple NBCs flagged UBO gaps",
  },
  {
    area: "EPC/OEM Identification",
    weakness: "EPC/OEM listed as TBD at NBC",
    quickCheck: "Confirm EPC/OEM contracted with track record and warranties",
    classification: "pre-nbc" as Classification,
    action: "Developer delayed until EPC identified",
  },
  {
    area: "Demand Forecasting",
    weakness: "No raw survey data, assumptions unrealistic vs benchmarks",
    quickCheck: "Check survey samples and link to model inputs",
    classification: "due-diligence" as Classification,
    action: "Developer flagged for weak demand forecast methodology",
  },
  {
    area: "Financial Model",
    weakness: "Equity only commitment letters, no bank proof",
    quickCheck: "Require cash evidence of ≥20% equity contribution",
    classification: "pre-nbc" as Classification,
    action: "Developer paused until equity confirmed",
  },
  {
    area: "Subsidy/Grant Disclosure",
    weakness: "Grant reliance not disclosed in NBC paper, only in model",
    quickCheck: "Ensure subsidy reliance disclosed with signed agreements",
    classification: "pre-nbc" as Classification,
    action: "Developer flagged in multiple NBCs ",
  },
  {
    area: "Legal Contracts",
    weakness: "MoUs presented as PPAs, land rights not secured",
    quickCheck: "Require executed PPAs ≥10 years, proof of lease/title",
    classification: "pre-nbc" as Classification,
    action: "Developer flagged for contract weaknesses",
  },
  {
    area: "ESG Compliance",
    weakness: "No recycling/e-waste plan, weak gender metrics",
    quickCheck:
      "Check recycling plan, IFC PS compliance, gender inclusion KPIs",
    classification: "due-diligence" as Classification,
    action: "Developer flagged for weak ESG plan",
  },
  {
    area: "Productive Use of Energy",
    weakness: "No rollout plan, anchors missing, demand assumed from COD",
    quickCheck:
      "Check phased PUE plan (12–18m post-COD), anchor pipeline, breakeven mix",
    classification: "due-diligence" as Classification,
    action: "Developer flagged for lack of PUE strategy",
  },
];

const headers = [
  "Issue Area",
  "Typical Weakness",
  "Quick Check",
  "Classification",
  "Action taken",
];

export default function DDIssuesContent() {
  return (
    <section id="dd-issues" className="bg-[#FCFCFC] py-16">
      <div className="max-w-350 mx-auto px-4 sm:px-6">
        <p className="text-ink-soft mb-12 text-[15px] leading-relaxed max-w-175">
          Common issues repeatedly identified across past NBC submissions, MROC
          minutes, technical adviser feedback and transactor responses.
        </p>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden overflow-x-auto shadow-sm bg-white">
          <table className="w-full border-collapse min-w-225">
            <thead>
              <tr className="bg-green-dark">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-white font-semibold uppercase tracking-[0.08em] text-[11px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, i) => (
                <tr
                  key={i}
                  className="border-t border-border hover:bg-green-pale/30 transition-colors"
                >
                  <td className="px-5 py-4 align-top font-heading font-bold text-[#080808] whitespace-nowrap text-[13px]">
                    {issue.area}
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed text-[13px]">
                    {issue.weakness}
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed text-[13px]">
                    {issue.quickCheck}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full font-bold whitespace-nowrap tracking-[0.06em] text-[10px] ${badge[issue.classification].className}`}
                    >
                      {badge[issue.classification].label}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed text-[13px]">
                    {issue.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
