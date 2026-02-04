import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Studio Noir',
  description: 'Discover the range of creative services offered by Studio Noir, from photography to web design.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          What We Offer
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We provide a comprehensive suite of creative services to bring your vision to life.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <Link key={service.id} href={`/portfolio/${service.slug}`} className="block h-full">
            <Card className="flex flex-col sm:flex-row items-center p-6 h-full hover:bg-card/70 transition-colors">
              <div className="p-4 bg-accent/10 rounded-full mb-4 sm:mb-0 sm:mr-6">
                <service.icon className="h-10 w-10 text-accent" />
              </div>
              <div className="text-center sm:text-left">
                <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
