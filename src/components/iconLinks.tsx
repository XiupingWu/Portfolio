import Link from "next/link";

interface Props {
  className?: string,
  href: string,
  icon: React.ElementType
}

function iconLinks({className, href, icon: Icon}: Props) {
  return (
    <div className={`${className}, flex`}>
    <Link
      href={href}
      target="_blank"
      className="group flex text-sm font-medium transition"
    >
      <Icon className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 hover:fill-zinc-200 transition " />
    </Link>
  </div>
  )
}

export default iconLinks;