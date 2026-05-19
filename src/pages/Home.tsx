import charactermain from "../assets/images/Characters/charactermain.webp";

import after from "../assets/images/Technologies/after-effects.svg";
import canva from "../assets/images/Technologies/canva.svg";
import claude from "../assets/images/Technologies/claude-ai-wordmark-icon_dark.svg";
import css from "../assets/images/Technologies/css.svg";
import discord from "../assets/images/Technologies/discord.svg";
import docker from "../assets/images/Technologies/docker.svg";
import figma from "../assets/images/Technologies/figma.svg";
import instagram from "../assets/images/Technologies/instagram_dark.svg";
import jwt from "../assets/images/Technologies/jwt.svg";
import laravel from "../assets/images/Technologies/laravel.svg";
import mysql from "../assets/images/Technologies/mysql.svg";
import nodejs from "../assets/images/Technologies/nodejs.svg";
import openai from "../assets/images/Technologies/openai_wordmark_dark.svg";
import photoshop from "../assets/images/Technologies/photoshop.svg";
import php from "../assets/images/Technologies/php_dark.svg";
import premiere from "../assets/images/Technologies/premiere.svg";
import prettier from "../assets/images/Technologies/prettier-icon-dark.svg";
import react from "../assets/images/Technologies/react_wordmark_dark.svg";
import tailwindcss from "../assets/images/Technologies/tailwindcss-wordmark-dark.svg";
import threejs from "../assets/images/Technologies/threejs-dark.svg";
import tiktok from "../assets/images/Technologies/tiktok.svg";
import typescript from "../assets/images/Technologies/typescript.svg";
import ubuntu from "../assets/images/Technologies/ubuntu.svg";
import vscode from "../assets/images/Technologies/vscode.svg";
import vue from "../assets/images/Technologies/vue.svg";
import windows from "../assets/images/Technologies/windows.svg";
import wordpress from "../assets/images/Technologies/wordpress.svg";
import zoom from "../assets/images/Technologies/zoom.svg";

import { ButtonPages } from "../components/ButtonPages";
import MarqueeText from "../components/Marquee";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <section className="retro-hero">
        <div className="retro-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="retro-card p-5 sm:p-8">
            <span className="retro-label mb-5">Full stack junior / Colombia</span>
            <h1 className="retro-heading font-champion text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              Tu idea, mi codigo.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              Soy Julian, desarrollador full stack en formacion. Construyo
              interfaces claras, funcionales y con personalidad para proyectos web.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonPages to="/projects/" direction="right" className="sm:w-fit">
                ver proyectos
              </ButtonPages>
              <ButtonPages to="/contact/" direction="right" className="sm:w-fit">
                contacto
              </ButtonPages>
            </div>
          </div>

          <div className="retro-visual">
            <span className="retro-big-word">ghops</span>
            <img
              src={charactermain}
              alt="home"
              className="w-[210px] sm:w-[270px] lg:w-[330px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className="border-y-2 border-[var(--line)] bg-[var(--ink)] py-2 font-champion uppercase text-[var(--yellow)]">
        <MarqueeText baseVelocity={-1}>
          • Fullstack • React • Laravel • Tailwind •
        </MarqueeText>
        <MarqueeText baseVelocity={1}>
          • portfolio • presentacion • Junior Developer • Colombia •
        </MarqueeText>
      </div>

      <div className="retro-section-title">
        <h2 className="retro-heading font-champion text-5xl uppercase sm:text-6xl">
          Conocimientos y Herramientas
        </h2>
        <span className="retro-label">stack actual</span>
      </div>

      <Skills
        items={[
          {
            images: [php, laravel, vue, react, tailwindcss, css, typescript, mysql, prettier],
            title: "Stack principal",
            subtitle:
              "Conjunto de tecnologias que conforman mi base principal de desarrollo como programador junior, con un enfoque en el desarrollo web full stack.",
          },
          {
            images: [nodejs, threejs, docker, ubuntu, jwt],
            title: "Exploracion tecnologica",
            subtitle:
              "Herramientas que he utilizado en pruebas, prototipos y ejercicios asistidos por IA.",
          },
          {
            images: [canva, wordpress, figma],
            title: "Herramientas de diseno y maquetacion",
            subtitle:
              "Experiencia en el uso de herramientas para estructurar y visualizar ideas de manera alineada al proyecto final.",
          },
          {
            images: [windows, vscode, discord, zoom],
            title: "Entorno de trabajo",
            subtitle:
              "Ecosistema de herramientas que uso para colaborar, desarrollar y organizar proyectos.",
          },
          {
            images: [openai, claude],
            title: "Asistencia con IA",
            subtitle:
              "Uso de inteligencia artificial para optimizar procesos y mejorar la productividad en mis proyectos.",
          },
          {
            images: [premiere, after, photoshop],
            title: "Herramientas de edicion digital",
            subtitle:
              "Conocimientos basicos en edicion de video e imagenes para contenido digital.",
          },
          {
            images: [tiktok, instagram],
            title: "Gestion de contenido para redes sociales",
            subtitle:
              "Experiencia creando y publicando contenido que genera interaccion y crecimiento organico.",
          },
        ]}
      />

      <ButtonPages
        left={{ to: "/contact", label: "contacto" }}
        right={{ to: "/projects/", label: "proyectos" }}
      />
    </>
  );
}
