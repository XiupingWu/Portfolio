import Link from "next/link";

export default function SideNavbar() {
  return (
    <nav className="flex flex-col space-y-4 h-auto w-auto">
      <ul className="flex flex-col space-y-4">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          <Link href={"#aboutme"} className="hover:text-blue-500">About me</Link>
        </li>
        <span className="border-l-2 border-dashed border-gray-300 h-10 ml-1"></span>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          <Link href={"#skills"} className="hover:text-blue-500">Skills</Link>
        </li>
        <span className="border-l-2 border-dashed border-gray-300 h-10 ml-1"></span>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          <Link href={"#resume"} className="hover:text-blue-500">Resume</Link>
        </li>
        <span className="border-l-2 border-dashed border-gray-300 h-10 ml-1"></span>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          <Link href={"#projects"} className="hover:text-blue-500">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}