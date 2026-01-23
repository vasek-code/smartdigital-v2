
import { BarChart3, Globe, Layers, Zap } from 'lucide-react';
import { Service, PortfolioItem, TeamMember, NavLink } from './types';

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: 'Služby', href: '#services' },
  { label: 'Práce', href: '#portfolio' },
  { label: 'Reference', href: '#testimonials' },
  { label: 'Tým', href: '#team' },
  { label: 'Kontakt', href: '#contact' },
];

// Hero Section
export const HERO_CONTENT = {
  headline: "Digitální růst bez kompromisů.",
  subheadline: "Jsme Smart Digital. Propojujeme kreativitu s daty a technologií pro maximální výkon vašeho byznysu.",
  cta: "Zahájit projekt"
};

// Services Section
export const SERVICES: Service[] = [
  {
    id: 'social',
    title: 'Cinematic Social Media',
    description: 'Tvoříme originální cinematic obsah, který vypráví příběh Vašeho byznysu, buduje emoce a přirozeně posiluje Vaší pozici v automotive segmentu.',
    icon: Layers,
    features: ['Content Management & Brand Storytelling', 'Automotive Cinematic Videography', 'Community Building']
  },
  {
    id: 'ppc',
    title: 'Reklamní kampaně', 
    description: 'Navrhujeme a produkujeme reklamní kampaně postavené na vaší službě, silném konceptu a kvalitním vizuálním zpracování. Výkonnost stavíme na datech, ale základ tvoří kreativní nápad, který dává kampani smysl.',
    icon: BarChart3,
    features: ['Kreativní koncept & produkce kampaní', 'Facebook & Instagram Ads', 'Remarketingové strategie']
  },
  {
    id: 'web',
    title: 'Tvorba webů',
    description: 'Netvoříme jen moderní weby. Navrhujeme webové zážitky, které jasně komunikují hodnotu vaší značky, vypráví váš příběh a přesvědčí uživatele, proč jste v tom, co děláte, nejlepší.',
    icon: Globe,
    features: ['Webové zážitky & Brand storytelling', 'UX/UI Design zaměřený na emoce i konverze', 'UX/UI Design zaměřený na emoce i konverze']
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description: 'Pracujeme s vaší stávající identitou a aktivně ji rozvíjíme tak, aby byla zapamatovatelná, emocionální a jasně komunikovala, proč si vás lidé mají vybrat.',
    icon: Zap,
    features: ['Rozvoj a evoluce značky', 'Vizuální identita & brand storytelling', 'Brand strategie & konzistentní prezentace']
  }
];

