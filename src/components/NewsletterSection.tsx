import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="relative py-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="gold-gradient rounded-full p-4 animate-glow">
                    <Mail className="h-12 w-12 text-luxury-black" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  ¡Gracias por Suscribirte!
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Recibirás nuestras mejores ofertas y promociones exclusivas próximamente.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-2">
                    <span className="text-sm font-medium text-primary">Newsletter Exclusivo</span>
                  </div>
                  <h3 className="text-4xl font-bold">
                    <span className="text-foreground">Recibe Ofertas</span>
                    <br />
                    <span className="gold-text">Exclusivas</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Suscríbete para recibir promociones especiales, noticias y contenido único
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 bg-card border-primary/30 focus:border-primary h-12 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="gold-gradient text-luxury-black font-semibold h-12 px-8 shadow-xl hover:scale-105 transition-all hover:shadow-primary/50"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};