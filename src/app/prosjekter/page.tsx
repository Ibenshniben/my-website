import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <main className="min-h-screen bg-primary-bg">
      <Navigation />

      <div className="pt-24 text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">PROSJEKTER</h1>
        <p className="text-text-secondary text-xl">Mine arbeider og prosjekter</p>
      </div>

      <div className="bento-grid mb-16">
        <ProjectCard
          image="/gervi-nettside.png"
          title="AI Prosjekt med Gervi Labs"
          description="Et innovativt samarbeidsprosjekt hvor vi utviklet en AI-assistent og skapte en musikkvideo ved hjelp av kunstig intelligens."
          tags={['AI', 'Webutvikling', 'Video', 'Musikk', 'Gervi Labs']}
          link="https://y-tawny-three-55.vercel.app/"
        />
        
        <ProjectCard
          image="/vikings-nettside.png"
          title="Vikings Nettside"
          description="Min første fullstendige nettside, utviklet med HTML og CSS. Dette prosjektet ga meg muligheten til å utforske og lære grunnleggende webutvikling."
          tags={['HTML', 'CSS', 'Responsive Design']}
          link="https://vikings-nettside.vercel.app/index.html"
        />
      </div>

      <Footer />
    </main>
  );
}