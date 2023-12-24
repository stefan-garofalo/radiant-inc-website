import Button from '@/components/UI/Button'
import Tag from '@/components/UI/Tag'

export default function StyleguidePage() {
  return (
    <div className="flex flex-col gap-y-10 py-20 container">
      <div>
        <span className="block pb-5">Color palette</span>
        <div className="flex gap-5">
          <div className="size-10 bg-dark-100"></div>
          <div className="size-10 bg-dark-200"></div>
          <div className="size-10 bg-dark-300"></div>
          <div className="size-10 bg-dark-400"></div>
          <br />
          <div className="size-10 bg-light-100 border border-dark-400"></div>
          <div className="size-10 bg-light-200 border border-dark-400"></div>
          <div className="size-10 bg-light-300 border border-dark-400"></div>
          <div className="size-10 bg-light-400 border border-dark-400"></div>
        </div>
      </div>
      <div>
        <span className="block pb-5">Typography</span>
        <div className="flex flex-col gap-5">
          <span className="title-xl">Title xl</span>
          <span className="title-lg">Title lg</span>
          <span className="title-md">Title md</span>
          <span className="title-sm">Title sm</span>
          <span className="title-xs">Title xs</span>
          <span className="text-xl">Text xl</span>
          <span className="text-lg">Text lg</span>
          <span className="text-md">Text md</span>
          <span className="text-sm">Text sm</span>
          <span className="text-xs">Text xs</span>
        </div>
      </div>
      <div>
        <span className="block pb-5">Components</span>
        <div className="flex gap-5 items-baseline">
          <Button>Button</Button>
          <Tag>Tag</Tag>
        </div>
      </div>
    </div>
  )
}
