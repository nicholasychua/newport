import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectPage() {
  const project = projects.find((p) => p.id === "newsela-product-card")

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Link href="/?mode=work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to work</span>
        </Link>
      </div>
      
      {/* Hero Image Section */}
      <div className="w-full max-w-4xl mx-auto mb-10 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-2">Instructional resources that connect and deliver</h1>
            <p className="text-base text-gray-600 max-w-3xl">
              Teach skill-building strategies key skills without ever sacrificing engagement 
              with rigorous, standards-aligned activities, quizzes and resources that connect 
              with students' interests, background knowledge, and lived experiences.
            </p>
          </div>
          <div className="aspect-[16/9] relative">
            <Image 
              src="/newsela/images/product-card-hero.jpg" 
              alt="Instructional resources that connect and deliver" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Brand icon + title section */}
      <div className="bg-white pb-12 pt-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 bg-green-600 rounded-md flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">The Product Card</h2>
          </div>
          
          <div className="flex items-center text-gray-500 mb-10">
            <span>Newsela</span>
            <span className="mx-2">•</span>
            <span>February 2024</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/2">
              <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
                For prospective users, the product card is a key
                element in the Newsela interface, but functionally,
                it presented several issues; it doesn't fully
                communicate the efficiency of the platform or the
                use cases of several features. Here's what could
                change.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="mb-10">
                    <h3 className="font-medium uppercase text-gray-600 mb-3">Team</h3>
                    <p className="text-lg">Nicholas Chua</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium uppercase text-gray-600 mb-3">Role</h3>
                    <p className="text-lg">Product Manager</p>
                  </div>
                </div>
                
                <div>
                  <div>
                    <h3 className="font-medium uppercase text-gray-600 mb-3">Interests</h3>
                    <p className="mb-1">Product Management</p>
                    <p>User Interface Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Problem Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-xl font-medium uppercase mb-4">Problem</h2>
          <p className="text-lg mb-4">
            The product card is an essential portion of Newsela's website as an
            interactive way to learn more about the product. <span className="font-bold">However, the
            message and website features aren't communicated clearly</span>.
          </p>
          <p className="text-lg">
            Could we redesign the card to leverage the short-attention span of
            new users to communicate the ease-of-use of the product?
          </p>
        </div>

        {/* Interface with Numbers Image */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="aspect-[16/9] relative">
            <Image 
              src="/newsela/images/interface-numbered.png" 
              alt="Newsela interface with numbered annotations" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>

        {/* Numbered Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
              1
            </div>
            <div>
              <p className="text-gray-700">
                Long title descriptions and all bold words <span className="font-bold">hinder the main message</span> that is conveyed for users quickly scrolling through the platform at a glance.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
              3
            </div>
            <div>
              <p className="text-gray-700">
                The static page lacks direction with multiple stimuli for the user and <span className="font-bold">opens opportunity for dynamic short-form videos</span> showing how the product works.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
              2
            </div>
            <div>
              <p className="text-gray-700">
                The side category descriptions <span className="font-bold">does not communicate the actual feature that is being showcased.</span> The title cards do not hint at the actual Newsela feature.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold">
              4
            </div>
            <div>
              <p className="text-gray-700">
                Newsela already makes a multitude of short form content. There isn't any call to action, so we should connect the user to a hub <span className="font-bold">showcasing all of our other resources.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Research Section - now positioned below numbered problems */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Research</h2>
          <p className="text-lg mb-4">
            In the current day and age, attention span is everything. We want to
            communicate large amounts of information in the least amount of time
            to keep users hooked onto the product. As a youth myself, I
            understand this firsthand, but let's see what others have to say.
          </p>
          <p className="text-lg mb-4">
            After digging in with user interviews and comparing other e-learning
            platforms, I noticed the use of short form content being utilized.
            <span className="font-bold"> Consumers now are hooked into platforms like TikTok due to its
            short form factor.</span> But how can be utilize this knowledge onto our
            platform?
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h3 className="text-xl font-medium uppercase mb-4">My Vision</h3>
            <p className="text-lg">
              I wanted to form a system similar to TikTok to use short form
              content for learning. Since users know the videos are short, they are
              more inclined to watch them, incentivizing them to spend more time
              learning about our product.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-medium">Process</h2>
          <p>
            The product card is a visualization of instructional resources, but doesn't seem to match the rest of the interface design and branding elements.
          </p>
          <p>
            The card draws on Newsela's color palette and components, but lacks some design consistency when compared to similar design elements.
          </p>
        </div>

        {/* Mockups */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h3 className="text-xl font-medium mb-6">Instructional resources that connect and deliver</h3>
            <div className="aspect-video relative">
              <Image 
                src="/newsela/images/product-card-detail.jpg" 
                alt="Product card detail" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-medium mb-4">Analysis</h3>
            <p className="text-muted-foreground mb-4">
              The size of the image + ratio (1:1) is unintentionally creating a visual focal point that is disrupting the hierarchy of the layout.
            </p>
            <p className="text-muted-foreground mb-4">
              The "product card" seems to be inconsistent with other elements on the page, along with the design system.
            </p>
            <p className="text-muted-foreground">
              The layout encourages left-to-right scanning which is perfect for users who engage with the "Try It" heading, but it's too close to the image, causing the user to skip over it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Solution</h3>
            <p className="text-muted-foreground mb-4">
              The image was resized to a proper rectangle ratio to create balance in the layout, making room for the updated badges.
            </p>
            <p className="text-muted-foreground mb-4">
              Content was positioned to maintain logical left-to-right scanning, with a larger button and description text that improves readability.
            </p>
            <p className="text-muted-foreground">
              Adjusted the call to action to have better placement and more emphasis by placing it below the primary content.
            </p>
          </div>
        </div>

        {/* Implementation Examples */}
        <div className="space-y-16 mb-16">
          <div>
            <h3 className="text-xl font-medium mb-6">Email your team an article</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <Image 
                  src="/newsela/images/email-example.jpg" 
                  alt="Email your team example" 
                  width={400}
                  height={280}
                  className="w-full h-auto" 
                />
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  Lighter background color to make sure the feature cards stand out compared to the content cards.
                </p>
                <p className="text-muted-foreground">
                  Visual assets are designed to make the feature clearer to understand, which improves usability.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <Image 
                  src="/newsela/images/featured-products.jpg" 
                  alt="Featured products example" 
                  width={400}
                  height={280}
                  className="w-full h-auto" 
                />
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  The featured products have a similar card styling to provide a consistent experience.
                </p>
                <p className="text-muted-foreground">
                  Clear, consistent spacing helps differentiate various UI elements.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Isolating Features Separate Materials from Other E-Learning Companies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <Image 
                  src="/newsela/images/isolating-features.jpg" 
                  alt="Isolating features example" 
                  width={400}
                  height={280}
                  className="w-full h-auto" 
                />
              </div>
              <div>
                <p className="text-muted-foreground">
                  The "block style" card creates space for a featured list, allowing users to quickly scan the benefits and differentiators. This approach highlights each feature's individual value while maintaining a cohesive card structure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Static Card Mockup */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Static Card Mockup</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="aspect-video relative">
              <Image 
                src="/newsela/images/static-mockup.jpg" 
                alt="Static card mockup" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Takeaways */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-medium">Takeaways</h2>
          <p>
            The product card is much more user-friendly and visually appealing, but does it fit the design system? The product card is now consistent with other UI elements, and the use of Newsela's color palette ensures visual harmony with the rest of the interface.
          </p>
          <p>
            Design consistency means users can more easily predict how to interact with different components. The clear hierarchy and improved readability helps users quickly understand the value proposition of each feature.
          </p>
          <p>
            Implementing these design changes across similar elements will create a more cohesive product experience, making the platform feel more intuitive and professional.
          </p>
        </div>

        {/* Implementation details (additional section from image) */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-medium">Implementation</h2>
          <p>
            The static card mockup is a great starting point for the revised product card design. The clearer visual hierarchy, consistent spacing, and improved content placement makes features more discoverable and understandable.
          </p>
          <p>
            Key design principles applied here include:
          </p>
          <ul>
            <li>Consistent spacing between elements (12px, 16px, 24px)</li>
            <li>Clearer visual hierarchy with improved typography and sizing</li>
            <li>Improved component alignment with the rest of the interface</li>
            <li>Responsive layout that works well on various screen sizes</li>
          </ul>
          <p>
            Implementation details help teams understand the specific design decisions and how they contribute to a project's success.
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 my-12">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild className="px-8 py-6 text-base rounded-full">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Case Study
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
} 