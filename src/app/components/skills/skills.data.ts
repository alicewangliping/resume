export interface Skill {
  name: string;
  percentage: number;
}

export const skills: Skill[] = [
  { name: 'C#', percentage: 80 },
  { name: 'C++', percentage: 50 },
  { name: 'Python', percentage: 50 },
  { name: 'SQL Server', percentage: 100 },
  { name: 'MySQL', percentage: 50 },
  { name: 'Docker', percentage: 40 },
  { name: 'CD/CI', percentage: 20 }
];