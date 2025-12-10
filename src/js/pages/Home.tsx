import charactermain from "../../assets/images/Characters/charactermain.webp";

// Technologies
import premiere from "../../assets/images/Technologies/premiere.svg";
import after from "../../assets/images/Technologies/after-effects.svg";
import canva from "../../assets/images/Technologies/canva.svg";
import css from "../../assets/images/Technologies/css.svg";
import discord from "../../assets/images/Technologies/discord.svg";
import docker from "../../assets/images/Technologies/docker.svg";
import figma from "../../assets/images/Technologies/figma.svg";
import instagram from "../../assets/images/Technologies/instagram_dark.svg";
import laravel from "../../assets/images/Technologies/laravel.svg";
import mysql from "../../assets/images/Technologies/mysql.svg";
import nodejs from "../../assets/images/Technologies/nodejs.svg";
import openai from "../../assets/images/Technologies/openai_wordmark_dark.svg";
import photoshop from "../../assets/images/Technologies/photoshop.svg";
import php from "../../assets/images/Technologies/php_dark.svg";
import prettier from "../../assets/images/Technologies/prettier-icon-dark.svg";
import react from "../../assets/images/Technologies/react_wordmark_dark.svg";
import tailwindcss from "../../assets/images/Technologies/tailwindcss-wordmark-dark.svg";
import threejs from "../../assets/images/Technologies/threejs-dark.svg";
import tiktok from "../../assets/images/Technologies/tiktok.svg";
import typescript from "../../assets/images/Technologies/typescript.svg";
import ubuntu from "../../assets/images/Technologies/ubuntu.svg";
import vscode from "../../assets/images/Technologies/vscode.svg";
import vue from "../../assets/images/Technologies/vue.svg";
import windows from "../../assets/images/Technologies/windows.svg";
import wordpress from "../../assets/images/Technologies/wordpress.svg";
import zoom from "../../assets/images/Technologies/zoom.svg";

import claude from "../../assets/images/Technologies/claude-ai-wordmark-icon_dark.svg";
import jwt from "../../assets/images/Technologies/jwt.svg";

import MarqueeText from "../components/Animations/Marquee/Marquee";
import { ButtonPages } from "../components/UI/buttonPages";
import { Skills } from "../components/UI/skills";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-52px)] flex items-center justify-center px-4 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10 p-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px] mb-6 uppercase font-champion leading-tight">
              Tu idea, mi código.
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
              Soy Julián, desarrollador full stack en formación. Me encanta
              crear, colaborar y dar vida a proyectos modernos.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
            <span className="absolute inset-0 flex items-center justify-center font-champion uppercase text-[130px] sm:text-[200px] md:text-[150px] lg:text-[240px] clr-g z-0 select-none pointer-events-none animate__animated animate__rubberBand">
              ghops
            </span>
            <img
              src={charactermain}
              alt="home"
              className="relative z-10 w-[180px] sm:w-[230px] md:w-[270px] lg:w-[300px]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Carrusel */}
      <div className="bg-black clr-g uppercase font-champion w-full">
        <MarqueeText baseVelocity={-1}>
          • Fullstack • React • Laravel • Tailwind •
        </MarqueeText>
        <MarqueeText baseVelocity={1}>
          • portfolio • presentation • Junior Developer • Colombia •
        </MarqueeText>
      </div>

      {/* Skills */}
      <div className="text-center">
        <h2 className="uppercase font-champion mt-20 mb-10 text-[28px] sm:text-[36px] md:text-[48px] xl:text-[55px]">
          Conocimientos y Herramientas
        </h2>
      </div>

      <Skills
        items={[
          {
            images: [
              php,
              laravel,
              vue,
              react,
              tailwindcss,
              css,
              typescript,
              mysql,
              prettier,
              jwt,
            ],
            title: "Stack principal",
            subtitle:
              "Conjunto de tecnologías que conforman mi base principal de desarrollo.",
          },
          {
            images: [nodejs, threejs, docker, ubuntu],
            title: "Exploración tecnológica",
            subtitle:
              "Herramientas que he utilizado en pruebas, prototipos y ejercicios asistidos por IA.",
          },
          {
            images: [canva, wordpress, figma],
            title: "Herramientas de diseño y maquetación",
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
            title: "Herramientas de edición digital",
            subtitle:
              "Conocimientos básicos en edición de video e imágenes para contenido digital.",
          },
          {
            images: [tiktok, instagram],
            title: "Gestión de contenido para redes sociales",
            subtitle:
              "Experiencia creando y publicando contenido que genera interacción y crecimiento orgánico.",
          },
        ]}
      />

      {/* Paginación */}
      <div className="mt-16">
        <ButtonPages
          left={{ to: "/contact", label: "contact" }}
          right={{ to: "/projects/", label: "work" }}
        />
      </div>
    </>
  );
}
