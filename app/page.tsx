import { Button } from "@/components/ui/button"
import { AgentGrid } from "@/components/AgentGrid"
import { Chatbot } from "@/components/Chatbot"
import { ArrowRight, BarChart, Zap, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section with Chatbot */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent opacity-20 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <Chatbot />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="flex select-none py-2 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl justify-center mb-12">
            <span
              data-content="Why"
              className="before:animate-gradient-background-1 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                Why
              </span>
            </span>
            <span
              data-content="Choose"
              className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                Choose
              </span>
            </span>
            <span
              data-content="Our AI Agents?"
              className="before:animate-gradient-background-3 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                Our AI Agents?
              </span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Our AI agents process tasks at superhuman speeds, delivering results in record time.",
              },
              {
                icon: BarChart,
                title: "Continuous Learning",
                description:
                  "Agents evolve and improve with each interaction, constantly enhancing their capabilities.",
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "Bank-level encryption and privacy measures keep your data safe and secure.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-white/10 p-6 rounded-lg backdrop-blur-sm spotlight-card transition-all duration-300 hover:bg-gray-800/50"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 opacity-75" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="flex select-none py-2 text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl justify-center mb-12">
            <span
              data-content="Hire"
              className="before:animate-gradient-background-1 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-1-hire to-gradient-1-hire animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                Hire
              </span>
            </span>
            <span
              data-content="a"
              className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-2-hire to-gradient-2-hire animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                a
              </span>
            </span>
            <span
              data-content="Pro"
              className="before:animate-gradient-background-3 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
            >
              <span className="from-gradient-3-hire to-gradient-3-hire animate-gradient-foreground-3 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                Pro
              </span>
            </span>
          </h2>
          <AgentGrid />
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 transition-all duration-300"
            >
              View All Agents <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Revolutionize Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the AI revolution today and stay ahead of the competition. Our AI agents are ready to transform your
            operations.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

