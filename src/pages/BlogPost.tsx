import { useParams, Navigate, Link } from "react-router-dom";
import { getBlogPostBySlug } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

// Import images
import studentSleepImage from "@/assets/student-sleep-habits.jpg";
import fallingSleepImage from "@/assets/falling-asleep-tips.jpg";
import caffeineEffectsImage from "@/assets/caffeine-sleep-effects.jpg";
import idealSleepImage from "@/assets/ideal-sleep-range.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Update SEO meta tags
  useEffect(() => {
    document.title = post.metaTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.metaDescription);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', post.metaTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', post.metaDescription);
    }

    // Cleanup on unmount
    return () => {
      document.title = "Bloomex Sleep Calculator";
      if (metaDescription) {
        metaDescription.setAttribute('content', "Free sleep calculator to find your ideal bedtime and wake-up time based on natural sleep cycles.");
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', "Bloomex Sleep Calculator");
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', "Free sleep calculator to find your ideal bedtime and wake-up time based on natural sleep cycles.");
      }
    };
  }, [post]);

  const imageMap: Record<string, string> = {
    "/src/assets/student-sleep-habits.jpg": studentSleepImage,
    "/src/assets/falling-asleep-tips.jpg": fallingSleepImage,
    "/src/assets/caffeine-sleep-effects.jpg": caffeineEffectsImage,
    "/src/assets/ideal-sleep-range.jpg": idealSleepImage,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-accent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-lg">
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden">
            <img 
              src={imageMap[post.image]} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            {/* Metadata */}
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric' 
              })}</span>
              <span className="mx-3">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-gray max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br>')
                  .replace(/#{3} (.*?)<br>/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>')
                  .replace(/#{2} (.*?)<br>/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
                  .replace(/#{1} (.*?)<br>/g, '<h1 class="text-3xl font-bold mt-8 mb-6 text-foreground">$1</h1>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/- \*\*(.*?)\*\*:/g, '<li class="mb-2"><strong>$1</strong>:</li>')
                  .replace(/- (.*?):/g, '<li class="mb-2"><strong>$1</strong>:</li>')
                  .replace(/- (.*?)<br>/g, '<li class="mb-1">$1</li>')
                  .replace(/\[(.*?)\]\(\/(.*?)\)/g, '<a href="/" class="text-primary hover:text-primary/80 underline">$1</a>')
                  .replace(/<br><br>/g, '</p><p class="mb-4">')
                  .replace(/^/, '<p class="mb-4">')
                  .replace(/$/, '</p>')
              }} 
            />

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-accent/50 rounded-lg border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Ready to optimize your sleep?</h3>
              <p className="text-muted-foreground mb-4">
                Use our sleep calculator to find your perfect bedtime and wake-up times based on the principles discussed in this article.
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                  Try Sleep Calculator
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 mt-16">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground">
            Bloomex Sleep Calculator – Free tool to improve your sleep. © 2025
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;