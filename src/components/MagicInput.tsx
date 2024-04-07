import { Input } from './ui/input'

const MagicInput = () => {
  return (
    <Input
      className="absolute bottom-8 px-12 text-xl left-0 right-0 mx-auto w-2/3 h-12 rounded-full border bg-green-100 shadow-xl shadow-green-500/50"
      type="text"
      placeholder="Feel the Magic"
    />
  )
}

export default MagicInput
