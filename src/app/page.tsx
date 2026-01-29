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

export default function Home() {
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
      title: "AI Infrastructure",
      description: "We build the foundation for your company to scale with AI. Custom infrastructure that processes millions of data points, trains proprietary models, and integrates seamlessly with your existing systems."
    },
    {
      iconType: 'sparkles',
      title: "Data Pipeline Engineering",
      description: "Turn raw data into competitive advantage. We design and implement data pipelines that collect, process, and transform your business data into actionable insights in real-time."
    },
    {
      iconType: 'trending',
      title: "Predictive Analytics & BI",
      description: "Stop guessing, start knowing. Our Business Intelligence solutions predict market trends, customer behavior, and operational bottlenecks before they happen. Make data-driven decisions that multiply revenue."
    },
    {
      iconType: 'shield',
      title: "Machine Learning Operations (MLOps)",
      description: "Deploy, monitor, and scale AI models in production. We implement MLOps practices that ensure your AI systems are reliable, performant, and continuously improving."
    },
    {
      iconType: 'zap',
      title: "Custom AI Solutions",
      description: "Your business is unique, your AI should be too. We develop custom machine learning models, computer vision systems, and NLP solutions tailored to solve your specific challenges."
    },
    {
      iconType: 'target',
      title: "Data Monetization Strategy",
      description: "Your data is sitting on a goldmine. We help you identify, extract, and monetize value from your data assets. Turn information into new revenue streams."
    }
  ].map(service => ({
    ...service,
    icon: getServiceIcon(service.iconType)
  }));

  const values = [
    {
      iconType: 'lightbulb',
      title: "Production-Ready Infrastructure",
      description: "We don't build demos or proofs of concept. Every solution we deliver is production-ready, scalable, and built to handle enterprise-grade workloads from day one."
    },
    {
      iconType: 'award',
      title: "Data-First Approach",
      description: "Great AI starts with great data. We audit your data quality, build robust pipelines, and establish governance frameworks that ensure your AI models have clean, reliable inputs."
    },
    {
      iconType: 'message',
      title: "ROI-Focused Implementation",
      description: "Every project is measured by business impact, not technical metrics. We focus on solutions that directly increase revenue, reduce costs, or unlock new market opportunities."
    },
    {
      iconType: 'trending',
      title: "Transfer of Knowledge",
      description: "We don't just build systems and leave. We train your team, document everything, and ensure your company has the expertise to maintain and evolve the infrastructure independently."
    }
  ].map(value => ({
    ...value,
    icon: getValueIcon(value.iconType)
  }));

  return (
    <div>
      <Header />
      <div className="w-screen h-screen flex flex-col relative">
        <Hero
          title="Build AI Infrastructure That Turns Data Into Revenue"
          description="We engineer the AI backbone that makes companies scale. Custom data pipelines, production-ready ML models, and BI systems that transform raw data into millions in revenue."
          ctaButtons={[
            { text: "Build My AI Infrastructure", href: "#contact-form", primary: true },
            { text: "See How We Scale Companies", href: "#showcase" }
          ]}
          microDetails={[
            "Enterprise-Grade AI Infrastructure",
            "Data Pipelines That Scale to Billions",
            "ML Models That Generate Real Revenue"
          ]}
        />
      </div>
      <WhatWeDo
        sectionTitle="AI Infrastructure That Makes Companies Unstoppable"
        sectionDescription="We don't just implement AI — we build the infrastructure that lets you scale it. From data pipelines to production-ready ML models, we turn your data into revenue-generating assets."
        services={services}
      />
      <RevenueImpact />
      <Showcase
        sectionTitle="Companies That Scaled with Our AI Infrastructure"
        sectionDescription="Real infrastructure. Real data pipelines. Real revenue growth. See how we helped businesses build AI systems that process millions of records and generate measurable ROI."
      />
      <GlobalPresence
        sectionTitle="Connected worldwide"
        sectionDescription="Our global presence allows us to serve clients across different time zones and cultures, offering support and expertise wherever you need it."
      />
      <About
        hero={{
          badge: "Engineering Excellence",
          title: "We Build the AI Infrastructure That Companies Need to Dominate Their Markets",
          description: "Most companies fail at AI because they lack proper infrastructure. We engineer scalable data pipelines, deploy production-grade ML systems, and build BI platforms that turn raw data into competitive advantages."
        }}
        mission={{
          title: "Our Mission",
          description: "Build world-class AI infrastructure for ambitious companies. We bridge the gap between data science aspirations and production reality, delivering systems that scale from prototype to billions of data points."
        }}
        vision={{
          title: "How We Work",
          description: "First, we audit your data ecosystem. Then we architect the infrastructure. Finally, we deploy production-ready systems with your team. No black boxes. No vendor lock-in. Just robust AI infrastructure that your engineers can own and evolve."
        }}
        values={{
          title: "Our Engineering Principles",
          items: values
        }}
        stats={[
          { value: "50+", label: "AI Systems in Production" },
          { value: "10B+", label: "Data Points Processed Monthly" },
          { value: "5+", label: "Years Building AI Infrastructure" },
          { value: "95%", label: "Average Model Accuracy" }
        ]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
