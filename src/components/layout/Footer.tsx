import Link from "next/link";
import { Send } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-matte pt-20 pb-8 relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-tech text-3xl text-pure-white tracking-widest mb-4">
              ZERO STOP <span className="text-steel">PRECISION</span>
            </h3>
            <p className="text-light-steel max-w-[300px]">
              Referência em tiro de precisão, balística e doutrina tática.
            </p>
          </div>

          <div>
            <h4 className="font-subheading text-xl uppercase text-pure-white mb-6 tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-light-steel hover:text-pure-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/artigos" className="text-light-steel hover:text-pure-white transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/equipamentos" className="text-light-steel hover:text-pure-white transition-colors">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-light-steel hover:text-pure-white transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-subheading text-xl uppercase text-pure-white mb-6 tracking-wide">
              Comunicações
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-graphite border border-white/20 text-light-steel rounded-sm hover:bg-steel hover:text-pure-white hover:border-pure-white transition-all hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-graphite border border-white/20 text-light-steel rounded-sm hover:bg-steel hover:text-pure-white hover:border-pure-white transition-all hover:-translate-y-1"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-graphite border border-white/20 text-light-steel rounded-sm hover:bg-steel hover:text-pure-white hover:border-pure-white transition-all hover:-translate-y-1"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-graphite border border-white/20 text-light-steel rounded-sm hover:bg-steel hover:text-pure-white hover:border-pure-white transition-all hover:-translate-y-1"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-steel text-sm">
          <div className="text-center md:text-left">
            <p>&copy; 2026 Zero Stop Precision. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido por <span className="text-pure-white font-tech tracking-wider">Aluphe Hub</span></p>
          </div>
          <p className="font-tech text-dark-red tracking-widest mt-4 md:mt-0">
            "Sillentium ante chaos."
          </p>
        </div>
      </div>
    </footer>
  );
}
