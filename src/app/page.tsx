import AboutMe from "@/components/content-section/about-me";
import Resume from "./resume/page";

export default function Home() {
  return (
    <div className="bg-grey flex flex-col pt-6 justify-center items-center">
      <AboutMe />
    </div>
  );
}
