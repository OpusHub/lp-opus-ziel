"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorldMap } from "@/components/ui/map";
import { Globe, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GlobalPresenceProps {
  sectionTitle: string;
  sectionDescription: string;
}

export default function GlobalPresence({
  sectionTitle,
  sectionDescription
}: GlobalPresenceProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const countriesRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  // Coordenadas dos países onde a ZielHub atua
  const connections = [
    {
      start: { lat: 38.9072, lng: -77.0369, label: "EUA" }, // Washington D.C.
      end: { lat: -15.7975, lng: -47.8919, label: "Brasil" }, // Brasília
    },
    {
      start: { lat: -15.7975, lng: -47.8919, label: "Brasil" },
      end: { lat: 38.7223, lng: -9.1393, label: "Portugal" }, // Lisboa
    },
    {
      start: { lat: 38.7223, lng: -9.1393, label: "Portugal" },
      end: { lat: 52.52, lng: 13.405, label: "Alemanha" }, // Berlim
    },
    {
      start: { lat: 52.52, lng: 13.405, label: "Alemanha" },
      end: { lat: 46.9481, lng: 7.4474, label: "Suíça" }, // Berna
    },
    {
      start: { lat: 46.9481, lng: 7.4474, label: "Suíça" },
      end: { lat: 38.9072, lng: -77.0369, label: "EUA" },
    },
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Switzerland", flag: "🇨🇭" },
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

      if (mapRef.current) {
        gsap.set(mapRef.current, {
          autoAlpha: 0,
          scale: 0.95,
          y: 30
        });
      }

      // Set countries cards initial state
      const countryCards = countriesRef.current?.querySelectorAll('.country-card');
      if (countryCards) {
        gsap.set(countryCards, {
          autoAlpha: 0,
          y: 30,
          scale: 0.95
        });
      }

      // Set stats initial state
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        gsap.set(statItems, {
          autoAlpha: 0,
          y: 20
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

      // Animate map
      if (mapRef.current) {
        tl.to(mapRef.current, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8
        }, 0.4);
      }

      // Animate country cards with stagger
      if (countryCards && countryCards.length > 0) {
        tl.to(countryCards, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08
        }, 0.6);
      }

      // Animate stats with stagger
      if (statItems && statItems.length > 0) {
        tl.to(statItems, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1
        }, 0.8);
      }

      // Add hover animations to country cards
      countryCards?.forEach((card) => {
        const cardElement = card as HTMLElement;

        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -8,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="global-presence"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-6 md:py-32 md:px-10 lg:px-16"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Globe className="w-4 h-4 text-white/70" />
            <span className="text-xs font-light uppercase tracking-[0.08em] text-white/70">
              Global Presence
            </span>
          </div>

          <h2
            ref={titleRef}
            className="mb-4 text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {sectionTitle}
          </h2>
          <p
            ref={descRef}
            className="mx-auto max-w-2xl text-base font-light leading-relaxed tracking-tight text-white/70 sm:text-lg"
          >
            {sectionDescription}
          </p>
        </div>

        {/* Map */}
        <div ref={mapRef} className="mb-12">
          <WorldMap
            dots={connections}
            lineColor="#1e84c2"
            showLabels={true}
            animationDuration={2}
            loop={true}
          />
        </div>

        {/* Countries Grid */}
        <div
          ref={countriesRef}
          className="mb-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {countries.map((country, index) => (
            <div
              key={index}
              className="country-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.07]"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="text-4xl mb-2 transform transition-transform duration-300 text-white">
                  {country.flag}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-white/50" />
                  <span className="text-sm font-light tracking-tight text-white/90">
                    {country.name}
                  </span>
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="stat-item text-center">
            <div className="mb-2 text-5xl font-extralight tracking-tight text-white">5</div>
            <div className="text-sm font-light tracking-tight text-white/60">
              Countries
            </div>
          </div>
          <div className="stat-item text-center">
            <div className="mb-2 text-5xl font-extralight tracking-tight text-white">3</div>
            <div className="text-sm font-light tracking-tight text-white/60">
              Continents
            </div>
          </div>
          <div className="stat-item text-center">
            <div className="mb-2 text-5xl font-extralight tracking-tight text-white">24/7</div>
            <div className="text-sm font-light tracking-tight text-white/60">
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
