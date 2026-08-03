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
    quickCheck: "Check CAC filings, require PEP declaration, reconcile with parent structure",
    classification: "pre-nbc" as Classification,
    precedent: "Multiple NBCs flagged UBO gaps (e.g., Maskh, EtinPower)",
  },
  {
    area: "EPC/OEM Identification",
    weakness: "EPC/OEM listed as TBD at NBC",
    quickCheck: "Confirm EPC/OEM contracted with track record and warranties",
    classification: "pre-nbc" as Classification,
    precedent: "Frontier Solar delayed until EPC identified",
  },
  {
    area: "Demand Forecasting",
    weakness: "No raw survey data, assumptions unrealistic vs benchmarks",
    quickCheck: "Check survey samples and link to model inputs",
    classification: "due-diligence" as Classification,
    precedent: "CEESOLAR flagged for weak demand forecast methodology",
  },
  {
    area: "Financial Model",
    weakness: "Equity only commitment letters, no bank proof",
    quickCheck: "Require cash evidence of ≥20% equity contribution",
    classification: "pre-nbc" as Classification,
    precedent: "C&I rooftop project paused until equity confirmed",
  },
  {
    area: "Subsidy/Grant Disclosure",
    weakness: "Grant reliance not disclosed in NBC paper, only in model",
    quickCheck: "Ensure subsidy reliance disclosed with signed agreements",
    classification: "pre-nbc" as Classification,
    precedent: "DARES subsidy flagged in multiple NBCs (Ashipa, CEESOLAR)",
  },
  {
    area: "Legal Contracts",
    weakness: "MoUs presented as PPAs, land rights not secured",
    quickCheck: "Require executed PPAs ≥10 years, proof of lease/title",
    classification: "pre-nbc" as Classification,
    precedent: "Protergia and Sosai flagged for contract weaknesses",
  },
  {
    area: "ESG Compliance",
    weakness: "No recycling/e-waste plan, weak gender metrics",
    quickCheck: "Check recycling plan, IFC PS compliance, gender inclusion KPIs",
    classification: "due-diligence" as Classification,
    precedent: "Darway Coast flagged for weak ESG plan",
  },
  {
    area: "Productive Use of Energy",
    weakness: "No rollout plan, anchors missing, demand assumed from COD",
    quickCheck: "Check phased PUE plan (12–18m post-COD), anchor pipeline, breakeven mix",
    classification: "due-diligence" as Classification,
    precedent: "CEESOLAR and Ashipa flagged for lack of PUE strategy",
  },
];

const headers = ["Issue Area", "Typical Weakness", "Quick Check", "Classification", "Precedent Example"];

export default function DDIssuesContent() {
  return (
    <section id="dd-issues" className="bg-white py-16 min-h-screen">
      <div className="max-w-350 mx-auto px-4 sm:px-6">

        {/* Header */}
        <h2 className="font-serif font-bold text-green-dark" style={{ fontSize: 28, marginBottom: 8 }}>
          Repetitive Due Diligence Issues
        </h2>
        <p className="text-muted" style={{ fontSize: 14 }}>
          Common issues repeatedly identified across past NBC submissions, MROC minutes, technical adviser feedback
        </p>
        <p className="text-muted mb-8" style={{ fontSize: 14 }}>
          and transactor responses.
        </p>

        <hr className="border-border mb-10" />

        {/* Table */}
        <div className="rounded-2xl border border-border overflow-hidden overflow-x-auto">
          <table className="w-full border-collapse min-w-225">
            <thead>
              <tr className="bg-green-dark">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-white font-semibold uppercase tracking-[0.08em]"
                    style={{ fontSize: 11 }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, i) => (
                <tr key={i} className="border-t border-border hover:bg-green-pale/30 transition-colors">
                  <td className="px-5 py-4 align-top font-semibold text-ink whitespace-nowrap" style={{ fontSize: 13 }}>
                    {issue.area}
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed" style={{ fontSize: 13 }}>
                    {issue.weakness}
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed" style={{ fontSize: 13 }}>
                    {issue.quickCheck}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full font-bold whitespace-nowrap ${badge[issue.classification].className}`}
                      style={{ fontSize: 10, letterSpacing: "0.06em" }}
                    >
                      {badge[issue.classification].label}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-ink-soft leading-relaxed" style={{ fontSize: 13 }}>
                    {issue.precedent}
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
