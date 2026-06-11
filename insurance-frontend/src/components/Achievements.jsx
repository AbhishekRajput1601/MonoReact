import { Trophy } from "lucide-react";
import Section from "./Section";
import Card from "./Card";

export default function Achievements() {
  const achievements = [
    "500+ LeetCode Problems",
    "GSSoC Level 2 Contributor",
    "SQL Certificate - HackerRank",
    "AIR 396 in NIMCET 2023",
  ];

  return (
    <Section
      title="Achievements"
      icon={<Trophy size={24} />}
    >
      <Card>
        <ul className="list-disc pl-5 space-y-2">
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}