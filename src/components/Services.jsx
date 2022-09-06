import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Umzüge",
      desc: "Jeder Umzug ist individuell! Unsere Umzugshelfer sind gut geschult und haben jahrelange Erfahrung. Ob Marmortisch, Glasvitrine oder Ikea-Schrank - jedes Möbelstück wird von unseren Profis in Rekordzeit demontiert, fachgemäss durch Luftpolsterfolie, Seidenpapier, Schutzdecken und Spanngurte geschützt, transportiert und wieder montiert, während Sie sich entspannen und wichtigerem widmen können!",
      style: "shadow-white",
    },
    {
      id: 2,
      title: "Transporte",
      desc: "Egal ob National oder International, ob klein oder gross, ob wenig oder viel - wir kennen uns aus! Durch geschickte Koordination mit anderen Aufträgen, können wir die kürzeste Transportzeit und das beste Preis-/Leistungsverhältnis anbieten.",
      style: "shadow-white",
    },
    {
      id: 3,
      title: "Entsorgungen",
      desc: "Entsorgungen sind immer lästig. Egal ob im Rahmen eines Umzugs oder ob Sie einfach ein altes schweres Möbelstück nicht mehr benötigen. Wir übernehmen dies gerne für! Wir haben einige der grössten Entsorgungsstätten der Schweiz als Partner und können Ihnen dadurch die günstigsten Konditionen für die Entsorgung garantieren.",
      style: "shadow-white",
    },
    {
      id: 4,
      title: "Reinigungen",
      desc: "Wir pflegen eine gute Partnerschaft zu einem lokalen Reinigungsunternehmen, welches für unsere Kunden die Reinigung der abzugebenden Wohnung übernehmen - mit Abnahmegarantie von Seiten unseres Partners!",
      style: "shadow-white",
    }
  ];

  return (
    <div
      name="dienstleistungen"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Dienstleistungen
          </p>
          <p className="py-6">Wir bieten eine breite Auswahl an hochwertigen Dienstleistungen. 
          <br /> Klicken Sie eine Box an, um mehr zu erfahren.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {services.map(({ id, title, desc, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="underline font-bold">{title}</p>
              <p className="text-sm pt-2 mx-4 text-left">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
