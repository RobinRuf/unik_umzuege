import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Über uns
          </p>
        </div>

        <p className="text-xl mt-14">
          Die Unik Umzüge GmbH ist seit vielen Jahren erfolgreich in den Bereichen Umzüge, Transporte, 
          Entsorgungen und Räumungen tätig. Bei uns steht die Kundenzufriedenheit an erster Stelle. 
          Jeder Umzug ist so einzigartig. Als Kunde erhalten Sie stets unsere volle 
          Aufmerksamkeit. <br /> <br />
          Und da Sie als Kunde uns so wichtig sind, stellen wir Ihnen folgendes vor...
        </p>
        <br />

        <div>
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Das Rund-Um-Sorlos - Paket
          </p>
        </div>
        
        <br />
        <p className="text-xl">
          ...und dieser Name ist Programm! <br />
          Bei Annahme dieser Offerte stehen Ihnen alle Ressourcen zur Verfügung 
          - und das <span className="border-b-4 border-gray-500 font-bold">kostenlos!</span> <br /><br />
          • verschiedene Kartonboxen <br />
          • Luftpolsterfolie <br />
          • Seidenpapier <br /><br />
          Und das Beste: Alles wird von uns vor dem Umzug zu Ihnen nach Hause geliefert! <br />
          Nach dem Umzug können Sie in Ruhe die Kartons auspacken. Sobald Sie fertig sind 
          rufen Sie uns an und wir kommen diese bei Ihnen abholen.
        </p>
      </div>
    </div>
  );
};

export default About;
