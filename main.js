
class ArticleCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    background-color: var(--card-background, #ffffff);
                    border-radius: 12px;
                    box-shadow: 0 4px 12px var(--shadow-color, rgba(0,0,0,0.1));
                    overflow: hidden; /* Crucial para que el brillo no se salga */
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative; /* Necesario para posicionar el brillo */
                    height: 100%;
                }

                /* El nuevo efecto de brillo que sigue al ratón */
                :host::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(
                        circle at var(--mouse-x, 0%) var(--mouse-y, 0%),
                        rgba(251, 133, 0, 0.2) 0%, /* Usamos el color de acento con transparencia */
                        rgba(251, 133, 0, 0) 30% /* El brillo se desvanece */
                    );
                    border-radius: 12px;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none; /* No interfiere con el ratón */
                }

                :host(:hover) {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
                }

                :host(:hover)::after {
                    opacity: 1; /* Mostramos el brillo al pasar el ratón */
                }

                .card-link {
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    padding: 2.5rem;
                    position: relative; /* Necesario para que z-index funcione */
                    z-index: 1; /* Asegura que el texto esté sobre el brillo */
                }

                h3 {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin: 0 0 0.75rem 0;
                    color: var(--text-color, #023047);
                }

                .meta-data {
                    font-size: 0.9rem;
                    color: var(--blue-green, #219ebc);
                    margin-bottom: 1.25rem;
                }

                p {
                    margin: 0;
                    line-height: 1.7;
                    font-size: 1rem;
                    flex-grow: 1;
                }
            </style>
            <a href="#" class="card-link">
                <article>
                    <h3><slot name="title">Título del Artículo</slot></h3>
                    <div class="meta-data">
                        <slot name="date">Fecha de Publicación</slot>
                    </div>
                    <p><slot name="summary">Resumen del artículo...</slot></p>
                </article>
            </a>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        // JavaScript para que el brillo siga al ratón
        this.addEventListener('mousemove', (e) => {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    }
}

customElements.define('article-card', ArticleCard);
