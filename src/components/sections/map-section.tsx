import { Card } from '@/components/ui/card';

export default function MapSection() {
  return (
    <section
      id="location"
      className="
        scroll-mt-28
        bg-slate-50
        px-6
        py-12
      "
    >
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden rounded-3xl shadow-xl">
          <div className="border-b px-8 py-6">
            <h2 className="text-3xl font-bold text-slate-900">
              Office Location
            </h2>

            <p className="mt-2 text-slate-600">
              1 Centre Street, New York, NY 10007
            </p>
          </div>

          <div className="h-112.5 w-full">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps?q=1+Centre+Street,+New+York,+NY+10007&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}