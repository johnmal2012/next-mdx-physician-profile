import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import MdxContent from '@/components/mdx/mdx-content';

import { physicianData } from '@/data/physician';

interface Props {
  content: string;
}

export default function HeroSection({ content }: Props) {
  return (
    <section id="hero" className="scroll-mt-28 bg-slate-50 px-6 py-12
    ">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={physicianData.image}
            alt={physicianData.name}
            width={600}
            height={700}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>
        <Card className="rounded-3xl border-0 p-8 shadow-xl">
          <div className="space-y-6">
            <div className="space-y-5">
              <Badge className="rounded-full px-4 py-1 text-xs tracking-wide">
                Board-Certified Foot & Ankle Specialist
              </Badge>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {physicianData.specialty}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {physicianData.name}
                </h2>

                <p className="mt-3 text-lg text-slate-600">
                  {physicianData.title}
                </p>
              </div>

              <Separator />
            </div>
            <div className="prose max-w-none text-slate-700">
              <MdxContent source={content} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
