const colorMap = {
  white:
    'border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 body-xl hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-light-400 dark:text-dark-400 text-light-400 body-xl dark:hover:bg-dark-400 hover:bg-light-400 dark:hover:text-light-400 hover:text-dark-400',
}

export default function Tag({ children, mode = 'dark', className, ...props }) {
  return (
    <button
      className={`px-3.5 py-1 rounded-[30px] border transition-colors duration-300 ${colorMap[mode]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
