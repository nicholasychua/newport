"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function Footer() {
  const router = useRouter();

  // Function to handle navigation with smooth scroll to top
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after animation completes (reduced to 300ms)
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return (
    <footer className="py-12 border-t border-muted/30 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="https://x.com/nicholasychua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="https://www.linkedin.com/in/nicholas-chua-ba870222b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="https://www.instagram.com/nicholaschuas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" color="#9095a2" />
              </Link>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            designed and built by nicholas chua :)
          </div>
        </div>
      </div>
    </footer>
  )
}
