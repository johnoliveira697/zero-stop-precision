import { getArticleData, getAllArticleSlugs } from "@/lib/markdown";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ShareButton from "@/components/ui/ShareButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slugObj) => ({
    slug: slugObj.params.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);

  return (
    <>
      <Navbar />
      <main className="bg-matte pt-32 pb-24 min-h-screen">
        <Container className="max-w-[800px]">
          <Link 
            href="/artigos" 
            className="inline-flex items-center gap-2 text-steel hover:text-pure-white transition-colors mb-8 font-subheading tracking-widest uppercase text-sm"
          >
            <ArrowLeft size={16} /> Voltar para Artigos
          </Link>

          <header className="mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-pure-white mb-6 leading-tight">
              {articleData.title}
            </h1>
            <p className="text-xl text-light-steel border-l-2 border-dark-red pl-4 font-subheading mb-8">
              {articleData.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-graphite border border-steel px-3 py-1 font-tech text-xs tracking-widest text-cool-white">
                {articleData.category}
              </span>
              <span className="font-tech text-sm text-steel">
                {articleData.date}
              </span>
              <div className="ml-auto">
                <ShareButton title={articleData.title} />
              </div>
            </div>
          </header>

          {articleData.coverImage && (
            <div 
              className="w-full h-[400px] mb-12 border border-white/10 bg-cover bg-center rounded"
              style={{ backgroundImage: `url('${articleData.coverImage}')` }}
            />
          )}

          {/* Render Markdown Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none text-[20px]
              prose-headings:font-heading prose-headings:text-pure-white
              prose-p:text-cool-white prose-p:leading-relaxed prose-p:text-justify
              prose-a:text-steel prose-a:underline hover:prose-a:text-pure-white
              prose-strong:text-pure-white
              prose-blockquote:border-l-dark-red prose-blockquote:bg-graphite/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-light-steel prose-blockquote:not-italic
              prose-ul:text-cool-white prose-li:marker:text-dark-red"
            dangerouslySetInnerHTML={{ __html: articleData.contentHtml || "" }}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
