const values = [
  { icon: 'verified_user', title: 'Trust', desc: 'Building lasting relationships through integrity and reliable financial guidance.' },
  { icon: 'transparency', title: 'Transparency', desc: 'Clear terms, no hidden charges, and complete visibility throughout the process.' },
  { icon: 'support_agent', title: 'Customer Focus', desc: 'Your financial goals are our priority. Personalized solutions for every client.' },
  { icon: 'workspace_premium', title: 'Professionalism', desc: 'Industry expertise combined with ethical practices to deliver exceptional service.' },
  { icon: 'trending_up', title: 'Financial Growth', desc: 'Committed to helping you build wealth and achieve long-term financial success.' },
]

const team = [
  { name: 'Arun Mehta', role: 'Founder & CEO', initials: 'AM' },
  { name: 'Neha Kapoor', role: 'Head of Operations', initials: 'NK' },
  { name: 'Vikram Singh', role: 'Chief Financial Advisor', initials: 'VS' },
  { name: 'Priya Desai', role: 'Loan Processing Lead', initials: 'PD' },
]

export default function About() {
  return (
    <main>
      <section className="pt-[80px] bg-gradient-to-br from-primary via-primary-container to-primary text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-md">About Grace Financial</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">
            Empowering individuals and businesses across India with accessible, transparent, and tailored financial solutions since 2015.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-giant items-center">
            <div>
              <span className="text-label-lg text-gold font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-headline-lg text-primary mt-sm mb-md">A Legacy of Financial Excellence</h2>
              <p className="text-body-md text-on-surface-variant mb-md leading-relaxed">
                Founded in 2015, Grace Financial Consultancy began with a simple mission: to democratize access to quality financial services across India. What started as a small team of dedicated advisors has grown into a trusted financial partner serving over 50,000 satisfied customers.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Today, we work with 15+ leading banks and financial institutions to offer the best loan products, ensuring our clients receive competitive rates and seamless service. Our commitment to transparency, integrity, and customer success remains at the heart of everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="card p-xl text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-sm">flag</span>
                <h3 className="text-headline-sm text-primary">Our Mission</h3>
                <p className="text-body-sm text-on-surface-variant mt-sm">To simplify financial access and empower every Indian to achieve their dreams.</p>
              </div>
              <div className="card p-xl text-center mt-lg">
                <span className="material-symbols-outlined text-gold text-4xl mb-sm">visibility</span>
                <h3 className="text-headline-sm text-primary">Our Vision</h3>
                <p className="text-body-sm text-on-surface-variant mt-sm">To be India's most trusted financial consultancy, known for integrity and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-xl">
            <h2 className="text-headline-lg text-primary mb-sm">Our Core Values</h2>
            <p className="text-body-lg text-on-surface-variant">The principles that guide every interaction and decision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg">
            {values.map((v) => (
              <div key={v.title} className="card p-xl text-center hover:custom-shadow transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-md">
                  <span className="material-symbols-outlined text-primary text-2xl">{v.icon}</span>
                </div>
                <h3 className="text-headline-sm text-primary mb-sm">{v.title}</h3>
                <p className="text-body-sm text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            {[
              { value: '50,000+', label: 'Happy Customers' },
              { value: '₹500+ Cr', label: 'Loans Disbursed' },
              { value: '15+', label: 'Bank Partners' },
              { value: '10+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-display-lg-mobile md:text-display-lg font-bold text-secondary-fixed">{s.value}</p>
                <p className="text-body-md text-on-primary-container">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-xl">
            <h2 className="text-headline-lg text-primary mb-sm">Meet Our Leadership</h2>
            <p className="text-body-lg text-on-surface-variant">Experienced professionals dedicated to your financial success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {team.map((m) => (
              <div key={m.name} className="card p-xl text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-md">
                  <span className="text-headline-lg text-primary font-bold">{m.initials}</span>
                </div>
                <h3 className="text-headline-sm text-primary">{m.name}</h3>
                <p className="text-body-sm text-on-surface-variant">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-xl">
            <h2 className="text-headline-lg text-primary mb-sm">Our Office</h2>
            <p className="text-body-lg text-on-surface-variant">A professional environment where your financial goals take shape</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-4xl">image</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
