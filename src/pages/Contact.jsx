import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main>
      <section className="pt-[80px] bg-gradient-to-br from-primary via-primary-container to-primary text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-md">Get in Touch</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">Ready to start your financial journey? Reach out to us today.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div className="card p-xl">
              <h2 className="text-headline-md text-primary mb-lg">Quick Loan Enquiry</h2>
              <form className="flex flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div>
                    <label className="text-label-md text-on-surface mb-xs block">Full Name</label>
                    <input type="text" className="w-full px-md py-sm border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-label-md text-on-surface mb-xs block">Phone Number</label>
                    <input type="tel" className="w-full px-md py-sm border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="text-label-md text-on-surface mb-xs block">Email Address</label>
                  <input type="email" className="w-full px-md py-sm border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-label-md text-on-surface mb-xs block">Loan Type</label>
                  <select className="w-full px-md py-sm border border-outline-variant rounded-lg text-body-md text-on-surface focus:ring-2 focus:ring-secondary focus:border-secondary outline-none">
                    <option value="">Select a loan type</option>
                    <option>Home Loan</option>
                    <option>Vehicle Loan</option>
                    <option>Business Loan</option>
                    <option>Personal Loan</option>
                    <option>Education Loan</option>
                    <option>Property Loan</option>
                    <option>Mudra Loan</option>
                    <option>Solar Finance</option>
                  </select>
                </div>
                <div>
                  <label className="text-label-md text-on-surface mb-xs block">Message</label>
                  <textarea rows={4} className="w-full px-md py-sm border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn-primary">Submit Enquiry</button>
              </form>
            </div>

            <div>
              <div className="card p-xl mb-lg">
                <h2 className="text-headline-md text-primary mb-lg">Contact Information</h2>
                <div className="flex flex-col gap-md">
                  {[
                    { icon: 'call', label: 'Phone', value: '+91 1800-123-4567', desc: 'Mon-Sat, 9:30 AM - 6:30 PM' },
                    { icon: 'mail', label: 'Email', value: 'info@gracefinancial.in', desc: 'We reply within 24 hours' },
                    { icon: 'location_on', label: 'Office Address', value: '123 Business Tower, Bandra Kurla Complex, Mumbai - 400001', desc: 'Visit us during working hours' },
                    { icon: 'schedule', label: 'Working Hours', value: 'Monday - Saturday', desc: '9:30 AM - 6:30 PM' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-md">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-label-md text-on-surface-variant">{item.label}</p>
                        <p className="text-body-md text-primary font-medium">{item.value}</p>
                        <p className="text-label-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-xl">
                <h3 className="text-headline-sm text-primary mb-md">Connect With Us</h3>
                <div className="flex gap-md">
                  {[
                    { icon: 'groups', label: 'Facebook' },
                    { icon: 'diversity_3', label: 'Twitter' },
                    { icon: 'work', label: 'LinkedIn' },
                    { icon: 'play_circle', label: 'YouTube' },
                  ].map((s) => (
                    <a key={s.label} href="#" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label={s.label}>
                      <span className="material-symbols-outlined">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-lg">
                <Link to="https://wa.me/9118001234567" target="_blank" className="btn-premium flex items-center justify-center gap-sm w-full">
                  <span className="material-symbols-outlined">chat</span>
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="rounded-xl overflow-hidden h-[400px] bg-surface-container-high flex items-center justify-center flex-col gap-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-4xl">map</span>
            <p className="text-body-lg">Google Maps Placeholder</p>
            <p className="text-body-sm">123 Business Tower, Bandra Kurla Complex, Mumbai</p>
          </div>
        </div>
      </section>
    </main>
  )
}
