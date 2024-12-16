import Accordion from "@/components/accordion"
import { CodingIcon, UniversityIcon, WorkCaseIcon } from "@/components/icons"

export default function Resume() {
  return (
    <section className="mb-5 flex-col">
      <div>
        <div className="border-white border p-5 flex align-middle space-x-2">
          <UniversityIcon />
          <h1 className="uppercase">education</h1>
        </div>
        <div className="py-5">
          <p className="font-bold">Bechalor in Science of Computer Science</p>
          <p className="text-[#878787]">2015 - 2020 | Dalhousie University</p>
        </div>
      </div>

      <div className="py-5">
        <div className="border-white border p-5 flex align-middle space-x-2">
          <WorkCaseIcon />
          <h1 className="uppercase">experience</h1>
        </div>
        <div className="my-5 space-y-1">
          <Accordion title={`Technical Support in Jin Luding Welding (2020 - Present)`}>
            <p className="my-2 text-sm italic">Remote</p>
            <ul className="md:text-justify text-sm px-2 list-disc space-y-4">
              <li>
                In this volunteer role, I independently designed and deployed the company&apos;s official English website using Next.js, Node.js, 
                and Vercel, ensuring efficient serverless deployment and ongoing maintenance. 
              </li>
              <li>
                In collaboration with the marketing team, I established and managed the company&apos;s YouTube community, 
                leveraging content creation and online marketing tools to strengthen its global presence.
              </li>
              <li>
                Recently, I migrated the entire website to Webflow, blending modern aesthetics with ease of maintenance, 
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
                Maintained the app alongside two developers, focusing on bug investigations, feature enhancements, 
                and real-time monitoring/control of traffic devices.
              </li>
              <li>
                Contributed to automation testing by leading the development of a test application, 
                working closely with the lead firmware developer for proper hardware interfacing using Bluetooth.
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
        <div className="border-white border p-5 flex align-middle space-x-2">
          <CodingIcon />
          <h1 className="uppercase">skills</h1>
        </div>
        <div className="py-5 grid-flow-row grid-cols-1">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Skills I Offer</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  JavaScript, TypeScript, React.js, React native, Next.js, Vue.js, Java, Android, Webflow
                </p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Skills I&apos;m learning</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">C#/.NET</p>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1IZC6MQm8MkODsNGWdXzjXoP5dk7oQleo/view?usp=drive_link" className="border-b inline-block hover:text-blue-500">Download my resume, know me better</a>
      </div> 
    </section>
  )
}
