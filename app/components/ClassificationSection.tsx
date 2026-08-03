const classificationRows = [
  {
    category: "Pre-NBC Blocker",
    definition: (
      <>
        Must be resolved <strong>before</strong> NBC submission.
      </>
    ),
    examples:
      "UBO disclosure gaps; No signed PPAs (only MoUs); EPC/OEM not identified; Equity proof missing",
    stage: "NBC Screening",
  },
  {
    category: "Due Diligence Item",
    definition: (
      <>
        Can be verified during DD <strong>after</strong> NBC approval.
      </>
    ),
    examples:
      "Demand forecast validation; Permits and licences; FX hedging strategy; Insurance quotes",
    stage: "Due Diligence",
  },
  {
    category: "Condition Precedent",
    definition: (
      <>
        Must be satisfied <strong>before</strong> disbursement.
      </>
    ),
    examples:
      "Executed grant agreement; Binding insurance cover; Pilot project completion; Escrow arrangements",
    stage: "Pre-Disbursement",
  },
];

const businessModels = [
  "Isolated Mini Grids",
  "Interconnected Mini Grids",
  "C&I / C&E Systems",
  "Stand-Alone Solar (HH & SME)",
  "Solar for Telecom Towers",
  "Standalone Solar System (SHS)",
  "Mesh Grid Systems",
  "Battery-as-a-Service",
  "E-Mobility Solutions",
  "Revenue / Energy-as-a-Service Models",
];

export default function ClassificationSection() {
  return (
    <section id="classification" className="bg-green-pale py-16 sm:py-20">
      <div className="max-w-360 mx-auto px-4 sm:px-6">

        {/* Classification Framework */}
        <h2 className="font-heading font-bold text-[#080808] text-[40px] mb-4">
          Classification Framework at a Glance
        </h2>
        <hr className="border-border mb-8" />

        <div className="bg-[#FCFCFC] rounded-2xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-dark text-white">
                  {["Category", "Definition", "Examples", "Stage"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 text-[13px] font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {classificationRows.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-6 py-5 align-top font-bold text-[#080808] whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="px-6 py-5 align-top text-muted leading-relaxed">
                      {row.definition}
                    </td>
                    <td className="px-6 py-5 align-top text-muted leading-relaxed">
                      {row.examples}
                    </td>
                    <td className="px-6 py-5 align-top text-muted whitespace-nowrap">
                      {row.stage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eligible Business Models */}
        <h2 className="font-heading font-bold text-[#080808] text-[40px] mb-8">
          Eligible Business Models
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {businessModels.map((model) => (
            <div key={model} className="bg-[#FCFCFC] rounded-2xl px-5 py-6">
              <span className="font-heading font-bold text-green-dark text-[15px] leading-snug">
                {model}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
