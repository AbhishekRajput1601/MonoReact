import { Code } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

export default function TechStack() {
  const skills = {
    Languages: ["Java", "C++", "Python"],
    Frontend: ["React", "Next.js", "Tailwind"],
    Backend: ["Spring Boot", "Node.js", "Express"],
    Database: ["MongoDB", "MySQL", "PostgreSQL"],
  };

  return (
    <Section
      title="Tech Stack"
      icon={<Code size={24} />}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, values]) => (
          <Card key={category}>
            <h3 className="font-semibold mb-3">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {values.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}