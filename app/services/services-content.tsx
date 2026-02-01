"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { servicesApi, type Service } from "@/lib/api";

export function ServicesContent() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await servicesApi.getAll({ isActive: true, limit: 100 });
        setServices(response.data || []);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch services:", err);
        setError(err.message || "Failed to load services");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = [...new Set(services.map((s) => s.category).filter(Boolean))].sort();
  const displayedServices = categoryFilter
    ? services.filter((s) => s.category === categoryFilter)
    : services;

  return (
    <>
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full p-4 lg:p-10">
          <div
            className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'linear-gradient(rgba(9, 9, 11, 0.7) 0%, rgba(9, 9, 11, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQy8uWfen1a5reLmuZgSYFiVPWaMBm424J1T-y1fSD-hloamzu1EufE9yV6Dp6c2LhfmmG0Er9PX1nzJWpfH6-k9Ddj1BZ6VZcaaoT4yg4ikqJxjpiMxsaQNXQ7AUvj7rUav_wy_WSa485f00E3F51oX7VwGAVc5rGTg18i6iYsU6CpEfan62iPK1omCgATms9p9nxouniRjGrKpXiG4yX5CLlcGlLkDiAH7s_P-uJ5Ni8pxB0x2znL_mYpgf9B_Jaqd85nSHpILs")',
            }}
          ></div>
          <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto mt-10">
            <div className="flex flex-col gap-3">
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                Premium Membership
              </span>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Invest in Your Best Self
              </h1>
              <h2 className="text-white/70 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                Choose Your Transformation Path. No hidden fees, just results.
                Join the community of achievers in Addis Ababa.
              </h2>
            </div>
          </div>
        </section>

        {/* Membership Packages Section */}
        <section className="relative px-4 py-12 lg:px-20 -mt-20 z-20">
          <div className="max-w-7xl mx-auto">
            {loading && (
              <div className="text-center py-16">
                <p className="text-white/60">Loading membership plans...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-16">
                <p className="text-red-400">Failed to load membership plans. Please try again later.</p>
              </div>
            )}

            {!loading && !error && services.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/60">No membership plans available at the moment.</p>
              </div>
            )}

            {!loading && !error && services.length > 0 && (
              <>
                {categories.length > 1 && (
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-card-dark p-1 rounded-xl inline-flex border border-border-dark flex-wrap justify-center gap-0">
                      <button
                        type="button"
                        onClick={() => setCategoryFilter("")}
                        className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                          categoryFilter === ""
                            ? "text-black bg-primary shadow-sm"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategoryFilter(cat)}
                          className={`relative z-10 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                            categoryFilter === cat
                              ? "text-black bg-primary shadow-sm"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {displayedServices.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-white/60">No plans in this category.</p>
                    <button
                      type="button"
                      onClick={() => setCategoryFilter("")}
                      className="mt-2 text-primary font-medium hover:underline"
                    >
                      Show all
                    </button>
                  </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col gap-6 rounded-2xl border border-border-dark bg-card-dark p-8 shadow-xl transition-colors duration-300 group hover:border-primary/50"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-bold text-white/70">
                        {service.name}
                      </h3>
                      <div className="flex items-baseline gap-1 text-white">
                        <span className="text-4xl font-black tracking-tight">
                          ETB {service.price.toLocaleString()}
                        </span>
                        <span className="text-white/60 text-sm font-medium">
                          /{service.durationUnit}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mt-2">
                        {service.description || "Premium membership package"}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                        <span>
                          {service.duration} {service.durationUnit} access
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                        <span>Premium facilities</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                        <span>Expert support</span>
                      </div>
                    </div>

                    <Link
                      href={`/register?serviceId=${service.id}`}
                      className="w-full h-12 rounded-xl font-bold transition-all mt-4 bg-surface-dark-lighter text-white hover:bg-surface-dark flex items-center justify-center"
                    >
                      Select {service.name}
                    </Link>
                  </div>
                ))}
                </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 lg:px-20 bg-background-dark">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Can I freeze my membership?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  Yes. Any member may freeze their membership by specifying the
                  maximum period they will be away. Please speak to our front
                  desk to arrange a freeze.
                </div>
              </details>

              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Are there any hidden fees?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  No hidden fees, just 350 registration fee.
                </div>
              </details>

              <details className="group bg-card-dark rounded-lg border border-border-dark open:border-primary/30 open:bg-card-dark/80 transition-all">
                <summary className="flex cursor-pointer items-center justify-between p-4 text-white font-medium list-none">
                  <span>Can I switch plans later?</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">
                  Yes. Members may switch to a different plan at any time. Please
                  visit the front desk or contact us to update your membership.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-primary py-12 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-black mb-1">
              Ready to start?
            </h2>
            <p className="text-black/80 font-medium">
              Join 200+ members transforming their lives in Addis.
            </p>
          </div>
          <button className="bg-black text-white hover:bg-surface-dark px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
            Register Today
          </button>
        </div>
      </section>
    </>
  );
}


