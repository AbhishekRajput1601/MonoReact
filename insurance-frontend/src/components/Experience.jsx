import { Briefcase } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

export default function Experience() {
  const experiences = [
    {
      company: "Monocept",
      role: "Software Engineer Intern",
      points: [
        "Developed REST APIs using Spring Boot.",
        "Worked with Servlets, JSP, JDBC and MySQL.",
        "Used Git/GitHub, Postman and JUnit.",
      ],
    },
    {
      company: "Harborleaf",
      role: "Full Stack Developer Intern",
      points: [
        "Built video calling platform using FastAPI.",
        "Developed frontend using React.",
        "Implemented JWT authentication.",
      ],
    },
  ];

  return (
    <Section
      title="Experience"
      icon={<Briefcase size={24} />}
    >
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <h3 className="font-semibold text-lg">
              {exp.role}
            </h3>

            <p className="text-blue-600">
              {exp.company}
            </p>

            <ul className="list-disc pl-5 mt-3">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}