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
    <div className="bg-[rgb(48,53,90)] rounded-lg overflow-hidden shadow-lg card-hover flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-[rgb(26,31,71)] px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Se prosjektet
          </a>
        </div>
      </div>
    </div>
  );
}