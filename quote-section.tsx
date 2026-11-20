'use client'
import { useState, type FormEvent } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function QuoteSection({ whatsappHref, services }: { whatsappHref: string; services: string[] }) {
  const [message, setMessage] = useState('')
  function prepareQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) || '').trim()
    setMessage([`Hello Prime Clean, my name is ${value('name')}.`, `Please quote for ${value('service')} in ${value('area')}.`, `Preferred date: ${value('date') || 'Flexible'}.`, value('phone') && `Contact number: ${value('phone')}.`].filter(Boolean).join('\n'))
  }
  return <section className="quote-section" id="quote" aria-labelledby="quote-heading"><div className="wrap quote-layout"><div className="quote-intro"><div className="eyebrow">Booking enquiries</div><h2 id="quote-heading">Get a cleaning quote.</h2><p>Tell us what needs cleaning and where. We’ll confirm coverage, price and availability with you on WhatsApp before you book.</p></div><form className="quote-form" onSubmit={prepareQuote} onChange={()=>setMessage('')}><label>Your name<input required name="name" autoComplete="name" maxLength={80}/></label><label>Town or neighbourhood<input required name="area" autoComplete="address-level2" maxLength={120}/></label><label>Cleaning service<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(service=><option key={service}>{service}</option>)}<option>Help me choose</option></select></label><label>Preferred date (optional)<input type="date" name="date"/></label><label>Contact number (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={28}/></label><div className="quote-submit"><button className="pill primary" type="submit">Prepare my request <ArrowRight size={16}/></button></div><div className="quote-review" aria-live="polite">{message ? <><strong>Your message</strong><p>{message}</p><a className="pill primary" target="_blank" rel="noopener noreferrer" href={`${whatsappHref}?text=${encodeURIComponent(message)}`}><MessageCircle size={17}/>Continue to WhatsApp</a></> : 'Nothing is sent until you tap Send in WhatsApp.'}</div></form></div></section>
}
