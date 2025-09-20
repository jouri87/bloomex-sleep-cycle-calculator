import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a sleep calculator?",
      answer: "A sleep calculator is a tool that helps you determine the optimal bedtime and wake-up times based on natural sleep cycles. It uses the science of 90-minute sleep cycles to suggest times when you'll naturally wake up feeling more refreshed and alert."
    },
    {
      question: "How many hours of sleep do I need?",
      answer: "Most adults need 7-9 hours of sleep per night, which typically equals 4-6 complete sleep cycles. However, the quality and timing of sleep is just as important as the quantity. Our calculator helps you find the right combination of both."
    },
    {
      question: "What's the best bedtime for students?",
      answer: "Students should aim for 8-9 hours of sleep and maintain consistent sleep schedules. If you need to wake up at 6:30 AM for school, consider going to bed between 9:30-11:00 PM. Use our calculator to find the exact times that work best for your schedule."
    },
    {
      question: "Can this help with night shifts?",
      answer: "Yes! The sleep cycle principle works regardless of when you sleep. Night shift workers can use the calculator to optimize their daytime sleep schedule. Just input your desired sleep or wake time, and follow the same 90-minute cycle recommendations."
    },
    {
      question: "Why do I sometimes feel tired after 8+ hours of sleep?",
      answer: "This often happens when you wake up in the middle of a deep sleep phase. Even with plenty of sleep, poor timing can leave you groggy. Our calculator helps you wake up during lighter sleep phases for better mornings."
    },
    {
      question: "How long does it take to fall asleep?",
      answer: "Most people take 10-20 minutes to fall asleep. Our calculator includes a 15-minute buffer time to account for this. If you typically take longer to fall asleep, consider adjusting your bedtime accordingly."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about sleep cycles and using our calculator effectively.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;