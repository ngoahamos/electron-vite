import { toast } from 'sonner'
import { ThemeProvider } from '@renderer/components/theme-provider'
import { ModeToggle } from '@renderer/components/mode-toggle'
import { Button } from '@renderer/components/ui/button'
import { Toaster } from '@renderer/components/ui/sonner'

function App(): React.JSX.Element {
  const ipcHandle = (): void => {
    window.electron.ipcRenderer.send('ping')
    toast.success('Ping sent to main process!')
  }

  return (
    <ThemeProvider>
      <div className="flex items-center p-4">
        <div className="flex justify-center w-full">
          <h1>Electron + Vite + React + Tailwind + Shadcn + TypeScript + Dark Mode!</h1>
        </div>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>

      <div className="flex items-center justify-center w-full m-4">
        <Button variant={'default'} onClick={ipcHandle}>
          Ping IPC!
        </Button>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
