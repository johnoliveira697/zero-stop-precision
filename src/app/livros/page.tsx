import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { BookOpen } from "lucide-react";
import { getLivrosData } from "@/lib/livros";
import Link from "next/link";

export default async function LivrosPage() {
  const livros = getLivrosData();

  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              BIBLIOTECA <span className="text-steel">TÁTICA</span>
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            <p className="text-light-steel mt-6 max-w-[600px] mx-auto text-lg">
              Conhecimento teórico avançado. Livros e manuais essenciais para quem busca domínio absoluto em precisão, balística e mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {livros.map((livro) => {
              return (
              <div key={livro.id} className="bg-graphite border border-[#2a2a2a] rounded overflow-hidden flex flex-col h-full group">
                <a href={livro.link} target="_blank" rel="noopener noreferrer" className="block relative cursor-pointer group/image">
                  <div 
                    className="h-[360px] relative bg-contain bg-no-repeat bg-center shrink-0 transition-transform duration-500 group-hover/image:scale-105 bg-[#1a1a1a]"
                    style={{ backgroundImage: `url('${livro.image || "/assets/hero.png"}')` }}
                  >
                    <div className="absolute inset-0 bg-matte/40 group-hover/image:bg-transparent transition-all duration-500" />
                    <div className="absolute top-4 left-4 bg-dark-red text-pure-white p-2 rounded-sm shadow-[0_0_10px_rgba(122,21,21,0.5)]">
                      <BookOpen size={20} />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-steel px-4 py-1 font-tech text-xs tracking-widest text-cool-white uppercase">
                      {livro.category}
                    </div>
                  </div>
                </a>
                
                <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-graphite to-lead border-t border-white/5">
                  <h3 className="font-heading text-2xl text-pure-white mb-1">
                    {livro.title}
                  </h3>
                  <span className="font-tech text-sm text-steel block mb-4">
                    POR {livro.author ? livro.author.toUpperCase() : "JOHN OLIVEIRA"}
                  </span>
                  <div className="h-[120px] overflow-y-auto pr-2 mb-8 custom-scrollbar">
                    <p className="text-light-steel text-sm">
                      {livro.description}
                    </p>
                  </div>
                  
                  <a 
                    href={livro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center font-subheading font-medium uppercase tracking-widest bg-dark-red text-pure-white px-6 py-3 border border-dark-red hover:bg-[#8c1a1a] hover:shadow-[0_0_25px_rgba(122,21,21,0.6)] transition-all flex justify-center items-center gap-2 mt-auto"
                  >
                    Adquirir Livro <BookOpen size={16} />
                  </a>
                </div>
              </div>
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
