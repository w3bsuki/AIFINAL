"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { AgentModal } from "./AgentModal"
import { motion } from "framer-motion"

interface Agent {
  id: number
  name: string
  description: string
  skills: string[]
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="border border-white/10 bg-gray-900/30 rounded-lg p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-gray-800/50 spotlight-card h-full"
        onClick={() => setIsModalOpen(true)}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={`https://api.dicebear.com/6.x/bottts/svg?seed=${agent.id}`} />
          <AvatarFallback>{agent.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold mb-2 text-white">{agent.name}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{agent.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {agent.skills.map((skill, index) => (
            <span key={index} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-white border-white/20 hover:bg-white/10 hover:text-primary transition-all duration-300"
        >
          <Eye className="mr-2 h-4 w-4" /> View Demo
        </Button>
      </motion.div>
      <AgentModal agent={agent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

