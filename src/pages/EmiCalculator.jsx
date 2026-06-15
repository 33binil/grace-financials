import { useState } from 'react'
import { Link } from 'react-router-dom'

function calculateEMI(principal, rate, tenure, tenureUnit) {
  const months = tenureUnit === 'years' ? tenure * 12 : tenure
  const monthlyRate = rate / 12 / 100
  if (monthlyRate === 0) return { emi: principal / months, totalInterest: 0, totalPayable: principal }
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  const totalPayable = emi * months
  const totalInterest = totalPayable - principal
  return { emi, totalInterest, totalPayable }
}

function generateSchedule(principal, rate, tenure, tenureUnit) {
  const months = tenureUnit === 'years' ? tenure * 12 : tenure
  const monthlyRate = rate / 12 / 100
  if (monthlyRate === 0) return []
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  const schedule = []
  let balance = principal
  for (let i = 1; i <= months && i <= 12; i++) {
    const interest = balance * monthlyRate
    const principalPaid = emi - interest
    balance -= principalPaid
    schedule.push({ month: i, emi: Math.round(emi), principal: Math.round(principalPaid), interest: Math.round(interest), balance: Math.round(Math.max(balance, 0)) })
  }
  return schedule
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(1000000)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(5)
  const [tenureUnit, setTenureUnit] = useState('years')

  const { emi, totalInterest, totalPayable } = calculateEMI(amount, rate, tenure, tenureUnit)
  const schedule = generateSchedule(amount, rate, tenure, tenureUnit)
  const principalPercent = (amount / totalPayable) * 100

  return (
    <main>
      <section className="pt-[80px] bg-gradient-to-br from-primary via-primary-container to-primary text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-md">EMI Calculator</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">Plan your finances better with our easy-to-use EMI calculator</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div className="card p-xl">
              <h2 className="text-headline-md text-primary mb-lg">Loan Details</h2>

              <div className="mb-lg">
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">Loan Amount</span>
                  <span className="text-headline-sm text-primary">₹{amount.toLocaleString('en-IN')}</span>
                </label>
                <input type="range" min="100000" max="10000000" step="50000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  <span>₹1,00,000</span>
                  <span>₹1,00,00,000</span>
                </div>
              </div>

              <div className="mb-lg">
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">Interest Rate</span>
                  <span className="text-headline-sm text-primary">{rate}%</span>
                </label>
                <input type="range" min="1" max="20" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>

              <div className="mb-lg">
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">Tenure</span>
                  <span className="text-headline-sm text-primary">{tenure} {tenureUnit}</span>
                </label>
                <input type="range" min="1" max={tenureUnit === 'years' ? 30 : 360} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  <span>1</span>
                  <span>{tenureUnit === 'years' ? 30 : 360}</span>
                </div>
                <div className="flex gap-sm mt-sm">
                  <button onClick={() => { setTenureUnit('years'); setTenure(5) }} className={`px-md py-sm rounded-lg text-label-md transition-colors ${tenureUnit === 'years' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}`}>Years</button>
                  <button onClick={() => { setTenureUnit('months'); setTenure(60) }} className={`px-md py-sm rounded-lg text-label-md transition-colors ${tenureUnit === 'months' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}`}>Months</button>
                </div>
              </div>
            </div>

            <div className="card p-xl">
              <h2 className="text-headline-md text-primary mb-lg">Loan Summary</h2>

              <div className="text-center mb-lg">
                <p className="text-label-lg text-on-surface-variant mb-xs">Monthly EMI</p>
                <p className="text-display-lg-mobile md:text-display-lg text-primary font-bold">₹{Math.round(emi).toLocaleString('en-IN')}</p>
              </div>

              <div className="flex justify-center mb-xl">
                <div className="relative w-40 h-40">
                  <div className="w-full h-full rounded-full" style={{ background: `conic-gradient(#0b2147 0% ${principalPercent}%, #3755c3 ${principalPercent}% 100%)` }}></div>
                  <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center">
                    <span className="text-label-sm text-on-surface-variant">Principal</span>
                    <span className="text-label-sm font-bold text-primary">{Math.round(principalPercent)}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-md">
                <div className="p-md bg-surface-container-low rounded-lg text-center">
                  <p className="text-label-sm text-on-surface-variant">Principal Amount</p>
                  <p className="text-headline-sm text-primary">₹{amount.toLocaleString('en-IN')}</p>
                </div>
                <div className="p-md bg-surface-container-low rounded-lg text-center">
                  <p className="text-label-sm text-on-surface-variant">Total Interest</p>
                  <p className="text-headline-sm text-primary">₹{Math.round(totalInterest).toLocaleString('en-IN')}</p>
                </div>
                <div className="p-md bg-surface-container-low rounded-lg text-center col-span-2">
                  <p className="text-label-sm text-on-surface-variant">Total Payable</p>
                  <p className="text-headline-sm text-primary">₹{Math.round(totalPayable).toLocaleString('en-IN')}</p>
                </div>
              </div>

              <Link to="/contact" className="btn-primary block text-center mt-lg">Apply for this Loan</Link>
            </div>
          </div>

          {schedule.length > 0 && (
            <div className="card p-xl mt-xl overflow-x-auto">
              <h3 className="text-headline-md text-primary mb-md">Amortization Schedule (First 12 Months)</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="py-sm px-xs text-label-md text-on-surface-variant">Month</th>
                    <th className="py-sm px-xs text-label-md text-on-surface-variant">EMI</th>
                    <th className="py-sm px-xs text-label-md text-on-surface-variant">Principal</th>
                    <th className="py-sm px-xs text-label-md text-on-surface-variant">Interest</th>
                    <th className="py-sm px-xs text-label-md text-on-surface-variant">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.month} className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                      <td className="py-sm px-xs text-body-sm text-on-surface">{row.month}</td>
                      <td className="py-sm px-xs text-body-sm text-on-surface">₹{row.emi.toLocaleString('en-IN')}</td>
                      <td className="py-sm px-xs text-body-sm text-on-surface">₹{row.principal.toLocaleString('en-IN')}</td>
                      <td className="py-sm px-xs text-body-sm text-on-surface">₹{row.interest.toLocaleString('en-IN')}</td>
                      <td className="py-sm px-xs text-body-sm text-on-surface">₹{row.balance.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
