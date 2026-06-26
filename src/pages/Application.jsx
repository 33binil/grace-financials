import { useState } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link, useSearchParams } from 'react-router-dom'

export default function Application() {
  const [searchParams] = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const loanType = searchParams.get('type') || ''
  const [formRef, formVis] = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      e.target.reset()
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <main className="mt-giant relative">
      {showOverlay && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-md">
          <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 p-xxl rounded-2xl shadow-2xl max-w-md w-full text-center space-y-xl">
            <div className="space-y-lg mt-lg">
              <p className="text-body-lg text-white/80 leading-relaxed">
                Application Form is currently on working so please contact we on through whatsapp
              </p>
              <a href="https://wa.me/919995533809" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-md bg-[#25D366] text-white px-xl py-md rounded-xl text-headline-sm font-semibold hover:shadow-lg hover:brightness-110 transition-all w-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Click to Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .anim-hero { animation: fadeInUp 0.8s ease-out both; }
        .anim-hero-delay { animation: fadeInUp 0.8s ease-out 0.3s both; }
      `}</style>
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-xxl text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="anim-hero text-display-lg mb-md">Apply Now</h1>
          <p className="anim-hero-delay text-body-lg max-w-2xl opacity-90">Submit your loan application and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      <section ref={formRef} className="max-w-container-max mx-auto px-lg -mt-xl" style={revealStyle(formVis)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 bg-surface-container-lowest p-xxl rounded-xl shadow-lg border border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-xl">Loan Application Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Full Name *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full name" type="text" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Date of Birth</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" type="date" />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Phone Number *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your phone number" type="tel" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Email Address *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your email address" type="email" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Type *</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" defaultValue={loanType} required>
                  <option value="">Select loan type</option>
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
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Amount (₹) *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Enter amount" type="number" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Employment Type</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md">
                  <option value="">Select employment type</option>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Business Owner</option>
                  <option>Freelancer</option>
                  <option>Retired</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Monthly Income (₹)</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your monthly income" type="number" />
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Current Address</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full address" rows="2"></textarea>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Additional Notes</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Any specific requirements or details..." rows="3"></textarea>
              </div>
              <div className="md:col-span-2 mt-md">
                <button type="submit" disabled={submitting}
                  className={`w-full py-md rounded-lg text-headline-sm transition-all flex justify-center items-center gap-sm ${
                    submitted ? 'bg-emerald-600 text-white' : 'bg-primary text-on-primary hover:opacity-90'
                  }`}>
                  {submitting ? (
                    <><span className="material-symbols-outlined animate-spin">refresh</span> Submitting...</>
                  ) : submitted ? (
                    <><span className="material-symbols-outlined">check_circle</span> Application Submitted Successfully</>
                  ) : (
                    <>Submit Application <span className="material-symbols-outlined">send</span></>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-xl">
            <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 space-y-lg">
              <h3 className="text-headline-sm text-primary">Required Documents</h3>
              <ul className="space-y-md text-body-md text-on-surface-variant">
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Aadhaar Card / PAN Card
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Address Proof (Utility Bill / Passport)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Income Proof (Salary Slips / IT Returns)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Bank Statements (Last 6 months)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Passport-size Photographs
                </li>
              </ul>
            </div>

            <div className="bg-primary-container p-xl rounded-xl text-on-primary-container space-y-lg">
              <h3 className="text-headline-sm text-white">Need Assistance?</h3>
              <p className="text-body-md opacity-80 text-white">Our loan experts are available to help you with the application process.</p>
              <div className="space-y-md">
                <Link to="/contact" className="flex text-white items-center gap-md text-body-lg hover:underline">
                  <span className="material-symbols-outlined text-white">call</span>
                  +91 97782 92234
                </Link>
                <div className="flex items-start gap-md text-body-lg">
                  <span className="material-symbols-outlined text-white flex-shrink-0">mail</span>
                  <span className="break-all text-white">info.gracefinancialconsultancy@gmail.com</span>
                </div>
              </div>
              <Link to="https://wa.me/919995533809" className="flex items-center gap-md mt-md bg-[#25D366] text-white p-md rounded-lg justify-center hover:shadow-lg transition-all">
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
