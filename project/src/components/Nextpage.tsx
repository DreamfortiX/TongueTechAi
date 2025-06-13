const Nextpage = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=1920",
      title: "Traditional Medicine",
      description: "Discover ancient healing wisdom"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920",
      title: "Modern Technology",
      description: "Powered by advanced AI analysis"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative h-[400px] group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-0"></div>
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-white/90">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nextpage;