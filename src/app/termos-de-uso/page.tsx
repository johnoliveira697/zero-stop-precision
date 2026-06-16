import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Zero Stop Precision",
  description: "Termos de uso e condições de serviço do site Zero Stop Precision.",
};

export default function TermosUso() {
  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container className="max-w-[800px]">
          <h1 className="font-heading text-4xl md:text-5xl text-pure-white mb-8 border-b border-white/10 pb-4">
            Termos de <span className="text-steel">Uso</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-light-steel">
            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">1. Termos</h2>
            <p>Ao acessar ao site <strong>Zero Stop Precision</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">2. Uso de Licença</h2>
            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Zero Stop Precision, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
            <ul>
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Zero Stop Precision;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
            <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Zero Stop Precision a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">3. Isenção de responsabilidade</h2>
            <p>Os materiais no site da Zero Stop Precision são fornecidos 'como estão'. Zero Stop Precision não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            <p>Além disso, o Zero Stop Precision não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">4. Limitações</h2>
            <p>Em nenhum caso o Zero Stop Precision ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Zero Stop Precision, mesmo que Zero Stop Precision ou um representante autorizado da Zero Stop Precision tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">5. Precisão dos materiais</h2>
            <p>Os materiais exibidos no site da Zero Stop Precision podem incluir erros técnicos, tipográficos ou fotográficos. Zero Stop Precision não garante que qualquer material em seu site seja preciso, completo ou atual. Zero Stop Precision pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Zero Stop Precision não se compromete a atualizar os materiais.</p>

            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">6. Modificações</h2>
            <p>O Zero Stop Precision pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
            
            <h2 className="font-heading text-2xl text-pure-white mt-8 mb-4">7. Lei Aplicável</h2>
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do país de operação do Zero Stop Precision e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
