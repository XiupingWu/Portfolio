import Image from "next/image";
import socialLinks from "@/data/soicalLinks";
import IconLinks from "@/components/iconLinks";

export default function Home() {
  return (
    <section className="mb-5">
      <Image
        src="/profile/profile.png" 
        width={100}
        height={100}
        className="rounded-full mb-4 dark:ring-0 ring-2 ring-black"
        alt={"This is my profile Image"}      
      />
      <div id="name" className="flex flex-row items-center space-x-3">
        <h1 className="text-2xl font-bold mb-1">Xiuping(Johnson) Wu</h1>
        <h4>An honest and reliable software developer</h4>
      </div>
      <h2>Halifax, Nova Scotia</h2>

      <div className="md:text-sm text-base">
          <p className="mt-4">
            I&apos;m a full-stack software engineer specializing in building scalable web applications with rich user interfaces using React.js, React Native, and Next.js.
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
            I&apos;m seeking any opportunity to do some fun industrial projects, if you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:wuxiuping96@gmail.com"
              className="border-b inline-block hover:text-blue-500"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>

          <p className="mb-4">
            If you are interested in the highly efficient and reliable welding machines that have been doing works that you can or you couldn&apos;t imagine, please don&apos;t hesitate to
            <a
              href="https://www.ludingweld.com"
              className="border-b inline-block hover:text-blue-500"
              target="_blank"
            >
              &nbsp;Check Our Machines From Jin Luding Welding Co., Ltd,
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

      <div>
        <a href="/resume" className="border-b inline-block hover:text-blue-500">View my resume</a>
      </div>     
    </section>
  );
}
