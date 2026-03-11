import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Instagram, MessageCircle, Menu, X } from 'lucide-react';

// --- COMPONENTE DE NAVEGAÇÃO (NAVBAR) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'A Clínica', href: '#sobre' },
    { name: 'Especialistas', href: '#equipe' },
    { name: 'Localização', href: '#onde-estamos' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 py-4 px-6 border-b border-gold-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gold-400 p-1.5 rounded-lg text-white transition-transform duration-500 group-hover:rotate-[360deg]">
            <div className="w-5 h-5 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-lg font-bold text-stone-800 tracking-tighter uppercase">
            Sorrir<span className="text-gold-400 font-extrabold">Odontologia</span>
          </span>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-semibold text-stone-600 text-[10px] uppercase tracking-[0.2em]">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="no-underline text-stone-600 hover:text-gold-500 transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={toggleMenu} className="md:hidden text-stone-700 transition-transform active:scale-90">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* CTA DESKTOP */}
        <a href="https://wa.me/5537998044809" target="_blank" rel="noreferrer" className="no-underline">
          <button className="hidden md:block bg-stone-900 hover:bg-gold-500 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-gold-200 active:scale-95">
            Agendar Consulta
          </button>
        </a>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`absolute top-full left-0 w-full bg-white border-b border-gold-100 flex flex-col p-8 gap-6 md:hidden transition-all duration-300 shadow-2xl ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        {menuItems.map((item) => (
          <a key={item.name} href={item.href} onClick={toggleMenu} className="no-underline text-stone-700 font-bold uppercase tracking-[0.2em] text-xs hover:text-gold-500 transition-colors">
            {item.name}
          </a>
        ))}
        <a href="https://wa.me/5537998044809" target="_blank" rel="noreferrer" className="no-underline">
          <button className="bg-gold-400 text-white p-4 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg active:scale-95">
            Agendar Consulta
          </button>
        </a>
      </div>
    </nav>
  );
};

// --- SEÇÃO PRINCIPAL (HERO) ---
const Hero = () => (
  <section id="inicio" className="relative pt-32 pb-16 lg:pt-56 lg:pb-32 px-4 overflow-hidden bg-white">
    {/* Efeito de luz no fundo */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-gold-50 rounded-full blur-[120px] opacity-60"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="w-10 h-[2px] bg-gold-400"></div>
            <span className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px]">Piumhi - MG</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 mb-8 leading-[1.1] tracking-tighter">
            Onde a arte encontra o seu <span className="text-gold-400">sorriso.</span>
          </h1>
          
          <p className="text-[10px] md:text-xs text-stone-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-bold uppercase tracking-[0.2em] opacity-70">
            Tecnologia de ponta e atendimento humanizado para transformar sua experiência odontológica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="https://wa.me/5537998044809" target="_blank" rel="noreferrer" className="no-underline bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-green-700 hover:scale-105 transition-all duration-300">
              <MessageCircle size={20} className="text-white" /> WhatsApp
            </a>
            <a href="#servicos" className="no-underline border border-stone-200 text-stone-700 px-10 py-5 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-gold-400 transition-all duration-300 hover:bg-stone-50">
              Serviços
            </a>
          </div>
        </div>

        <div className="relative group mt-10 lg:mt-0">
          <div className="absolute -inset-4 border border-gold-100 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white transition-transform duration-700 group-hover:rotate-1">
            <img src="/sorrir_hero.png" alt="Sorrir Odontologia" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- SEÇÃO DE SERVIÇOS ---
const Services = () => (
  <section id="servicos" className="py-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-stone-900 uppercase tracking-[0.5em]">Especialidades</h2>
      <div className="w-16 h-1 bg-gold-400 mx-auto mt-6"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {[
        { t: "Implantes", d: "Recupere sua mastigação com tecnologia de ponta." },
        { t: "Clareamento", d: "Dentes brancos de forma rápida, segura e duradoura." },
        { t: "Próteses", d: "Estética e funcionalidade devolvidas com perfeição." },
        { t: "Limpeza", d: "Prevenção Premium para manter sua saúde bucal em dia." }
      ].map((s, idx) => (
        <div key={idx} className="p-10 border border-stone-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl hover:-translate-y-3 transition-all duration-500 group cursor-default">
          <div className="w-14 h-14 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-400 group-hover:text-white transition-all duration-500">
            <CheckCircle size={28} />
          </div>
          <h3 className="text-xs font-bold mb-4 text-stone-900 uppercase tracking-widest">{s.t}</h3>
          <p className="text-stone-500 text-[10px] uppercase tracking-[0.15em] leading-relaxed opacity-70">{s.d}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- SEÇÃO DA CLÍNICA (GALERIA) ---
const Clinica = () => (
  <section id="sobre" className="py-24 px-4 bg-white border-t border-stone-50 text-center">
    <h2 className="text-2xl font-bold text-stone-900 mb-16 uppercase tracking-[0.5em]">Ambiente</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {["/recp.jpg", "/consultorio.jpg", "/clinica3.jpg", "/clinica4.jpg"].map((foto, idx) => (
        <div key={idx} className="group relative h-64 md:h-[450px] overflow-hidden rounded-[2.5rem] shadow-lg border border-stone-100">
          <img src={foto} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" alt="Clínica" />
          <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">+</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- SEÇÃO DE ESPECIALISTAS ---
const Equipe = () => (
  <section id="equipe" className="py-24 px-4 bg-stone-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-stone-900 mb-20 uppercase tracking-[0.5em]">Especialistas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-24 max-w-4xl mx-auto">
        {[
          { n: "Dr. Guilherme Candido", d: "Reabilitação Oral", i: "/gui.png" },
          { n: "Dra. Shyluana Katlhen", d: "Estética Avançada", i: "/shy.png" }
        ].map((dr, idx) => (
          <div key={idx} className="group flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-10">
              <div className="absolute -inset-4 border border-gold-200 rounded-full group-hover:scale-110 group-hover:border-gold-400 transition-all duration-700 opacity-50 group-hover:opacity-100"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-700">
                {/* REMOVIDO EFEITO GRAYSCALE */}
                <img src={dr.i} alt={dr.n} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
              </div>
            </div>
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-[0.2em]">{dr.n}</h3>
            <div className="w-8 h-[1px] bg-gold-400 my-4"></div>
            <p className="text-gold-500 font-bold tracking-[0.3em] text-[10px] uppercase">{dr.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- SEÇÃO DE LOCALIZAÇÃO ---
const Localizacao = () => (
  <section id="onde-estamos" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="text-center lg:text-left space-y-10">
        <h2 className="text-2xl font-bold text-stone-900 uppercase tracking-[0.5em]">Localização</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6 justify-center lg:justify-start group">
            <div className="bg-gold-50 p-4 rounded-full text-gold-500 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300 shadow-sm">
              <MapPin size={24} />
            </div>
            <p className="text-stone-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-loose">
              R. Ramiro Júlio Ferreira, 264 - Centro<br/>Piumhi - MG, 37925-000
            </p>
          </div>
          <div className="flex items-center gap-6 justify-center lg:justify-start group">
            <div className="bg-gold-50 p-4 rounded-full text-gold-500 group-hover:bg-gold-400 group-hover:text-white transition-colors duration-300 shadow-sm">
              <Phone size={24} />
            </div>
            <p className="text-stone-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] italic">(37) 99804-4809</p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/pUMfX8C8hP8T6nBA9" target="_blank" rel="noreferrer" className="no-underline inline-block bg-stone-900 text-white px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-gold-500 transition-all duration-300 shadow-xl active:scale-95">
          Ver no Google Maps
        </a>
      </div>  
      <div className="h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-stone-50 relative group">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.9582301909863!2d-45.9590052!3d-20.4669087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b413fa9f61f2c1%3A0x122eec8c5d4c07a1!2sSorrir%20Odontologia%20Piumhi!5e0!3m2!1spt-BR!2sbr!4v1710100000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-stone-950 text-white py-20 px-6 border-t border-stone-900">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
      <div className="space-y-6">
        <h4 className="text-lg font-bold text-gold-100 uppercase tracking-widest">Sorrir Odontologia</h4>
        <div className="flex justify-center md:justify-start gap-6">
          <Instagram className="text-stone-600 hover:text-gold-400 cursor-pointer transition-colors" size={24} />
          <Phone className="text-stone-600 hover:text-gold-400 cursor-pointer transition-colors" size={24} />
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Piumhi - MG</h4>
        <p className="text-stone-500 text-[10px] uppercase tracking-widest leading-relaxed">R. Ramiro Júlio Ferreira, 264 - Centro<br/>Segunda à Sábado: 08h às 18h</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-400">Atendimento</h4>
        <p className="text-3xl font-bold text-gold-100 tracking-tighter">(37) 99804-4809</p>
      </div>
    </div>
    <div className="border-t border-stone-900 mt-20 pt-10 text-center text-stone-700 text-[8px] uppercase tracking-[0.6em]">
      © 2024 Sorrir Odontologia | RT: Dr. Guilherme Candido - CRO-MG
    </div>
  </footer>
);

// --- COMPONENTE PRINCIPAL (APP) ---
function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold-50 selection:text-gold-600 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Clinica />
      <Equipe />
      <Localizacao />
      <Footer />
      
      {/* WHATSAPP FLOAT BUTTON */}
      <a 
        href="https://wa.me/5537998044809" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-8 right-8 bg-green-600 text-white p-5 rounded-full shadow-[0_10px_40px_rgba(22,163,74,0.4)] z-50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;