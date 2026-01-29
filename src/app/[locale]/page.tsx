import { Brain, Sparkles, TrendingUp, Shield, Zap, Target, Lightbulb, Award, MessageSquare } from 'lucide-react';
import Header from "@/components/header";
import Hero from "@/components/neural-network-hero";
import WhatWeDo from "@/components/what-we-do";
import RevenueImpact from "@/components/revenue-impact";
import Showcase from "@/components/showcase";
import GlobalPresence from "@/components/global-presence";
import About from "@/components/about";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { getTranslations, setRequestLocale } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'brain': return <Brain className="w-6 h-6" />;
      case 'sparkles': return <Sparkles className="w-6 h-6" />;
      case 'trending': return <TrendingUp className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      case 'zap': return <Zap className="w-6 h-6" />;
      case 'target': return <Target className="w-6 h-6" />;
      default: return null;
    }
  };

  const getValueIcon = (type: string) => {
    switch (type) {
      case 'lightbulb': return <Lightbulb className="w-6 h-6" />;
      case 'award': return <Award className="w-6 h-6" />;
      case 'message': return <MessageSquare className="w-6 h-6" />;
      case 'trending': return <TrendingUp className="w-6 h-6" />;
      default: return null;
    }
  };

  const services = [
    {
      iconType: 'brain',
      title: t('WhatWeDo.services.aiInfrastructure.title'),
      description: t('WhatWeDo.services.aiInfrastructure.description')
    },
    {
      iconType: 'sparkles',
      title: t('WhatWeDo.services.dataPipeline.title'),
      description: t('WhatWeDo.services.dataPipeline.description')
    },
    {
      iconType: 'trending',
      title: t('WhatWeDo.services.predictiveAnalytics.title'),
      description: t('WhatWeDo.services.predictiveAnalytics.description')
    },
    {
      iconType: 'shield',
      title: t('WhatWeDo.services.mlops.title'),
      description: t('WhatWeDo.services.mlops.description')
    },
    {
      iconType: 'zap',
      title: t('WhatWeDo.services.customAI.title'),
      description: t('WhatWeDo.services.customAI.description')
    },
    {
      iconType: 'target',
      title: t('WhatWeDo.services.dataMonetization.title'),
      description: t('WhatWeDo.services.dataMonetization.description')
    }
  ].map(service => ({
    ...service,
    icon: getServiceIcon(service.iconType)
  }));

  const values = [
    {
      iconType: 'lightbulb',
      title: t('About.values.productionReady.title'),
      description: t('About.values.productionReady.description')
    },
    {
      iconType: 'award',
      title: t('About.values.dataFirst.title'),
      description: t('About.values.dataFirst.description')
    },
    {
      iconType: 'message',
      title: t('About.values.roiFocused.title'),
      description: t('About.values.roiFocused.description')
    },
    {
      iconType: 'trending',
      title: t('About.values.knowledgeTransfer.title'),
      description: t('About.values.knowledgeTransfer.description')
    }
  ].map(value => ({
    ...value,
    icon: getValueIcon(value.iconType)
  }));

  // Navigation items for header
  const navItems = [
    { label: t('Header.home'), href: '/' },
    { label: t('Header.whatWeDo'), href: '/#what-we-do' },
    { label: t('Header.showcase'), href: '/#showcase' },
    { label: t('Header.about'), href: '/#about' }
  ];

  return (
    <div>
      <Header
        navItems={navItems}
        ctaText={t('Header.getStarted')}
      />
      <div className="w-screen h-screen flex flex-col relative">
        <Hero
          title={t('Hero.title')}
          description={t('Hero.description')}
          ctaButtons={[
            { text: t('Hero.cta1'), href: "#contact-form", primary: true },
            { text: t('Hero.cta2'), href: "#showcase" }
          ]}
          microDetails={[
            t('Hero.detail1'),
            t('Hero.detail2'),
            t('Hero.detail3')
          ]}
        />
      </div>
      <WhatWeDo
        sectionTitle={t('WhatWeDo.title')}
        sectionDescription={t('WhatWeDo.description')}
        services={services}
      />
      <RevenueImpact />
      <Showcase
        sectionTitle={t('Showcase.title')}
        sectionDescription={t('Showcase.description')}
      />
      <GlobalPresence
        sectionTitle={t('GlobalPresence.title')}
        sectionDescription={t('GlobalPresence.description')}
      />
      <About
        hero={{
          badge: t('About.badge'),
          title: t('About.heroTitle'),
          description: t('About.heroDescription')
        }}
        mission={{
          title: t('About.missionTitle'),
          description: t('About.missionDescription')
        }}
        vision={{
          title: t('About.visionTitle'),
          description: t('About.visionDescription')
        }}
        values={{
          title: t('About.valuesTitle'),
          items: values
        }}
        stats={[
          { value: "50+", label: t('About.stats.aiSystems') },
          { value: "10B+", label: t('About.stats.dataPoints') },
          { value: "5+", label: t('About.stats.years') },
          { value: "95%", label: t('About.stats.accuracy') }
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
