import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CV() {
  const programmingSkills = ['HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'PHP'];
  const tools = [
    'Visual Studio Code',
    'Adobe Illustrator',
    'Figma',
    'MySQL Workbench',
    'Microsoft Word',
    'Microsoft PowerPoint',
    'Adobe Premiere Pro',
    'Adobe XD'
  ];

  return (
    <div className="min-h-screen bg-[rgb(26,31,71)] text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ib Julian Trollnes Strømsvåg</h1>
          <div className="text-gray-300 space-y-1">
            <p>Elgstien 78B, 4637 Kristiansand</p>
            <p>+47 483 81 121 • ibjulian9@gmail.com</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" 
                className="px-4 py-2 bg-[rgb(48,53,90)] rounded-lg hover:bg-[rgb(58,63,100)] transition-all duration-300">
                LinkedIn
              </a>
              <a href="https://ibstromsvag.com" target="_blank" rel="noopener noreferrer" 
                className="px-4 py-2 bg-[rgb(48,53,90)] rounded-lg hover:bg-[rgb(58,63,100)] transition-all duration-300">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Key Competencies */}
          <div className="bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Nøkkelkompetanse</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Kreativ problemløsning og innovasjon</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Programmering: HTML, CSS, Python, JavaScript, SQL, PHP</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sterk teknisk forståelse og ferdigheter</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Erfaring med designverktøy og multimedieproduksjon</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gode kommunikasjons- og samarbeidsevner</span>
              </li>
            </ul>
          </div>

          {/* Languages and Education */}
          <div className="bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Språkkunnskaper</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• Norsk: Morsmål (snakker og skriver flytende)</li>
                <li>• Engelsk: Svært godt muntlig og skriftlig</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Utdanning</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold">Informasjonsteknologi og medieproduksjon (VG1)</h3>
                  <p className="text-sm">2023 – 2024</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Informasjonsteknologi (VG2)</h3>
                  <p className="text-sm">2024 – 2025</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Grunnskole</h3>
                  <p className="text-sm">Avsluttet 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="md:col-span-2 bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Arbeidserfaring</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Vaktmesterassistent</h3>
                <p className="text-gray-400">Avigo • 13. juni 2024 – 9. august 2024</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li>• Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset</li>
                  <li>• Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid</li>
                  <li>• Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Frivillig stallarbeid</h3>
                <p className="text-gray-400">Arendal og Grimstad Rideklubb • 2025 - Nåværende</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li>• Hjelper med å fôre og stelle 200 hester hver torsdag og en helg i måneden</li>
                  <li>• Bidrar til dyrevelferd og daglig drift av stallen</li>
                  <li>• Arbeider selvstendig og i team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-2 bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-2">IT- og Programvarekunnskaper</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Programmering</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingSkills.map((skill) => (
                    <span key={skill} className="bg-[rgb(26,31,71)] px-4 py-2 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Verktøy og programvare</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="bg-[rgb(26,31,71)] px-4 py-2 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="md:col-span-2 bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Referanser</h2>
            <p className="text-gray-300">Oppgis ved forespørsel</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}