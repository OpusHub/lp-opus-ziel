'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

const locales = [
    { code: 'en', label: 'EN', flag: '🇺🇸', fullName: 'English' },
    { code: 'pt', label: 'PT', flag: '🇧🇷', fullName: 'Português' }
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLocale = locales.find((l) => l.code === locale) || locales[0];
    const otherLocale = locales.find((l) => l.code !== locale) || locales[1];

    const switchLocale = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '');
        const newPath = newLocale === 'en' ? pathWithoutLocale || '/' : `/${newLocale}${pathWithoutLocale || ''}`;
        router.push(newPath);
        setIsOpen(false);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Desktop Version - in header */}
            <div ref={dropdownRef} className="relative hidden md:block">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-light text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                    aria-label="Change language"
                >
                    <Globe className="h-4 w-4" />
                    <span>{currentLocale.flag}</span>
                    <span>{currentLocale.label}</span>
                </button>

                {isOpen && (
                    <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl z-50">
                        {locales.map((loc) => (
                            <button
                                key={loc.code}
                                onClick={() => switchLocale(loc.code)}
                                className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-light transition-colors ${locale === loc.code
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <span className="text-lg">{loc.flag}</span>
                                <span>{loc.fullName}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Mobile Version - Floating Button */}
            <div className="fixed bottom-6 right-6 z-50 md:hidden">
                <button
                    onClick={() => switchLocale(otherLocale.code)}
                    className="flex items-center gap-2 rounded-full border-2 border-white/20 bg-black/80 px-4 py-3 text-base font-medium text-white shadow-2xl backdrop-blur-xl transition-all active:scale-95"
                    aria-label={`Switch to ${otherLocale.fullName}`}
                >
                    <span className="text-2xl">{otherLocale.flag}</span>
                    <span className="text-sm font-light">{otherLocale.fullName}</span>
                </button>
            </div>
        </>
    );
}
