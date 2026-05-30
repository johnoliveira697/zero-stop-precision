import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { ExternalLink, Target, Crosshair, Map } from "lucide-react";

export default function EquipamentosPage() {
  const products = [
    {
      id: 1,
      name: "Luneta Vortex Strike Eagle 5-25x56",
      category: "Óptica",
      description: "Desempenho de longo alcance em um pacote durável. O tubo de 34mm acomoda uma enorme quantidade de elevação e deriva.",
      image: "https://images.unsplash.com/photo-1543818671-5582c0b62e49?q=80&w=1000&auto=format&fit=crop",
      icon: Crosshair,
      link: "#",
    },
    {
      id: 2,
      name: "Bipé Harris HBRS 6-9\"",
      category: "Apoio",
      description: "O padrão da indústria para atiradores de precisão. Pernas retráteis com mola e base giratória (Swivel) para ajuste de cant.",
      image: "https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?q=80&w=1000&auto=format&fit=crop",
      icon: Target,
      link: "#",
    },
    {
      id: 3,
      name: "Kestrel 5700 Elite com Applied Ballistics",
      category: "Eletrônicos",
      description: "Estação meteorológica completa com o motor balístico mais confiável do mundo integrado para soluções de tiro extremas.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000&auto=format&fit=crop",
      icon: Map,
      link: "#",
    }
  ];

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
            {products.map((product) => (
              <div key={product.id} className="bg-graphite border border-[#2a2a2a] rounded overflow-hidden flex flex-col h-full group">
                <div 
                  className="h-[260px] relative bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  <div className="absolute inset-0 bg-matte/40 group-hover:bg-transparent transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-dark-red text-pure-white p-2 rounded-sm shadow-[0_0_10px_rgba(122,21,21,0.5)]">
                    <product.icon size={20} />
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
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
