
const collections = [
  {
    title: "Digestive Health",
    description: "Targeted blends to support digestion and maintain a healthy gut.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Immune Support",
    description: "Natural formulas to strengthen your body's defense system.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sleep & Relaxation",
    description: "Gentle herbs to promote restful sleep and reduce stress.",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Energy & Vitality",
    description: "Revitalizing blends to enhance natural energy and stamina.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Women's Health",
    description: "Specialized formulas for women's unique health needs.",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Men's Health",
    description: "Targeted solutions for men's wellness and vitality.",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
  },
];

const Shopbycollection = () => {
  return (
    <div className="h-auto w-auto px-4 md:px-8 lg:px-16">
      <h1 className="font-serif font-bold text-4xl mt-40 mb-6">
        Shop By Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <div key={index} className="relative mb-16">
            <div className="h-[200px] w-full">
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[89%] bg-white shadow-lg p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2">
                <h2 className="text-lg font-bold mb-2 text-gray-800">
                  {collection.title}
                </h2>
                <p className="text-gray-600 text-sm hover:text-emerald-600 transition-colors duration-300">
                  {collection.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopbycollection;