'use client'
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { CgArrowLongRight } from "react-icons/cg";

type Topic = {
  title: string;
  content: string;
  pdf: string;
};

const trainingTopics: Topic[] = [
  {
    title: 'Gestão Qualidade',
    content: 'Treinamentos em ISO 9001, ferramentas da qualidade, auditoria interna, e mais.',
    pdf: '/pdf/gestao-qualidade.pdf'
  },
  {
    title: 'Gestão do Meio Ambiente',
    content: 'Capacitação em ISO 14001, gestão de resíduos, sustentabilidade e legislação ambiental.',
    pdf: '/pdf/gestao-ambiente.pdf'
  },
  {
    title: 'Gestão de Saúde e Segurança do Trabalho',
    content: 'Treinamentos em ISO 45001, OHSAS 18001, análise de riscos e prevenção de acidentes.',
    pdf: '/pdf/gestao-saude.pdf'
  },
  {
    title: 'Gestão Integrada',
    content: 'Integração de sistemas de gestão, processos e compliance.',
    pdf: '/pdf/gestao-integrada.pdf'
  },
  {
    title: 'Gestão de Riscos',
    content: 'Identificação, avaliação e mitigação de riscos organizacionais.',
    pdf: '/pdf/gestao-riscos.pdf'
  },
  {
    title: 'Gestão Por Processos',
    content: 'Mapeamento, padronização, melhoria contínua e indicadores de desempenho.',
    pdf: '/pdf/gestao-processos.pdf'
  },
];

// Array com os números das fotos que existem
const availablePhotos = [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21];

function Accordion({ topics }: { topics: Topic[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="w-full mt-8">
      {topics.map((topic, idx) => (
        <div key={topic.title} className="mb-2 border-b border-blue-100">
          <button
            className="w-full text-left flex justify-between items-center py-4 px-4 text-blue-900 font-semibold text-lg focus:outline-none cursor-pointer hover:bg-blue-50 transition"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {topic.title}
            <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 text-blue-800 text-base animate-fade-in">
              <div>{topic.content}</div>
              <a
                href={topic.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit"
              >
                <span className="flex items-center gap-2 text-[18px] text-blue-900 font-medium cursor-pointer pt-5 hover:text-blue-500 transition-colors">
                  Saiba mais <CgArrowLongRight />
                </span>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TreinamentosPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const totalImages = availablePhotos.length;

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goNext = useCallback(() => setLightboxIndex((prev) => (prev + 1) % totalImages), [totalImages]);
  const goPrev = useCallback(() => setLightboxIndex((prev) => (prev - 1 + totalImages) % totalImages), [totalImages]);

  useEffect(() => {
    if (!lightboxOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <section className="bg-white min-h-screen pb-16">
            {/* Imagem topo */}
            <div className="w-full">
        <Image
          src="/bg/bg-hero-treinamentos.jpg" 
          alt="Estratégias e Soluções focadas em Resultados"
          quality={100}
          priority
          className="w-full h-auto"
          width={1000}
          height={500}
        />
      </div>
      <div className="container mx-auto px-4 pt-10">
        <div className="text-center">
          <span className="block text-blue-500 text-[18px] mb-2">Treinamentos</span>
          <h1 className="text-blue-900 text-[28px] md:text-[36px] font-bold mb-6">Capacitação para Transformar</h1>
        </div>
        <div className="text-blue-900 text-[16px] md:text-[18px] text-justify  mx-auto pt-8">
          <p className="pt-4">A Atoth Consultoria desenvolveu um amplo portfólio de cursos que foram elaborados com objetivo de contribuir para a multiplicação e aperfeiçoamento do conhecimento dos sistemas de gestão organizacionais auxiliando nossos clientes a melhorarem seus processos e desenvolverem equipes mais competentes em seus ramos de atuações, sempre focado em resultados.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-12">
          <div className="flex-1">
            <h2 className="text-blue-900 text-[22px] md:text-[28px] font-bold mb-4">Treinamentos:</h2>
            <Accordion topics={trainingTopics} />
          </div>
          <div className="flex-1 flex h-full items-center justify-center md:justify-end">
            <Image
              src="./img-consultorias.svg"
              alt="Estratégias e Soluções focadas em Resultados"
              quality={100}
              priority
              className="w-full h-auto"
              width={1000}
              height={500}
            />
          </div>
        </div>

        <div className="galeria pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {availablePhotos.map((photoNumber, i) => (
              <div key={photoNumber} className="overflow-hidden rounded shadow hover:scale-105 transition-transform bg-blue-50 cursor-pointer" onClick={() => openLightbox(i)}>
                <Image
                  src={`/treinamentos/foto${photoNumber.toString().padStart(5, '0')}.jpeg`}
                  alt={`Treinamento ${photoNumber}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          {lightboxOpen && (
            <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center" onClick={closeLightbox}>
              <button
                className="absolute top-6 right-8 text-white text-3xl font-bold z-10 cursor-pointer"
                onClick={closeLightbox}
                aria-label="Fechar"
              >×</button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 px-2 py-1 bg-black/40 rounded-full hover:bg-black/70"
                onClick={e => { e.stopPropagation(); goPrev(); }}
                aria-label="Anterior"
              >‹</button>
              <div className="max-w-3xl max-h-[80vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <Image
                  src={`/treinamentos/foto${availablePhotos[lightboxIndex].toString().padStart(5, '0')}.jpeg`}
                  alt={`Treinamento ${availablePhotos[lightboxIndex]}`}
                  width={900}
                  height={700}
                  className="rounded shadow max-h-[80vh] w-auto h-auto"
                  priority
                />
              </div>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 px-2 py-1 bg-black/40 rounded-full hover:bg-black/70"
                onClick={e => { e.stopPropagation(); goNext(); }}
                aria-label="Próxima"
              >›</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
  