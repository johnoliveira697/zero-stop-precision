import { getArticleData, getAllArticleSlugs } from "@/lib/markdown";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ShareButton from "@/components/ui/ShareButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slugObj) => ({
    slug: slugObj.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);

  const url = `https://www.0stopprecision.com/artigos/${resolvedParams.slug}`;
  const title = `${articleData.title} | Zero Stop Precision`;
  const description = articleData.excerpt || "Leia este artigo completo na Zero Stop Precision.";
  const image = articleData.coverImage ? `https://www.0stopprecision.com${articleData.coverImage}` : "https://www.0stopprecision.com/assets/hero.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);

  const url = `https://www.0stopprecision.com/artigos/${resolvedParams.slug}`;
  const image = articleData.coverImage
    ? `https://www.0stopprecision.com${articleData.coverImage}`
    : "https://www.0stopprecision.com/assets/hero.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.excerpt,
    image: [image],
    datePublished: articleData.date,
    dateModified: articleData.date,
    author: {
      "@type": "Organization",
      name: "Zero Stop Precision",
    },
    publisher: {
      "@type": "Organization",
      name: "Zero Stop Precision",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <div className="ml-auto">
                <ShareButton title={articleData.title} />
              </div>
            </div>
          </header>

          {articleData.coverImage && (
            <div className="relative w-full h-[300px] md:h-[450px] mb-12 rounded overflow-hidden">
              <Image
                src={articleData.coverImage}
                alt={articleData.title}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-contain"
              />
            </div>
          )}

          {/* Render Markdown Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none text-[20px]
              prose-headings:font-heading prose-headings:text-pure-white
              prose-p:text-cool-white prose-p:leading-relaxed prose-p:text-justify
              prose-a:text-steel prose-a:underline hover:prose-a:text-pure-white
              prose-strong:text-pure-white
              prose-img:mx-auto prose-img:rounded
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
