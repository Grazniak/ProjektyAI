# Moje Przepisy (wersja demo)

**⚠️ Wersja demo.** Pokazowa wersja z przykładowymi danymi, nie pełna aplikacja.

Aplikacja do prowadzenia własnej bazy przepisów kulinarnych, działająca jak aplikacja mobilna (PWA):
- **Przepisy:** kategorie, wyszukiwanie, przeliczanie porcji, nagłówki sekcji w składnikach, zdjęcia, notatki
- **Tryb gotowania:** krok po kroku z odhaczaniem składników i kroków, ekran nie gaśnie
- **Plan posiłków:** tygodniowy plan z przypisanymi przepisami i porcjami
- **Lista zakupów:** generowana z planu, z sumowaniem składników, odhaczaniem i udostępnianiem
- **Praca offline:** zmiany zapisują się lokalnie i synchronizują po powrocie do sieci
- **Import i eksport** kopii zapasowej, odczyt przepisu ze zdjęcia (OCR)

**To jest wersja demonstracyjna.** Oryginał zapisuje dane w prywatnej bazie zabezpieczonej PIN-em. W tej publicznej wersji nie ma żadnej bazy ani kluczy dostępu: krótki skrypt na początku `index.html` udaje serwer, a przepisy, plan i lista zakupów to dane przykładowe. Wszystko, co dodasz, zapisuje się tylko w Twojej przeglądarce (localStorage) i nigdzie nie jest wysyłane. Wyjątek to odczyt przepisu ze zdjęcia, który ładuje bibliotekę OCR z publicznego CDN.

**Uruchomienie:** otwórz `index.html` w przeglądarce przez https (np. GitHub Pages).
