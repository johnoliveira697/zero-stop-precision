import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              SINAL DE <span className="text-steel">COMUNICAÇÃO</span>
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            <p className="text-light-steel mt-6 max-w-[600px] mx-auto text-lg">
              Transmita sua mensagem. Nossa equipe de analistas responderá o mais breve possível.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1000px] mx-auto">
            {/* Contact Info */}
            <div className="space-y-10">
              <h2 className="font-subheading text-2xl uppercase tracking-widest text-pure-white border-b border-white/10 pb-4">
                Coordenadas
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-graphite p-3 text-dark-red rounded border border-white/5">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-tech text-lg text-pure-white tracking-wider mb-1">BASE DE OPERAÇÕES</h3>
                    <p className="text-light-steel">Brasil<br/>(Acesso Restrito)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-graphite p-3 text-dark-red rounded border border-white/5">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-tech text-lg text-pure-white tracking-wider mb-1">CANAL SEGURO (E-MAIL)</h3>
                    <p className="text-light-steel">contato@zerostopprecision.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-graphite p-3 text-dark-red rounded border border-white/5">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-tech text-lg text-pure-white tracking-wider mb-1">FREQUÊNCIA DE RÁDIO</h3>
                    <p className="text-light-steel">+55 (21) 98966-6080</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-graphite border border-white/10 p-8">
              <h2 className="font-subheading text-2xl uppercase tracking-widest text-pure-white mb-8">
                Formulário de Contato
              </h2>
              
              {/* Note: Replace action URL with a real Formspree endpoint or similar service to receive real emails. */}
              <form action="https://formspree.io/f/your-form-id-here" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-tech text-sm text-steel tracking-wider mb-2">IDENTIFICAÇÃO (NOME)</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-matte border border-white/10 py-3 px-4 text-pure-white outline-none focus:border-dark-red focus:shadow-[0_0_10px_rgba(122,21,21,0.2)] transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-tech text-sm text-steel tracking-wider mb-2">E-MAIL PARA RETORNO</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-matte border border-white/10 py-3 px-4 text-pure-white outline-none focus:border-dark-red focus:shadow-[0_0_10px_rgba(122,21,21,0.2)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-tech text-sm text-steel tracking-wider mb-2">MENSAGEM / DÚVIDA TÁTICA</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-matte border border-white/10 py-3 px-4 text-pure-white outline-none focus:border-dark-red focus:shadow-[0_0_10px_rgba(122,21,21,0.2)] transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full font-subheading text-lg font-medium uppercase tracking-widest bg-dark-red text-pure-white py-4 hover:bg-[#8c1a1a] transition-all"
                >
                  Transmitir Mensagem
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
