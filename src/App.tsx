import React, { useState, useEffect } from 'react';
import { Code2, MessageCircle, Palette, Rocket, GraduationCap, ChevronRight, Globe, RefreshCw, Bot, Shield, Search, PenTool, Plus, Minus, Mail, MapPin, Menu, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Sparkles } from './components/ui/sparkles';
import { Grid } from './components/ui/grid-pattern';
import { TextHoverEffect, FooterBackgroundGradient } from './components/ui/hover-footer';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerSteps = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const stepCard = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const stepChevron = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const faqData = [
  {
    question: "Combien coûte un site web ?",
    answer: "Le prix dépend de la complexité du projet. Un site vitrine démarre à partir de quelques centaines d'euros. On établit toujours un devis clair et détaillé avant de commencer — pas de mauvaise surprise, pas de frais cachés."
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "Un site vitrine est livré en 1 à 2 semaines. Pour des projets plus complexes avec des fonctionnalités spécifiques, comptez 3 à 4 semaines. Vous êtes informé de l'avancement à chaque étape."
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même ?",
    answer: "Absolument. On vous livre un site sur WordPress avec une interface intuitive, et on vous forme à l'utiliser. Textes, images, articles — vous gérez en toute autonomie."
  },
  {
    question: "Qu'est-ce qui est inclus dans la maintenance ?",
    answer: "Hébergement, nom de domaine, mises à jour de sécurité, sauvegardes régulières et petites modifications. Votre site reste en ligne, rapide et sécurisé — sans que vous ayez à vous en soucier."
  },
  {
    question: "Je n'ai pas de contenu (textes, photos), c'est un problème ?",
    answer: "Pas du tout. On vous accompagne dans la rédaction de vos textes et on utilise des banques d'images professionnelles. L'important c'est votre message — on s'occupe du reste."
  },
  {
    question: "Pourquoi choisir Aura plutôt qu'une autre agence ?",
    answer: "On ne travaille pas avec des modèles préconçus. Chaque site est construit sur-mesure avec des technologies modernes (React, Tailwind CSS) qui offrent des performances supérieures aux sites WordPress classiques. Et surtout, on est dans l'Yonne — disponibles, réactifs et à votre écoute."
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', project: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-500/30 selection:text-white overflow-hidden scroll-smooth">

      {/* Padded Hero Container */}
      <div className="p-3 md:p-4 lg:p-5">
        <div className="relative bg-[#050505] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 text-white">
          {/* Navigation */}
          <motion.nav
            initial={prefersReducedMotion ? false : { y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="absolute top-0 left-0 right-0 z-50 px-8 py-8 lg:px-16 flex items-center justify-between text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-300 pointer-events-auto"
          >
            <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Aura</a>
            <div className="hidden md:flex items-center justify-around flex-1 px-8 lg:px-32">
              <a href="#technologies" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Technologies</a>
              <a href="#approche" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Approche</a>
              <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Services</a>
              <a href="#faq" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:block hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded">Contact</a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-2xl font-bold tracking-[0.15em] uppercase text-gray-300"
              >
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Fermer le menu"
                >
                  <X className="w-7 h-7" />
                </button>
                {[
                  { href: "#technologies", label: "Technologies" },
                  { href: "#approche", label: "Approche" },
                  { href: "#services", label: "Services" },
                  { href: "#faq", label: "FAQ" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="relative flex flex-col justify-between min-h-[85vh] md:min-h-[85vh] w-full px-5 sm:px-8 lg:px-16 pb-8 sm:pb-12 pt-24 sm:pt-32 z-10 overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_34HiYklDAUXBdINxQFnQVgrxu6v/hf_20260308_165804_a20ffd10-ba43-4d21-a2fc-71cbda4e704e.mp4" type="video/mp4" />
            </video>

            {/* Subtle glow behind hero text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/30 blur-[130px] rounded-full pointer-events-none" />

            <div className="relative w-full h-full flex flex-col justify-center pt-8 md:pt-16 flex-1">

              <div className="hidden md:flex w-full flex-row justify-between items-end mb-16">
                <div className="w-1/3"></div>

                {/* Right side list */}
                <div className="text-right flex flex-col items-end gap-3 text-[15px] font-medium text-gray-400">
                  <motion.a href="#services" variants={fadeIn} initial="hidden" animate="visible" className="hover:text-white cursor-pointer transition-colors">Sites web</motion.a>
                  <motion.a href="#services" variants={fadeIn} initial="hidden" animate="visible" className="hover:text-white cursor-pointer transition-colors">Refonte & modernisation</motion.a>
                  <motion.a href="#services" variants={fadeIn} initial="hidden" animate="visible" className="hover:text-white cursor-pointer transition-colors">Référencement</motion.a>
                  <motion.a href="#services" variants={fadeIn} initial="hidden" animate="visible" className="hover:text-white cursor-pointer transition-colors">IA & Automatisation</motion.a>
                </div>
              </div>

              {/* Main Title Area */}
              <div className="w-full flex flex-col items-start relative z-20">
                <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-white text-base sm:text-xl md:text-3xl font-bold mb-3 sm:mb-4 font-sans tracking-tight">©{new Date().getFullYear()}</motion.div>

                <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white">
                  Créer au-Delà
                </motion.h1>

                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-3 md:mt-0 gap-6 md:gap-0">
                  <motion.div variants={fadeIn} initial="hidden" animate="visible" className="pt-3 md:pt-0 pb-2 md:pb-4 lg:pb-8">
                    <p className="text-gray-400 text-[13px] sm:text-sm md:text-base leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md">
                      Des sites web sur-mesure qui transforment vos visiteurs en clients. Design haut de gamme, performance technique et accompagnement de A à Z — dans l'Yonne et partout en France.
                    </p>
                    <a href="#contact" className="inline-block mt-4 sm:mt-5 px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-full text-xs sm:text-sm hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-900/30">
                      Demander un devis gratuit
                    </a>
                  </motion.div>

                  <motion.span aria-hidden="true" variants={fadeIn} initial="hidden" animate="visible" className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white flex items-center gap-2 sm:gap-4 md:gap-8 justify-start md:justify-end w-full md:w-auto">
                    de l'<span className="font-serif italic font-normal tracking-tight pr-2 sm:pr-4 md:pr-12">Ordinaire</span>
                  </motion.span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <main>
      {/* Technologies Section */}
      <div id="technologies" className="px-3 pt-3 md:px-4 md:pt-4 lg:px-5 lg:pt-5">
      <div className="relative z-10 overflow-hidden bg-[#050505] rounded-t-[2rem] lg:rounded-t-[2.5rem] shadow-2xl border border-black/5">
        <div className="mx-auto pt-16 pb-8 w-full max-w-4xl px-6">
          <div className="text-center text-4xl md:text-5xl font-semibold text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Technologies de pointe.
            </span>
            <br />
            <span>Au service de vos projets.</span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-10 text-white">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10 items-center">
              <ReactLogo />
              <TailwindLogo />
              <TypeScriptLogo />
              <FramerMotionLogo />
              <NodeLogo />
              <ViteLogo />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 items-center">
              <FigmaLogo />
              <GitHubLogo />
              <VSCodeLogo />
              <NetlifyLogo />
              <AntigravityLogo />
            </div>
          </div>
        </div>

        <div className="relative -mt-12 h-[14rem] w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-[#050505]" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#ffffff"
          />
        </div>
      </div>
      </div>

      {/* Notre Approche Section */}
      <div id="approche" className="px-3 pb-3 md:px-4 md:pb-4 lg:px-5 lg:pb-5">
      <section className="relative z-10 bg-[#050505] overflow-hidden rounded-b-[2rem] lg:rounded-b-[2.5rem] shadow-2xl border border-black/5">

        {/* Mirrored sparkles effect (top) */}
        <div className="relative h-[18rem] w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] rotate-180">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-[#050505]" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#ffffff"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 -mt-56 relative z-10 pb-24">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Un processus simple,<br />des résultats concrets.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              De la première prise de contact à la mise en ligne, on vous accompagne à chaque étape. Pas de jargon, pas de surprise.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSteps}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 lg:gap-0 items-stretch relative"
          >
            {/* Step 1 */}
            <motion.div variants={stepCard} className="group relative rounded-2xl bg-white/[0.03] p-8 border border-white/[0.06] transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] cursor-pointer">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-bold text-violet-400 tracking-widest uppercase">Étape 01</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Échange & Compréhension</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Par mail, téléphone ou visio, on discute de votre projet : site vitrine, fonctionnalités, objectifs. On écoute avant de proposer.
              </p>
            </motion.div>

            {/* Chevron 1 */}
            <motion.div variants={stepChevron} className="hidden lg:flex items-center justify-center px-2">
              <ChevronRight className="w-5 h-5 text-white/20" />
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={stepCard} className="group relative rounded-2xl bg-white/[0.03] p-8 border border-white/[0.06] transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)] cursor-pointer">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-fuchsia-400" />
                </div>
                <span className="text-xs font-bold text-fuchsia-400 tracking-widest uppercase">Étape 02</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Maquette & Validation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                On vous présente une maquette visuelle de votre futur site. Vous validez le design avant qu'on touche à une seule ligne de code.
              </p>
            </motion.div>

            {/* Chevron 2 */}
            <motion.div variants={stepChevron} className="hidden lg:flex items-center justify-center px-2">
              <ChevronRight className="w-5 h-5 text-white/20" />
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={stepCard} className="group relative rounded-2xl bg-white/[0.03] p-8 border border-white/[0.06] transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] cursor-pointer">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-bold text-violet-400 tracking-widest uppercase">Étape 03</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Développement</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Construction de votre site avec les technologies adaptées — WordPress, React, Tailwind... Vous suivez l'avancement en temps réel.
              </p>
            </motion.div>

            {/* Chevron 3 */}
            <motion.div variants={stepChevron} className="hidden lg:flex items-center justify-center px-2">
              <ChevronRight className="w-5 h-5 text-white/20" />
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={stepCard} className="group relative rounded-2xl bg-white/[0.03] p-8 border border-white/[0.06] transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)] cursor-pointer">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-fuchsia-400" />
                </div>
                <span className="text-xs font-bold text-fuchsia-400 tracking-widest uppercase">Étape 04</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mise en Ligne & Formation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre site est en ligne. On vous forme à l'utiliser en toute autonomie, et on reste disponible pour la suite.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Nos Services Section */}
      <div id="services" className="px-3 md:px-4 lg:px-5">
      <section className="relative z-10 py-24 bg-[#050505] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
        {/* Sparkles flottantes en arrière-plan */}
        <Sparkles
          density={400}
          speed={0.3}
          opacity={0.4}
          opacitySpeed={1}
          size={1.2}
          color="#ffffff"
          className="absolute inset-0 w-full h-full z-0"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 italic font-light">Services</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Du site vitrine à l'automatisation IA — chaque service est pensé pour un seul objectif : vous amener des clients.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSteps}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Service 1 - Création site vitrine */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <Globe className="w-5 h-5 text-violet-400" />
                <p className="text-base font-bold text-white">Création de site vitrine</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Un site professionnel qui reflète la qualité de votre travail. Rapide, adapté à tous les écrans, livré clé en main — vous n'avez rien à gérer.
              </p>
            </motion.div>

            {/* Service 2 - Refonte de site web */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <RefreshCw className="w-5 h-5 text-fuchsia-400" />
                <p className="text-base font-bold text-white">Refonte de site web</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Votre site actuel ne convertit pas ? On reprend tout : design, structure et performance. Pour que chaque visiteur devienne un prospect.
              </p>
            </motion.div>

            {/* Service 3 - Agent IA & Automatisation */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <Bot className="w-5 h-5 text-violet-400" />
                <p className="text-base font-bold text-white">Agent IA & Automatisation</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Un assistant IA sur votre site qui répond à vos clients 24h/24. Prise de RDV, réponses automatiques, relances — pendant que vous vous concentrez sur votre métier.
              </p>
            </motion.div>

            {/* Service 4 - Maintenance & Hébergement */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <Shield className="w-5 h-5 text-fuchsia-400" />
                <p className="text-base font-bold text-white">Maintenance & Hébergement</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Hébergement, nom de domaine, mises à jour et sauvegardes — tout est inclus. Votre site reste rapide et sécurisé, sans que vous ayez à y penser.
              </p>
            </motion.div>

            {/* Service 5 - SEO / Référencement */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <Search className="w-5 h-5 text-violet-400" />
                <p className="text-base font-bold text-white">SEO / Référencement</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Apparaissez en haut de Google quand vos futurs clients cherchent vos services. Référencement local optimisé pour l'Yonne et la Bourgogne.
              </p>
            </motion.div>

            {/* Service 6 - Identité visuelle */}
            <motion.div variants={stepCard} className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden cursor-pointer group">
              <Grid size={20} />
              <div className="flex items-center gap-3 mb-4 relative z-20">
                <PenTool className="w-5 h-5 text-fuchsia-400" />
                <p className="text-base font-bold text-white">Identité visuelle</p>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-20">
                Couleurs, typographies, univers graphique — une identité visuelle cohérente qui vous démarque de la concurrence. Logo inclus sur demande.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Questions <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 italic font-light">fréquentes</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Tout ce que vous devez savoir avant de vous lancer.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSteps}
            className="space-y-3"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={stepCard}
                className="rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-inset rounded-2xl"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-violet-500 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left - Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 italic font-light">contacter</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Un projet en tête ? Décrivez-nous votre besoin, on revient vers vous sous 24h.
              </p>

              {contactSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-violet-50 border border-violet-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 text-sm">On revient vers vous très rapidement.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSent(true);
                  }}
                  className="space-y-4"
                >
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="contact-name" className="sr-only">Votre nom</label>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Votre nom"
                        value={contactForm.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                        autoComplete="name"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="contact-email" className="sr-only">Votre email</label>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <Mail className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Votre email"
                        value={contactForm.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                        autoComplete="email"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project type */}
                  <div className="relative">
                    <label htmlFor="contact-project" className="sr-only">Type de projet</label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Globe className="w-4 h-4 text-slate-400" />
                    </div>
                    <select
                      id="contact-project"
                      value={contactForm.project}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setContactForm({ ...contactForm, project: e.target.value })}
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Type de projet</option>
                      <option value="vitrine">Création de site vitrine</option>
                      <option value="refonte">Refonte de site web</option>
                      <option value="ia">Agent IA & Automatisation</option>
                      <option value="maintenance">Maintenance & Hébergement</option>
                      <option value="seo">SEO / Référencement</option>
                      <option value="identite">Identité visuelle</option>
                      <option value="autre">Autre</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label htmlFor="contact-message" className="sr-only">Votre message</label>
                    <div className="absolute left-4 top-4">
                      <MessageCircle className="w-4 h-4 text-slate-400" />
                    </div>
                    <textarea
                      id="contact-message"
                      placeholder="Décrivez votre projet en quelques mots..."
                      value={contactForm.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                alt="Espace de travail moderne avec écrans affichant du code et du design web"
                width={800}
                height={500}
                loading="lazy"
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#050505] relative h-fit rounded-3xl overflow-hidden mx-3 mb-3 md:mx-4 md:mb-4 lg:mx-5 lg:mb-5">
        <div className="max-w-7xl mx-auto p-10 lg:p-14 z-40 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

            {/* Brand */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-2xl font-bold">Aura</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Agence web dans l'Yonne. Sites sur-mesure, performants et pensés pour convertir vos visiteurs en clients.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#technologies" className="hover:text-violet-400 transition-colors">Technologies</a></li>
                <li><a href="#approche" className="hover:text-violet-400 transition-colors">Notre Approche</a></li>
                <li><a href="#services" className="hover:text-violet-400 transition-colors">Nos Services</a></li>
                <li><a href="#faq" className="hover:text-violet-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Liens utiles</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Demander un devis</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-violet-400" />
                  <a href="mailto:contact@newera.fr" className="hover:text-violet-400 transition-colors">contact@newera.fr</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-violet-400" />
                  <span>Yonne (89), Bourgogne</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-t border-gray-700 my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="flex gap-6">
              <a href="#" className="hover:text-violet-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-violet-400 transition-colors">Instagram</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Aura. Tous droits réservés.</p>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
          <TextHoverEffect text="Aura" className="z-50" />
        </div>

        <FooterBackgroundGradient />
      </footer>
    </div>
  );
}

// Technology logos

const ReactLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <circle cx="50" cy="50" r="8" />
      <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="36" ry="14" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 50 50)" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">React</span>
  </div>
)

const TailwindLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 54 33" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Tailwind</span>
  </div>
)

const TypeScriptLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <rect x="5" y="5" width="90" height="90" rx="12" fill="none" stroke="currentColor" strokeWidth="6"/>
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontWeight="700" fontFamily="system-ui, sans-serif" fill="currentColor">TS</text>
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">TypeScript</span>
  </div>
)

const FigmaLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 38 57" fill="none" className="w-8 h-12 md:w-10 md:h-16">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="currentColor"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="currentColor"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="currentColor"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="currentColor"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="currentColor"/>
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Figma</span>
  </div>
)

const ViteLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 410 404" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M399.641 59.525l-183.998 329.02c-3.798 6.793-13.558 6.96-17.572.302L10.918 60.45c-4.37-7.248 2.058-15.862 10.228-14.26L204.822 84.07c1.4.275 2.839.251 4.23-.067L393.86 46.466c8.112-1.752 14.625 6.677 10.432 13.871z" fill="currentColor" opacity="0.5"/>
      <path d="M292.965 1.474l-130.192 23.79c-2.588.473-4.468 2.788-4.408 5.424l8.29 157.13c.085 1.613 1.503 2.834 3.112 2.636l37.876-4.66c1.8-.221 3.27 1.37 2.914 3.152l-11.836 59.266c-.385 1.927 1.316 3.562 3.163 3.04l11.567-3.265c1.848-.522 3.549 1.114 3.163 3.04l-18.91 94.135c-.544 2.708 3.174 4.023 4.529 1.6l.904-1.613 100.03-199.354c.906-1.806-.604-3.88-2.584-3.548l-38.638 6.468c-1.87.313-3.435-1.398-2.9-3.172l26.96-89.38c.539-1.786-1.055-3.505-2.935-3.165z" fill="currentColor"/>
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Vite</span>
  </div>
)

const FramerMotionLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M0 100V0l50 50 50-50v100L50 50z" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Motion</span>
  </div>
)

const NodeLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M50 2.5L7.5 27v46L50 97.5 92.5 73V27L50 2.5zm0 10L82.5 32v36L50 87.5 17.5 68V32L50 12.5z" />
      <text x="50" y="62" textAnchor="middle" fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif" fill="currentColor">JS</text>
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Node.js</span>
  </div>
)

const GitHubLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 98 96" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">GitHub</span>
  </div>
)

const VSCodeLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M74.5 3L30 40.2 12.3 27l-9.8 6.5v33l9.8 6.5L30 59.8 74.5 97l23-9.5V12.5L74.5 3zM30 52.8L15 46.7v-0.1l0-.1v-.1L15 40l-.1-.1v-.1-.1L30 33.5v19.3zm44.5 23.7L56 50l18.5-26.5v53z" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">VS Code</span>
  </div>
)

const NetlifyLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16">
      <path d="M28.5 1.2L0 50l28.5 48.8h43L100 50 71.5 1.2h-43zM66.4 13.8L79.2 37H66.4V13.8zM33.6 13.8V37H20.8l12.8-23.2zM20.8 63l12.8 23.2V63H20.8zm45.6 23.2L79.2 63H66.4v23.2zM37.6 41h24.8v18H37.6V41z" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Netlify</span>
  </div>
)

const AntigravityLogo = () => (
  <div className="flex flex-col items-center gap-3">
    <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12 md:w-16 md:h-16">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="5" />
      <path d="M50 18L30 72h8l4-12h16l4 12h8L50 18zm0 16l6 20H44l6-20z" fill="currentColor" />
    </svg>
    <span className="text-sm md:text-base font-semibold tracking-tight">Antigravity</span>
  </div>
)
