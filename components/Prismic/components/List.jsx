import { PrismicRichText } from '@prismicio/react/dist/react-server/PrismicRichText'

export default function List({ value, index }) {
  console.log(value)
  return (
    <ul className="flex flex-col ml-auto w-3/5 px-14">
      {value.items.map((item, j) => (
        <li
          key={`list-${index}-${j}`}
          className="py-6 flex items-start justify-start gap-5 border-b border-light-200 dark:border-dark-200"
        >
          <span className="mt-2 size-2.5 shrink-0 bg-light-100 dark:bg-dark-100 rounded-full"></span>
          <div className="flex flex-col gap-2.5 body-md">
            <span className="flex items-end gap-x-3">
              <span className="title-xs">{item.title}</span>
              {item.subtitle && (
                <span className=" italic opacity-75">{item.subtitle}</span>
              )}
            </span>
            <PrismicRichText field={item.content} />
          </div>
        </li>
      ))}
    </ul>
  )
}
