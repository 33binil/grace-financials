const stories = [
  { name: 'Priya Sharma', role: 'Home Loan', quote: 'Grace Financial made my dream of owning a home come true. Their team guided me through every step, and I got the best interest rate in the market.', rating: 5 },
  { name: 'Rajesh Patel', role: 'Business Loan', quote: 'As a small business owner, getting funding was always a challenge. Grace Financial understood my vision and delivered a customized solution.', rating: 5 },
  { name: 'Ananya Gupta', role: 'Education Loan', quote: 'The support I received for my education loan was exceptional. They made studying abroad possible for me.', rating: 5 },
  { name: 'Vikram Singh', role: 'Vehicle Loan', quote: 'I got my car loan approved in less than 24 hours! The process was completely digital and hassle-free.', rating: 4 },
  { name: 'Sneha Reddy', role: 'Personal Loan', quote: 'When I needed funds urgently for a medical emergency, Grace Financial came through. Fast processing and compassionate service.', rating: 5 },
  { name: 'Amit Kumar', role: 'Home Loan', quote: 'Their expertise in home loan balance transfer saved me thousands. Highly professional and transparent team.', rating: 5 },
]

const caseStudies = [
  { title: 'Home Loan Approval for Young Professional', desc: 'How we helped a 28-year-old marketing professional get a ₹50L home loan with minimal documentation.', result: '₹50L Approved in 48 Hours' },
  { title: 'Business Expansion Funding for MSME', desc: 'A manufacturing unit needed ₹2Cr for expansion. We structured a tailor-made business loan solution.', result: '₹2Cr Sanctioned at 9.5%' },
  { title: 'Education Loan for International Studies', desc: 'Aspiring engineer got full funding for MS in USA including tuition and living expenses.', result: '₹35L Education Loan' },
]

export default function SuccessStories() {
  return (
    <main>
      <section className="pt-[80px] bg-gradient-to-br from-primary via-primary-container to-primary text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-md">Real Stories, Real Financial Growth</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">Discover how we've helped thousands of customers achieve their financial goals</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-xl">
            <span className="text-label-lg text-gold font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-headline-lg text-primary mt-sm">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {stories.map((s) => (
              <div key={s.name} className="card p-xl">
                <div className="flex gap-xs mb-md">
                  {Array.from({ length: s.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-gold text-body-md">star</span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant mb-md italic">"{s.quote}"</p>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-label-md">
                    {s.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-label-md text-primary">{s.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{s.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="text-center mb-xl">
            <h2 className="text-headline-lg text-primary mb-sm">Video Reviews</h2>
            <p className="text-body-lg text-on-surface-variant">Hear directly from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[1, 2, 3].map((v) => (
              <div key={v} className="relative aspect-video rounded-xl bg-surface-container-high group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-md bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-label-md text-white">Customer Story {v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-xl">
            <span className="text-label-lg text-gold font-semibold uppercase tracking-wider">Case Studies</span>
            <h2 className="text-headline-lg text-primary mt-sm">Success Stories in Detail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="card p-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-primary">description</span>
                </div>
                <h3 className="text-headline-sm text-primary mb-sm">{cs.title}</h3>
                <p className="text-body-sm text-on-surface-variant mb-md">{cs.desc}</p>
                <span className="inline-block px-md py-sm bg-emerald/10 text-emerald rounded-lg text-label-md font-semibold">{cs.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="text-center mb-xl">
            <h2 className="text-headline-lg text-primary mb-sm">Moments of Success</h2>
            <p className="text-body-lg text-on-surface-variant">Celebrating milestones with our customers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`aspect-square rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant ${i === 1 || i === 8 ? 'md:col-span-2 md:row-span-1' : ''}`}>
                <span className="material-symbols-outlined text-4xl">image</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
