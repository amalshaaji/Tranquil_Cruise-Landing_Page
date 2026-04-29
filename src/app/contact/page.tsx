import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-3 pb-12 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-4">
      {/* ─── HEADER SECTION ─── */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 
                      backdrop-blur-md p-5 sm:p-6 md:p-8
                      shadow-xl shadow-black/5
                      transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
        
        <div className="text-xs sm:text-xs font-bold uppercase tracking-wider text-teal/80">
          Contact Us
        </div>
        
        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-sand 
                      leading-tight tracking-tight">
          Let&apos;s plan your<br className="hidden sm:block" /> backwater escape
        </h1>
        
        <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-foreground/70 
                     font-medium sm:font-normal">
          This demo doesn&apos;t send requests to a server. Submitting the form
          triggers a client-side success message only.
        </p>
      </div>

      {/* ─── MAIN CONTENT GRID ─── */}
      <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 lg:grid-cols-[1fr,0.9fr]">
        
        {/* ─── CONTACT FORM SECTION ─── */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 
                       p-5 sm:p-6 md:p-8 backdrop-blur-sm
                       transition-all duration-300
                       hover:border-white/15 hover:bg-white/[0.07]
                       shadow-lg shadow-black/5">
          <ContactForm />
        </div>

        {/* ─── SIDEBAR ─── */}
        <aside className="space-y-4 sm:space-y-5">
          
          {/* ─── QUICK INFO CARD ─── */}
          <div className="rounded-2xl sm:rounded-3xl border border-teal/20 
                         bg-gradient-to-br from-navy/40 to-navy/30
                         backdrop-blur-md p-5 sm:p-6 md:p-8
                         transition-all duration-300 
                         hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10">
            
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
              Quick Info
            </div>
            
            <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
              
              {/* Info Item 1 */}
              <div className="flex items-center justify-between gap-3 
                            pb-3 sm:pb-4 border-b border-white/5
                            group">
                <span className="text-xs sm:text-sm text-foreground/60 font-medium">
                  Response time
                </span>
                <span className="text-xs sm:text-sm font-bold text-teal/90 
                               group-hover:text-teal transition-colors">
                  Within 24h
                </span>
              </div>
              
              {/* Info Item 2 */}
              <div className="flex items-center justify-between gap-3 
                            pb-3 sm:pb-4 border-b border-white/5
                            group">
                <span className="text-xs sm:text-sm text-foreground/60 font-medium">
                  Where we operate
                </span>
                <span className="text-xs sm:text-sm font-bold text-sand/90 
                               group-hover:text-sand transition-colors">
                  Kerala
                </span>
              </div>
              
              {/* Info Item 3 */}
              <div className="flex items-center justify-between gap-3 group">
                <span className="text-xs sm:text-sm text-foreground/60 font-medium">
                  Best experience
                </span>
                <span className="text-xs sm:text-sm font-bold text-sand/90 
                               group-hover:text-sand transition-colors">
                  Backwaters
                </span>
              </div>
              
            </div>
          </div>

          {/* ─── BROWSE CARD ─── */}
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 
                         p-5 sm:p-6 md:p-8 backdrop-blur-sm
                         transition-all duration-300
                         hover:border-white/15 hover:bg-white/[0.07]
                         shadow-lg shadow-black/5">
            
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sand">
              Already know what you want?
            </div>
            
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-foreground/70 font-medium">
              Browse options and share your<span className="hidden sm:inline"> favorites</span>.
            </p>
            
            <Link href="/experience" className="group mt-5 sm:mt-6 block">
              <button 
                className="w-full flex items-center justify-center gap-2
                          rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal to-teal/90
                          px-4 sm:px-6 py-3 sm:py-3.5 
                          text-xs sm:text-sm font-bold text-ink uppercase tracking-wide
                          shadow-lg shadow-teal/30
                          transition-all duration-300
                          hover:shadow-xl hover:shadow-teal/40 hover:scale-105
                          active:scale-95 active:shadow-md
                          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal
                          will-change-transform"
              >
                <span>Go to Experience</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </Link>
          </div>
        </aside>
      </div>

      {/* ─── DECORATIVE ELEMENTS ─── */}
      <div className="mt-12 sm:mt-16 relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-xs sm:text-sm text-foreground/50 font-medium">
          Need help? Check out our <Link href="/faq" className="text-teal hover:text-teal/80 transition-colors underline">FAQ</Link>
        </p>
      </div>
    </main>
  );
}