// Portfolio Section
export const PORTFOLIO: PortfolioItem[] = [
{
    id: 'skimpark',
    client: 'Spectra Wash',
    title: 'Web & Rezervační systém',
    category: 'Web Development',
    // DŮLEŽITÉ: Uložte fotku projektu jako 'skimpark.jpg' do složky public
    image: '/spectrawash.jpg', 
    stats: 'Nový moderní web, silné SEO, Správná prezentace poctivého detailngu',
    description: 'Kompletní redesign webové prezentace pro Spectra Wash s důrazem na moderní design, přehlednost a silný vizuální dojem. Cílem bylo vytvořit rychlý, mobilně optimalizovaný web, který jasně komunikuje služby a zjednodušuje cestu zákazníka od první návštěvy až po kontakt či objednávku.'
  },
  
  {
    id: 'skimpark',
    client: 'Skimpark Praha',
    title: 'Web & Rezervační systém',
    category: 'Web Development',
    // DŮLEŽITÉ: Uložte fotku projektu jako 'skimpark.jpg' do složky public
    image: '/skimpark.jpg', 
    stats: '+45% rezervací',
    description: 'Kompletní redesign digitální prezentace pro oblíbený sportovní areál. Cílem bylo vytvořit vizuálně atraktivní, rychlý a mobilně optimalizovaný web, který zjednoduší cestu zákazníka od návštěvy až k rezervaci. Implementace moderních technologií zajistila bleskové načítání a intuitivní UX, což vedlo k okamžitému nárůstu online poptávek.'
  },
  {
    id: 'cistevozy',
    client: 'Čisté vozy Berounsko',
    title: 'Web & Lokální Marketing',
    category: 'Web & Ads',
    // DŮLEŽITÉ: Uložte fotku projektu jako 'cistevozy.jpg' do složky public
    image: '/cistevozy.jpg', 
    stats: '12x ROAS',
    description: 'Vytvoření moderní webové vizitky zaměřené na konverze a spuštění hyper-lokálních PPC kampaní. Projekt zahrnoval nejen design a vývoj, ale i nastavení pokročilé analytiky a optimalizaci pro lokální SEO. Výsledkem je stabilní přísun nových klientů a naprostá dominance ve vyhledávání na klíčová slova v daném regionu.'
  },
  {
    id: 'productionhub',
    client: 'Production Hub',
    title: 'Platforma pro filmaře',
    category: 'App Development',
    // DŮLEŽITÉ: Uložte fotku projektu jako 'productionhub.jpg' do složky public
    image: '/productionhub.jpg', 
    stats: '+2000 uživatelů',
    description: 'Vývoj komplexní webové aplikace, která centralizuje pronájem filmové techniky a propojuje profesionály v oboru. Řešení zahrnuje pokročilé filtrování, uživatelské profily, systém zpráv a administraci. Důraz byl kladen na škálovatelnost databáze, bezpečnost dat a čisté, funkční UI pro každodenní používání v produkčním prostředí.'
  }
];

// Testimonials Section
export const TESTIMONIALS = [
  {
    id: 1,
    text: "Spolupráce se Smart Digital byla opravdu příjemná. Oceňuju profesionální přístup, kreativitu a hlavně to, jak dobře pochopili moji vizi. Určitě doporučuju!",
    author: "Radovan Z.",
    role: "Klient"
  },
  {
    id: 2,
    text: "Děkuji, ani nevíte, jak rád s Vámi spolupracuji. Vaše úroveň služeb je přesně taková, jakou bych si představoval v ideálním světě.",
    author: "Jiří D.",
    role: "Klient"
  },
  {
    id: 3,
    text: "Smart Digital mi pomohl s prací na webové aplikaci Production Hub, která spojuje filmaře a techniku do jednoho přehledného místa.",
    author: "Lukáš M.",
    role: "Founder, Production Hub"
  }
];

// Team Section
export const TEAM: TeamMember[] = [
  {
    id: 'julijan',
    name: 'Julijan Laznik',
    role: 'Founder, Videography',
    // DŮLEŽITÉ: Uložte vaši fotku jako 'julijan.jpg' do složky public
    image: '/julijan.jpg', 
    quote: 'Můj cíl je vytvářet originální vizuál'
  },
  {
    id: 'matyas',
    name: 'Matyáš Hartl',
    role: 'Cofounder, Communication',
    // DŮLEŽITÉ: Uložte Matyášovu fotku jako 'matyas.jpg' do složky public
    image: '/maytas1.jpg', 
    quote: 'Kreativita vyhrává pozornost, strategie vyhrává klienty.'
  },
  {
    id: 'marek',
    name: 'Marek Panoch',
    role: 'Foto, externist',
    // Automatický avatar (Iniciály MP, černé pozadí, zelený text)
    image: '/mara2.jpg', 
    quote: 'Jeden obraz vydá za tisíc slov. My tvoříme příběhy.'
  },
];

// Contact Section
export const CONTACT_INFO = {
  email: 'smdgtl.contact@gmail.com',
  phone: '+420 777 888 999',
  address: 'Václavské náměstí 1, Praha 1',
  social: {
    linkedin: '#',
    instagram: '#',
    facebook: '#'
  }
};
