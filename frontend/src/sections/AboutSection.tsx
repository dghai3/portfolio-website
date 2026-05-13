import type { AboutContent } from '../types/site'

type AboutSectionProps = {
  content: AboutContent
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section className="section about-section" id={content.id}>
      <p className="section-label">{content.index}</p>

      <div className="about-layout">
        <div className="about-copy">
          <h2>{content.title}</h2>
          <p>
            {content.paragraph.map((segment, index) =>
              segment.highlight ? (
                <mark key={`${segment.text}-${index}`}>{segment.text}</mark>
              ) : (
                <span key={`${segment.text}-${index}`}>{segment.text}</span>
              ),
            )}
          </p>

          <div className="product-loop" aria-label="Product building process">
            {content.productLoop.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
        </div>

        <div className="about-side">
          <div className="about-image-placeholder" aria-label="About image placeholder">
            <span>Image</span>
          </div>

          <div className="about-cards" aria-label="About highlights">
            {content.cards.map((card) => (
              <article
                className={card.featured ? 'about-card is-featured' : 'about-card'}
                key={card.label}
              >
                <p>{card.label}</p>
                <strong>{card.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
