'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"

{/* 
  TEMPLATE PAGE: Home
  This is a template home page.
  Replace all content with content that suits the users request.
*/}
export default function Home() {
  const { toast } = useToast()
  return (
    <div className="min-h-full">

      <section className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Welcome to Your App
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Build something amazing with this modern, customizable template. Get started by exploring the features below.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              onClick={() => toast({
                title: "Welcome!",
                description: "Thanks for checking out this template.",
              })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
