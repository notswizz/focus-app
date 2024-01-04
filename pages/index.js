import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Get Focused</title>
        <meta name="description" content="Get Focused" />
        <link rel="icon" href="/focus.png" />
      </Head>

      <header className="bg-blue-600 text-white text-center p-4">
        <a href="https://focus.xyz" target="_blank" rel="noopener noreferrer">
          <img src="/focus.png" alt="Focus Logo" className="mx-auto" />
        </a>
        <h1 className="text-3xl font-bold">Focus - the crypto social network</h1>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white shadow-md rounded p-6 flex justify-around items-start">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <a href="https://docs.google.com/document/d/14Um8ErmoE8IhgZrACSI2FeTo2yji2Q1Hxvw7KNoozM8/edit?pli=1" 
               className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Focus Whitepaper
            </a>
            <br/>
            <a href="https://docs.google.com/document/d/1Yln6iaguNmHJoM2yxV4adBhV_TityLvZ7zsQIvWsPog/edit" 
               className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Tokenomics
            </a>
            <br/>
            <a href="   https://diamondapp.com/u/7ack?feedTab=Hot"
               className="text-blue-600 hover:text-blue-800 mt-4" target="_blank" rel="noopener noreferrer">
              Diamond App
            </a>
            <br/>
            <a href="https://discord.gg/FQwdVuDmZK"
               className="text-blue-600 hover:text-blue-800 mt-4" target="_blank" rel="noopener noreferrer">
              Get Focused Discord
            </a>
          </div>


       


          <iframe 
            src="https://heroswap.com/widget?affiliateName=swizz&theme=dark-blue&depositTicker=ETH&destinationTicker=DESO"
            className="w-96 h-96"
            frameBorder="0"
          ></iframe>
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2024 swizz</p>
      </footer>
    </div>
  );
}
