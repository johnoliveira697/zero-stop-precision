import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { ExternalLink, Target, Crosshair, Map, ShieldHalf, Wrench } from "lucide-react";
import { getEquipamentosData } from "@/lib/equipamentos";

const iconMap: Record<string, any> = {
  Target,
  Crosshair,
  Map,
  ShieldHalf,
  Wrench
};

export default async function EquipamentosPage() {
  const products = getEquipamentosData();

  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-pure-white">
              SISTEMAS E <span className="text-steel">EQUIPAMENTOS</span>
            </h1>
            <div className="w-[60px] h-[3px] bg-dark-red mx-auto mt-4 shadow-[0_0_10px_rgba(122,21,21,0.4)]" />
            <p className="text-light-steel mt-6 max-w-[600px] mx-auto text-lg">
              Seleção curada de hardware tático testado em campo. Ferramentas essenciais para garantir consistência no disparo perfeito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Crosshair;
              return (
              <div key={product.id} className="bg-graphite border border-[#2a2a2a] rounded overflow-hidden flex flex-col h-full group">
                <div 
                  className="h-[260px] relative bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${product.image || "/assets/hero.png"}')` }}
                >
                  <div className="absolute inset-0 bg-matte/40 group-hover:bg-transparent transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-dark-red text-pure-white p-2 rounded-sm shadow-[0_0_10px_rgba(122,21,21,0.5)]">
                    <Icon size={20} />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-steel px-4 py-1 font-tech text-xs tracking-widest text-cool-white uppercase">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-graphite to-lead border-t border-white/5">
                  <h3 className="font-heading text-2xl text-pure-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-light-steel text-sm mb-8 flex-grow">
                    {product.description}
                  </p>
                  
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center font-subheading font-medium uppercase tracking-widest bg-transparent text-pure-white px-6 py-3 border border-steel hover:bg-steel hover:text-pure-white transition-all flex justify-center items-center gap-2 mt-auto"
                  >
                    Ver Disponibilidade <ExternalLink size={16} />
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
