import Accordion from "@/components/accordion"
import Rating from "@/components/rating"
import skillSheet from "@/data/skills"
import education from "@/data/education"
import { FaCode, FaUniversity } from "react-icons/fa"
import { MdOutlineWorkOutline } from "react-icons/md"

export default function Resume() {
  return (
    <section className="mb-5 flex-col">
      <div>
        <div className="border-gray-700 dark:border-white border p-5 flex align-middle space-x-2">
          <FaUniversity className="fill-gray-700 dark:fill-white" size={25}/>
          <h1 className="uppercase">education</h1>
        </div>
        {
          education.map((education, index) => (
            <div className="py-5" key={index}>
              <p className="font-bold">{education.agency}</p>
              <p className="text-[#878787]">{education.period} | {education.field}</p>
            </div>
          ))
        }
      </div>

      <div className="py-5">
        <div className="border-gray-700 dark:border-white border p-5 flex align-middle space-x-2">
          <MdOutlineWorkOutline className="fill-gray-700 dark:fill-white" size={25}/>
          <h1 className="uppercase">experience</h1>
        </div>
        <div className="my-5 space-y-1">
          <Accordion title={`Digital Content Manager in Jin Luding Welding (2024 - Present)`}>
            <p className="my-2 text-sm italic">Remote</p>
            <ul className="md:text-justify text-sm px-2 list-disc space-y-4">
              <li>
                Independently designed and deployed the company&apos;s official English site using Next.js, Node.js, 
                and Vercel, ensuring efficient serverless deployment and ongoing maintenance. 
              </li>
              <li>
                In collaboration with the marketing team, I established and managed the company&apos;s YouTube community, 
                leveraging content creation and online marketing tools to strengthen its global presence.
              </li>
              <li>
                Migrated the entire website to Webflow, blending modern aesthetics with ease of maintenance, 
                ensuring a polished and professional online presence. 
              </li>
            </ul>
          </Accordion>
        </div>

        <div className="mb-5 space-y-1">
          <Accordion title={`Software Developer in Site 20/20 (2021-2024)`}>
            <p className="my-2 text-sm italic">On-Site in Dartmouth, Nova Scotia</p>
            <p>As a Software & Front-end Developer at Site 20/20, I contributed to two critical projects: Guardian Smart Flagger and Onyx.</p>
            <br/>
            <p className="mb-2"><b>Guardian Smart Flagger Android Application</b></p>
            <ul className="md:text-justify text-sm px-2 list-disc space-y-4">
              <li>
                Enhanced the in-app UI to improve user guidance and Flagger status visibility, ensuring a more intuitive user experience.
              </li>
              <li>
                Implemented an authentication page during app initialization, capturing user contact information with validation to meet formatting standards (e.g., preventing SQL injection), securely transmitting data to the server for operational records and emergency contact purposes.
              </li>
              <li>
                Developed a key feature enabling paired AFADs to automate traffic control between two endpoints, synchronizing gate operations with a single operate or predefined time intervals.             
              </li>
              <li>
              Added emergency response functionality, allowing paired AFADs to detect traffic control arm damage and automatically adjust gate and light controls to restore safe traffic conditions.
              </li>
            </ul>
            <br/>
            <p className="mb-2"><b>Onyx (ERP for road construction industry)</b></p>
            <ul className="md:text-justify text-sm px-2 list-disc space-y-4">
              <li>
                Led the development of the Android version with React Native, implementing unique features like GPS touch input 
                and offline synchronization for better data management during traffic control with inconsistent internet connection conditions.
              </li>
              <li>
                Added advanced functionality and feature parity between the Android app and the web version of Onyx, 
                and Onyx backend support with Python Flask and Vue.js, improving user experience.              
              </li>
              <li>
                Successfully implemented the Progressive Web App (PWA) for the Onyx web platform using Vue.js and Service Worker, 
                after leading research and development.
              </li>
              <li>
                Collaborated with dispatch coordinators from Titan Traffic Control to gather user feedback and ensure product quality improvements.
              </li>
            </ul>
          </Accordion>        
        </div>
      </div> 

      <div>
        <div className="border-gray-700 dark:border-white border p-5 flex align-middle space-x-2">
          <FaCode className="fill-gray-700 dark:fill-white" size={25}/>
          <h1 className="uppercase">skills</h1>
        </div>
        <div className="py-5 grid-flow-row grid-cols-1">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Skills</h3>
                <div className="grid grid-cols-3 gap-y-3">
                  {
                    skillSheet.map((skill, index) => (
                      <Rating key={index} skill={skill.name} rating={skill.lv} />
                    ))
                  }
                </div>
                {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  JavaScript, TypeScript, React.js, React native, Next.js, Vue.js, Java, Android, Webflow
                </p> */}
            </li>
            {/* <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Skills I&apos;m learning</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">C#/.NET</p>
            </li> */}
          </ol>
        </div>
      </div>
      <div>
        <a 
          target="_blank"
          href="https://drive.google.com/file/d/1nhPkWhAtZ88dV6gLT0fMCR3exTiCi4af/view?usp=drive_link" 
          className="border-b inline-block hover:text-blue-500"
        >Download my resume, know me better</a>
      </div> 
    </section>
  )
}
