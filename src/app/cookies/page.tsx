import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Polityka cookies | Draft2Live',
  description: 'Polityka cookies Draft2Live: rodzaje cookies, podstawy prawne, zarządzanie zgodą i informacje kontaktowe.',
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Powrót na stronę główną</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Polityka cookies</h1>
          <p className="text-text-muted text-sm mb-12">Ostatnia aktualizacja: 10 kwietnia 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Czym są cookies</h2>
              <p>Cookies to niewielkie pliki tekstowe zapisywane na Państwa urządzeniu (komputerze, tablecie, smartfonie) podczas odwiedzania stron internetowych. Pomagają stronie zapamiętać Państwa preferencje i ulepszają działanie serwisu.</p>
              <p>Oprócz cookies możemy używać podobnych technologii: tagów pikselowych, lokalnego magazynu (localStorage) oraz identyfikatorów sesji.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Rodzaje cookies, których używamy</h2>

              <h3 className="text-white font-medium mt-4 mb-2">Cookies niezbędne (zawsze aktywne)</h3>
              <p>Zapewniają podstawową funkcjonalność strony. Bez nich Platforma nie może działać prawidłowo. Tych cookies nie można wyłączyć.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Dostawca</th>
                      <th className="p-2 border border-border font-semibold text-white">Cel</th>
                      <th className="p-2 border border-border font-semibold text-white">Czas trwania</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">session_id</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Identyfikacja sesji użytkownika</td>
                      <td className="p-2 border border-border">Sesja</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">csrf_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Ochrona przed atakami CSRF</td>
                      <td className="p-2 border border-border">Sesja</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">auth_token</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Uwierzytelnianie użytkownika</td>
                      <td className="p-2 border border-border">30 dni</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">cookie_consent</td>
                      <td className="p-2 border border-border">Draft2Live</td>
                      <td className="p-2 border border-border">Zapisanie preferencji cookies</td>
                      <td className="p-2 border border-border">6 miesięcy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Cookies analityczne (wymagają zgody)</h3>
              <p>Pomagają nam zrozumieć, jak odwiedzający korzystają z Platformy, dzięki czemu możemy poprawić jej działanie i wygodę.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Dostawca</th>
                      <th className="p-2 border border-border font-semibold text-white">Cel</th>
                      <th className="p-2 border border-border font-semibold text-white">Czas trwania</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_ga</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Identyfikacja unikalnych odwiedzających</td>
                      <td className="p-2 border border-border">13 miesięcy</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_ga_*</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Analytics 4 &mdash; stan sesji</td>
                      <td className="p-2 border border-border">13 miesięcy</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gid</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Identyfikacja odwiedzającego w ciągu doby</td>
                      <td className="p-2 border border-border">24 godziny</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-white font-medium mt-4 mb-2">Cookies marketingowe (wymagają zgody)</h3>
              <p>Wykorzystywane do wyświetlania trafnych reklam i mierzenia skuteczności kampanii reklamowych.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse my-4 text-left">
                  <thead>
                    <tr>
                      <th className="p-2 border border-border font-semibold text-white">Cookie</th>
                      <th className="p-2 border border-border font-semibold text-white">Dostawca</th>
                      <th className="p-2 border border-border font-semibold text-white">Cel</th>
                      <th className="p-2 border border-border font-semibold text-white">Czas trwania</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-border">_fbp</td>
                      <td className="p-2 border border-border">Meta</td>
                      <td className="p-2 border border-border">Śledzenie konwersji</td>
                      <td className="p-2 border border-border">3 miesiące</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">_gcl_au</td>
                      <td className="p-2 border border-border">Google</td>
                      <td className="p-2 border border-border">Google Ads &mdash; śledzenie konwersji</td>
                      <td className="p-2 border border-border">3 miesiące</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-border">li_sugr</td>
                      <td className="p-2 border border-border">LinkedIn</td>
                      <td className="p-2 border border-border">Insight Tag &mdash; analityka reklam</td>
                      <td className="p-2 border border-border">3 miesiące</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Podstawa prawna</h2>
              <p>Zgodnie z dyrektywą ePrivacy (2002/58/WE) oraz RODO:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Cookies niezbędne</strong> są ustawiane bez zgody, ponieważ są konieczne do funkcjonowania Platformy (art. 6 ust. 1 lit. f RODO)</li>
                <li><strong className="text-white">Cookies analityczne i marketingowe</strong> są ustawiane wyłącznie po uzyskaniu Państwa wyraźnej zgody (art. 6 ust. 1 lit. a RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Zarządzanie cookies</h2>

              <h3 className="text-white font-medium mt-4 mb-2">4.1. Banner zgody</h3>
              <p>Przy pierwszej wizycie na Platformie wyświetlamy banner z prośbą o zgodę. Mogą Państwo zaakceptować wszystkie cookies, odrzucić nieistotne lub ręcznie skonfigurować kategorie. <strong className="text-white">Odrzucenie cookies jest tak samo proste, jak ich akceptacja.</strong> W każdej chwili mogą Państwo zmienić swój wybór w ustawieniach Platformy.</p>
              <p><strong className="text-white">Konsekwencje odrzucenia:</strong> odrzucenie cookies analitycznych i marketingowych nie wpływa na funkcjonalność Platformy. Będą Państwo mogli korzystać ze wszystkich Usług. Nie będziemy jednak w stanie spersonalizować Państwa doświadczenia ani wyświetlać trafnych reklam.</p>

              <h3 className="text-white font-medium mt-4 mb-2">4.2. Ustawienia przeglądarki</h3>
              <p>Mogą Państwo skonfigurować przeglądarkę tak, aby blokowała lub usuwała cookies. Należy pamiętać, że blokowanie cookies niezbędnych może wpłynąć na działanie Platformy.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Chrome:</strong> Ustawienia &rarr; Prywatność i bezpieczeństwo &rarr; Cookies</li>
                <li><strong className="text-white">Firefox:</strong> Ustawienia &rarr; Prywatność i bezpieczeństwo &rarr; Cookies</li>
                <li><strong className="text-white">Safari:</strong> Preferencje &rarr; Prywatność &rarr; Cookies</li>
                <li><strong className="text-white">Edge:</strong> Ustawienia &rarr; Prywatność &rarr; Cookies</li>
              </ul>

              <h3 className="text-white font-medium mt-4 mb-2">4.3. Rezygnacja z analityki</h3>
              <p>Aby zrezygnować z Google Analytics, mogą Państwo zainstalować oficjalne rozszerzenie przeglądarki: Google Analytics Opt-out Browser Add-on.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Przekazywanie danych</h2>
              <p>Niektóre cookies są ustawiane przez usługi zewnętrzne, których serwery znajdują się poza EOG. W takich przypadkach zapewniamy odpowiedni poziom ochrony danych zgodnie z RODO (szczegóły w <Link href="/privacy" className="text-primary hover:underline">Polityce prywatności</Link>, sekcja 6).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Zmiany Polityki</h2>
              <p>Czas życia cookies nie przekracza 13 miesięcy, zgodnie z zaleceniami EROD. Po upływie tego okresu zgoda zostanie ponownie poproszona.</p>
              <p>Możemy aktualizować niniejszą Politykę cookies w przypadku zmiany rodzajów lub celów wykorzystywanych cookies. O istotnych zmianach poinformujemy Państwa za pośrednictwem bannera zgody lub interfejsu Platformy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Kontakt</h2>
              <p><strong className="text-white">Myicode sp. z o.o.</strong></p>
              <p>Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
              <p>Strona: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
