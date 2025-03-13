import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ image, title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="bento-item flex flex-col h-full transition-all duration-200 hover:-translate-y-1">
      <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="glass-card px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-glass inline-block">
          Se prosjektet
        </a>
      </div>
    </div>
  );
}