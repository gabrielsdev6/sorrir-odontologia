import React from 'react';
import { Phone, MapPin, Clock, CheckCircle, Instagram, MessageCircle, Menu } from 'lucide-react';

// --- COMPONENTE DE NAVEGAÇÃO ---
const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 py-4 px-6 flex justify-between items-center border-b border-gold-100">
    <div className="flex items-center gap-2">
      <div className="bg-gold-400 p-1.5 rounded-lg shadow-sm text-white">
        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
      </div>
      <span className="text-xl font-bold text-stone-800 tracking-tighter">
        SORRIR<span className="text-gold-400">ODONTOLOGIA</span>
      </span>
    </div>
    
    <div className="hidden md:flex gap-8 font-semibold text-stone-600 text-[10px] uppercase tracking-[0.2em]">
      <a href="#inicio" className="no-underline hover:text-gold-400 transition">Início</a>
      <a href="#servicos" className="no-underline hover:text-gold-400 transition">Serviços</a>
      <a href="#sobre" className="no-underline hover:text-gold-400 transition">A Clínica</a>
      <a href="#equipe" className="no-underline hover:text-gold-400 transition">Especialistas</a>
      <a href="#onde-estamos" className="no-underline hover:text-gold-400 transition">Localização</a>
    </div>

    <button className="bg-stone-900 hover:bg-gold-500 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition hidden md:block shadow-lg active:scale-95">
      Agendar Consulta
    </button>
    
    <Menu className="md:hidden text-stone-700" />
  </nav>
);

// --- SEÇÃO PRINCIPAL (HERO) ---
const Hero = () => (
  <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gold-50 rounded-full blur-3xl opacity-50"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gold-400"></div>
            <span className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[10px]">Excelência em Piumhi - MG</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8 leading-[1.1] tracking-tight">
            Onde a arte encontra o seu <span className="text-gold-400">sorriso.</span>
          </h1>
          
          <p className="text-lg text-stone-500 mb-10 max-w-lg leading-relaxed font-light uppercase tracking-wide text-xs">
            Tecnologia de ponta e atendimento humanizado para transformar sua experiência odontológica em algo único.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a href="https://wa.me/5537998044809" target="_blank" rel="noreferrer" className="no-underline bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl transition transform hover:scale-105">
              <MessageCircle size={20} className="text-white" /> Agendar Agora
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-8 h-8 rounded-full bg-gold-400 border-2 border-white flex items-center justify-center text-white text-[10px]">★</div>
                ))}
              </div>
              <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">+100 Avaliações</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -right-6 w-full h-full border border-gold-200 rounded-[2rem] -z-10"></div>
          <div className="relative h-[550px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="/sorrir_hero.png" 
              alt="Sorriso Perfeito"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- SEÇÃO DE SERVIÇOS ---
