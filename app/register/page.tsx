"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { potentialCustomersApi, servicesApi, type Service } from "@/lib/api";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "quarterly" | "annual">("quarterly");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceId: "",
  });
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      setLoadingServices(true);
      try {
        const response = await servicesApi.getAll({ isActive: true, limit: 100 });
        setServices(response.data || []);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoadingServices(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const serviceId = searchParams.get("serviceId");
    if (serviceId && services.length > 0) {
      const exists = services.some((s) => String(s.id) === serviceId);
      if (exists) {
        setFormData((prev) => ({ ...prev, serviceId }));
      }
    }
  }, [searchParams, services]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await potentialCustomersApi.register({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email || undefined,
        serviceId: formData.serviceId ? Number(formData.serviceId) : undefined,
        notes: `Selected plan: ${selectedPlan}`,
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        serviceId: "",
      });
      setSelectedPlan("quarterly");
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex flex-col lg:flex-row flex-1 pt-[73px]">
        {/* Left Side - Image Section: hero-style on small screens, sidebar on lg */}
        <div className="relative w-full lg:w-5/12 min-h-[500px] lg:min-h-auto flex flex-col justify-center lg:justify-end items-center text-center lg:items-start lg:text-left p-6 lg:p-16 overflow-hidden lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKIakc71G9TxnA2fiBRFl9eVXXN7tDkG7zXh-08iUqdqwb32P_fjRAyglNsvtqExpLvdGuqL6Hg7VMwF7kp7c43uvDL_sr1Ysm6c7TQ_kw9dUK9w1Unspya48XA71UjoIofDIXjcwQflkkfNuG_esqNq5XIXstPXuZyMiNb1HS_lvPsvL-tSUM3B5kcWaC1Q8s1osFa8oHGcdJcDkgIqCo6UCzi3Pr6crZfDWEWKclzqzefRZzJ4LaQOitMFyOkf3I0V88f719OJQ")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/90 to-background-dark lg:bg-gradient-to-t lg:from-black/95 lg:via-black/60 lg:to-transparent z-0"></div>
          <div className="relative z-10 text-white max-w-xl lg:max-w-none">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">
              Unlock Your <br />
              <span className="text-primary lg:text-white/70">True Potential</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg font-normal leading-relaxed mb-6">
              Premium facilities, expert trainers, affordable plans. Join Addis
              Ababa&apos;s top fitness community today.
            </p>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center items-center px-6 py-12 lg:px-20 lg:py-16 bg-background-light">
          <div className="max-w-2xl w-full">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Register
              </h2>
              <p className="text-white/60">
                Fill in your details to get started with your fitness journey.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white/80 text-center">
                    Full Name
                  </span>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all text-center"
                      placeholder="e.g. Abebe Bikila"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white/80 text-center">
                    Phone Number
                  </span>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all text-center"
                      placeholder="+251 911 000 000"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/80 text-center">
                  Email Address
                </span>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all text-center"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white/80 text-center">
                  Service Package
                </span>
                <div className="relative">
                  <select
                    className="w-full h-12 px-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer text-center"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    required
                    disabled={loadingServices}
                  >
                    <option value="">Select a service package</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price} ETB
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                className="mt-4 w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <span>Register Today</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />

      {/* Success popup – redirects to home */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-surface-dark border border-surface-dark-lighter p-8 shadow-xl text-center">
            <div className="size-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-emerald-400 text-4xl">
                check_circle
              </span>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Registration successful!</h3>
            <p className="text-white/70 text-sm mb-6">
              We&apos;ll contact you soon. Thank you for joining Bright Gym.
            </p>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full h-12 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <span>Back to Home</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex flex-1 items-center justify-center pt-[73px]">
            <div className="text-white/60">Loading...</div>
          </main>
          <Footer />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}









