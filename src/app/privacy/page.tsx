import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Polityka prywatności | Draft2Live',
  description: 'Polityka prywatności Draft2Live — przetwarzanie danych osobowych zgodnie z RODO oraz polską ustawą o ochronie danych osobowych.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Powrót na stronę główną</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Polityka prywatności</h1>
          <p className="text-text-muted text-sm mb-12">Ostatnia aktualizacja: 10 kwietnia 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Postanowienia ogólne</h2>
              <p>Niniejsza Polityka prywatności wyjaśnia, w jaki sposób Aklima Polska sp. z o.o., z siedzibą w Warszawie (ul. Postępu 15, 02-676 Warszawa, KRS: 0000978391, NIP: 9512544995, REGON: 522520422) (dalej &laquo;Operator&raquo;, &laquo;my&raquo;), prowadząca platformę Draft2Live (dalej &laquo;Platforma&raquo;), zbiera, przetwarza, przechowuje i chroni Państwa dane osobowe zgodnie z Ogólnym rozporządzeniem o ochronie danych (Rozporządzenie (UE) 2016/679, dalej &laquo;RODO&raquo;) oraz polską ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych.</p>
              <p className="mt-3">Korzystając z Platformy, potwierdzają Państwo zapoznanie się z niniejszą Polityką. Jeżeli nie zgadzają się Państwo z warunkami przetwarzania danych, prosimy o niekorzystanie z Platformy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Administrator danych</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">KRS: 0000978391 | NIP: 9512544995 | REGON: 522520422</p>
                <p className="mt-1">Platforma: Draft2Live</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Strona: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Jakie dane zbieramy</h2>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.1. Dane podawane bezpośrednio przez Państwa</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Dane rejestracyjne:</strong> imię, nazwisko, adres email, hasło</li>
                <li><strong className="text-white">Dane płatnicze:</strong> dane karty kredytowej/debetowej, adres do faktury (przetwarzane przez certyfikowanego dostawcę płatności)</li>
                <li><strong className="text-white">Dane profilu:</strong> nazwa firmy, strona WWW, ustawienia językowe, Brand Voice</li>
                <li><strong className="text-white">Pliki przesłane:</strong> dokumenty Bazy wiedzy, obrazy, teksty do przetworzenia</li>
                <li><strong className="text-white">Dane komunikacyjne:</strong> wiadomości do działu wsparcia, opinie</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.2. Dane zbierane automatycznie</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Dane techniczne:</strong> adres IP, typ i wersja przeglądarki, system operacyjny, rozdzielczość ekranu</li>
                <li><strong className="text-white">Dane użytkowania:</strong> odwiedzane strony, czas trwania sesji, działania na Platformie, liczba wygenerowanych artykułów</li>
                <li><strong className="text-white">Cookies i podobne technologie:</strong> szczegóły w naszej <Link href="/cookies" className="text-primary hover:underline">Polityce cookies</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Cele i podstawy prawne przetwarzania</h2>
              <p>Państwa dane osobowe przetwarzamy na następujących podstawach prawnych (art. 6 RODO):</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Tworzenie i obsługa Państwa Konta</li>
                    <li>Świadczenie usług Platformy (generowanie treści, optymalizacja SEO, publikacja)</li>
                    <li>Obsługa płatności i wystawianie faktur</li>
                    <li>Wsparcie techniczne</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Prawnie uzasadnione interesy (art. 6 ust. 1 lit. f RODO)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Ulepszanie i rozwój Platformy</li>
                    <li>Analityka użytkowania i wydajności</li>
                    <li>Zapewnianie bezpieczeństwa i zapobieganie oszustwom</li>
                    <li>Wysyłanie powiadomień serwisowych dotyczących działania Platformy</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Zgoda (art. 6 ust. 1 lit. a RODO)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Komunikacja marketingowa i porady SEO</li>
                    <li>Cookies analityczne i marketingowe</li>
                    <li>Przetwarzanie danych w celu spersonalizowanych rekomendacji</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Prowadzenie ksiąg rachunkowych i ewidencji podatkowej</li>
                    <li>Przestrzeganie wymogów prawnych dotyczących ochrony danych</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Przekazywanie danych podmiotom trzecim</h2>
              <p>W celu świadczenia Usług przekazujemy Państwa dane zewnętrznym dostawcom usług (podmiotom przetwarzającym). Poniżej kategorie odbiorców i konkretne usługi.</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Infrastruktura i hosting</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Hetzner Online GmbH</strong> (Niemcy/UE) &mdash; infrastruktura serwerowa i przechowywanie danych</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Usługi AI</h3>
                  <p>Platforma korzysta z <strong className="text-white">OpenRouter, Inc.</strong> (USA) jako jedynej bramy API do dostępu do modeli sztucznej inteligencji. Przez OpenRouter Państwa treści mogą być przetwarzane przez następujących dostawców:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Anthropic</strong> (USA) &mdash; Claude: generowanie tekstu, humanizacja treści</li>
                    <li><strong className="text-white">OpenAI</strong> (USA) &mdash; GPT: generowanie tekstu, tłumaczenia, embeddings (wyszukiwanie wektorowe), generowanie obrazów</li>
                    <li><strong className="text-white">Google</strong> (USA) &mdash; Gemini: generowanie tekstu i obrazów</li>
                    <li><strong className="text-white">Meta</strong> (USA) &mdash; Llama: generowanie tekstu</li>
                    <li><strong className="text-white">Mistral AI</strong> (Francja/UE) &mdash; generowanie tekstu</li>
                    <li><strong className="text-white">Black Forest Labs</strong> (FLUX) &mdash; generowanie obrazów</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Wykrywanie AI i jakość treści</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">GPTZero</strong> (USA) &mdash; sprawdzanie tekstu pod kątem markerów AI</li>
                    <li><strong className="text-white">ZeroGPT</strong> &mdash; alternatywny detektor tekstu AI</li>
                    <li><strong className="text-white">Winston AI</strong> &mdash; wykrywanie treści AI</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Przetwarzanie multimediów</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Replicate, Inc.</strong> (USA) &mdash; podnoszenie rozdzielczości obrazów (upscaling)</li>
                    <li><strong className="text-white">Kling AI</strong> &mdash; generowanie wideo z tekstu i obrazów</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">SEO i analiza treści</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Serpstat</strong> &mdash; badanie słów kluczowych, wolumen wyszukiwań, analiza konkurencji</li>
                    <li><strong className="text-white">Jina AI</strong> (Niemcy/UE) &mdash; wyodrębnianie tekstu ze stron internetowych do analizy konkurencji</li>
                    <li><strong className="text-white">Tavily</strong> &mdash; wyszukiwanie w sieci i zbieranie danych do badań</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Płatności</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Stripe, Inc.</strong> (USA) &mdash; obsługa płatności, subskrypcje, zarządzanie fakturowaniem. Dane kart są przetwarzane wyłącznie przez Stripe (PCI DSS Level 1) i nie są przechowywane na naszych serwerach.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Analityka i marketing</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Google Analytics</strong> (Google LLC, USA) &mdash; analiza ruchu i korzystania z Platformy</li>
                    <li><strong className="text-white">Meta Pixel</strong> (Meta Platforms, Inc., USA) &mdash; pomiar skuteczności reklam</li>
                    <li><strong className="text-white">Google Ads</strong> (Google LLC, USA) &mdash; śledzenie konwersji</li>
                    <li><strong className="text-white">LinkedIn Insight Tag</strong> (LinkedIn Corp., USA) &mdash; analityka kampanii reklamowych</li>
                  </ul>
                  <p className="mt-2">Te usługi korzystają z cookies. Szczegóły w naszej <Link href="/cookies" className="text-primary hover:underline">Polityce cookies</Link>.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Powiadomienia</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Telegram Bot API</strong> (Telegram FZ-LLC, ZEA) &mdash; powiadomienia serwisowe dla administratorów Platformy</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Integracje opcjonalne (według uznania Użytkownika)</h3>
                  <p>Wymienione poniżej usługi są aktywowane wyłącznie wtedy, gdy Użytkownik podłącza własny klucz API. W takim przypadku Użytkownik wchodzi w bezpośrednie relacje umowne z odpowiednim dostawcą:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">DeepL SE</strong> (Niemcy/UE) &mdash; automatyczne tłumaczenie treści</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">Ważne zastrzeżenie dotyczące usług zewnętrznych</h3>
                <p>Zewnętrznym dostawcom przekazujemy wyłącznie dane niezbędne do wykonania konkretnej funkcji (zasada minimalizacji danych, art. 5 ust. 1 lit. c RODO). <strong className="text-white">Nie przechowujemy danych w imieniu zewnętrznych dostawców i nie kontrolujemy ich praktyk przetwarzania danych po przekazaniu.</strong></p>
                <p className="mt-2">Każdy zewnętrzny dostawca jest niezależnym administratorem lub podmiotem przetwarzającym dane i działa zgodnie z własną polityką prywatności. W szczególności, ale nie wyłącznie:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>OpenAI &mdash; <a href="https://openai.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
                  <li>Google &mdash; <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                  <li>Anthropic &mdash; <a href="https://www.anthropic.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
                  <li>Stripe &mdash; <a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                  <li>Meta &mdash; <a href="https://www.facebook.com/privacy/policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                </ul>
                <p className="mt-2"><strong className="text-white">Operator nie ponosi odpowiedzialności za praktyki przetwarzania danych osobowych przez dostawców zewnętrznych</strong> po prawidłowym przekazaniu danych zgodnie z warunkami DPA. Zachęcamy do zapoznania się z ich politykami prywatności.</p>
              </div>

              <p className="mt-4">Ze wszystkimi podmiotami przetwarzającymi dane, którym przekazywane są dane osobowe, zawarto Umowy o przetwarzaniu danych (DPA) zgodnie z art. 28 RODO.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Międzynarodowe przekazywanie danych</h2>
              <p>Niektórzy z naszych dostawców znajdują się poza Europejskim Obszarem Gospodarczym (EOG). W takich przypadkach zapewniamy odpowiedni poziom ochrony danych poprzez:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Standardowe klauzule umowne zatwierdzone przez Komisję Europejską</li>
                <li>Decyzje stwierdzające odpowiedni stopień ochrony przyjęte przez Komisję Europejską</li>
                <li>Dodatkowe środki techniczne i organizacyjne zgodne z zaleceniami EROD</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Okresy przechowywania danych</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Dane Konta:</strong> przez cały okres istnienia Konta i 30 dni po jego usunięciu</li>
                <li><strong className="text-white">Dane płatnicze:</strong> zgodnie z wymogami prawa podatkowego (zwykle do 10 lat)</li>
                <li><strong className="text-white">Dane analityczne:</strong> do 26 miesięcy</li>
                <li><strong className="text-white">Zgoda marketingowa:</strong> do momentu jej wycofania</li>
                <li><strong className="text-white">Pliki przesłane:</strong> przez cały okres istnienia Konta; usuwane w ciągu 30 dni od usunięcia Konta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Państwa prawa</h2>
              <p>Zgodnie z RODO przysługują Państwu następujące prawa w odniesieniu do danych osobowych:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Prawo dostępu</strong> (art. 15 RODO) &mdash; uzyskanie kopii swoich danych osobowych</li>
                <li><strong className="text-white">Prawo do sprostowania</strong> (art. 16 RODO) &mdash; poprawa nieprawidłowych lub niekompletnych danych</li>
                <li><strong className="text-white">Prawo do usunięcia</strong> (art. 17 RODO) &mdash; &laquo;prawo do bycia zapomnianym&raquo;</li>
                <li><strong className="text-white">Prawo do ograniczenia przetwarzania</strong> (art. 18 RODO)</li>
                <li><strong className="text-white">Prawo do przenoszenia danych</strong> (art. 20 RODO)</li>
                <li><strong className="text-white">Prawo do sprzeciwu</strong> (art. 21 RODO)</li>
                <li><strong className="text-white">Prawo do wycofania zgody</strong> (art. 7 ust. 3 RODO)</li>
              </ul>
              <p className="mt-4">Aby skorzystać z któregokolwiek z tych praw, prosimy o kontakt pod adresem <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>. Odpowiemy w ciągu 30 dni.</p>
              <p className="mt-3">Mają Państwo również prawo do wniesienia skargi do organu nadzorczego ds. ochrony danych. W Polsce jest to Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-primary hover:underline">uodo.gov.pl</a>. Jeśli przebywają Państwo w innym kraju UE, mogą Państwo skontaktować się z organem nadzorczym w swoim kraju.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Obowiązek podania danych</h2>
              <p>Podanie danych rejestracyjnych (imię, email) jest warunkiem koniecznym zawarcia Umowy i korzystania z Platformy. Bez tych danych nie będziemy mogli założyć Konta i świadczyć Usług.</p>
              <p className="mt-3">Podanie danych płatniczych jest niezbędne do opłacenia Subskrypcji. Podanie danych do komunikacji marketingowej jest dobrowolne i nie wpływa na możliwość korzystania z Platformy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Bezpieczeństwo danych</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Szyfrowanie danych w trakcie transmisji (TLS/SSL) i w spoczynku</li>
                <li>Regularne kopie zapasowe</li>
                <li>Kontrola dostępu i uwierzytelnianie</li>
                <li>Monitorowanie bezpieczeństwa infrastruktury</li>
                <li>Regularny przegląd i aktualizacja środków bezpieczeństwa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Zautomatyzowane podejmowanie decyzji</h2>
              <p>Platforma wykorzystuje AI do generowania treści, co stanowi jej główną funkcję. Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania, które wywołują skutki prawne wobec Państwa (art. 22 RODO).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Dane dzieci</h2>
              <p>Platforma nie jest przeznaczona dla osób poniżej 16 roku życia. Świadomie nie zbieramy danych dzieci. Jeśli dowiedzieli się Państwo, że dziecko przekazało nam dane osobowe, prosimy o kontakt pod adresem <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Zmiany Polityki</h2>
              <p>Możemy aktualizować niniejszą Politykę. O istotnych zmianach poinformujemy Państwa drogą mailową lub poprzez interfejs Platformy. Data ostatniej aktualizacji jest wskazana na górze tej strony.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Kontakt</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Strona: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
