import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-[rgb(26,31,71)] text-white">
      <Navigation />

      {/* Header */}
      <div className="pt-24 text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">OM MEG</h1>
        <p className="text-xl">Lær mer om min bakgrunn og interesser</p>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-[rgb(48,53,90)] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Min Historie</h2>
          <p className="mb-6">
            [Your about me content here]
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Kompetanse</h2>
          <ul className="list-disc list-inside mb-6">
            <li>HTML, CSS, JavaScript</li>
            <li>Python, SQL, PHP</li>
            <li>Adobe Creative Suite</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>

      <Footer />

      {/* Chatbot Script */}
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="naiad_52163utuCIhzYzo"
        domain="www.chatbase.co"
        defer
      />
    </main>
  );
}