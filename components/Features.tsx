import { FEATURE_CARDS } from "@/lib/siteData";

const Features = () => (
  <section
    aria-labelledby="features-heading"
    className="
      mx-auto px-4 sm:px-6 py-12 sm:py-16
      lg:min-w-[1620px]
    "
  >
    <h2
      id="features-heading"
      className="
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl
        font-bold text-center mb-8 sm:mb-12 text-gray-900
      "
    >
      Time and Cost Saving Solutions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {FEATURE_CARDS.map(({ title, des, image, color, light }) => (
        <article
          key={title}
          className="
            relative overflow-hidden rounded-[20px] sm:rounded-[28px]
            min-h-[320px] sm:min-h-[380px] lg:min-h-[480px]
            p-5 sm:p-6 lg:p-8
            flex flex-col justify-between
            bg-cover bg-center bg-no-repeat
            shadow-lg transition-all duration-300
            hover:-translate-y-1.5 hover:shadow-2xl
          "
          style={{
            backgroundColor: color,
            backgroundImage: `url(${image})`,
            color: light ? "#1d1d1d" : undefined,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/30" />

          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl lg:text-[24px] font-extrabold mb-2 sm:mb-3">
              {title}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-[90%] lg:max-w-[80%]">
              {des}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
