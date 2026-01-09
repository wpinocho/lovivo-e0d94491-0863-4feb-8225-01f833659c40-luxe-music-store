export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center group">
      <img 
        src="/logo.png"
        alt="TEMPOO MX"
        className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-2xl" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold gold-text">TEMPOO MX</span>';
        }}
      />
    </a>
  )
}