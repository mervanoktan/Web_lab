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

      <header role="banner">
        <h1>Mervan Oktan - Kişisel Portföy</h1>

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

          <p>
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.
            Web geliştirme ve modern frontend teknolojileri üzerine çalışıyorum.
          </p>
        </section>

        {/* PROJELER */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>E-Ticaret Platformu</h3>
            <p>Node.js ve React kullanılarak geliştirilmiştir.</p>
          </article>

          <article>
            <h3>Anomali Tespit Sistemi</h3>
            <p>Kaggle veri setleri ile makine öğrenmesi projesi.</p>
          </article>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div>
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

              <div>
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

              <div>
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

              {/* ERROR MESAJI */}
              {error && (
                <p
                  id="name-error"
                  role="alert"
                  aria-live="assertive"
                  style={{ color: "red", marginTop: "10px" }}
                >
                  {error}
                </p>
              )}

              <button type="submit">Gönder</button>

              {/* SUCCESS MESAJI */}
              {submitted && !error && (
                <p
                  role="status"
                  aria-live="polite"
                  tabIndex={-1}
                  style={{ color: "green", marginTop: "10px" }}
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