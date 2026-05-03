import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/5a56ce26-1c04-47bc-8949-063d05ff74b0.jpg",
    label: "Пастельный дизайн",
    tag: "Гель-лак",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/12d72459-6b85-4aff-b34c-578620c2aa5f.jpg",
    label: "Цветочный арт",
    tag: "Наращивание",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/9a7bb96a-f425-4ab8-9660-437a05645023.jpg",
    label: "Хром + Линии",
    tag: "Дизайн",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/5a56ce26-1c04-47bc-8949-063d05ff74b0.jpg",
    label: "Пудровый нюд",
    tag: "Гель-лак",
  },
  {
    id: 5,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/12d72459-6b85-4aff-b34c-578620c2aa5f.jpg",
    label: "Тёмный глянец",
    tag: "Наращивание",
  },
  {
    id: 6,
    src: "https://cdn.poehali.dev/projects/979ef0f5-2bc1-4748-8147-b4404beab7d0/files/9a7bb96a-f425-4ab8-9660-437a05645023.jpg",
    label: "Минимализм",
    tag: "Дизайн",
  },
];

const SERVICES = [
  {
    icon: "Sparkles",
    name: "Маникюр классический",
    desc: "Обработка кутикулы, форма ногтей, покрытие гель-лаком",
    price: "1 200 ₽",
    duration: "60 мин",
  },
  {
    icon: "Star",
    name: "Маникюр + дизайн",
    desc: "Классический маникюр + художественный дизайн любой сложности",
    price: "от 1 800 ₽",
    duration: "90 мин",
  },
  {
    icon: "Gem",
    name: "Наращивание ногтей",
    desc: "Биогель или акрил, любая длина, укрепление натуральных ногтей",
    price: "от 3 500 ₽",
    duration: "120 мин",
  },
  {
    icon: "Wand2",
    name: "Коррекция нарощенных",
    desc: "Коррекция формы и длины, обновление покрытия",
    price: "от 2 200 ₽",
    duration: "90 мин",
  },
  {
    icon: "Layers",
    name: "Педикюр",
    desc: "Уход за стопами, обработка пяток, покрытие гель-лаком",
    price: "от 1 800 ₽",
    duration: "90 мин",
  },
  {
    icon: "Heart",
    name: "Маникюр + педикюр",
    desc: "Комплекс: маникюр и педикюр со скидкой",
    price: "от 2 800 ₽",
    duration: "150 мин",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedImage, setSelectedImage] = useState<null | typeof GALLERY_IMAGES[0]>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const heroSection = useInView(0.1);
  const servicesSection = useInView(0.1);
  const gallerySection = useInView(0.1);

  return (
    <div
      className="min-h-screen font-montserrat"
      style={{ background: "#0A0608", color: "#F5EEF2" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "linear-gradient(to bottom, rgba(10,6,8,0.95), transparent)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="font-cormorant text-2xl font-light tracking-widest"
          style={{ color: "#FF2D78", letterSpacing: "0.25em" }}
        >
          NAIL <em className="not-italic font-semibold">STUDIO</em>
        </span>
        <div className="flex gap-6 text-sm font-medium tracking-wider">
          {[
            { id: "home", label: "ГЛАВНАЯ" },
            { id: "services", label: "УСЛУГИ" },
            { id: "gallery", label: "ГАЛЕРЕЯ" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="transition-all duration-300"
              style={{
                color: activeSection === item.id ? "#FF2D78" : "rgba(245,238,242,0.6)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        ref={heroSection.ref}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,45,120,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/4 left-10 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,45,120,0.08), transparent 70%)",
            animation: "float 5s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,107,157,0.06), transparent 70%)",
            animation: "float 7s ease-in-out infinite reverse",
          }}
        />

        <div
          className={`relative z-10 transition-all duration-1000 ${
            heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-xs font-semibold tracking-[0.4em] mb-6 uppercase"
            style={{ color: "#FF2D78" }}
          >
            Мастер маникюра
          </p>
          <h1
            className="font-cormorant text-6xl md:text-8xl font-light leading-none mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Анна
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF2D78, #FF6B9D, #FFB3CC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Соколова
            </span>
          </h1>
          <p
            className="text-lg md:text-xl font-light mt-6 mb-10 max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(245,238,242,0.65)" }}
          >
            Создаю красоту ногтей, которой восхищаются. Более 5 лет опыта, 500+ довольных клиентов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("services")}
              className="px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF2D78, #FF6B9D)",
                color: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 30px rgba(255,45,120,0.4)",
              }}
            >
              Записаться
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(255,45,120,0.5)",
                color: "#FF2D78",
                borderRadius: "2px",
              }}
            >
              Мои работы
            </button>
          </div>
        </div>

        <div
          className={`relative z-10 mt-20 grid grid-cols-3 gap-8 md:gap-16 transition-all duration-1000 delay-300 ${
            heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { num: "5+", label: "лет опыта" },
            { num: "500+", label: "клиентов" },
            { num: "1000+", label: "работ" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-cormorant text-4xl md:text-5xl font-light"
                style={{ color: "#FF2D78" }}
              >
                {s.num}
              </p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(245,238,242,0.5)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(245,238,242,0.3)" }}
        >
          <span className="text-xs tracking-widest uppercase">Листать</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={servicesSection.ref} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-xs font-semibold tracking-[0.4em] mb-4 uppercase"
              style={{ color: "#FF2D78" }}
            >
              Прайс-лист
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">Услуги</h2>
            <div
              className="w-16 h-px mx-auto mt-6"
              style={{ background: "linear-gradient(to right, transparent, #FF2D78, transparent)" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <div
                key={service.name}
                className={`group relative p-6 transition-all duration-700 hover:scale-[1.02] cursor-default ${
                  servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: "linear-gradient(135deg, rgba(30,21,32,0.9), rgba(18,13,16,0.9))",
                  border: "1px solid rgba(255,45,120,0.15)",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, rgba(255,45,120,0.08), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4 rounded-sm"
                    style={{ background: "rgba(255,45,120,0.1)" }}
                  >
                    <Icon name={service.icon as "Sparkles"} size={18} style={{ color: "#FF2D78" }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold mb-2 leading-tight">
                    {service.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(245,238,242,0.55)" }}
                  >
                    {service.desc}
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid rgba(255,45,120,0.12)" }}
                  >
                    <span
                      className="font-cormorant text-2xl font-semibold"
                      style={{ color: "#FF6B9D" }}
                    >
                      {service.price}
                    </span>
                    <span
                      className="text-xs tracking-wider flex items-center gap-1"
                      style={{ color: "rgba(245,238,242,0.4)" }}
                    >
                      <Icon name="Clock" size={12} />
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-12 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF2D78, #FF6B9D)",
                color: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 30px rgba(255,45,120,0.35)",
              }}
            >
              Записаться на приём
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" ref={gallerySection.ref} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="text-xs font-semibold tracking-[0.4em] mb-4 uppercase"
              style={{ color: "#FF2D78" }}
            >
              Портфолио
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">Галерея работ</h2>
            <div
              className="w-16 h-px mx-auto mt-6"
              style={{ background: "linear-gradient(to right, transparent, #FF2D78, transparent)" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative aspect-square overflow-hidden cursor-pointer transition-all duration-700 ${
                  gallerySection.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderRadius: "4px",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,6,8,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: "#FF2D78" }}
                  >
                    {img.tag}
                  </span>
                  <span className="text-sm font-medium">{img.label}</span>
                </div>
                <div
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(255,45,120,0.2)", backdropFilter: "blur(4px)" }}
                >
                  <Icon name="ZoomIn" size={14} style={{ color: "#FF2D78" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-6 md:px-12 text-center"
        style={{ borderTop: "1px solid rgba(255,45,120,0.1)" }}
      >
        <span
          className="font-cormorant text-3xl font-light tracking-widest"
          style={{ color: "#FF2D78" }}
        >
          NAIL <em className="not-italic font-semibold">STUDIO</em>
        </span>
        <p
          className="text-xs mt-4 tracking-wider"
          style={{ color: "rgba(245,238,242,0.3)" }}
        >
          © 2026 Анна Соколова · Мастер маникюра
        </p>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          style={{ background: "rgba(10,6,8,0.95)", backdropFilter: "blur(12px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full rounded object-cover"
              style={{ maxHeight: "75vh" }}
            />
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <p className="font-cormorant text-2xl font-light">{selectedImage.label}</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#FF2D78" }}>
                  {selectedImage.tag}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
                style={{
                  border: "1px solid rgba(255,45,120,0.3)",
                  borderRadius: "2px",
                  color: "rgba(245,238,242,0.7)",
                }}
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
