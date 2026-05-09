'use client';

import Link from 'next/link';

import { Stethoscope } from 'lucide-react';

import { useEffect, useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#hero' },
  { label: 'Education', href: '#education' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Research', href: '#research' },
  { label: 'Hours', href: '#hours' },
  { label: 'Insurance', href: '#insurance' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      // Contact section visibility detection
      const contactSection = document.querySelector('#contact') as HTMLElement;

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.45 &&
          rect.bottom >= window.innerHeight * 0.25
        ) {
          setActiveSection('contact');
          return;
        }
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];

        const section = document.querySelector(item.href) as HTMLElement;

        if (section) {
          const offsetTop = section.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(item.href.replace('#', ''));

            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <Stethoscope className="h-5 w-5 text-blue-700" />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-base font-bold text-slate-900 sm:text-lg">
              Dr. Nikki Lam
            </h1>

            <p className="truncate text-[11px] text-slate-500 sm:text-xs">
              Foot & Ankle Specialist
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600',
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="https://www.footcaremd.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap font-medium text-sm hover:text-blue-700 hover:underline underline-offset-2 decoration-1 hover:decoration-2"
          >
            Foot Care
          </Link>

          {/* <Button className="ml-3 rounded-full">Request Appointment</Button> */}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-12
                    w-12
                    text-slate-700
                    hover:bg-slate-100
                    hover:text-slate-900
                    focus-visible:ring-0"
              >
                {/* <Menu className="h-6 w-6" strokeWidth={2.5} /> */}
                <div className="flex flex-col gap-1.5">
                  <span className="h-0.5 w-6 rounded-full bg-slate-800" />
                  <span className="h-0.5 w-6 rounded-full bg-slate-800" />
                  <span className="h-0.5 w-6 rounded-full bg-slate-800" />
                </div>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-60
                max-w-60
                border-l
                bg-white
                p-6
                h-full
                overflow-y-auto
                pb-[env(safe-area-inset-bottom)]
                "
            >
              <SheetHeader className="pb-2">
                <SheetTitle className="text-lg font-semibold tracking-tight text-slate-900">
                  Hudson Foot & Ankle
                </SheetTitle>
                <SheetDescription>Dr. Nikki Lam</SheetDescription>
              </SheetHeader>

              <nav className="mt-2 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'rounded-xl px-4 py-3 text-base font-medium transition-all',
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600',
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="https://www.footcaremd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-first:rounded-xl px-4 py-3 text-base font-medium transition-all text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:underline underline-offset-2 decoration-1 hover:decoration-2"
                >
                  Foot Care
                </Link>
                {/* <Button className="mt-6 rounded-full">
                  Request Appointment
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
