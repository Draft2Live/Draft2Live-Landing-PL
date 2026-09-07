import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Regulamin | Draft2Live',
  description: 'Regulamin świadczenia usług platformy Draft2Live do generowania i publikacji treści SEO przy pomocy AI.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; Powrót na stronę główną</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Regulamin</h1>
          <p className="text-text-muted text-sm mb-12">Ostatnia aktualizacja: 10 kwietnia 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">

            {/* §1 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;1. Postanowienia ogólne</h2>
              <p>1. Niniejszy regulamin (dalej &laquo;Regulamin&raquo;) określa rodzaje, zakres oraz warunki świadczenia usług drogą elektroniczną przez Myicode sp. z o.o. z siedzibą w Warszawie przy ul. Postępu 15, 02-676 Warszawa, Polska, NIP: 5214167154 (dalej &laquo;Operator&raquo;, &laquo;my&raquo;), za pośrednictwem strony draft2live.ai oraz wszystkich powiązanych subdomen i aplikacji (dalej &laquo;Platforma&raquo;). Niniejszy Regulamin stanowi regulamin w rozumieniu polskiej ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną.</p>
              <p className="mt-3">2. Rejestrując się lub korzystając z Platformy, potwierdzają Państwo, że zapoznali się z niniejszym Regulaminem, <Link href="/privacy" className="text-primary hover:underline">Polityką prywatności</Link> oraz <Link href="/cookies" className="text-primary hover:underline">Polityką cookies</Link> i zobowiązują się do ich przestrzegania.</p>
            </section>

            {/* §2 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;2. Definicje</h2>
              <ul className="space-y-2">
                <li><strong className="text-white">Platforma</strong> &mdash; strona internetowa pod adresem draft2live.ai, w tym wszystkie subdomeny i aplikacje, za pośrednictwem których Operator świadczy Usługi.</li>
                <li><strong className="text-white">Operator</strong> &mdash; Myicode sp. z o.o., ul. Postępu 15, 02-676 Warszawa, NIP: 5214167154, administrująca Platformą.</li>
                <li><strong className="text-white">Użytkownik</strong> &mdash; osoba fizyczna w wieku co najmniej 18 lat, osoba prowadząca jednoosobową działalność gospodarczą, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z Platformy.</li>
                <li><strong className="text-white">Konto</strong> &mdash; zbiór zasobów w systemie informatycznym Operatora, identyfikowany indywidualnym loginem (email) i hasłem, w którym przechowywane są dane Użytkownika.</li>
                <li><strong className="text-white">Umowa</strong> &mdash; umowa o świadczenie usług zawarta między Operatorem a Użytkownikiem za pośrednictwem Platformy na czas nieokreślony zgodnie z niniejszym Regulaminem.</li>
                <li><strong className="text-white">Usługi</strong> &mdash; usługi świadczone drogą elektroniczną przez Operatora za pośrednictwem Platformy, opisane w &sect;3.</li>
                <li><strong className="text-white">Subskrypcja</strong> &mdash; płatny plan dostępu do Usług z miesięcznym lub rocznym cyklem rozliczeniowym.</li>
                <li><strong className="text-white">Okres rozliczeniowy</strong> &mdash; okres, za jaki Użytkownik opłaca Subskrypcję. Płatność jest pobierana z góry co miesiąc w tym samym dniu kalendarzowym, w którym rozpoczęto Subskrypcję.</li>
              </ul>
            </section>

            {/* §3 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;3. Opis Usług</h2>
              <p>1. Draft2Live to platforma AI służąca do automatyzacji pełnego cyklu tworzenia treści, optymalizacji SEO i publikacji. Platforma świadczy następujące Usługi:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>Wielojęzyczne generowanie artykułów tekstowych z wykorzystaniem AI</li>
                <li>Generowanie i optymalizacja obrazów z wykorzystaniem AI</li>
                <li>Analiza SERP i badanie słów kluczowych</li>
                <li>Kompleksowa optymalizacja SEO treści</li>
                <li>Automatyczna publikacja na platformach CMS (WordPress, Drupal, Shopify)</li>
                <li>Automatyczne tłumaczenie artykułów</li>
                <li>Audyt SEO wygenerowanych treści</li>
              </ul>
              <p className="mt-3">2. Platforma działa w modelu subskrypcyjnym. Funkcjonalność każdego planu cenowego opisana jest na <Link href="/#pricing" className="text-primary hover:underline">stronie cennika</Link>.</p>
              <p className="mt-3">3. Operator dokłada wszelkich starań, aby dostarczać dokładne dane; jednakże niektóre wyniki analiz i generowania mogą być nieprecyzyjne lub niekompletne.</p>
            </section>

            {/* §4 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;4. Rejestracja i Konto</h2>
              <p>1. Założenie Konta na Platformie jest bezpłatne.</p>
              <p className="mt-3">2. W celu rejestracji Użytkownik wypełnia formularz rejestracyjny, podając adres email i tworząc hasło, a następnie potwierdza akceptację niniejszego Regulaminu.</p>
              <p className="mt-3">3. Umowę uważa się za zawartą z chwilą potwierdzenia rejestracji przez Użytkownika.</p>
              <p className="mt-3">4. Użytkownik zobowiązuje się:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Podawać prawdziwe i aktualne informacje podczas rejestracji</li>
                <li>Zachować poufność hasła i danych logowania</li>
                <li>Nie przekazywać dostępu do Konta osobom trzecim bez zgody Operatora</li>
                <li>Niezwłocznie zgłaszać każdy nieautoryzowany dostęp do Konta</li>
              </ul>
              <p className="mt-3">5. Każdy Użytkownik może posiadać tylko jedno Konto. Tworzenie dodatkowych kont wymaga zgody Operatora.</p>
              <p className="mt-3">6. Użytkownik ponosi pełną odpowiedzialność za wszystkie działania wykonane za pośrednictwem swojego Konta.</p>
            </section>

            {/* §5 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;5. Warunki korzystania</h2>
              <p>1. Użytkownik zobowiązany jest korzystać z Platformy zgodnie z niniejszym Regulaminem, obowiązującym prawem oraz powszechnie przyjętymi standardami.</p>
              <p className="mt-3">2. Zabronione jest:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Korzystanie z Platformy w celu generowania treści bezprawnych, szkodliwych lub dyskryminujących</li>
                <li>Próby obejścia ograniczeń technicznych Platformy lub środków bezpieczeństwa</li>
                <li>Korzystanie ze zautomatyzowanych narzędzi do masowego dostępu bez zezwolenia Operatora</li>
                <li>Naruszanie praw własności intelektualnej osób trzecich</li>
                <li>Wprowadzanie szkodliwego oprogramowania (wirusów, botów, oprogramowania szpiegującego itp.)</li>
                <li>Przekazywanie lub udostępnianie haseł innym Użytkownikom</li>
              </ul>
              <p className="mt-3">3. Użytkownik, który naruszył postanowienia niniejszego Regulaminu, może otrzymać ostrzeżenie od Operatora. W przypadku dalszych naruszeń Operator zastrzega sobie prawo do usunięcia Konta, co jest równoznaczne z natychmiastowym rozwiązaniem Umowy.</p>
            </section>

            {/* §6 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;6. Cennik i płatności</h2>
              <p>1. Po założeniu Konta Użytkownik może zakupić Subskrypcję zgodnie z cennikiem zamieszczonym na <Link href="/#pricing" className="text-primary hover:underline">stronie cennika</Link>.</p>
              <p className="mt-3">2. Subskrypcja jest opłacana z góry za każdy Okres rozliczeniowy. Subskrypcja odnawia się automatycznie do momentu jej anulowania przez Użytkownika.</p>
              <p className="mt-3">3. Płatności są obsługiwane za pośrednictwem internetowej platformy płatniczej. Dane kart kredytowych/debetowych są przetwarzane wyłącznie przez dostawcę płatności i nie są przechowywane na serwerach Operatora.</p>
              <p className="mt-3">4. Niewykorzystane limity w ramach Okresu rozliczeniowego nie są kumulowane i nie przechodzą na kolejny okres.</p>
              <p className="mt-3">5. Ceny mogą ulec zmianie; Operator powiadamia o tym z wyprzedzeniem co najmniej 30 dni.</p>
              <p className="mt-3">6. Jeśli Użytkownik anuluje Subskrypcję w trakcie Okresu rozliczeniowego, dostęp do Usług zostaje utrzymany do końca opłaconego okresu.</p>
            </section>

            {/* §7 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;7. Treści generowane przez AI</h2>
              <p>Użytkownik rozumie i akceptuje, że:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li>Treści są generowane przez modele AI i mogą zawierać niedokładności</li>
                <li>Użytkownik odpowiada za sprawdzenie i edycję treści przed publikacją</li>
                <li>Platforma nie gwarantuje konkretnych wyników rankingu SEO</li>
                <li>Jakość generowania zależy od podanych danych wejściowych i ustawień</li>
                <li>Operator nie ponosi odpowiedzialności za niewłaściwe wykorzystanie wygenerowanych treści przez Użytkownika lub osoby trzecie</li>
              </ul>
            </section>

            {/* §8 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;8. Własność intelektualna</h2>
              <p>1. Wszelkie prawa do Platformy, w tym jej design, oprogramowanie, znaki towarowe, logotypy i inne materiały, należą do Myicode sp. z o.o. lub jej licencjodawców.</p>
              <p className="mt-3">2. Kopiowanie, modyfikowanie, rozpowszechnianie lub wykorzystywanie materiałów Platformy do celów komercyjnych lub reklamowych bez pisemnej zgody Operatora jest zabronione.</p>
              <p className="mt-3">3. <strong className="text-white">Treści Użytkownika:</strong> Użytkownik zachowuje prawa do treści wygenerowanych za pośrednictwem Platformy, pod warunkiem przestrzegania niniejszego Regulaminu i opłacenia obowiązującego planu cenowego.</p>
              <p className="mt-3">4. <strong className="text-white">Wgrane materiały:</strong> wgrywając dokumenty do Bazy wiedzy, Użytkownik gwarantuje, że posiada niezbędne prawa do takich materiałów.</p>
            </section>

            {/* §9 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;9. Reklamacje</h2>
              <p>1. Użytkownik, który uważa, że Usługi nie są świadczone zgodnie z ustalonymi zasadami, może złożyć reklamację.</p>
              <p className="mt-3">2. Reklamacje należy przesyłać na adres email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
              <p className="mt-3">3. Reklamacja powinna zawierać: imię i nazwisko, adres email, opis naruszenia oraz oczekiwany sposób rozstrzygnięcia.</p>
              <p className="mt-3">4. Operator rozpatruje reklamację i udziela odpowiedzi w terminie 14 dni od jej otrzymania. Odpowiedź jest przesyłana na adres email Użytkownika.</p>
              <p className="mt-3">5. Jeśli reklamacja nie zawiera wystarczających informacji, Operator może poprosić o dodatkowe dane przed udzieleniem odpowiedzi.</p>
            </section>

            {/* §10 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;10. Prawo do odstąpienia od Umowy</h2>
              <p>1. Użytkownik będący konsumentem w rozumieniu art. 22&sup1; Kodeksu cywilnego ma prawo odstąpić od Umowy zawartej na odległość, bez podawania przyczyny, w terminie 14 dni od jej zawarcia.</p>
              <p className="mt-3">2. Aby skorzystać z prawa odstąpienia, Użytkownik składa odpowiednie oświadczenie na adres <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a> w ciągu 14-dniowego terminu.</p>
              <p className="mt-3">3. Prawo do odstąpienia nie przysługuje, jeżeli:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Świadczenie usług rozpoczęło się za wyraźną zgodą konsumenta, który został poinformowany o utracie prawa do odstąpienia po pełnym wykonaniu usługi</li>
                <li>Świadczenie treści cyfrowych niezapisanych na nośniku materialnym rozpoczęło się za uprzednią zgodą konsumenta</li>
              </ul>
              <p className="mt-3">4. Zwroty są dokonywane w ciągu 14 dni od otrzymania oświadczenia o odstąpieniu, tym samym sposobem płatności.</p>
            </section>

            {/* §11 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;11. Ograniczenie odpowiedzialności</h2>
              <p>1. Platforma jest dostarczana &laquo;tak jak jest&raquo;. W zakresie dozwolonym przez obowiązujące prawo:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                <li>Operator nie ponosi odpowiedzialności za działania Użytkowników niezgodne z niniejszym Regulaminem</li>
                <li>Operator nie ponosi odpowiedzialności za szkody spowodowane przekazaniem przez Użytkownika niekompletnych lub nieprawidłowych danych</li>
                <li>Operator nie ponosi odpowiedzialności za szkody pośrednie, przypadkowe ani wtórne</li>
                <li>Łączna odpowiedzialność Operatora jest ograniczona do kwoty zapłaconej przez Użytkownika w ciągu poprzednich 12 miesięcy</li>
                <li>Operator nie ponosi odpowiedzialności za szkody wywołane siłą wyższą</li>
              </ul>
              <p className="mt-3">2. Powyższe ograniczenia nie mają zastosowania w przypadkach, gdy ograniczenie odpowiedzialności jest zabronione bezwzględnie obowiązującymi przepisami prawa UE lub prawa polskiego.</p>
            </section>

            {/* §12 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;12. Rozwiązanie Umowy</h2>
              <p>1. Użytkownik może w każdej chwili usunąć swoje Konto za pośrednictwem ustawień profilu lub wysyłając żądanie na adres <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
              <p className="mt-3">2. Operator ma prawo wypowiedzieć Umowę z zachowaniem 14-dniowego okresu wypowiedzenia przesłanego na adres email Użytkownika.</p>
              <p className="mt-3">3. Po usunięciu Konta dane osobowe są przetwarzane zgodnie z <Link href="/privacy" className="text-primary hover:underline">Polityką prywatności</Link>.</p>
            </section>

            {/* §13 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;13. Ochrona danych osobowych</h2>
              <p>1. Szczegółowe warunki ochrony danych osobowych określa <Link href="/privacy" className="text-primary hover:underline">Polityka prywatności</Link>.</p>
              <p className="mt-3">2. Przetwarzanie danych osobowych regulują przepisy Rozporządzenia (UE) 2016/679 (RODO) oraz polskiej ustawy z dnia 10 maja 2018 roku o ochronie danych osobowych.</p>
              <p className="mt-3">3. Administratorem danych osobowych jest Myicode sp. z o.o.</p>
            </section>

            {/* §14 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;14. Zmiany Regulaminu</h2>
              <p>Operator może aktualizować niniejszy Regulamin. Operator powiadamia Użytkowników o istotnych zmianach drogą mailową lub poprzez interfejs Platformy co najmniej 30 dni przed wejściem zmian w życie. Dalsze korzystanie z Platformy po zmianie Regulaminu oznacza akceptację przez Użytkownika zaktualizowanej wersji.</p>
            </section>

            {/* §15 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;15. Prawo właściwe i postanowienia końcowe</h2>
              <p>1. Niniejszy Regulamin podlega prawu Unii Europejskiej oraz prawu Rzeczypospolitej Polskiej.</p>
              <p className="mt-3">2. Wszelkie spory rozstrzygane są przez sądy właściwe w Rzeczypospolitej Polskiej według siedziby Operatora, chyba że bezwzględnie obowiązujące przepisy o ochronie konsumentów stanowią inaczej.</p>
              <p className="mt-3">3. Niniejszy Regulamin jest bezpłatnie dostępny na Platformie, gdzie można go przeglądać, pobierać i drukować.</p>
              <p className="mt-3">4. W sprawach nieuregulowanych niniejszym Regulaminem stosuje się odpowiednie przepisy prawa Rzeczypospolitej Polskiej.</p>
            </section>

            {/* §16 */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">&sect;16. Kontakt</h2>
              <ul className="list-none mt-3 space-y-1.5">
                <li><strong className="text-white">Operator:</strong> Myicode sp. z o.o.</li>
                <li><strong className="text-white">Adres:</strong> ul. Postępu 15, 02-676 Warszawa, Polska</li>
                <li><strong className="text-white">NIP:</strong> 5214167154</li>
                <li><strong className="text-white">Email:</strong> <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></li>
                <li><strong className="text-white">Strona:</strong> <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
