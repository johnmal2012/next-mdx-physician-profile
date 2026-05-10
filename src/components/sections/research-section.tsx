import { Card } from '@/components/ui/card';
import MdxContent from '@/components/mdx/mdx-content';
import { headingData } from '@/data/heading';

interface Props {
  content: string;
}

export default function ResearchSection({ content }: Props) {
  return (
    <section id="research" className="scroll-mt-28 bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <Card className="rounded-3xl p-10 shadow-lg">
          <h2 className="mb-8 text-3xl font-bold">{headingData.research}</h2>

          <div className="prose max-w-none">
            <MdxContent source={content} />
          </div>
        </Card>
      </div>
    </section>
  );
}
