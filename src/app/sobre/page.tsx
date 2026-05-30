import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              A NOSSA <span className="text-steel">ORIGEM</span>
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
            {/* Imagem/Gráfico Conceitual */}
            <div className="relative h-[500px] bg-[url('/assets/about.png')] bg-cover bg-center border border-white/10 rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-matte/80 to-transparent" />
              <div className="absolute bottom-8 left-8 border-l-2 border-dark-red pl-4">
                <span className="font-tech text-xs tracking-widest text-steel uppercase block mb-1">Status Operacional</span>
                <span className="font-tech text-xl text-pure-white">MISSÃO ATIVA</span>
              </div>
            </div>

            {/* Texto */}
            <div>
              <h2 className="font-subheading text-3xl text-pure-white mb-6 tracking-wide uppercase">
                Precisão não é um acidente
              </h2>
              
              <div className="space-y-6 text-light-steel text-lg leading-relaxed">
                <p>
                  A <strong className="text-pure-white">Zero Stop Precision</strong> foi idealizada para suprir uma lacuna no cenário nacional: a falta de informação técnica e aprofundada sobre balística e o tiro de longo alcance.
                </p>
                <p>
                  Não somos focados no básico. Nosso objetivo é atender atiradores de elite, entusiastas avançados e profissionais táticos que compreendem que o sucesso reside no cálculo milimétrico das variáveis. 
                </p>
                <p>
                  Para nós, o tiro perfeito não é sorte. É a fusão perfeita entre a matemática, o controle respiratório, o conhecimento meteorológico e um hardware ajustado além dos padrões de fábrica.
                </p>
              </div>

              {/* Valores/Pilares */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mentalidade Implacável",
                  "Ciência Balística Exata",
                  "Preparação e Disciplina",
                  "Hardware Otimizado"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-dark-red" />
                    <span className="font-tech text-sm tracking-wider text-pure-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
