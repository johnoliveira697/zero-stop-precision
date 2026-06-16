import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Zero Stop Precision",
  description: "Aviso legal sobre as informações contidas no site.",
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container className="max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl text-pure-white mb-8 border-b border-white/10 pb-4">
            Aviso <span className="text-steel">Legal</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-light-steel">
            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">Caráter Educacional e Informativo</h2>
            <p>Todo o conteúdo, artigos, opiniões, imagens e informações fornecidas no site <strong>Zero Stop Precision</strong> possuem caráter estritamente e exclusivamente informativo, jornalístico e educacional.</p>
            <p>O Zero Stop Precision é uma plataforma dedicada ao estudo da física aplicada à balística, tecnologia de equipamentos, história militar e práticas desportivas e profissionais documentadas.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">Segurança e Responsabilidade</h2>
            <p>O manuseio de armamentos, munições e equipamentos táticos envolve riscos sérios à integridade física e à vida. As informações contidas neste site <strong>NÃO</strong> substituem, em hipótese alguma, o treinamento prático e teórico oferecido por instrutores credenciados e instituições legalizadas de segurança pública, forças armadas ou clubes de tiro.</p>
            <p>Ao ler nossos materiais, o usuário assume total e irrestrita responsabilidade por suas próprias ações. O site Zero Stop Precision, seus autores, desenvolvedores e mantenedores não se responsabilizam por acidentes, danos a equipamentos, lesões corporais, perdas financeiras ou consequências de cunho legal advindos do mau uso, ou da interpretação errônea das informações aqui veiculadas.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">Conformidade Legal (Compliance)</h2>
            <p>Nós não comercializamos, não intermediamos e não facilitamos a aquisição de armas de fogo ou munições. Não promovemos a violência, o uso indevido da força ou atividades ilícitas. Apoiamos o cumprimento rigoroso da legislação vigente e o exercício responsável e legal da posse, porte e do esporte do tiro prático e de precisão.</p>
            
            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">Publicidade</h2>
            <p>Os anúncios exibidos em nosso site (via Google AdSense ou parceiros) não necessariamente refletem a opinião, o endosso ou a recomendação técnica da nossa equipe. Tais anúncios são veiculados automaticamente com base no perfil de navegação do usuário.</p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
