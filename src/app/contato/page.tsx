import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Zero Stop Precision",
  description: "Entre em contato com a equipe Zero Stop Precision para dúvidas, parcerias ou sugestões de conteúdo sobre tiro de precisão e balística.",
  alternates: {
    canonical: "/contato",
  },
};

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const enviado = resolvedSearchParams.enviado === "true";

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
                    <p className="text-light-steel">contato@0stopprecision.com</p>
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
              
              {enviado && (
                <div className="mb-6 flex items-start gap-3 bg-dark-red/10 border border-dark-red/40 text-cool-white px-4 py-3 rounded">
                  <CheckCircle2 size={20} className="text-dark-red shrink-0 mt-0.5" />
                  <p className="text-sm">Mensagem transmitida com sucesso. Nossa equipe responderá em breve no e-mail informado.</p>
                </div>
              )}

              <form action="https://formsubmit.co/contato@0stopprecision.com" method="POST" className="space-y-6">
                {/* Configuração do FormSubmit.co: define assunto do e-mail, template e página de retorno */}
                <input type="hidden" name="_subject" value="Novo contato via site - Zero Stop Precision" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.0stopprecision.com/contato?enviado=true" />
                {/* Honeypot anti-spam: campo invisível que só bots preenchem */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

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
