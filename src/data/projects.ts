export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  siteUrl?: string;
}

// Sample project data
const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "Jin Luding Welding",
    imageUrl: '/projects/www.ludingweld.com_.png',
    description: "This is the English official site for Jin Luding Welding Co., Ltd",
    technologies: ["Webflow", "Next.js", "Tailwind CSS", "Vercel"],
    siteUrl: "https://www.ludingweld.com"
  },
  {
    id: 2,
    title: 'ONYX - The evolution of the traffic control industry.',
    imageUrl: '/projects/onyx-site2020.png',
    description: "Onyx is the industry’s first digital scheduling and billing system for your Traffic Control team.",
    technologies: ['Vue.js', 'AWS', 'S3-Bucket', 'Python Flask', 'SQL database', 'PWA'],
    siteUrl: 'https://onyx.site2020.com/'
  }
  // ... add more projects as needed
];
export default projects;