export type ArticleContentBlock =
  | string
  | {
      type: "gallery";
      title?: string;
      images: string[];
    }
  | {
      type: "instagramLink";
      url: string;
      caption: string;
      image: string;
    };

export interface ArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  content: ArticleContentBlock[];
  highlights: string[];
  quote: string;
}

export const articlesData: ArticleItem[] = [
  {
    slug: "villa-karpacz-bezglutenowy-pensjonat-w-gorach",
    title:
      "Villa Karpacz Gluten Free – bezglutenowy pensjonat z wyżywieniem w górach",
    excerpt:
      "Villa Karpacz Gluten Free w Karpaczu to pensjonat z wyżywieniem i ofertą dostosowaną do diety bezglutenowej. Komfortowe pokoje, regionalne smaki i bliskość szlaków tworzą idealne warunki na relaks w Karkonoszach.",
    image: "/img/hotels/002_villa_karpacz_bezglutenu.jpg",
    category: "Podróże",
    author: "Karolina Wontorska",
    date: "02.06.2026",
    content: [
      "Villa Karpacz Gluten Free to kameralny pensjonat w samym sercu Karkonoszy, przy ul. Curie-Skłodowskiej 9A. Miejsce przyciąga wygodą, nowoczesnym wystrojem i opcją pełnego wyżywienia, dzięki czemu goście mogą skupić się na wypoczynku zamiast na gotowaniu.",
      "Obiekt oferuje 20 komfortowych pokoi z łazienkami, telewizją satelitarną oraz lodówką i czajnikiem. Dostępne są pokoje dwuosobowe oraz przestronne studia dla 5–6 osób, co sprawia, że Villa Karpacz świetnie sprawdza się zarówno dla par, rodzin jak i grup zorganizowanych.",
      "W ofercie pensjonatu znajduje się pełne wyżywienie: śniadania, obiady i obiadokolacje przygotowane z lokalnych produktów. Szczególnie ważne dla osób na diecie bezglutenowej jest to, że Villa Karpacz deklaruje możliwość dostosowania menu do indywidualnych potrzeb dietetycznych, w tym podawania bezpiecznych dań bez glutenu.",
      "Położenie willi u podnóża Śnieżki i blisko szlaku na Sowią Przełęcz zapewnia szybki dostęp do najpiękniejszych karkonoskich tras. W pobliżu są też popularne atrakcje: Świątynia Wang, Muzeum Zabawek, Krucze Skały i Dziki Wodospad, co czyni pobyt atrakcyjnym zarówno latem, jak i zimą.",
      "Dla osób, które szukają wygodnych noclegów z wyżywieniem, Villa Karpacz jest dobrym wyborem także dlatego, że możliwe są tam kompleksowe pobyty tematyczne i imprezy okolicznościowe. Obiekt przyjmuje także grupy zorganizowane, a oferta obejmuje pakiety na weekend, święta i inne okazje.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DYxND-7IOBl/",
        caption:
          "Sprawdź galerię na Instagramie i zobacz więcej chwil spędzonych w Villa Karpacz Gluten Free!",
        image: "/img/hotels/002_villa_karpacz_bezglutenu.jpg",
      },
    ],
    highlights: [
      "Pensjonat Villa Karpacz znajduje się przy ul. Curie-Skłodowskiej 9A, w centrum Karpacza.",
      "Obiekt oferuje 20 komfortowych pokoi, w tym pokoje dwuosobowe i studia dla 5–6 osób.",
      "Menu można dostosować do diety bezglutenowej, a pełne wyżywienie obejmuje śniadania, obiady i obiadokolacje.",
      "Villa Karpacz to idealna baza wypadowa do Śnieżki, Sowie Przełęczy, Świątyni Wang i Dzikiego Wodospadu.",
      "Pensjonat jest otwarty przez cały rok i oferuje pakiety pobytowe oraz imprezy okolicznościowe.",
    ],
    quote:
      "W Karpaczu odpoczynek nabiera smaku, gdy po górskiej wycieczce czeka na Ciebie bezglutenowy posiłek i komfortowy pokój w Villa Karpacz.",
  },
  {
    slug: "czym-jest-celiakia",
    title: "Czym jest celiakia?",
    excerpt:
      "Pełny przewodnik po celiakii: charakterystyka choroby trzewnej, objawy, gluten i metody leczenia. Poznaj podstawowe informacje o tej chorobie autoimmunologicznej.",
    image: "/img/articles/article-celiac.jpg",
    category: "Celiakia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Celiakia, inaczej zwana chorobą trzewną, ma podłoże genetyczne i zaliczana jest do grupy chorób autoimmunologicznych. W układzie odpornościowym osoby chorej, po spożyciu glutenu dochodzi do niepożądanej reakcji immunologicznej. Mówiąc najprościej, reakcja ta jest skierowana przeciwko własnym tkankom organizmu chorego.",
      "Największe szkody zachodzą w jelicie cienkim, co prowadzi do stanu zapalnego jelit, zaniku kosmków jelitowych, co w następstwie ogranicza lub uniemożliwia wchłanianie składników odżywczych z pokarmów. Jednak oprócz jelita cienkiego, na niszczycielskie działanie glutenu narażone są również inne narządy chorego.",
      "Gluten jest mieszaniną białek (prolamin i glutenin) charakterystycznych dla produktów zbożowych takich jak np.: pszenica, żyto, jęczmień, orkisz, owies.",
      "Objawy celiakii nie są jednoznaczne i oczywiste. Celiakia może mieć postać klasyczną i nieklasyczną. W przypadku tej pierwszej charakterystycznymi objawami są m.in.: biegunki, utrata masy ciała, zaburzenia rozwoju, niski wzrost, wzdęty brzuch, ból brzucha.",
      "W przypadku celiakii nieklasycznej (która jest spotykana znacznie częściej), objawy zaliczane są głównie do tych pozajelitowych m.in. anemia, afty, zaburzenia neurologiczne, depresja, psychozy, bóle kostne i stawowe, poronienia i problemy z płodnością, współistniejące choroby autoimmunologiczne, niedobór witamin i składników mineralnych.",
      "Niestety celiakia jest nieuleczalna. Jedyną metodą leczenia dla chorego jest stosowanie ścisłej diety bezglutenowej przez całe życie.",
      "Choroby autoimmunologiczne mogą pojawiać się parami lub grupami, w każdym momencie życia. Przy celiakii mogą pojawić się inne choroby autoimmunologiczne, dlatego warto monitorować swoje zdrowie i być w stałym kontakcie z lekarzem.",
    ],
    highlights: [
      "Celiakia to choroba autoimmunologiczna o podłożu genetycznym, w której gluten uruchamia reakcję odpornościową.",
      "Największe szkody zachodzą w jelicie cienkim, uniemożliwiając wchłanianie składników odżywczych.",
      "Objawy celiakii mogą być klasyczne (biegunki, utrata wagi) lub nieklasyczne (anemia, zaburzenia neurologiczne, problemy z płodnością).",
      "Jedynym leczeniem celiakii jest ścisła, całkowita dieta bezglutenowa przez całe życie.",
      "Osoby z celiakią mogą mieć również inne choroby autoimmunologiczne, które pojawiają się w różnych momentach życia.",
    ],
    quote:
      "Celiakia nie jest wyrokiem, lecz zaproszeniem do świadomego i zdrowego życia.",
  },
  {
    slug: "pierwsze-kroki-z-celiakia",
    title: "Pierwsze kroki z celiakią i dietą bezglutenową",
    excerpt:
      "Przewodnik dla początkujących: czym jest celiakia, jak rozpoznać gluten i jak bezpiecznie rozpocząć dietę bezglutenową.",
    image: "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
    category: "Celiakia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Celiakia to choroba autoimmunologiczna, w której spożycie glutenu uruchamia reakcję odpornościową wewnątrz organizmu. Największe szkody powstają w jelicie cienkim, dlatego szybka zmiana diety jest kluczowa dla zdrowia.",
      "Gluten występuje w pszenicy, żytnim, jęczmieniu i orkiszach. Nawet owies musi być oznaczony jako bezglutenowy, ponieważ często zawiera śladowe ilości glutenu z zanieczyszczeń produkcyjnych.",
      "Objawy celiakii mogą być bardzo różne. Klasyczna postać objawia się biegunkami, wzdęciami i utratą masy ciała, a nieklasyczna może dawać objawy pozajelitowe: anemię, afty, bóle kostne, zaburzenia neurologiczne czy problemy z płodnością.",
      "Niestety celiakia nie jest uleczalna. Jedyną skuteczną metodą leczenia jest ścisła, całkowicie bezglutenowa dieta przez całe życie.",
      "Przy celiakii mogą pojawić się inne choroby autoimmunologiczne. Dlatego warto monitorować swoje zdrowie, współpracować z lekarzem i dietetykiem oraz być świadomym sygnałów wysyłanych przez organizm.",
    ],
    highlights: [
      "Usuń z diety wszystkie źródła glutenu i wybieraj produkty certyfikowane jako bezglutenowe.",
      "Czytaj etykiety i ucz się alternatywnych nazw glutenu.",
      "Pamiętaj, że jedynym leczeniem celiakii jest ścisła dieta bezglutenowa.",
      "Obserwuj swoje ciało i konsultuj się z lekarzem oraz dietetykiem przy zmianie diety.",
    ],
    quote:
      "Rozpoczęcie diety bezglutenowej to inwestycja w zdrowie — najważniejsze, żeby robić to krok po kroku i z rozsądkiem.",
  },
  {
    slug: "bezglutenowe-podroze-gdzie-szukac-smacznych-miejsc",
    title: "Bezglutenowe podróże: gdzie szukać smacznych miejsc",
    excerpt:
      "Przegląd najlepszych restauracji i hoteli bezglutenowych oraz praktyczne wskazówki na wyjazdach.",
    image: "/img/restaurants/poland/001_saska_sushi.jpg",
    category: "Podróże",
    author: "Karolina Wontorska",
    date: "20.05.2026",
    content: [
      "Podróżując, warto wcześniej sprawdzić ofertę restauracji i hoteli pod kątem bezglutenowych opcji.",
      "Aplikacje oraz grupy społecznościowe potrafią pomóc w znalezieniu miejsc, które serwują bezpieczne dania bez glutenu.",
      "Na miejscu pytaj obsługę o sposób przygotowania potraw oraz o możliwość uniknięcia szkód krzyżowych.",
      "Czasami najlepsze miejsca to te, gdzie szef kuchni sam chętnie podzieli się wiedzą na temat składników i sposobów przygotowania.",
      "Polska staje się coraz bardziej przyjazna dla osób na diecie bezglutenowej. W górach, nad morzem i w miastach znajdziesz coraz więcej miejsc, które wspierają bezglutenowy styl życia. Zapraszamy do odkrywania polskich perełek i europejskich smaków bez glutenu!",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DYxND-7IOBl/",
        caption:
          "Villa Karpacz GLUTEN FREE – ul. Curie-Skłodowskiej 9A, 58-540 Karpacz. Kameralny pensjonat w sercu Karkonoszy oferuje komfortowe pokoje i pełne wyżywienie dostosowane do diety bezglutenowej. Idealna baza wypadowa dla miłośników górskich szlaków i osób z celiakią.",
        image: "/img/hotels/002_villa_karpacz_bezglutenu.jpg",
      },
      "Villa Karpacz GLUTEN FREE to wyjątkowe miejsce położone w sercu Karkonoszy. Pensjonat specjalizuje się w obsłudze gości na diecie bezglutenowej, oferując 20 komfortowych pokoi z pełnym wyżywieniem. Każdego ranka goście mogą cieszyć się bezpiecznym śniadaniem przygotowanym z dbałością o detale. Obiady i obiadokolacje przygotowywane są z lokalnych, wysokiej jakości produktów, a szef kuchni z chęcią dostosowuje menu do indywidualnych potrzeb dietetycznych. Bliskość Śnieżki, Sowie Przełęczy i Dzikiego Wodospadu sprawia, że Villa Karpacz to idealna baza wypadowa dla aktywnych turystów. Oprócz wycieczek, goście mogą cieszyć się spa, sauną i nowoczesnym wyposażeniem obiektu. Pensjonat jest otwarty przez cały rok i oferuje kompleksowe pobyty zarówno dla par, rodzin jak i grup zorganizowanych.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DRkTfI4iDWE/",
        caption:
          "Hotel Crocus****, ul. Tytusa Chałubińskiego 40, 34-500 Zakopane. Luksusowy hotel w sercu Tatr oferuje doskonałą gastronomię oraz dedykowaną obsługę dla osób na diecie bezglutenowej. Idealne miejsce do relaksu w górach z pełnym komfortem.",
        image: "/img/hotels/001_hotel_crocus_zakopane.jpg",
      },
      "Hotel Crocus**** w Zakopanem to luksusowy hotel położony u podnóża Tatr, który doskonale rozumie potrzeby osób z celiakią. Dla gości na diecie bezglutenowej hotel oferuje dedykowaną obsługę kulinną w swojej restauracji. Menu przygotowywane jest z uwzględnieniem bezpieczeństwa osób z celiakią, a kuchnia dysponuje oddzielnym zapleczem do przygotowywania dań bez glutenu, co minimalizuje ryzyko kontaminacji krzyżowej. Hotel Crocus to idealne miejsce zarówno dla osób szukających aktywnego wypoczynku na szlakach tatrzańskich, jak i dla tych, które pragną relaksu w pełnym komforcie. Pokoje są nowocześnie urządzone, a obsługa zawsze gotowa pomóc gościom z specjalnymi potrzebami dietetycznymi.",
      "Podróżowanie bez glutenu do krajów śródziemnomorskich to prawdziwa przygoda sensoryczna. Włoskie, greckie i rumuńskie restauracje coraz częściej rozumieją potrzeby osób z celiakią i z dumą serwują bezglutenowe specjały.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DABZsxyId-Q/",
        caption:
          "Lido di Ostia – Rzym, Włochy. Piękne widoki na Morze Śródziemne i pyszne potrawy bez glutenu. Lokalna kuchnia włoska na najwyższym poziomie z dbałością o gości na diecie bezglutenowej.",
        image: "/img/restaurants/europe/001_lido_di_ostia_cz1.jpg",
      },
      "Lido di Ostia w Rzymie to restauracja położona nad samym morzem Śródziemnym, gdzie można cieszyć się autentyczną włoską kuchnią bez glutenu. Specjalność restauracji to świeże owoce morza oraz makarony przygotowywane ze zbóż bez glutenu. Każdy posiłek to kombinacja tradycyjnych receptur z nowoczesnym podejściem do bezglutenowych potraw. Atmosfera restauracji jest ciepła i rodzinna, a obsługa doskonale rozumie potrzeby osób z celiakią. Zachód słońca nad Morzem Śródziemnym podczas posiłku to niepowtarzalne doświadczenie kulinarne.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DAKxCTaIF9Y/",
        caption:
          "Rzym – Włochy. Odkrywaj włoskie kulinarne tradycje w mieście wiecznym z pewnością bezglutenowego posiłku.",
        image: "/img/restaurants/europe/004_rzym_cz1.jpg",
      },
      "Rzym to miasto, które ukazuje bogactwo włoskiej gastronomii. W ostatnich latach coraz więcej restauracji rzymskich wprowadza dedykowane menu bezglutenowe. Tradycyjne dania takie jak carbonara czy cacio e pepe są przygotowywane również w wersji bezglutenowej z wykorzystaniem wysokiej jakości makaronów bez glutenu. Historia i kultura Rzymu idą w parze z nowoczesnymi podejściami do dietetyki. Spacery po zabytkowych uliczkach przeplata się tu z zapamiętanym smakami autentycznej włoskiej kuchni.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DAkgyrjI0VP/",
        caption:
          "Florencja – Włochy. Sztuka, historia i kulinarna doskonałość bez glutenu. Słynne toskanackie smaki w mieście Renesansu czekają na podróżników na diecie bezglutenowej.",
        image: "/img/restaurants/europe/009_florencja_cz1.jpg",
      },
      "Florencja, kolыbka Renesansu, to również miejsce, gdzie można cieszyć się pysznymi bezglutenowymi posiłkami. Toskanacka kuchnia słynie z prostoty i doskonałości składników. Oliwa z oliwek, pomidory, świeży chleb – wszystko to można znaleźć tutaj w wersjach dostosowanych do potrzeb osób z celiakią. Restauracje w Florencji coraz chętniej przygotowują potrawy bez glutenu, nie rezygnując z tradycyjnych receptur. Posiłek w Florencji to nie tylko smak, ale również doświadczenie kulturalne i historyczne.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DBHExqroFiQ/",
        caption:
          "Lido di Ostia – Rzym, Włochy. Morskie skarby, bezglutenowe specjały i słoneczne włoskie popołudnia. Restauracja nad morzem, gdzie każdy gość otrzyma wsparcie w wyborze bezglutenowych dań.",
        image: "/img/restaurants/europe/003_lido_di_ostia_cz3.jpg",
      },
      "Podróż do Lido di Ostia ukazuje różnorodność menu bezglutenowego dostępnego w tej restauracji. Świeże ryby, owoce morza, warzywa sezonowe – wszystko przygotowywane ze szczególną uwagą na bezpieczeństwo osób z celiakią. Każdy posiłek to rezult pracy doświadczonych kucharzy, którzy rozumieją znaczenie specjalnych potrzeb dietetycznych swoich gości. Restauracja oferuje również warianty dań dla innych typów alergii i nietolerancji, co czyni ją uniwersalnym miejscem dla każdego.",
    ],
    highlights: [
      "W podróży warto korzystać z aplikacji i grup społecznościowych, które pomagają znaleźć restauracje i hotele przyjazne dla osób z celiakią.",
      "Zawsze pytaj obsługę o sposób przygotowania potraw i możliwość uniknięcia szkód krzyżowych.",
      "Villa Karpacz w Polsce – pensjonat z pełnym wyżywieniem dla osób na diecie bezglutenowej.",
      "Hotel Crocus w Zakopanem – luksusowy hotel z dedykowaną obsługą kulinarną bez glutenu.",
      "Rzym – miasto pełne restauracji oferujących tradycyjną włoską kuchnię w wersji bezglutenowej.",
      "Florencja – toskanacka kuchnia i tradycyjne smaki dostosowane do potrzeb osób z celiakią.",
    ],
    quote:
      "Podróżowanie bez glutenu to nie ograniczenie, lecz okazja do odkrywania autentycznych smaków świata w miejscach, które gotowaniem wyrażają swoją historię i serce.",
  },
  {
    slug: "przepis-na-szybki-obiad-bez-glutenu",
    title: "Przepis na szybki obiad bez glutenu",
    excerpt:
      "Przepis na prosty, pełnowartościowy bezglutenowy obiad z wykorzystaniem popularnych składników.",
    image: "/img/recipes/dinners/016_bezglutenowy_burger_z_kimchi.jpg",
    category: "Kuchnia",
    author: "Karolina Wontorska",
    date: "24.05.2026",
    content: [
      "Szybki obiad bez glutenu może być smaczny i odżywczy. Kluczem jest wykorzystanie naturalnych składników i prostych zamienników. Poniżej znajdziesz kilka moich ulubionych przepisów, które sprawdzą się doskonale w każdy dzień tygodnia!",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DFGPPs3OddU/",
        caption:
          "Pad Thai - azjatyckie połączenie smaków w mniej niż 20 minut. Ryż, warzywa i krewetki w idealnym sosie.",
        image: "/img/recipes/dinners/011_pad_thai.jpg",
      },
      "Pad Thai to klasyk azjatyckiej kuchni, doskonały dla osób na diecie bezglutenowej. Ta wersja wykorzystuje warzywa sezonowe i makaronowe noodle bez glutenu, które nadają fantastyczną teksturę. Sos z tamari, limonki i masła orzechowego tworzy harmonijną kompozycję smaków.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DC_zuLFodeV/",
        caption:
          "Bezglutenowe Łazanki - tradycyjna polska kuchnia bez glutenu. Warstwowe ciepło na talerzu.",
        image: "/img/recipes/dinners/005_bezglutenowe_lazanki.jpg",
      },
      "Łazanki to doskonały przepis na coś ciepłego i sycącego. Zastępuję tradycyjną mąkę mąką z ryżu i mąką gryczaną, co daje wspaniały smak i nie wpływa na konsystencję. Każda warstwa to gwarancja zadowolenia dla całej rodziny.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DDm5JUeO608/",
        caption:
          "Bezglutenowa Pizza Górska - kraina i smaki w każdym kęsie. Drożdżowe ciasto bez glutenu z tradycyjnymi dodatkami.",
        image: "/img/recipes/dinners/007_bezglutenowa_pizza_goralska.jpg",
      },
      "Pizza bez glutenu nie musi być kompromisem. Moje ciasto na bazie mąki bezglutenowej i drożdży piekarskiego jest równie puszyste i smaczne co tradycyjne. Dodatki: szynka, ser, grzyby i świeża cebula tworzą klasyczną kombinację.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DEnMW8lu1a1/",
        caption:
          "Sushi Burger - innowacyjna fuzja kuchni japońskiej. Ryż sushi zamiast chleba, łosoś, awokado i warzywa.",
        image: "/img/recipes/dinners/009_bezglutenowy_sushi_burger.jpg",
      },
      "Sushi burger to idealna opcja dla tych, którzy chcą czegoś lekszego i bardziej egzotycznego. Ryż sushi słodko-słony tworzy idealną bazę, a świeże składniki sprawiają, że to danie jest zarówno zdrowe, jak i niezwykle smaczne.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DDjza7Wu_Bn/",
        caption:
          "Obiadowy Bowl z Łososiem - połączenie zdrowia i smaku. Ryż, warzywa sezonowe, łosoś i tahini.",
        image: "/img/recipes/dinners/006_obiadowy_bowl_z_lososiem.jpg",
      },
      "Bowl z łososiem to przepis na szybki i pełnowartościowy obiad. Łosoś bogaty w omega-3, świeże warzywa i sos tahini tworzą doskonałą kombinację, która zaspokaja głód i dostarcza energii do końca dnia.",
      {
        type: "instagramLink",
        url: "https://www.instagram.com/p/DOtO_geiI0I/",
        caption:
          "Burger z Udzcem Kurczaka - domowa wersja fast-foodu bez glutenu. Mięso grillowane, warzywa i sos domowy.",
        image: "/img/recipes/dinners/024_burger_z_udzcem_kurczaka.jpg",
      },
      "Burger z udzcem kurczaka to moja wersja na szybki obiad, który nie obciąża żołądka. Marynuję mięso w sosie sojowym bez glutenu, miodzie i czosnku. Podaję na bezglutenowej bułce lub liściach sałaty dla lżejszej wersji.",
    ],
    highlights: [
      "Użyj bezglutenowego pieczywa lub sałatki zamiast bułek.",
      "Warianty z kaszą jaglaną lub ryżem są bardzo proste do przygotowania.",
      "Przygotuj na zapas sosy i marynaty bez glutenu.",
      "Przemyśl dodatki, aby danie było lekkie i pełne smaku.",
    ],
    quote:
      "Dobry obiad bez glutenu to nie tylko zamiennik, lecz prawdziwa kulinarna przyjemność.",
  },
  {
    slug: "czytanie-etykiet-bez-glutenu",
    title: "Jak czytać etykiety bezglutenowych produktów",
    excerpt:
      "Naucz się rozpoznawać ukryte źródła glutenu i wybierać produkty bezpieczne dla celiakii.",
    image: "/img/articles/article-reading-labels.jpg",
    category: "Porady",
    author: "Karolina Wontorska",
    date: "28.05.2026",
    content: [
      "Etykiety potrafią być mylące, ale kilka prostych zasad pozwoli Ci odczytać skład i potencjalne zagrożenia glutenowe.",
      'Zwracaj uwagę nie tylko na deklaracje "bezglutenowy", ale także na symbole i informacje o możliwym zanieczyszczeniu krzyżowym.',
      "Unikaj produktów z nieznanymi składnikami i dodatkami, które mogą ukrywać śladowe ilości glutenu.",
      "Wybierając certyfikowane bezglutenowe marki, masz większą pewność, że produkt spełnia normy dla osób z celiakią.",
    ],
    highlights: [
      "Sprawdzaj składniki każdej nowej paczki produktu.",
      "Zwracaj uwagę na informacje o produkcji w tym samym zakładzie.",
      "Czytaj etykiety z uwagą, zwracając uwagę na alergeny.",
      'Wybieraj produkty z certyfikatem i wyraźnym oznaczeniem "bezglutenowy".',
    ],
    quote:
      "Czytanie etykiet to umiejętność, która daje największe bezpieczeństwo na diecie bezglutenowej.",
  },
  {
    slug: "bezglutenowe-sniadanie-na-caly-tydzien",
    title: "Bezglutenowe śniadanie na cały tydzień",
    excerpt:
      "Pomysły na szybkie, zdrowe i sycące śniadania bez glutenu, które ułatwią codzienne poranki.",
    image: "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
    category: "Kuchnia",
    author: "Karolina Wontorska",
    date: "29.05.2026",
    content: [
      "Śniadanie jest podstawą dobrego dnia, szczególnie na diecie bezglutenowej. Warto mieć kilka gotowych pomysłów na szybkie posiłki.",
      "Proste mieszanki bezglutenowe, świeże owoce i warzywa oraz pełnowartościowe białko to najlepsza baza na śniadanie.",
      {
        type: "gallery",
        title: "Galeria bezglutenowych śniadań",
        images: [
          "/img/recipes/breakfasts/001_sniadanie_boczek_z_jajkiem.jpg",
          "/img/recipes/breakfasts/003_sniadaniowa_tortilla_z_jajkiem.jpg",
          "/img/recipes/breakfasts/006_zielony_bajgel.jpg",
          "/img/recipes/breakfasts/007_omlet_z_maki_gryczanej_i_jajek.jpg",
          "/img/recipes/breakfasts/011_owsianka_z_matcha.jpg",
          "/img/recipes/breakfasts/013_zapiekane_bulki_sniadaniowe.jpg",
        ],
      },
      "Możesz przygotować weekendowe porcje i zamrozić je na dni, kiedy brakuje Ci czasu.",
      "Wykorzystaj talerz pełen kolorów i różnorodnych tekstur, aby poranna kawa miała idealne, zdrowe wsparcie.",
    ],
    highlights: [
      "Przygotuj rano owsiankę z bezglutenowych płatków i ulubionych dodatków.",
      "Zamarynuj warzywa i podawaj je z jajkiem lub hummusem.",
      "Wykorzystaj bezglutenowe pieczywo lub placki jako bazę do kanapek.",
      "Planowanie rano pomaga zaoszczędzić czas i zachować zdrowy rytm dnia.",
    ],
    quote:
      "Dobre śniadanie to pierwszy krok do dnia pełnego energii, nawet bez glutenu.",
  },
];
