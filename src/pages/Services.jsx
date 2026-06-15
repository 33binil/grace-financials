import { Link } from 'react-router-dom'

const loanCategories = [
  { icon: 'directions_car', title: 'Vehicle Loan', subtitle: 'Cars, SUVs, Commercial', desc: '24-hour processing, competitive interest rates, flexible tenure up to 7 years.', features: ['New & Used Cars', 'SUV Financing', 'Commercial Vehicles', 'Quick Approval'] },
  { icon: 'home', title: 'Home Loan', subtitle: 'Purchase, Renovation, Balance Transfer', desc: 'Make your dream home a reality with our tailored home loan solutions.', features: ['Home Purchase', 'Renovation Loans', 'Balance Transfer', 'NRI Home Loans'] },
  { icon: 'estate', title: 'Property Loan', subtitle: 'Residential, Commercial', desc: 'Unlock the value of your property with flexible loan against property options.', features: ['Residential Property', 'Commercial Property', 'Lease Rental', 'Top-up Loans'] },
  { icon: 'account_balance', title: 'Personal Loan', subtitle: 'Medical, Wedding, Education', desc: 'Instant personal loans for life\'s important moments with minimal documentation.', features: ['Medical Emergency', 'Wedding Expenses', 'Travel Loans', 'Debt Consolidation'] },
  { icon: 'business', title: 'Business Loan', subtitle: 'MSME, Startup, Working Capital', desc: 'Fuel your business growth with customized funding solutions.', features: ['MSME Loans', 'Startup Funding', 'Working Capital', 'Equipment Finance'] },
  { icon: 'school', title: 'Education Loan', subtitle: 'Study Abroad, Tuition', desc: 'Invest in your future with education loans covering tuition and living expenses.', features: ['Study in India', 'Study Abroad', 'Tuition Fees', 'Living Expenses'] },
  { icon: 'handshake', title: 'Mudra Loan', subtitle: 'Shishu, Kishor, Tarun', desc: 'Government-backed loans for small businesses and entrepreneurs.', features: ['Shishu (Up to 50K)', 'Kishor (50K-5L)', 'Tarun (5L-10L)', 'Quick Processing'] },
  { icon: 'solar_power', title: 'Solar Finance', subtitle: 'Rooftop, EV Charging', desc: 'Green financing solutions for sustainable energy projects up to 100 Crore.', features: ['Rooftop Solar', 'EV Charging', 'Commercial Solar', 'Green Projects'] },
]

export default function Services() {
  return (
    <main>
      <section className="pt-[80px] bg-gradient-to-br from-primary via-primary-container to-primary text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-md">Financial Solutions Tailored For Every Need</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">
            From vehicle loans to solar finance, we offer a comprehensive range of financial products designed to meet your unique requirements.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {loanCategories.map((loan) => (
              <div key={loan.title} className="card p-xl group hover:custom-shadow transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{loan.icon}</span>
                </div>
                <span className="text-label-sm text-gold font-semibold uppercase tracking-wider">{loan.subtitle}</span>
                <h3 className="text-headline-sm text-primary mt-xs mb-sm">{loan.title}</h3>
                <p className="text-body-sm text-on-surface-variant mb-md">{loan.desc}</p>
                <div className="flex flex-wrap gap-sm mb-md">
                  {loan.features.map((f) => (
                    <span key={f} className="px-sm py-xs bg-surface-container-low rounded-full text-label-sm text-on-surface-variant">{f}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-block text-center w-full">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white text-center">
        <div className="container-max">
          <h2 className="text-headline-lg mb-md">Not Sure Which Loan is Right for You?</h2>
          <p className="text-body-lg text-on-primary-container max-w-xl mx-auto mb-xl">
            Our expert advisors will help you find the perfect financial solution for your needs.
          </p>
          <Link to="/contact" className="btn-premium text-lg">Speak to an Advisor</Link>
        </div>
      </section>
    </main>
  )
}
