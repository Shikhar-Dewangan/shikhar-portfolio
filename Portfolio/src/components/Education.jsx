const Education = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          My <span className="text-sky-500">Education</span>
        </h2>
        <div className="space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl shadow border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">Diploma in Artificial Intelligence & Machine Learning (AIML)</h3>
            <p className="text-sky-500 font-semibold">RSR Sanjay Rungta College, Bhilai | 2024 - 2026</p>
            <p className="text-slate-600 mt-2">Percentage: 75.7</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">12th Grade</h3>
            <p className="text-sky-500 font-semibold">Chhattisgarh Board of Secondary Education (CGBSE) | 2023</p>
            <p className="text-slate-600 mt-2">Percentage: 71.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;