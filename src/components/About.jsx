import React from "react";
import stars from "../assets/stars.png";

const About = () => {
  return (
    <div
      name="über uns"
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
          Und das Alles wird kostenlos zu Ihnen nach Hause geliefert und nach dem erfolgreichen
          Umzug auch wieder von uns abgeholt!
        </p>
          <div className="flex flex-col pb-10">
            <a className="flex flex-col" href="https://www.google.com/search?q=unik+umz%C3%BCge+gmbh&sxsrf=ALiCzsZ7kV7HA1rkMUui08sOueQJ4IlyKw%3A1660753098289&source=hp&ei=yhT9YqXGDuGIur4Ppci7aA&iflsig=AJiK0e8AAAAAYv0i2t-F8iuSlEQDESiKn3xtXlMBGL2V&oq=unik+um&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzILCC4QgAQQxwEQrwEyCAgAEB4QFhAKMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIICAAQHhAWEAo6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoFCAAQgAQ6CwguEIAEELEDEIMBOggIABCABBCxAzoFCC4QgAQ6BQgAEMsBOgUILhDLAVAAWMAHYJ8OaABwAHgAgAG3AYgBnQaSAQM0LjOYAQCgAQE&sclient=gws-wiz#lrd=0x4791b91582d08be7:0xeb0949cccfb27b98,1,,," target="_blank">
              <img className="w-64 mt-10 mx-auto" src={stars} alt="" />
              <p className="text-lg items-center mx-auto">5 Sterne</p>
              <p className="text-md items-center mx-auto">30+ Google Bewertungen</p>
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;
