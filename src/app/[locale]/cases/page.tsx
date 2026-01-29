'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, TrendingUp, Target, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/header';
import MetricChart from '@/components/charts/metric-chart';
import ComparisonChart from '@/components/charts/comparison-chart';
import Footer from '@/components/footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CaseStudy {
  id: string;
  company: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: {
    description: string;
    metrics: Array<{
      label: string;
      value: string;
      change: string;
    }>;
  };
  chartData?: {
    trend?: Array<{ month: string; value: number }>;
    comparison?: Array<{ name: string; before: number; after: number }>;
  };
}

export default function CasesPage() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement | null>(null);
  const casesRef = useRef<HTMLDivElement | null>(null);

  // Detect hash and expand case on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpandedCase(hash);
      // Scroll to the case after a small delay to let animations complete
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 'adidas',
      company: 'Adidas',
      title: 'Adidas - AI Demand Forecasting',
      category: 'Machine Learning',
      image: '/cases/adidas.svg',
      duration: '6 months',
      challenge: 'Adidas faced significant challenges with stagnant inventory and losses due to inadequate demand forecasting by region. Unsold collections generated losses and occupied warehouse space.',
      solution: 'We developed a Machine Learning system that analyzes historical sales data, market trends, seasonality, and external factors to predict product demand by region with high precision.',
      implementation: [
        'Collection and cleaning of 5-year historical data',
        'Development of predictive models with TensorFlow',
        'Integration with ERP and supply chain systems',
        'Real-time dashboard for managers',
        'Team training and continuous adjustments'
      ],
      results: {
        description: 'The results exceeded expectations, with significant reduction in stagnant inventory and improved operational efficiency.',
        metrics: [
          { label: 'Forecast Accuracy', value: '92%', change: '+38%' },
          { label: 'Stagnant Stock Reduction', value: '47%', change: '-47%' },
          { label: 'Profit Increase', value: '28%', change: '+28%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Jan', value: 65 },
          { month: 'Feb', value: 68 },
          { month: 'Mar', value: 75 },
          { month: 'Apr', value: 82 },
          { month: 'May', value: 88 },
          { month: 'Jun', value: 92 }
        ],
        comparison: [
          { name: 'Stock', before: 100, after: 53 },
          { name: 'Sales', before: 70, after: 98 },
          { name: 'Profit', before: 60, after: 88 }
        ]
      }
    },
    {
      id: 'loccitane',
      company: "L'Occitane",
      title: "L'Occitane - Customer Behavior BI",
      category: 'Business Intelligence',
      image: '/cases/loccitane.svg',
      duration: '4 months',
      challenge: "L'Occitane needed to integrate e-commerce and physical store data to understand the complete customer journey and effectively personalize offers.",
      solution: 'We created a Business Intelligence platform that unifies data from all channels, enabling 360° analysis of customer behavior and automatic offer personalization.',
      implementation: [
        'Integration of e-commerce and POS APIs',
        'Centralized data warehouse in BigQuery',
        'Customer segmentation models',
        'Personalized recommendation system',
        'Interactive dashboards for marketing teams'
      ],
      results: {
        description: 'Data integration generated valuable insights that significantly boosted conversions and average ticket.',
        metrics: [
          { label: 'Conversion Increase', value: '34%', change: '+34%' },
          { label: 'Average Ticket', value: '28%', change: '+28%' },
          { label: 'Customer Retention', value: '42%', change: '+42%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Jan', value: 45 },
          { month: 'Feb', value: 52 },
          { month: 'Mar', value: 61 },
          { month: 'Apr', value: 68 }
        ],
        comparison: [
          { name: 'Conversion', before: 2.8, after: 3.8 },
          { name: 'Ticket ($)', before: 180, after: 230 },
          { name: 'Retention', before: 55, after: 78 }
        ]
      }
    },
    {
      id: 'arezzo',
      company: 'Arezzo',
      title: 'Arezzo - AI Customer Service Chatbot',
      category: 'AI Automation',
      image: '/cases/arezzo.svg',
      duration: '5 months',
      challenge: 'Arezzo sought to automate customer service, reduce response time, and offer 24/7 support without compromising service quality.',
      solution: 'We developed an intelligent chatbot with natural language processing (NLP) capable of understanding context, recommending products, and resolving complex queries.',
      implementation: [
        'Training NLP model with real conversations',
        'Integration with product catalog and inventory',
        'Real-time order tracking system',
        'Intelligent handoff to human agents',
        'Sentiment analysis for continuous improvement'
      ],
      results: {
        description: 'The chatbot transformed the customer experience, automating most interactions with high satisfaction.',
        metrics: [
          { label: 'Automated Interactions', value: '78%', change: '+78%' },
          { label: 'Customer Satisfaction', value: '4.6/5', change: '+23%' },
          { label: 'Cost Reduction', value: '52%', change: '-52%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Month 1', value: 35 },
          { month: 'Month 2', value: 48 },
          { month: 'Month 3', value: 62 },
          { month: 'Month 4', value: 72 },
          { month: 'Month 5', value: 78 }
        ],
        comparison: [
          { name: 'Automation', before: 15, after: 78 },
          { name: 'Satisfaction', before: 3.7, after: 4.6 },
          { name: 'Time (min)', before: 12, after: 3 }
        ]
      }
    },
    {
      id: 'vitrium',
      company: 'Vitrium Capital',
      title: 'Vitrium Capital - Predictive Investment Analysis',
      category: 'Business Intelligence',
      image: '/cases/vitrium.svg',
      duration: '8 months',
      challenge: 'Vitrium Capital needed more precise predictive analytics for risk assessment and personalized investment recommendations for their clients.',
      solution: 'We created a BI platform with AI algorithms for risk analysis, asset performance forecasting, and automatic recommendations based on investor profile.',
      implementation: [
        'Analysis of historical market data',
        'ML models for trend forecasting',
        'Automated risk scoring system',
        'Personalized recommendation engine',
        'Real-time executive dashboards'
      ],
      results: {
        description: 'The platform revolutionized how Vitrium analyzes investments, increasing precision and dramatically reducing analysis time.',
        metrics: [
          { label: 'Forecast Precision', value: '89%', change: '+35%' },
          { label: 'Time Reduction', value: '65%', change: '-65%' },
          { label: 'Avg Client ROI', value: '31%', change: '+31%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Q1', value: 62 },
          { month: 'Q2', value: 71 },
          { month: 'Q3', value: 80 },
          { month: 'Q4', value: 89 }
        ],
        comparison: [
          { name: 'Precision (%)', before: 54, after: 89 },
          { name: 'Time (h)', before: 24, after: 8 },
          { name: 'ROI (%)', before: 18, after: 31 }
        ]
      }
    },
    {
      id: 'garbo',
      company: 'Garbo Tecnologia',
      title: 'Garbo Tecnologia - Health Tech AI Platform',
      category: 'Health Tech Infrastructure',
      image: '/cases/garbo.svg',
      duration: '12 months',
      challenge: 'Health insurance operators in Brazil faced massive fraud losses, slow authorization processes, and fragmented systems that couldn\'t scale to serve millions of beneficiaries efficiently.',
      solution: 'We built a complete AI infrastructure platform including biometric anti-fraud systems, omnichannel automation, intelligent claims analysis, and real-time BI dashboards integrated with existing health management systems.',
      implementation: [
        'Facial recognition and digital biometry anti-fraud system',
        'Whitelabel mobile app for iOS and Android',
        'Omnichannel automation (WhatsApp, App, Web, Phone)',
        'AI-powered claims analysis and gloss recovery',
        'Native integration with Benner Health CRM',
        'Real-time operational BI dashboards'
      ],
      results: {
        description: 'The platform transformed how health operators manage fraud and operations, achieving industry-leading security and massive cost savings across 50+ operators.',
        metrics: [
          { label: 'Fraud Blocked', value: '99.7%', change: '+99.7%' },
          { label: 'Savings Generated', value: 'R$120M', change: '+R$120M' },
          { label: 'Authorization Time', value: '-90%', change: '-90%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Q1', value: 45 },
          { month: 'Q2', value: 68 },
          { month: 'Q3', value: 89 },
          { month: 'Q4', value: 99.7 }
        ],
        comparison: [
          { name: 'Fraud Block (%)', before: 35, after: 99.7 },
          { name: 'Auth Time (min)', before: 45, after: 4 },
          { name: 'Uptime (%)', before: 95, after: 99.9 }
        ]
      }
    },
    {
      id: 'gmvodonto',
      company: 'GMV Odonto',
      title: 'GMV Odonto - Dental Clinic AI Automation',
      category: 'AI Automation & Sales',
      image: '/cases/gmvodonto.svg',
      duration: '6 months',
      challenge: 'Dental clinics were losing revenue not from lack of patients, but from poor infrastructure: missed follow-ups, inefficient scheduling, lost leads, and no systematic approach to patient reactivation and sales.',
      solution: 'We developed a verticalized AI platform for dental clinics that automates the entire patient journey - from 24/7 scheduling and intelligent follow-up to patient reactivation campaigns and commercial structuring with sales funnels.',
      implementation: [
        'AI chatbot for 24/7 patient scheduling and negotiation',
        'Intelligent follow-up system until budget closure',
        'Automated patient reactivation campaigns',
        'Sales funnel development with performance scripts',
        'Profit mapping and financial diagnostics',
        'Continuous strategic direction and operational support'
      ],
      results: {
        description: 'The platform transformed clinic operations into predictable and profitable structures, dramatically improving conversion rates and reactivating dormant patient bases within 90 days.',
        metrics: [
          { label: 'Conversion Rate', value: '+47%', change: '+47%' },
          { label: 'Patient Reactivation', value: '3x', change: '+200%' },
          { label: 'Revenue Growth', value: '+62%', change: '+62%' }
        ]
      },
      chartData: {
        trend: [
          { month: 'Month 1', value: 25 },
          { month: 'Month 2', value: 38 },
          { month: 'Month 3', value: 52 },
          { month: 'Month 4', value: 68 },
          { month: 'Month 5', value: 85 },
          { month: 'Month 6', value: 100 }
        ],
        comparison: [
          { name: 'Conversion (%)', before: 18, after: 47 },
          { name: 'Reactivation', before: 1, after: 3 },
          { name: 'Revenue Index', before: 100, after: 162 }
        ]
      }
    }
  ];

  // Hero animation
  useGSAP(() => {
    if (!heroRef.current) return;

    const elements = heroRef.current.querySelectorAll('.animate-hero');

    gsap.set(elements, {
      autoAlpha: 0,
      y: 30,
      filter: 'blur(8px)'
    });

    gsap.to(elements, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3
    });
  }, { scope: heroRef });

  // Cases animation
  useGSAP(() => {
    if (!casesRef.current) return;

    const cases = casesRef.current.querySelectorAll('.case-article');

    gsap.set(cases, {
      autoAlpha: 0,
      y: 50
    });

    gsap.to(cases, {
      scrollTrigger: {
        trigger: casesRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: casesRef });

  const toggleCase = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 px-6 md:px-10 lg:px-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" />

        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <div className="animate-hero inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-white/60" />
            <span className="text-sm font-light tracking-tight text-white/80">Success Stories</span>
          </div>

          <h1 className="animate-hero text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-6">
            Projects that transformed businesses
          </h1>

          <p className="animate-hero text-base md:text-lg font-light leading-relaxed tracking-tight text-white/70 max-w-3xl mx-auto">
            Meet companies that achieved extraordinary results with our Artificial Intelligence and Business Intelligence solutions.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-12 px-6 md:px-10 lg:px-16 relative">
        <div className="mx-auto max-w-5xl space-y-8 relative z-20">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.id} id={caseStudy.id} className="case-article">
              <div className="rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur-sm overflow-hidden">
                {/* Header */}
                <div className="relative">
                  {/* Company Name */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white/90 px-6 text-center">
                      {caseStudy.company}
                    </h2>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-light tracking-tight text-white/90 backdrop-blur-md">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Info */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-3">
                      {caseStudy.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-sm font-light text-white/60 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{caseStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>{caseStudy.company}</span>
                      </div>
                    </div>

                    {/* Metrics Preview */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.results.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-2xl md:text-3xl font-light text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs font-light text-white/60">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleCase(caseStudy.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/10 bg-white/5 text-sm font-light text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <span>{expandedCase === caseStudy.id ? 'View less' : 'View full case'}</span>
                      {expandedCase === caseStudy.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedCase === caseStudy.id && (
                  <div className="border-t border-white/10 p-6 md:p-8 space-y-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-6 bg-red-500/50 rounded" />
                        The Challenge
                      </h3>
                      <p className="text-base font-light leading-relaxed text-white/70">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-6 bg-blue-500/50 rounded" />
                        The Solution
                      </h3>
                      <p className="text-base font-light leading-relaxed text-white/70">
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Implementation */}
                    <div>
                      <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-6 bg-purple-500/50 rounded" />
                        Implementation
                      </h3>
                      <ul className="space-y-2">
                        {caseStudy.implementation.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm font-light text-white/70">
                            <ArrowRight className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results with Charts */}
                    <div>
                      <h3 className="text-xl font-light text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-6 bg-green-500/50 rounded" />
                        Results
                      </h3>
                      <p className="text-base font-light leading-relaxed text-white/70 mb-6">
                        {caseStudy.results.description}
                      </p>

                      {/* Charts */}
                      {caseStudy.chartData && (
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Trend Chart */}
                          {caseStudy.chartData.trend && (
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                              <h4 className="text-sm font-light text-white/80 mb-4">Performance Evolution</h4>
                              <MetricChart data={caseStudy.chartData.trend} color="#3b82f6" />
                            </div>
                          )}

                          {/* Comparison Chart */}
                          {caseStudy.chartData.comparison && (
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                              <h4 className="text-sm font-light text-white/80 mb-4">Before vs After</h4>
                              <ComparisonChart data={caseStudy.chartData.comparison} />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Detailed Metrics */}
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        {caseStudy.results.metrics.map((metric, idx) => (
                          <div key={idx} className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                            <div className="text-sm font-light text-white/60 mb-2">{metric.label}</div>
                            <div className="flex items-baseline gap-2">
                              <div className="text-3xl font-light text-white">{metric.value}</div>
                              <div className={`text-sm font-light ${metric.change.startsWith('+') ? 'text-green-400' : metric.change.startsWith('-') ? 'text-red-400' : 'text-blue-400'}`}>
                                {metric.change}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 lg:px-16 relative mb-0">
        <div className="mx-auto max-w-4xl text-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 backdrop-blur-sm relative z-20">
          <TrendingUp className="w-12 h-12 text-white/60 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            Ready to be our next success story?
          </h2>
          <p className="text-lg font-light leading-relaxed tracking-tight text-white/70 mb-8">
            Get in touch and discover how we can transform your business with AI.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-8 py-3 text-base font-light tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
