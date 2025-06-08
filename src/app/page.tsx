"use client";
import { Avatar } from "@/components/ui/avatar"
import { ProjectCard } from "@/components/project-card"
import { ArticleCard } from "@/components/article-card"
import { Footer } from "@/components/footer"
import { Menu, X, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { projects, articles, jobs } from "@/lib/data"
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JobTimeline } from "@/components/job-timeline";
import { DesignShowcase } from "@/components/design-showcase";
import { designImages } from "@/lib/design-data";
import { Header } from "@/components/Header";

type ModeType = "work" | "about" | "writing"

// Define motion components with proper types
const MotionDiv = motion.div as React.ComponentType<React.HTMLAttributes<HTMLDivElement> & {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  layout?: boolean;
}>;

// New component to handle search params
function ModeHandler() {
  const router = useRouter();
  const [mode, setMode] = useState<ModeType>("about");
  const [validMode, setValidMode] = useState<ModeType>("about");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleModeChange = (newMode: ModeType) => {
    if (newMode === validMode || isTransitioning) return;
    
    setIsTransitioning(true);
    setMode(newMode);
    
    // Use a shorter timeout for smoother transitions
    setTimeout(() => {
      setValidMode(newMode);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Header
        center={
          <div className="bg-secondary rounded-full p-1 md:p-1.5 shadow-md flex min-w-0 md:min-w-[240px] w-auto justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => handleModeChange('about')}
              className={`inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium ${validMode === 'about' ? 'bg-white rounded-full shadow-md' : 'text-muted-foreground'}`}
            >
              about
            </button>
            <button 
              onClick={() => handleModeChange('work')}
              className={`inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium ${validMode === 'work' ? 'bg-white rounded-full shadow-md' : 'text-muted-foreground'}`}
            >
              work
            </button>
            <button 
              onClick={() => handleModeChange('writing')}
              className={`inline-block px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium ${validMode === 'writing' ? 'bg-white rounded-full shadow-md' : 'text-muted-foreground'}`}
            >
              writing
            </button>
          </div>
        }
        right={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-10 h-10 md:w-16 md:h-16"
            onClick={() => router.push("/about")}
            style={{ marginRight: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.02)' }}
          >
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: 'auto' }}>
              <circle cx="22" cy="22" r="20" stroke="#A3A3A3" strokeWidth="2.5" fill="none" />
              <circle cx="22" cy="18" r="7.5" stroke="#A3A3A3" strokeWidth="2.5" fill="none" />
              <path d="M10 36c0-6.5 8-8 12-8s12 1.5 12 8" stroke="#A3A3A3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="sr-only">About</span>
          </Button>
        }
      />

      {/* Main content */}
      <main ref={mainRef} className="container mx-auto px-4 pt-28 md:pt-36 pb-24 flex-grow flex flex-col overflow-y-auto">
        {/* Full-width background gradient and blobs */}
        <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[480px] md:h-[560px] z-0 pointer-events-none">
          {/* Soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white opacity-80" />
          {/* Blurred blob top left */}
          <div className="absolute -top-16 -left-20 w-72 md:w-96 h-72 md:h-96 bg-orange-200 rounded-full filter blur-3xl opacity-40" />
          {/* Blurred blob bottom right, softer and more inward */}
          <div className="absolute top-32 right-0 w-[320px] md:w-[420px] h-[320px] md:h-[420px] bg-blue-200 rounded-full filter blur-3xl opacity-20" />
          {/* Downward fade overlay, taller and more gradual */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="relative mx-auto max-w-[560px] w-full z-10">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={mode}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2, 
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
                stiffness: 100
              }}
              className="relative text-center max-w-[560px] pt-16 md:pt-24 pb-12 md:pb-16"
            >
              <h1 className="text-[60px] md:text-[80px] font-serif font-medium leading-none mb-6 md:mb-8 tracking-tight bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                hi, i'm nicholas
              </h1>
              <div className="flex items-center justify-center gap-1 text-gray-500 mb-4 md:mb-6">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <span className="text-base md:text-lg">san francisco, ca</span>
              </div>
              {validMode === 'about' && (
                <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                  engineering and design @ uc berkeley
                  <br />
                  building <a href="https://trysubspace.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-2 underline-offset-2 decoration-muted-foreground">subspace</a> — an ai productivity platform for students.
                </p>
              )}
              {validMode === 'work' && (
                <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">
                  working with startups and unicorns to build products that users will love.
                </p>
              )}
              {validMode === 'writing' && (
                <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto">
                  documenting my thoughts on tech and startups
                  <br />
                  read more on <a href="https://nicholaschua.substack.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-2 underline-offset-2 decoration-muted-foreground">substack</a>.
                </p>
              )}
            </MotionDiv>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <MotionDiv
            key={mode}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 100
            }}
          >
            <ContentSection mode={validMode} />
          </MotionDiv>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function Page() {
  return <ModeHandler />;
}

interface ContentSectionProps {
  mode: ModeType
}

