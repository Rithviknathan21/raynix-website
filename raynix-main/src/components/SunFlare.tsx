const SunFlare = () => {
  return (
    <div className="absolute top-0 right-1/4 w-96 h-96 opacity-30 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/50 via-red-500/30 to-transparent rounded-full blur-3xl animate-pulse animate-glow-pulse" />
      <div className="absolute inset-0 bg-gradient-radial from-red-600/40 via-orange-600/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/30 via-orange-400/15 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default SunFlare;
