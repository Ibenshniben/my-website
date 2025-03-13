import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(26,31,71)] text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,31,71,0.8)] to-[rgb(26,31,71)] z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Velkommen
          </h1>
          <p className="text-2xl text-gray-300 mb-8">Ib Strømsvåg - IT & Medieproduksjon</p>
          <div className="flex gap-6 justify-center">
            <a href="om-meg" className="btn-primary">Les mer om meg</a>
            <a href="prosjekter" className="btn-primary">Se mine prosjekter</a>
          </div>
        </div>
      </section>

      {/* Bento Grid Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Me - Large Card */}
          <div className="md:col-span-2 bg-[rgb(48,53,90)] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">Om meg</h2>
            <p className="text-lg text-gray-300 mb-6">
              Jeg er en engasjert IT-student med fokus på kreativ problemløsning og innovasjon. 
              Min tekniske forståelse kombinert med designferdigheter gjør meg til en allsidig utvikler.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Nøkkelkompetanse</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Kreativ problemløsning</li>
                  <li>• Teknisk forståelse</li>
                  <li>• UI/UX Design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Språk</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Norsk (Morsmål)</li>
                  <li>• Engelsk (Flytende)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-[rgb(48,53,90)] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Tekniske ferdigheter</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Programmering</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'PHP'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[rgb(26,31,71)] rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Verktøy</h3>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Figma', 'Adobe Suite', 'MySQL'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-[rgb(26,31,71)] rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="bg-[rgb(48,53,90)] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Utdanning</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">VG2 Informasjonsteknologi</h3>
                <p className="text-gray-300 text-sm">2024 - 2025</p>
              </div>
              <div>
                <h3 className="font-semibold">VG1 IT & Medieproduksjon</h3>
                <p className="text-gray-300 text-sm">2023 - 2024</p>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="md:col-span-2 bg-[rgb(48,53,90)] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Erfaring</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Vaktmesterassistent - Avigo</h3>
                <p className="text-gray-300 text-sm">Juni 2024 - August 2024</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Flytting av møbler og kontorinventar</li>
                  <li>• Effektiv prosessorganisering</li>
                  <li>• Teamarbeid og koordinering</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Frivillig stallarbeid</h3>
                <p className="text-gray-300 text-sm">Nåværende, 2025</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Stell av 200 hester</li>
                  <li>• Bidrag til dyrevelferd</li>
                  <li>• Selvstendig arbeid</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Mekaniker - Volvo</h3>
                <p className="text-gray-300 text-sm">November 2023 (2 uker)</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Service sjekk</li>
                  <li>• Skifte dekk</li>
                  <li>• Opplæring i bil-mekanikk</li>
                  <li>• Teamarbeid</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[rgb(48,53,90)] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
            <div className="space-y-4">
              <a href="mailto:ibjulian9@gmail.com" className="block text-gray-300 hover:text-white">
                ibjulian9@gmail.com
              </a>
              <a href="tel:+47483811121" className="block text-gray-300 hover:text-white">
                +47 483 81 121
              </a>
              <p className="text-gray-300">Kristiansand, Norge</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}