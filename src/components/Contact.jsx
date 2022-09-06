import React from "react";

const Contact = () => {
  return (
    <div
      name="kontakt"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-64 sm:pt-0"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Kontaktieren Sie uns
          </p>
          <p className="py-6">Schreiben Sie uns eine Nachricht und wir melden uns bei Ihnen</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/4b10ead2-1e59-4708-a0e5-9753256a9f3b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="Kundenname"
              required
              placeholder="Vorname, Nachname"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              required
              placeholder="Email"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="number"
              name="Telefonnummer"
              required
              placeholder="Telefonnummer"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Umzugsdatum"
              required
              placeholder="Umzugsdatum (optional)"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <div className="flex w-full justify-between">
            <input
              type="text"
              name="Auszug Ort"
              required
              placeholder="von Ort? (optional)"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Einzug Ort"
              required
              placeholder="nach Ort? (optional)"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            </div>
            <textarea
              name="Nachricht"
              placeholder="Ihre Nachricht an uns..."
              required
              rows="10"
              className="mt-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
