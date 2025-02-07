
const educationData = [
  {
    degree: "Araibari Islamia Sayeedia Kamil Madrasah (Fazil 1st Year)",
    institution: "Islamic Arabic University",
    year: "2023 - 2025",
  },
  {
    degree: "Araibari Islamia Sayeedia Kamil Madrasah (Alim)",
    institution: "Islamic Arabic University",
    year: "2021 - 2022",
  },
  {
    degree: "Asgar Ali Dakhil Madrasha (SSC)",
    institution: "Islamic Arabic University",
    year: "2017 - 2019",
  },
];

const EducationalQualification = () => {
  return (
    <section className="p-10 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6 text-primary">Educational Qualification</h2>
      <div className="max-w-4xl mx-auto">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg mb-6 text-left"
          >
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="text-gray-700">{education.institution}</p>
            <p className="text-gray-500">{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalQualification;
