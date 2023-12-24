export default function Tag({ children, ...props }) {
  return (
    <button
      className="px-3.5 py-1 rounded-[30px] border border-dark-400 dark:border-dark-100 text-dark-400 dark:text-dark-100 body-xl"
      {...props}
    >
      {children}
    </button>
  )
}
