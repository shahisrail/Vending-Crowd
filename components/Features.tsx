import { FEATURE_CARDS } from "@/lib/siteData";

export default function Features() {
  return (
    <section className="bg-[#FBF6E9] py-20">
      <div className="  mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-black">
          Time and Cost Saving Solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {FEATURE_CARDS.map(({ title, des, image, color, light }) => (
            <article
              key={title}
              className="relative rounded-3xl overflow-hidden min-h-[580px] p-8 flex flex-col justify-between bg-cover bg-no-repeat"
              style={{
                backgroundColor: color,
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Overlay for dark images */}
              {!light && !color && (
                <div className="absolute inset-0 bg-black/40" />
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    light ? "text-white" : "text-black"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed max-w-xs ${
                    light ? "text-white/90" : "text-black/80"
                  }`}
                >
                  {des}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
