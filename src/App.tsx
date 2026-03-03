import "./App.css";
import profil from "./assets/profil.jpg";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;

    if (name.trim().length < 2) {
      setError("Ad en az 2 karakter olmalıdır.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* HEADER — Flexbox ile Responsive Nav */}
      <header role="banner">
        <span className="site-title">Mervan Oktan</span>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main">

        {/* HAKKIMDA */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src={profil}
                alt="Mervan Oktan'ın profil fotoğrafı"
                width="150"
                height="150"
                loading="lazy"
              />
              <figcaption>Mervan Oktan</figcaption>
            </figure>

            <div>
              <p>
                Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.
                Web geliştirme ve modern frontend teknolojileri üzerine çalışıyorum.
              </p>

              {/* Skill Tags Toolbar — Flexbox */}
              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER — CSS Grid Kart Düzeni */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://placehold.co/400x200/1E3A8A/ffffff?text=E-Ticaret"
                alt="E-Ticaret sitesi anasayfa ekran görüntüsü"
                width="400"
                height="200"
                loading="lazy"
              />
              <h3>E-Ticaret Platformu</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags" aria-label="Kullanılan teknolojiler">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://placehold.co/400x200/2563EB/ffffff?text=Anomali+Tespit"
                alt="Anomali tespit sistemi arayüz ekran görüntüsü"
                width="400"
                height="200"
                loading="lazy"
              />
              <h3>Anomali Tespit Sistemi</h3>
              <p>Kaggle veri setleri ile makine öğrenmesi projesi. Markdown destekli raporlama.</p>
              <ul className="skill-tags" aria-label="Kullanılan teknolojiler">
                <li>Python</li>
                <li>Scikit-learn</li>
                <li>Pandas</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://placehold.co/400x200/7C3AED/ffffff?text=Web+Lab"
                alt="Web Lab portföy projesi ekran görüntüsü"
                width="400"
                height="200"
                loading="lazy"
              />
              <h3>Web Lab Portföy</h3>
              <p>Modern CSS, Flexbox ve Grid ile oluşturulmuş responsive portföy sayfası.</p>
              <ul className="skill-tags" aria-label="Kullanılan teknolojiler">
                <li>TypeScript</li>
                <li>React</li>
                <li>CSS Grid</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "name-error" : undefined}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-required="true"
                ></textarea>
              </div>

              {/* Hata mesajı */}
              {error && (
                <p
                  id="name-error"
                  role="alert"
                  aria-live="assertive"
                  className="form-error"
                >
                  {error}
                </p>
              )}

              <button type="submit">Gönder</button>

              {/* Başarı mesajı */}
              {submitted && !error && (
                <p
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                  className="form-success"
                >
                  ✅ Form başarıyla gönderildi!
                </p>
              )}
            </fieldset>
          </form>
        </section>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2025 Mervan Oktan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;