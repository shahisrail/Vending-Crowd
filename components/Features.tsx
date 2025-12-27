import { FEATURE_CARDS } from "@/lib/siteData";

const Features = () => (
  <section
    aria-labelledby="features-heading"
    className="mx-auto px-4 sm:px-6 py-12 sm:py-16 xl:min-w-[1280px]"
  >
    <h2
      id="features-heading"
      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
    >
      Time and Cost Saving Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

      {FEATURE_CARDS.map(({ title, des, image, color }, index) => {
        const isWhiteText = index === 2 || index === 4;

        return (
          <article
            key={title}
            className="relative overflow-hidden rounded-2xl aspect-[4/3] p-4 sm:p-6 flex flex-col shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundColor: color }}
          >
            <img
              src={image}
              alt={title}
              className={`absolute inset-0 w-full h-full transition-all duration-300
                ${
                  index === 0
                    ? "object-contain scale-100"
                    : index === 1
                    ? "object-contain scale-95"
                    : "object-cover"
                }
              `}
            />

            {isWhiteText && (
              <div className="absolute inset-0 bg-black/50" />
            )}

            {/* Content */}
            <div
              className={`relative z-10 
                text-white md:${isWhiteText ? "text-white" : "text-black"}
              `}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-snug max-w-[95%] opacity-90">
                {des}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Features;
