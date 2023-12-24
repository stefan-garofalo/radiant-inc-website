export default function Tag({ children, ...props }) {
  return (
    <button
      className="px-3.5 py-1 rounded-[30px] border border-dark-400 dark:border-dark-100 text-dark-400 dark:text-dark-100 body-xl hover:bg-dark-400 dark:hover:bg-dark-100 hover:text-dark-100 dark:hover:text-dark-400 transition-colors duration-300"
      {...props}
    >
      {children}
    </button>
  )
}
