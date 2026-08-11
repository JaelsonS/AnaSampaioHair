import { trustItems } from '@/data/content'
import { Reveal } from '@/components/ui/Reveal'

export function TrustBar() {
  return (
    <section className="section-tight trust-bar" aria-label="Confiança e experiência">
      <div className="container">
        <Reveal>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item.label}>
                <strong>
                  {item.value}
                  {item.suffix ? ` ${item.suffix}` : ''}
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
