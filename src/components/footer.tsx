function footer() {
  return (
    <footer className="flex justify-center align-center pt-10 pb-5 h-20px">
      <p className="text-gray-500  dark:text-gray-400 text-sm">
        © {new Date().getFullYear()}&nbsp;
        <a
          href='https://github.com/XiupingWu'
          target="_blank"
          rel="noopener noreferrer"
        >
          Johnson Wu.
        </a>
        &nbsp; All rights reserved.
      </p>
    </footer>
  )
}

export default footer;