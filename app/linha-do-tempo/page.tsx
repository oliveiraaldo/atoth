// app/linha-do-tempo/page.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiGlobe,
  FiAward,
  FiFlag,
  FiTrendingUp,
  FiBookOpen,
  FiMapPin,
} from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";
import Cta from "../components/Cta";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "O INÍCIO",
    description:
      "Fundada por Rogério Gomes, em 24 de junho a Atoth foi oficialmente registrada. Com nome, logo e site criados do zero, os primeiros projetos começaram a surgir.",
    Icon: FiSend,
  },
  {
    year: "2016",
    title: "VOCAÇÃO INTERNACIONAL",
    description:
      "Um projeto desenvolvido no Brasil foi tão bem-sucedido que foi replicado por uma unidade nos Estados Unidos.",
    Icon: FiGlobe,
  },
  {
    year: "2017",
    title: "PRIMEIROS MARCOS",
    description:
      "A Atoth ajudou uma empresa de construção civil a conquistar a certificação ISO 9001:2015 — a primeira do grupo no mundo.",
    Icon: FiAward,
  },
  {
    year: "2018",
    title: "RECONHECIMENTO INTERNACIONAL",
    description:
      "Projeto de Gestão de Riscos desenvolvido no Brasil passou a ser aplicado por uma telecom na Alemanha.",
    Icon: FiFlag,
  },
  {
    year: "2019",
    title: "EXPANSÃO E INOVAÇÃO",
    description:
      "Dois grandes clientes, lançamento de produto inovador e projetos implementados na Argentina e Colômbia.",
    Icon: FiTrendingUp,
  },
  {
    year: "2020",
    title: "MESTRADO E RESILIÊNCIA",
    description:
      "Em meio à pandemia, o fundador concluiu o mestrado com foco no programa PROEX (Excelência Operacional).",
    Icon: FiBookOpen,
  },
  {
    year: "2021-2022",
    title: "NOVOS HORIZONTES",
    description:
      "A metodologia da Atoth chegou ao México e atuou em diversos segmentos no Brasil — de blindagem a cosméticos.",
    Icon: FiMapPin,
  },
  {
    year: "2023-2024",
    title: "10 ANOS DE ATOTH",
    description:
      "Comemoração de 10 anos: nova identidade visual, site repaginado e certificação de 5 unidades.",
    Icon: IoSparkles,
  },
  {
    year: "2025",
    title: "PROJETO EMBLEMÁTICO",
    description:
      "Desafio de unir 5 unidades de uma empresa francesa em um sistema único de gestão, certificado em 2025.",
    Icon: FiAward,
  },
];

export default function LinhaDoTempoPage() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="w-full relative">
        <Image
          src="/bg/bg-hero-sobre.jpg"
          alt="Sobre - Atoth"
          quality={100}
          priority
          className="w-full h-auto object-cover"
          width={1200}
          height={400}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Sobre a Atoth Consultoria
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h5 className="text-blue-500 text-lg mb-2">Linha do Tempo</h5>
          <h3 className="text-blue-900 text-3xl md:text-4xl font-semibold">
            Estratégias e Soluções focadas em Resultados
          </h3>
        </div>

        {/* Timeline moderna */}
        <div className="relative flex flex-col items-center">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 z-0" />
          <div className="w-full flex flex-col gap-12 z-10">
            {timelineData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${isLeft ? "md:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  {/* Card */}
                  <div className={`md:w-1/2 flex ${isLeft ? "justify-end" : "justify-start"} md:pr-8 md:pl-8`}>
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full border border-blue-100 hover:shadow-2xl transition">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-orange-600 font-bold">{item.year}</span>
                        <span className="text-blue-500 text-xl">{<item.Icon />}</span>
                      </div>
                      <h4 className="text-blue-900 text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                  </div>
                  {/* Linha e ponto central */}
                  <div className="hidden md:flex flex-col items-center w-0">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl border-4 border-white shadow-lg z-10">
                      <item.Icon />
                    </span>
                    {idx < timelineData.length - 1 && (
                      <div className="flex-1 w-1 bg-blue-100" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Cta />
        </div>
      </div>
    </section>
  );
}
