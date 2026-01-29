"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        revenue: "",
        businessType: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const revenueOptions = [
        { label: t('revenueOptions.preRevenue'), value: "Pre-revenue" },
        { label: t('revenueOptions.lessThan100k'), value: "< $100k" },
        { label: t('revenueOptions.100kTo500k'), value: "$100k - $500k" },
        { label: t('revenueOptions.500kTo1m'), value: "$500k - $1M" },
        { label: t('revenueOptions.1mTo5m'), value: "$1M - $5M" },
        { label: t('revenueOptions.5mTo15m'), value: "$5M - $15M" },
        { label: t('revenueOptions.15mTo30m'), value: "$15M - $30M" },
        { label: t('revenueOptions.moreThan30m'), value: "> $30M" }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formsubmit.co/victor@opusbr.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Lead from ZielHub Website",
                    _captcha: "false" // Optional: disable captcha if you want simpler submission
                })
            });

            if (response.ok) {
                console.log("Form submitted:", formData);

                // Track Conversion - Google
                if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion();
                }

                // Track Conversion - Meta Pixel
                // @ts-ignore
                if (typeof window.fbq === 'function') {
                    // @ts-ignore
                    window.fbq('track', 'Lead');
                }

                setStatus("success");
                setFormData({ name: "", company: "", phone: "", revenue: "", businessType: "" });
            } else {
                console.error("Submission failed");
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact-form" className="py-24 px-6 md:px-10 lg:px-16 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    {status === "success" ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-light text-white mb-4">{t('successTitle')}</h3>
                            <p className="text-white/60">{t('successDescription')}</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                {t('sendAnother')}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-light text-white/80 ml-1">{t('fields.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder={t('fields.namePlaceholder')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-light text-white/80 ml-1">{t('fields.company')}</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder={t('fields.companyPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-light text-white/80 ml-1">{t('fields.phone')}</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder={t('fields.phonePlaceholder')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="businessType" className="text-sm font-light text-white/80 ml-1">{t('fields.businessType')}</label>
                                    <input
                                        type="text"
                                        id="businessType"
                                        name="businessType"
                                        required
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                        placeholder={t('fields.businessTypePlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="revenue" className="text-sm font-light text-white/80 ml-1">{t('fields.revenue')}</label>
                                <div className="relative">
                                    <select
                                        id="revenue"
                                        name="revenue"
                                        required
                                        value={formData.revenue}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    >
                                        <option value="" disabled className="bg-neutral-900">{t('fields.revenueDefault')}</option>
                                        {revenueOptions.map((option) => (
                                            <option key={option.value} value={option.value} className="bg-neutral-900">
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-100 transition-opacity group-hover:opacity-100" />
                                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-black/20 backdrop-blur-sm px-8 py-4 text-lg font-medium text-white transition-all group-hover:bg-transparent">
                                        {status === "submitting" ? (
                                            <span className="animate-pulse">{t('processing')}</span>
                                        ) : (
                                            <>
                                                {t('submitButton')}
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