function ContentSection({ mode }: ContentSectionProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isTagsMenuOpen, setIsTagsMenuOpen] = useState(false);
  const tagsMenuRef = useRef<HTMLDivElement>(null);
  
  // Close the tags menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tagsMenuRef.current && !tagsMenuRef.current.contains(event.target as Node)) {
        setIsTagsMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tagsMenuRef]);
  
  // Get all unique tags from articles
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);
  
  // Get all unique categories
  const allCategories = useMemo(() => {
    return ["Startups", "Life Lessons", "Personal", "Tech"];
  }, []);
  
  // Filter articles based on selected tags and categories
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // If no tags or categories selected, show all
      if (selectedTags.length === 0 && selectedCategories.length === 0) return true;
      
      // Check if the article matches selected categories
      const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(article.category);
      
      // Check if the article matches selected tags
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => article.tags.includes(tag));
      
      return matchesCategory && matchesTags;
    });
  }, [selectedTags, selectedCategories]);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategories([]);
  };
  
  // Get color for category badges
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "Startups":
        return "#4f46e5"; // Indigo
      case "Life Lessons":
        return "#0ea5e9"; // Sky blue
      case "Personal":
        return "#f97316"; // Orange
      case "Tech":
        return "#8b5cf6"; // Violet
      default:
        return "#6b7280"; // Gray
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      {mode === "writing" ? (
        <>
          {/* Category Pills */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`
                    py-2 px-5 rounded-full text-sm font-medium transition-all
                    ${selectedCategories.includes(category) 
                      ? 'text-white shadow-sm' 
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200'}
                  `}
                  style={{
                    backgroundColor: selectedCategories.includes(category) 
                      ? getCategoryColor(category)
                      : ''
                  }}
                >
                  {category}
                </button>
              ))}
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="py-2 px-5 rounded-full text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 flex items-center gap-1"
                >
                  <X className="h-3 w-3" /> Clear all
                </button>
              )}
            </div>
          </div>
          
          {/* Tags filter - Popup menu */}
          <div className="mb-8 relative" ref={tagsMenuRef}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 px-4 border-gray-200 shadow-sm"
                  onClick={() => setIsTagsMenuOpen(!isTagsMenuOpen)}
                >
                  <Filter className="h-3.5 w-3.5 text-gray-500" />
                  Filter by tags
                  <ChevronDown className={`h-3.5 w-3.5 text-gray-500 transition-transform ${isTagsMenuOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {selectedTags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500">
                      {selectedTags.length} {selectedTags.length === 1 ? 'tag' : 'tags'} selected
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedTags([])}
                      className="h-8 px-2 text-xs text-gray-500"
                    >
                      Clear
                    </Button>
                  </div>
                )}
              </div>
              
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-1 ml-2 max-w-[300px] overflow-hidden">
                  {selectedTags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {selectedTags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{selectedTags.length - 3} more
                    </Badge>
                  )}
                </div>
              )}
            </div>
            
            <AnimatePresence>
              {isTagsMenuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-10 w-72"
                >
                  <div className="mb-2 pb-2 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-medium text-sm">Select tags</h3>
                    {selectedTags.length > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setSelectedTags([])}
                        className="h-7 text-xs text-gray-500"
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    <div className="flex flex-col gap-1 py-1">
                      {allTags.map(tag => (
                        <div 
                          key={tag} 
                          className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-50"
                          onClick={() => toggleTag(tag)}
                        >
                          <div className={`w-4 h-4 rounded border ${selectedTags.includes(tag) ? 'bg-primary border-primary' : 'border-gray-300'} flex items-center justify-center`}>
                            {selectedTags.includes(tag) && (
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33334 2.5L3.75001 7.08333L1.66667 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
          
          {/* Results count */}
          <div className="mb-6 text-sm text-gray-500">
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            {(selectedCategories.length > 0 || selectedTags.length > 0) && ' with current filters'}
          </div>
          
          {/* Articles grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <MotionDiv
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <ArticleCard article={article} />
                </MotionDiv>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-gray-500 mb-2">No articles match your selected filters.</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearFilters}
                className="mt-2"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Substack CTA */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ width: '100%' }}
            className="mt-20 mb-8 flex flex-col items-center"
          >
            <div className="mb-6 text-gray-500 text-lg text-center">
              check out my full collection of essays on substack
            </div>
            <a
              href="https://nicholaschua.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              style={{ fontSize: '1.1rem', letterSpacing: '0.01em' }}
            >
              Read More on Substack
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </MotionDiv>
        </>
      ) : mode === "about" ? (
        <>
          <JobTimeline jobs={jobs} />
        </>
      ) : (
        <>
          {/* Case Studies Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Case Studies</h2>
            <p className="text-gray-600 mt-2">Selected projects on product design and growth strategies</p>
          </div>

          <div className="space-y-12 mb-16">
            {projects
              .filter((project) => project.type === mode)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>
          <DesignShowcase images={designImages} />
        </>
      )}
    </div>
  )
}
