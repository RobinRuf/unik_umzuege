import React from "react";

const Services = () => {
  const techs = [
    {
      id: 1,
      title: "Umzüge",
      style: "shadow-white",
    },
    {
      id: 2,
      title: "Transporte",
      style: "shadow-white",
    },
    {
      id: 3,
      title: "Entsorgungen",
      style: "shadow-white",
    },
    {
      id: 4,
      title: "Reinigungen",
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
          {techs.map(({ id, title, describtion, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="underline">{title}</p>
              <p>{describtion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
