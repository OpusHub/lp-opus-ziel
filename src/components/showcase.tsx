'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

interface ShowcaseProps {
  sectionTitle?: string;
  sectionDescription?: string;
  projects?: Project[];
}

export default function Showcase({
  sectionTitle,
  sectionDescription,
  projects
}: ShowcaseProps) {
  const t = useTranslations('Showcase');
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const finalTitle = sectionTitle || t('title');
  const finalDescription = sectionDescription || t('description');
  const finalProjects = projects || [
    {
      title: t('projects.adidas.title'),
      description: t('projects.adidas.description'),
      category: t('projects.adidas.category'),
      image: "/cases/adidas.svg",
      link: "/cases#adidas",
      stats: [
        { label: t('projects.adidas.stat1Label'), value: t('projects.adidas.stat1Value') },
        { label: t('projects.adidas.stat2Label'), value: t('projects.adidas.stat2Value') }
      ]
    },
    {
      title: t('projects.loccitane.title'),
      description: t('projects.loccitane.description'),
      category: t('projects.loccitane.category'),
      image: "/cases/loccitane.svg",
      link: "/cases#loccitane",
      stats: [
        { label: t('projects.loccitane.stat1Label'), value: t('projects.loccitane.stat1Value') },
        { label: t('projects.loccitane.stat2Label'), value: t('projects.loccitane.stat2Value') }
      ]
    },
    {
      title: t('projects.arezzo.title'),
      description: t('projects.arezzo.description'),
      category: t('projects.arezzo.category'),
      image: "/cases/arezzo.svg",
      link: "/cases#arezzo",
      stats: [
        { label: t('projects.arezzo.stat1Label'), value: t('projects.arezzo.stat1Value') },
        { label: t('projects.arezzo.stat2Label'), value: t('projects.arezzo.stat2Value') }
      ]
    },
    {
      title: t('projects.vitrium.title'),
      description: t('projects.vitrium.description'),
      category: t('projects.vitrium.category'),
      image: "/cases/vitrium.svg",
      link: "/cases#vitrium",
      stats: [
        { label: t('projects.vitrium.stat1Label'), value: t('projects.vitrium.stat1Value') },
        { label: t('projects.vitrium.stat2Label'), value: t('projects.vitrium.stat2Value') }
      ]
    },
    {
      title: t('projects.garbo.title'),
      description: t('projects.garbo.description'),
      category: t('projects.garbo.category'),
      image: "/cases/garbo.svg",
      link: "/cases#garbo",
      stats: [
        { label: t('projects.garbo.stat1Label'), value: t('projects.garbo.stat1Value') },
        { label: t('projects.garbo.stat2Label'), value: t('projects.garbo.stat2Value') }
      ]
    },
    {
      title: t('projects.gmvodonto.title'),
      description: t('projects.gmvodonto.description'),
      category: t('projects.gmvodonto.category'),
      image: "/cases/gmvodonto.svg",
      link: "/cases#gmvodonto",
      stats: [
        { label: t('projects.gmvodonto.stat1Label'), value: t('projects.gmvodonto.stat1Value') },
        { label: t('projects.gmvodonto.stat2Label'), value: t('projects.gmvodonto.stat2Value') }
      ]
    }
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Set initial states
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          autoAlpha: 0,
          y: 30,
          filter: 'blur(8px)'
        });
      }

      if (descRef.current) {
        gsap.set(descRef.current, {
          autoAlpha: 0,
          y: 20
        });
      }

      // Set cards initial state
      const cards = gridRef.current?.querySelectorAll('.showcase-card');
      if (cards) {
        gsap.set(cards, {
          autoAlpha: 0,
          y: 50,
          scale: 0.95
        });
      }

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        defaults: { ease: 'power3.out' }
      });

      // Animate title
      if (titleRef.current) {
        tl.to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8
        }, 0);
      }

      // Animate description
      if (descRef.current) {
        tl.to(descRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6
        }, 0.2);
      }

      // Animate cards with stagger
      if (cards && cards.length > 0) {
        tl.to(cards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12
        }, 0.4);
      }

      // Add hover animations to cards
      cards?.forEach((card) => {
        const cardElement = card as HTMLElement;
        const imageWrapper = cardElement.querySelector('.image-wrapper');
        const arrowIcon = cardElement.querySelector('.arrow-icon');

        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -12,
            duration: 0.4,
            ease: 'power2.out'
          });

          if (imageWrapper) {
            gsap.to(imageWrapper, {
              scale: 1.05,
              duration: 0.6,
              ease: 'power2.out'
            });
          }

          if (arrowIcon) {
            gsap.to(arrowIcon, {
              x: 4,
              y: -4,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          });

          if (imageWrapper) {
            gsap.to(imageWrapper, {
              scale: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          }

          if (arrowIcon) {
            gsap.to(arrowIcon, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black py-24 px-6 md:py-32 md:px-10 lg:px-16"
    >
      {/* Subtle radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" />

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2
            ref={titleRef}
            className="mb-4 text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {finalTitle}
          </h2>
          <p
            ref={descRef}
            className="mx-auto max-w-2xl text-base font-light leading-relaxed tracking-tight text-white/70 sm:text-lg"
          >
            {finalDescription}
          </p>
        </div>

        {/* Projects Grid - 3 columns */}
        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {finalProjects.map((project, index) => (
            <Link
              key={index}
              href={project.link || '#'}
              className="showcase-card group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur-sm transition-colors hover:border-white/20 h-full flex flex-col">
                {/* Company Name */}
                <div className="image-wrapper relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center shrink-0">
                  {/* Company Name Text */}
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white/90 px-6 text-center">
                    {project.title}
                  </h3>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-60" />

                  {/* Category badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-light tracking-tight text-white/90 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow icon */}
                  <div className="arrow-icon absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded-full bg-white/10 p-2 backdrop-blur-md">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="mb-2 text-xl font-light tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm font-light leading-relaxed tracking-tight text-white/60 flex-1">
                    {project.description}
                  </p>

                  {/* Stats */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="flex flex-wrap gap-4 border-t border-white/5 pt-4 mt-auto">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex-1 min-w-[100px]">
                          <div className="text-lg font-light tracking-tight text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs font-light tracking-tight text-white/50">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover effect gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center md:mt-16">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-light tracking-tight text-white/80 transition-colors hover:text-white"
          >
            View all transformations
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
