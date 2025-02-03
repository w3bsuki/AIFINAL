import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Agent {
  id: number
  name: string
  description: string
  skills: string[]
}

interface AgentModalProps {
  agent: Agent
  isOpen: boolean
  onClose: () => void
}

export function AgentModal({ agent, isOpen, onClose }: AgentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">{agent.name}</DialogTitle>
          <DialogDescription className="text-gray-400">{agent.description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Avatar className="w-48 h-48 mx-auto mb-4">
              <AvatarImage src={`https://api.dicebear.com/6.x/bottts/svg?seed=${agent.id}`} />
              <AvatarFallback>{agent.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Demo Video Placeholder
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gradient">Specifications</h3>
            <table className="w-full mb-4">
              <tbody>
                <tr>
                  <td className="font-semibold text-gray-400">Version:</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td className="font-semibold text-gray-400">Language Models:</td>
                  <td>GPT-4, BERT</td>
                </tr>
                <tr>
                  <td className="font-semibold text-gray-400">Integrations:</td>
                  <td>Salesforce, HubSpot, Slack</td>
                </tr>
                <tr>
                  <td className="font-semibold text-gray-400">Training Data:</td>
                  <td>Proprietary + Public Datasets</td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-lg font-semibold mb-2 text-gradient">Pricing Tiers</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h4 className="font-semibold">Basic</h4>
                <p className="text-2xl font-bold text-primary">$99/mo</p>
              </div>
              <div className="bg-primary p-4 rounded-lg text-center">
                <h4 className="font-semibold">Pro</h4>
                <p className="text-2xl font-bold">$299/mo</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <h4 className="font-semibold">Enterprise</h4>
                <p className="text-lg">Custom</p>
              </div>
            </div>
            <Button className="w-full mb-4 bg-primary hover:bg-primary/80">Live Chat</Button>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white" />
              <Input placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white" />
              <Textarea placeholder="Message" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
                Request Custom Demo
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

