import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[rgb(48,53,90)] text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2">Kontakt</h3>
          <p><a href="mailto:ibjulian9@gmail.com" className="hover:text-gray-300 transition-colors">ibjulian9@gmail.com</a></p>
          <p><a href="tel:+47483811121" className="hover:text-gray-300 transition-colors">+47 483 81 121</a></p>
          <p>Elgstien 78B</p>
          <p>4637 Kristiansand</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2">Lenker</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-300 transition-colors">Hjem</Link></li>
            <li><Link href="/prosjekter" className="hover:text-gray-300 transition-colors">Prosjekter</Link></li>
            <li><Link href="/om-meg" className="hover:text-gray-300 transition-colors">Om meg</Link></li>
            <li><Link href="/cv" className="hover:text-gray-300 transition-colors">CV</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2">Sosiale medier</h3>
          <ul className="space-y-2">
            <li><a href="https://linkedin.com/in/ib-strømsvåg" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com" className="hover:text-gray-300 transition-colors">GitHub</a></li>
            <li><a href="https://ibstromsvag.com" className="hover:text-gray-300 transition-colors">Nettside</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2">Nøkkelkompetanse</h3>
          <ul className="space-y-2 text-sm">
            <li>HTML, CSS, JavaScript</li>
            <li>Python, SQL, PHP</li>
            <li>Adobe Creative Suite</li>
            <li>Figma & UI/UX Design</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm">
        © 2024 Ib Strømsvåg. Alle rettigheter reservert.
      </div>
    </footer>
  );
}