import socialLinks from "@/data/soicalLinks";
import IconLinks from "../iconLinks";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section 
      id="aboutme"
      className="flex justify-center space-x-5"
    >
      <div className="space-y-5 max-w-3xl flex-1">
        <h1 className="text-3xl">Hi, I am Johnson Wu</h1>
        <h2 className="text-xl">An honest and reliable fullstack developer</h2>
        <p>
          I&apos;m a full-stack software engineer specializing in building scalable web applications with rich user interfaces using React.js, React Native, and Next.js.
        </p>
        <p>
          I have worked with a fast-growing maritime startup, contributing to end-to-end products for the road construction industry and focusing on ERP system development. I&apos;ve also gained valuable experience through active participation in open-source projects.
        </p>
        <p>
          Currently, I manage the CMS of the official site for a globally recognized TIG automatic welding machine company, handling maintenance, content updates, and community engagement to strengthen its online presence.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image 
          src="/profile/profile.png" 
          width={200}
          height={200}
          className="mb-4 dark:ring-0 ring-2 ring-black"
          alt={"This is my profile Image"}      
        />
        <div className="flex space-x-4 mb-2 mt-4">
          {socialLinks.map((link, index) => (
            <IconLinks 
              key={index}
              aria-label={`Follow on ${link.source}`}
              href={link.href} 
              icon={link.icon}            
            />
          ))}
        </div>

        <a href="/resume" className="border-b hover:text-blue-500">View my resume</a>
      </div>
    </section>
  )
}