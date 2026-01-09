import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section - Luxury Premium */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Producción Musical de Lujo</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Tu Historia</span>
            <br />
            <span className="gold-text">En Una Canción</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos tus emociones más profundas en composiciones musicales únicas. 
            Cada nota cuenta tu historia, cada melodía preserva tus recuerdos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="gold-gradient text-luxury-black font-semibold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-primary/50"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ordena Tu Canción
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 backdrop-blur-sm"
            >
              Ver Nuestro Trabajo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gold-text mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Canciones Creadas</div>
            </div>
            <div className="text-center border-x border-primary/20">
              <div className="text-3xl md:text-4xl font-bold gold-text mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gold-text mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Años Experiencia</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Collections Section - Premium */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
                <span className="text-sm font-medium text-primary">Nuestras Colecciones</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Música Para Cada</span>
                <span className="gold-text"> Momento</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora nuestras colecciones exclusivas de canciones personalizadas, 
                diseñadas para los momentos más importantes de tu vida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section - Luxury Grid */}
      <section id="products" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                {selectedCollectionId 
                  ? <><span className="text-foreground">Productos de</span> <span className="gold-text">{collections.find(c => c.id === selectedCollectionId)?.name}</span></> 
                  : <><span className="text-foreground">Servicios</span> <span className="gold-text">Destacados</span></>
                }
              </h2>
              <p className="text-muted-foreground">Composiciones profesionales para cada ocasión</p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary/50 hover:bg-primary/10 mt-4 md:mt-0"
              >
                Ver Todos los Servicios
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <span className="text-sm font-medium text-primary">Proceso Simple</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Cómo</span>
              <span className="gold-text"> Funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso profesional y transparente de principio a fin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Cuenta tu Historia",
                description: "Comparte los detalles, emociones y momentos que quieres capturar en tu canción"
              },
              {
                step: "02",
                title: "Creación Musical",
                description: "Nuestros compositores profesionales crean una melodía única basada en tu historia"
              },
              {
                step: "03",
                title: "Revisión",
                description: "Escucha tu canción y solicita los ajustes que necesites hasta quedar satisfecho"
              },
              {
                step: "04",
                title: "Entrega Final",
                description: "Recibe tu canción en formato profesional, lista para disfrutar y compartir"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  <div className="gold-text text-5xl font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};