const Services = () => {
  const list = [
    { title: "Implantes Dentários", desc: "Recupere sua mastigação com tecnologia avançada." },
    { title: "Clareamento", desc: "Dentes brancos de forma rápida e segura." },
    { title: "Odontopediatria", desc: "Cuidado especial e carinhoso para os pequenos." },
    { title: "Próteses", desc: "Estética e funcionalidade devolvidas com perfeição." },
    { title: "Limpeza Premium", desc: "Prevenção é o segredo para um sorriso saudável." }
  ];

  return (
    <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-stone-900 mb-4 uppercase tracking-[0.3em]">Especialidades</h2>
        <div className="w-16 h-1 bg-gold-400 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((item, idx) => (
          <div key={idx} className="p-12 border border-stone-100 rounded-[2rem] bg-white hover:shadow-xl transition duration-500 group">
            <div className="w-14 h-14 bg-stone-50 text-gold-500 rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold-400 group-hover:text-white transition-all duration-500">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xs font-bold mb-4 text-stone-900 uppercase tracking-widest">{item.title}</h3>
            <p className="text-stone-500 leading-relaxed text-xs uppercase tracking-wider opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- SEÇÃO: A CLÍNICA (GALERIA) ---
const Clinica = () => {
  const fotos = [
    { src: "/recp.jpg", label: "Recepção" },
    { src: "/consultorio.jpg", label: "Consultório" },
    { src: "/clinica3.jpg", label: "Tecnologia" },
    { src: "/clinica4.jpg", label: "Biossegurança" },
  ];

  return (
    <section id="sobre" className="py-24 px-6 bg-white border-t border-stone-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-16 uppercase tracking-[0.3em]">O Ambiente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fotos.map((foto, idx) => (
            <div key={idx} className="group relative h-96 overflow-hidden rounded-2xl shadow-sm">
              <img src={foto.src} alt={foto.label} className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <p className="text-white font-bold tracking-[0.3em] text-[10px] uppercase border border-white px-4 py-2">{foto.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SEÇÃO DE ESPECIALISTAS ---
const Equipe = () => (
  <section id="equipe" className="py-24 px-6 bg-stone-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-stone-900 mb-20 uppercase tracking-[0.3em]">Especialistas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
        <div className="group">
          <div className="relative mb-10 inline-block">
            <div className="absolute -inset-4 border border-gold-400/30 rounded-full group-hover:border-gold-400 transition duration-500"></div>
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src="/gui.png" alt="Dr. Guilherme" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
            </div>
          </div>
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-[0.2em]">Dr. Guilherme Candido</h3>
          <p className="text-gold-500 font-bold tracking-widest text-[9px] uppercase mt-3">Reabilitação Oral</p>
        </div>

        <div className="group">
          <div className="relative mb-10 inline-block">
            <div className="absolute -inset-4 border border-gold-400/30 rounded-full group-hover:border-gold-400 transition duration-500"></div>
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img src="/shy.png" alt="Dra. Shyluana" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
            </div>
          </div>
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-[0.2em]">Dra. Shyluana Katlhen</h3>
          <p className="text-gold-500 font-bold tracking-widest text-[9px] uppercase mt-3">Estética Avançada</p>
        </div>
      </div>
    </div>
  </section>
);

// --- LOCALIZAÇÃO ---
const Localizacao = () => (
  <section id="onde-estamos" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-stone-900 uppercase tracking-[0.3em]">Localização</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <MapPin className="text-gold-500" size={24} />
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest leading-loose">
              R. Ramiro Júlio Ferreira, 264 - Centro<br/>Piumhi - MG, 37925-000
            </p>
          </div>
          <div className="flex items-center gap-6 justify-center lg:justify-start">
            <Phone className="text-gold-500" size={24} />
            <p className="text-stone-500 text-xs font-bold uppercase tracking-widest italic">(37) 99804-4809</p>
          </div>
        </div>
        <a href="https://maps.app.goo.gl/pUMfX8C8hP8T6nBA9" target="_blank" rel="noreferrer" className="no-underline inline-block bg-stone-900 text-white px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-gold-500 transition shadow-2xl">
          Ver no Google Maps
        </a>
      </div>  
      <div className="h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-stone-50">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.9582301909863!2d-45.9590052!3d-20.4669087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b413fa9f61f2c1%3A0x122eec8c5d4c07a1!2sSorrir%20Odontologia%20Piumhi%20-%20Tratamento%20de%20Canal%2C%20Implantodontia%2C%20Restaura%C3%A7%C3%B5es%2C%20Limpezas%2C%20Clinico%20Geral.!5e0!3m2!1spt-BR!2sbr!4v1773236807212!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer id="contato" className="bg-stone-950 text-white pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
      <div>
        <h4 className="text-xl font-bold mb-8 text-gold-100 tracking-tighter uppercase">SORRIR ODONTOLOGIA</h4>
        <div className="flex justify-center md:justify-start gap-6">
          <Instagram className="hover:text-gold-400 cursor-pointer transition text-stone-600" size={20} />
          <Phone className="hover:text-gold-400 cursor-pointer transition text-stone-600" size={20} />
        </div>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gold-400">Atendimento</h4>
        <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">R. Ramiro Júlio Ferreira, 264 - Piumhi</p>
        <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold mt-2 italic">Segunda à Sábado: 08h às 18h</p>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-gold-400">Contato</h4>
        <p className="text-2xl font-bold text-gold-100 tracking-widest font-sans">(37) 99804-4809</p>
      </div>
    </div>
    <div className="border-t border-stone-900 mt-20 pt-10 text-center text-stone-700 text-[8px] uppercase tracking-[0.5em]">
      <p>© 2024 Sorrir Odontologia | Design Premium</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gold-50 selection:text-gold-600">
      <Navbar />
      <Hero />
      <Services />
      <Clinica />
      <Equipe />
      <Localizacao />
      <Footer />
      <a href="https://wa.me/5537998044809" target="_blank" rel="noreferrer"
        className="no-underline fixed bottom-8 right-8 bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition duration-300 z-50 shadow-green-900/40">
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}

export default App;