import Image from "next/image";
import socialLinks from "@/data/soicalLinks";
import IconLinks from "@/components/iconLinks";

export default function Home() {
  return (
    <section className="mb-5">
      <Image
        src="/profile/me_placeholder.jpg" 
        width={100}
        height={100}
        className="rounded-full mb-4"
        alt={"This is my profile Image"}      
      />
      <h1 className="text-2xl font-bold">Xiuping(Johnson) Wu</h1>

      <div className="text-gray-700 dark:text-gray-300 md:text-sm text-base">
          <p className="mt-4">
            I&apos;m a full-stack software engineer specializing in building scalable web applications with rich user interfaces using JavaScript and React.js.
          </p>
            <p className="mt-4 mb-4">
            I have worked with a fast-growing maritime startup, contributing to end-to-end products for the road construction industry and focusing on ERP system development. 
            I&apos;ve also gained valuable experience through active participation in open-source projects.
            <br />
            <br />
            Currently, I manage the official website for a globally recognized TIG automatic welding machine company, 
            handling maintenance, content updates, and community engagement to strengthen its online presence.
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:wuxiuping96@gmail.com"
              className="border-b inline-block hover:text-blue-500"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>

          <p className="mb-4">
            If you are interested in the highly efficient and reliable welding machines, please don&apos;t hesitate to
            <a
              href="https://www.ludingweld.com"
              className="border-b inline-block hover:text-blue-500"
              target="_blank"
            >
              &nbsp;Check Our Machines From Jin Luding Welding Co., Ltd
            </a>
          </p>
      </div>

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
    </section>
  );
}
