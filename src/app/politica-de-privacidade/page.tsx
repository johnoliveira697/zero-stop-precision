import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Zero Stop Precision",
  description: "Nossa política de privacidade e como lidamos com seus dados.",
};

export default function PoliticaPrivacidade() {
  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container className="max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl text-pure-white mb-8 border-b border-white/10 pb-4">
            Política de <span className="text-steel">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-light-steel">
            <p>A sua privacidade é importante para nós. É política do <strong>Zero Stop Precision</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Zero Stop Precision, e outros sites que possuímos e operamos.</p>
            
            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">1. Coleta de Informações</h2>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">2. Compartilhamento de Informações</h2>
            <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">3. Publicidade e Google AdSense</h2>
            <p>O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso site. Com o cookie DART ou DoubleClick, o Google pode exibir anúncios para nossos usuários com base nas visitas feitas ao nosso site e a outros sites na Internet.</p>
            <p>Os usuários podem desativar o uso do cookie DART visitando a Política de Privacidade da rede de conteúdo e dos anúncios do Google.</p>
            <ul>
              <li>Utilizamos publicidade de terceiros, incluindo o Google AdSense, para ajudar a custear a manutenção do site. Estes parceiros podem utilizar cookies e web beacons em nosso site.</li>
              <li>Estes cookies não extraem informações pessoais que permitam a sua identificação. Eles apenas coletam dados de navegação para que anúncios relevantes sejam mostrados a você.</li>
            </ul>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">4. Links para Terceiros</h2>
            <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">5. Seu Consentimento</h2>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
            <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>

            <p className="mt-12 text-sm italic">Esta política é efetiva a partir de Junho de 2026.</p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
