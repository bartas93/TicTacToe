Zalozenia:
1.	Gra dla dwóch graczy, z których kazdy na przemian klika na plansze 3x3, stawiajac kólko lub krzyzyk.
2.	Przycisk, który zmienia poczatkowego gracza (kólko / krzyzyk) – dziala tylko dla nowej gry. Jesli gra juz sie rozpoczela, to przycisk zmienia rozpoczynajacego gracza od kolejnej gry.
3.	Przycisk do resetowania gry i zaczynania nowej. Po skonczonej grze, reset ma NIE nastepowac automatycznie. To znaczy, ze po wygranej jednego z graczy lub remisie stan gry ma pozostac taki, jak po ostatnim ruchu.
4.	Po ostatnim ruchu automatyczne pokazanie komunikatu typu Pop-up z informacja, który gracz wygral lub o remisie.
5.	Przycisk do cofania ruchów – zalozeniem jest cofanie dowolnej liczby ruchów (do poczatku gry od dowolnego momentu gry)
Zadania do zrealizowania:
1.	Przygotowanie template’u aplikacji:
•	Zainstalowanie srodowiska (Visual Studio Code) - opcjonalnie
•	Zainstalowanie node.js
•	Stworzenie katalogu aplikacji
•	Zainstalowanie w katalogu zaleznosci do frameworków testowych
•	Utworzenie pliku index.html
•	Utworzenie pliku modulu game – game.js
•	Utworzenie pliku modulu winnerChecker – winner-checker.js
•	(cala aplikacje mozna podzielic na wiecej osobnych plików, a nawet modulów, jesli którys stanie sie podczas implementacji zbyt duzy)
•	Utworzenie pliku CSS
2.	Implementacja gry:
•	Plik HTML z plansza do gry i wszystkimi przyciskami oraz historia wygranych (wszystko w index.html)
•	Game – implementacja obslugi akcji uzytkownika (postawienie znacznika – kólka lub krzyzyka, reset gry, zmiana rozpoczynajacego znacznika, wyswietlanie informacji o wyniku skonczonej gry)
•	WinnerChecker – implementacja algorytmu do sprawdzania, czy gra jest skonczona i który gracz wygral
3.	Wystylowanie gry za pomoca CSS:
•	(tak, zeby bylo schludnie)
•	Wielkosc planszy – kazdego z dziewieciu bloczków
•	Pozycja przycisków do sterowania gra
•	Informacja o statystykach gry
•	Kolor krzyzyków i kólek
4.	Przetestowanie gry przy pomocy frameworku Jasmine:
•	Przetestowanie modulu Game
•	Przetestowanie modulu WinnerChecker
