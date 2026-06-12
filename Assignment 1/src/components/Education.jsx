import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institute: "MANIT Bhopal",
      duration: "Jul 2023 - May 2026",
    },
    {
      degree: "Bachelor of Computer Applications",
      institute: "RPL Maheshwari College (DAVV), Indore",
      duration: "Jul 2019 - May 2022",
    },
  ];

  return (
    <Section
      title="Education"
      icon={<GraduationCap size={24} />}
    >
      <div className="space-y-4">
        {education.map((item, index) => (
          <Card key={index}>
            <h3 className="font-semibold text-lg">
              {item.degree}
            </h3>

            <p>{item.institute}</p>
            <p className="text-sm text-slate-500">
              {item.duration}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}