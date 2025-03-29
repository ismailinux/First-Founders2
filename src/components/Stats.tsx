
const statsData = [
  { number: "1,000+", label: "Founders Supported" },
  { number: "$3M+", label: "Raised" },
  { number: "50+", label: "Portfolio Companies" },
  { number: "12", label: "African Countries" }
];

const Stats = () => {
  return (
    <section className="py-16 bg-brutalist-lightgray">
      <div className="brutalist-container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="brutalist-border bg-brutalist-white p-6 text-center">
              <div className="text-5xl md:text-6xl font-bebas mb-2">{stat.number}</div>
              <div className="text-xl uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
