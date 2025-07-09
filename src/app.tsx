import { Wand } from 'lucide-react'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button>Hello</Button>
      <br />
      <Button variant={'secondary'}>Hello</Button>
      <Button variant={'outline'}>Hello</Button>
      <Button variant={'ghost'}>Hello</Button>
      <Button variant={'destructive'}>Hello</Button>
      <Button variant={'link'}>Hello</Button>
      <br />
      <Button size={'sm'}>Hello</Button>
      <Button size={'lg'}>Hello</Button>
      <Button size={'icon'}>
        <Wand />
      </Button>
    </div>
  )
}
