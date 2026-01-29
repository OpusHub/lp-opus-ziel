'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'pt', flag: '🇧🇷', label: 'PT' }
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(/^\/(en|pt)/, '');
        const newPath = newLocale === 'en' ? pathWithoutLocale || '/' : `/${newLocale}${pathWithoutLocale || ''}`;
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/60 p-1 backdrop-blur-xl">
            {locales.map((loc) => (
                <button
                    key={loc.code}
                    onClick={() => switchLocale(loc.code)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${locale === loc.code
                            ? 'bg-white text-black'
                            : 'text-white/70 hover:text-white'
                        }`}
                    aria-label={`Switch to ${loc.label}`}
                >
                    <span className="text-base">{loc.flag}</span>
                    <span className="hidden sm:inline">{loc.label}</span>
                </button>
            ))}
        </div>
    );
}
