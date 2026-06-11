import { FolderOpen } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      name: "Quick-Mart",
      tech: "React, Node.js, MongoDB",
      description: "MERN Ecommerce Platform",
    },
    {
      name: "CodeMate",
      tech: "React, Socket.IO, Redis",
      description: "AI Chat Application",
    },
  ];

  return (
    <Section
      title="Projects"
      icon={<FolderOpen size={24} />}
    >
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <h3 className="font-semibold text-lg">
              {project.name}
            </h3>

            <p className="text-blue-600">
              {project.tech}
            </p>

            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}