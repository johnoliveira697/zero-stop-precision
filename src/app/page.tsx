import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { getSortedArticlesData } from "@/lib/markdown";
import { 
  Crosshair, TrendingUp, Binoculars, ShieldHalf, 
  Dumbbell, Helicopter, Flame, Wrench, ArrowRight, Mail
} from "lucide-react";

export default async function Home() {
  const latestArticles = getSortedArticlesData().slice(0, 6);
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center bg-[url('/assets/hero.png')] bg-cover bg-center bg-fixed">
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-[#0a0a0a]/80" />
          <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-matte to-transparent" />
          
          <Container className="relative z-10 w-full mt-20">
            <div className="max-w-[900px]">
              <h1 
                className="font-heading text-4xl md:text-[6rem] md:leading-none text-pure-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mb-4 glitch" 
                data-text="FATOR PRECISÃO"
              >
                FATOR PRECISÃO
              </h1>
              <p className="font-subheading text-lg md:text-2xl text-light-steel mb-12 border-l-2 border-dark-red pl-4 max-w-[600px] tracking-wide">
                Precisão não é sorte. É cálculo, disciplina e controle.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/artigos" 
                  className="font-subheading text-lg font-medium uppercase tracking-widest bg-dark-red text-pure-white px-8 py-4 border border-dark-red hover:bg-[#8c1a1a] hover:shadow-[0_0_25px_rgba(122,21,21,0.6)] transition-all relative overflow-hidden group text-center"
                >
                  <span className="relative z-10">Explorar Artigos</span>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full z-0" />
                </Link>
                <Link 
                  href="/sobre" 
                  className="font-subheading text-lg font-medium uppercase tracking-widest bg-transparent text-cool-white px-8 py-4 border border-steel hover:border-cool-white hover:bg-white/5 transition-all text-center"
                >
                  Conheça o Projeto
                </Link>
              </div>
            </div>
          </Container>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 z-10">
            <span className="font-tech text-xs tracking-widest text-steel mb-2">TARGET ACQUIRED</span>
            <div className="w-[26px] h-[40px] border border-steel rounded-full relative">
              <div className="w-[2px] h-[6px] bg-cool-white absolute left-1/2 -translate-x-1/2 rounded-full animate-[scroll_1.5s_infinite]" />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-matte">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl text-pure-white">
                CÓDICE <span className="text-steel">TÁTICO</span>
              </h2>
              <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Crosshair, name: "Long Range" },
                { icon: TrendingUp, name: "Balística" },
                { icon: Binoculars, name: "Equipamentos" },
                { icon: ShieldHalf, name: "Técnicas" },
                { icon: Dumbbell, name: "Treinamentos" },
                { icon: Helicopter, name: "Operações" },
                { icon: Flame, name: "Sobrevivência" },
                { icon: Wrench, name: "EDC Tático" },
              ].map((category) => (
                <div 
                  key={category.name}
                  className="bg-lead border border-graphite p-6 md:p-10 text-center relative overflow-hidden group cursor-pointer hover:bg-graphite hover:border-steel hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-dark-red transition-all duration-300 group-hover:h-full" />
                  <category.icon size={48} className="text-steel mx-auto mb-6 transition-all duration-300 group-hover:text-pure-white group-hover:scale-110" />
                  <h3 className="font-heading text-2xl text-cool-white">{category.name}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Articles Section */}
        <section className="py-24 bg-gradient-to-b from-matte to-lead">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl text-pure-white">
                INTELIGÊNCIA <span className="text-steel">OPERACIONAL</span>
              </h2>
              <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {latestArticles.map(article => (
                <article key={article.slug} className="bg-graphite border border-[#2a2a2a] rounded overflow-hidden transition-all hover:border-steel hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-2 group flex flex-col">
                  <div 
                    className="h-[240px] relative bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url('${article.coverImage || "/assets/hero.png"}')` }}
                  >
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-graphite to-transparent" />
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-steel px-4 py-1 font-tech text-xs tracking-widest text-cool-white">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-3xl text-pure-white mb-4 transition-colors group-hover:text-dark-red">
                      {article.title}
                    </h3>
                    <p className="text-light-steel mb-8 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <Link href={`/artigos/${article.slug}`} className="font-subheading font-medium uppercase tracking-widest text-pure-white flex items-center gap-2 group/btn mt-auto">
                      Ler Artigo <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2 group-hover/btn:text-dark-red" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section className="py-32 relative bg-[url('/assets/about.png')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-transparent" />
          <Container className="relative z-10">
            <div className="max-w-[600px]">
              <h2 className="font-heading text-4xl md:text-6xl text-pure-white mb-2">
                O CÓDIGO DA <span className="text-steel">PRECISÃO</span>
              </h2>
              <div className="w-[60px] h-[3px] bg-dark-red mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
              
              <div className="mt-10 space-y-6 text-xl text-light-steel leading-relaxed">
                <p>
                  Na linha de tiro, não há espaço para a dúvida. A <strong className="text-pure-white">Zero Stop Precision</strong> nasceu da necessidade de compilar conhecimento tático, balístico e de sobrevivência em um nível de excelência profissional.
                </p>
                <p>
                  Somos uma plataforma dedicada a atiradores de precisão, operadores táticos e entusiastas que entendem que o disparo perfeito é o resultado de anos de disciplina, estudo matemático constante e evolução técnica ininterrupta.
                </p>
                <p>
                  Nossa mentalidade é simples: o equipamento é apenas uma extensão de uma mente calibrada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-12 mt-12 pt-8 border-t border-white/10">
                <div>
                  <span className="font-tech text-5xl font-bold text-pure-white leading-none block">100%</span>
                  <span className="font-subheading uppercase tracking-widest text-dark-red mt-2 block">Comprometimento</span>
                </div>
                <div>
                  <span className="font-tech text-5xl font-bold text-pure-white leading-none block">ZERO</span>
                  <span className="font-subheading uppercase tracking-widest text-dark-red mt-2 block">Margem de Erro</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Newsletter Section */}
        <section className="bg-lead border-y border-graphite py-16">
          <Container>
            <div className="bg-matte border border-white/10 p-6 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-r from-transparent to-white/5 -skew-x-12" />
              
              <div className="flex-1 relative z-10 text-center md:text-left">
                <h2 className="font-heading text-3xl md:text-5xl text-pure-white mb-4">
                  RELATÓRIO DE <span className="text-dark-red">SITUAÇÃO</span>
                </h2>
                <p className="text-light-steel text-lg">
                  Receba análises táticas, novos artigos, reviews de equipamentos e conteúdos exclusivos diretamente na sua base de operações.
                </p>
              </div>

              <form className="flex-1 w-full relative z-10 flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-steel" size={20} />
                  <input 
                    type="email" 
                    placeholder="Seu e-mail criptografado" 
                    required
                    suppressHydrationWarning
                    className="w-full bg-graphite border border-white/10 py-4 pr-6 pl-14 text-pure-white outline-none focus:border-steel focus:shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all"
                  />
                </div>
                <button type="submit" className="font-subheading text-lg font-medium uppercase tracking-widest bg-dark-red text-pure-white py-4 border border-dark-red hover:bg-[#8c1a1a] hover:shadow-[0_0_25px_rgba(122,21,21,0.6)] transition-all">
                  Entrar na Zona de Precisão
                </button>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
