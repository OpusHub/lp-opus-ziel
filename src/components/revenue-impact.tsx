'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Database, Zap, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RevenueImpact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll('.animate-item');

      gsap.set(elements, {
        autoAlpha: 0,
        y: 30
      });

      gsap.to(elements, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    },
    { scope: sectionRef }
  );

  const revenueDrivers = [
    {
      iconType: 'database',
      title: "Data-Driven Decision Making",
      impact: "+45% Revenue",
      description: "Real-time analytics and predictive models enable faster, more accurate business decisions. Companies reduce waste and capitalize on opportunities 3x faster."
    },
    {
      iconType: 'zap',
      title: "Operational Efficiency",
      impact: "+60% Productivity",
      description: "Automated data pipelines and ML-powered workflows eliminate manual work. Teams focus on high-value tasks while AI handles repetitive operations at scale."
    },
    {
      iconType: 'trending',
      title: "Predictive Intelligence",
      impact: "+95% Forecast Accuracy",
      description: "ML models predict customer behavior, market trends, and operational issues. Prevent losses, optimize pricing, and capture market share before competitors."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'zap':
        return <Zap className="w-6 h-6" />;
      case 'trending':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const beforeAfter = [
    {
      metric: "Monthly Revenue",
      before: "$500K",
      after: "$1.5M",
      growth: "+200%"
    },
    {
      metric: "Decision Speed",
      before: "2-3 weeks",
      after: "Real-time",
      growth: "100x faster"
    },
    {
      metric: "Data Processing",
      before: "Manual",
      after: "Automated",
      growth: "99% reduction"
    },
    {
      metric: "Market Response",
      before: "Reactive",
      after: "Predictive",
      growth: "3-month lead"
    }
  ];

  const outcomes = [
    "Identify high-value customers with 95% accuracy",
    "Predict demand spikes 30 days in advance",
    "Automate pricing optimization in real-time",
    "Reduce operational costs by 40-60%",
    "Launch new revenue streams from data monetization",
    "Scale operations without proportional cost increase"
  ];

  return (
    <section
      id="revenue-impact"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black py-24 px-6 md:py-32 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,132,194,0.1)_0%,transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="animate-item mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 backdrop-blur-sm">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-sm font-light uppercase tracking-[0.08em] text-green-400">
              Revenue Impact
            </span>
          </div>

          <h2 className="animate-item mb-4 text-4xl font-extralight tracking-tight text-white sm:text-5xl md:text-6xl">
            AI Infrastructure Can Increase<br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Revenue by up to 200%
            </span>
          </h2>
          <p className="animate-item mx-auto max-w-3xl text-base font-light leading-relaxed tracking-tight text-white/70 sm:text-lg">
            When properly architected, AI infrastructure doesn&apos;t just optimize operations—it fundamentally transforms how companies generate revenue. Here&apos;s the data.
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="animate-item mb-20">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:p-12">
            <h3 className="mb-8 text-center text-2xl font-light text-white md:text-3xl">
              Real Impact on Business Metrics
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {beforeAfter.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-transparent p-6 backdrop-blur-sm transition-all hover:border-blue-500/30"
                >
                  <div className="mb-3 text-sm font-light text-white/60">{item.metric}</div>

                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-lg font-light text-white/40 line-through">
                      {item.before}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/40" />
                  </div>

                  <div className="mb-3 text-3xl font-light text-white">
                    {item.after}
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-green-500/20 px-3 py-1 text-xs font-light text-green-400">
                    <TrendingUp className="h-3 w-3" />
                    {item.growth}
                  </div>

                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Drivers */}
        <div className="mb-20">
          <h3 className="animate-item mb-12 text-center text-2xl font-light text-white md:text-3xl">
            How AI Infrastructure Drives Revenue Growth
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {revenueDrivers.map((driver, index) => (
              <div
                key={index}
                className="animate-item group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-white">
                  {getIcon(driver.iconType)}
                </div>

                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-light text-green-400">
                  <TrendingUp className="h-3 w-3" />
                  {driver.impact}
                </div>

                <h4 className="mb-3 mt-4 text-xl font-light text-white">
                  {driver.title}
                </h4>

                <p className="text-sm font-light leading-relaxed text-white/60">
                  {driver.description}
                </p>

                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="animate-item">
          <div className="rounded-2xl border border-white/10 bg-transparent p-8 backdrop-blur-sm md:p-12">
            <h3 className="mb-8 text-center text-2xl font-light text-white md:text-3xl">
              What This Means for Your Business
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-transparent p-4 backdrop-blur-sm transition-all hover:border-blue-500/20"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  <span className="text-sm font-light leading-relaxed text-white/80">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="mb-6 text-lg font-light text-white">
                Ready to 2-3x your revenue with AI infrastructure?
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-light tracking-tight text-white backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                Get Your Revenue Growth Assessment
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
