const objectives = [
  {
    number: "01",
    label: "Structure",
    description:
      "Provide structured checklists across ESG, Technical, Legal and Finance pillars to guide analysts and sponsors.",
  },
  {
    number: "02",
    label: "Classify",
    description:
      "Classify issues into Pre-NBC Critical Blockers, Due Diligence Items, and Conditions Precedent.",
  },
  {
    number: "03",
    label: "Support",
    description:
      "Identify Project Development Gaps and link sponsors to DREEF for TA, subsidies and capacity building.",
  },
  {
    number: "04",
    label: "Institutionalise",
    description:
      "Embed lessons learned from past projects to strengthen InfraCredit's institutional knowledge base.",
  },
];

export default function KeyObjectives() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-bold text-[#080808] text-[40px] mb-12">
          Key Objectives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {objectives.map((obj) => (
            <div
              key={obj.label}
              className="bg-green-pale rounded-2xl p-6 flex flex-col justify-between min-h-56"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-bold text-[#080808] text-xl">{obj.label}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{obj.description}</p>
              </div>
              <span className="font-heading font-bold text-border text-[40px] leading-none text-right mt-6">
                {obj.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
