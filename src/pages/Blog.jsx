import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All Insights', 'Home Loan Tips', 'Vehicle Finance', 'Loan Guides', 'Business Growth', 'Credit Scoring']

const posts = [
  { title: 'Essential Guide to Home Loan Eligibility in 2026', excerpt: 'Understand the key factors that determine your home loan eligibility and how to improve your chances of approval.', category: 'Home Loan Tips', date: 'June 12, 2026', image: 'article', featured: true },
  { title: '5 Tips for Getting the Best Car Loan Interest Rates', excerpt: 'Learn how to negotiate better rates and save thousands on your vehicle loan.', category: 'Vehicle Finance', date: 'June 10, 2026', image: 'article' },
  { title: 'How to Improve Your CIBIL Score Before Applying for a Loan', excerpt: 'Simple steps to boost your credit score and increase your loan approval chances.', category: 'Credit Scoring', date: 'June 8, 2026', image: 'article' },
  { title: 'Business Loan vs. Personal Loan: Which is Right for You?', excerpt: 'Compare the pros and cons to make an informed decision for your funding needs.', category: 'Loan Guides', date: 'June 5, 2026', image: 'article' },
  { title: 'Top Home Renovation Trends That Add Value to Your Property', excerpt: 'Discover which home improvements offer the best return on investment.', category: 'Home Loan Tips', date: 'June 3, 2026', image: 'article' },
  { title: 'MSME Loan Schemes: A Complete Guide for Small Business Owners', excerpt: 'Everything you need to know about government-backed MSME loan programs.', category: 'Business Growth', date: 'June 1, 2026', image: 'article' },
  { title: 'Understanding the Loan Against Property Process', excerpt: 'A step-by-step breakdown of how to leverage your property for funding.', category: 'Loan Guides', date: 'May 28, 2026', image: 'article' },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Insights')

  const featured = posts.find(p => p.featured)
  const filtered = activeCategory === 'All Insights' ? posts.filter(p => !p.featured) : posts.filter(p => p.category === activeCategory && !p.featured)

  return (
    <main>
      <section className="pt-[80px] bg-surface py-xxl border-b border-outline-variant/20">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
            <div>
              <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-sm">Financial Insights</h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">Expert guidance and strategic tips to help you navigate the complexities of modern personal and business finance.</p>
            </div>
            <div className="relative w-full md:w-[400px]">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-xl pr-lg py-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-body-md" placeholder="Search for articles..." type="text" />
            </div>
          </div>
          <div className="flex gap-sm mt-xl overflow-x-auto no-scrollbar py-sm">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-lg py-sm rounded-full text-label-md whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-white border border-outline-variant text-on-surface-variant hover:bg-surface-container'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeCategory === 'All Insights' && featured && (
        <section className="py-xxl">
          <div className="container-max">
            <div className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden custom-shadow transition-all duration-500 cursor-pointer">
              <div className="md:w-3/5 h-[300px] md:h-[500px] bg-surface-container-high flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant">featured_article</span>
              </div>
              <div className="md:w-2/5 p-xl md:p-giant flex flex-col justify-center">
                <span className="inline-block px-sm py-xs bg-secondary-fixed text-on-secondary-fixed text-label-sm font-bold uppercase tracking-wider mb-md rounded">{featured.category}</span>
                <h2 className="text-headline-md md:text-headline-lg text-primary mb-sm leading-tight">{featured.title}</h2>
                <p className="text-body-md text-on-surface-variant mb-md">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-label-sm text-on-surface-variant">{featured.date}</span>
                  <span className="text-label-lg text-secondary flex items-center gap-xs">Read More<span className="material-symbols-outlined text-body-md">arrow_forward</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={activeCategory === 'All Insights' ? 'pb-xxl' : 'py-xxl'}>
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-xl text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-sm">article</span>
              <p className="text-body-lg">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {filtered.map((post) => (
                <div key={post.title} className="card overflow-hidden group hover:custom-shadow transition-all duration-300">
                  <div className="h-48 bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant">{post.image}</span>
                  </div>
                  <div className="p-lg">
                    <span className="text-label-sm text-secondary font-semibold uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-headline-sm text-primary mt-xs mb-sm leading-snug">{post.title}</h3>
                    <p className="text-body-sm text-on-surface-variant mb-md line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-label-sm text-on-surface-variant">{post.date}</span>
                      <Link to="/blog" className="text-label-lg text-secondary flex items-center gap-xs group-hover:text-primary transition-colors">
                        Read More
                        <span className="material-symbols-outlined text-body-md">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-primary-container text-white text-center">
        <div className="container-max max-w-2xl">
          <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-sm">mail</span>
          <h2 className="text-headline-lg mb-sm">Stay Updated with Financial Tips</h2>
          <p className="text-body-lg text-on-primary-container mb-xl">Get the latest insights and expert advice delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-md max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-lg py-md rounded-lg text-body-md text-on-surface bg-white outline-none" required />
            <button type="submit" className="btn-premium whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  )
}
