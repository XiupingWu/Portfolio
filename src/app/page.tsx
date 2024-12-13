import Image from "next/image";

export default function Home() {
  return (
    <section className="mb-5">
      <Image
        src="/profile/me_placeholder.jpg" 
        width={100}
        height={100}
        className="rounded-full"
        alt={"This is my profile Image"}      
      />
      <h1 className="text-2xl font-bold">Xiuping(Johnson) Wu</h1>

      <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I’m a fullstack software engineer specializing in building scalable
            web applications having rich user interface using javascript and React.js.
          </p>
          <p className="mt-4 mb-4">
            Over the years, I have worked with a rapidly growing maritime startup, where I played a key role in building end-to-end products for the road construction industry, 
            with a focus on developing ERP systems. I have also been an active contributor to various open-source projects, gaining valuable experience in collaborative development.
            <br />
            <br />
            Currently, I am seeking new opportunities while maintaining the official website for a globally recognized TIG automatic welding machine company. 
            My responsibilities include ongoing website maintenance, community engagement, and content updates to enhance the company&apos;s online presence.
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:wuxiuping96@gmail.com"
              className="border-b inline-block"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>

          <p className="mb-4">
            If you are interested in the highly efficient and reliable welding machines, please don&apos;t hesitate to
            <a
              href="https://www.ludingweld.com"
              className="border-b inline-block"
              target="_blank"
            >
              &nbsp;Check Our Machines From Jin Luding Welding Co., Ltd
            </a>
          </p>
      </div>
    </section>
  );
}
