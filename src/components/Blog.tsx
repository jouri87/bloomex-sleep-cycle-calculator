import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Link } from "react-router-dom";

// Import images
import studentSleepImage from "@/assets/student-sleep-habits.jpg";
import fallingSleepImage from "@/assets/falling-asleep-tips.jpg";
import caffeineEffectsImage from "@/assets/caffeine-sleep-effects.jpg";
import idealSleepImage from "@/assets/ideal-sleep-range.jpg";

const Blog = () => {
  const imageMap: Record<string, string> = {
    "/src/assets/student-sleep-habits.jpg": studentSleepImage,
    "/src/assets/falling-asleep-tips.jpg": fallingSleepImage,
    "/src/assets/caffeine-sleep-effects.jpg": caffeineEffectsImage,
    "/src/assets/ideal-sleep-range.jpg": idealSleepImage,
  };

  return (
    <section id="blog" className="py-16 md:py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sleep Tips & Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert insights and practical advice to help you optimize your sleep and improve your daily performance.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.slug}
                className="border-2 border-border/50 bg-card hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Blog Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={imageMap[post.image]} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  {/* Metadata */}
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link to={`/blog/${post.slug}`}>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;