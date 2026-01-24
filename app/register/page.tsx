"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { potentialCustomersApi, servicesApi, type Service } from "@/lib/api";

export default function RegisterPage() {
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
      // Reset form
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

      <main className="flex flex-col lg:flex-row flex-1">
        {/* Left Side - Image Section */}
        <div className="relative w-full lg:w-5/12 min-h-[300px] lg:min-h-auto flex flex-col justify-end p-8 lg:p-16 overflow-hidden lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKIakc71G9TxnA2fiBRFl9eVXXN7tDkG7zXh-08iUqdqwb32P_fjRAyglNsvtqExpLvdGuqL6Hg7VMwF7kp7c43uvDL_sr1Ysm6c7TQ_kw9dUK9w1Unspya48XA71UjoIofDIXjcwQflkkfNuG_esqNq5XIXstPXuZyMiNb1HS_lvPsvL-tSUM3B5kcWaC1Q8s1osFa8oHGcdJcDkgIqCo6UCzi3Pr6crZfDWEWKclzqzefRZzJ4LaQOitMFyOkf3I0V88f719OJQ")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-0"></div>
          <div className="relative z-10 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="material-symbols-outlined text-white text-sm">
                bolt
              </span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Join the movement
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
              Unlock Your <br />
              <span className="text-white/70">True Potential</span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl font-light mb-6">
              Premium facilities, expert trainers, affordable plans. Join Addis
              Ababa&apos;s top fitness community today.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                <Image
                  alt="Member Avatar"
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTN1vkSrpnUduzhuR2TLFOF81e8I_vb-BWKIE-4pRrAoNASwKJmxPrYtnU1dAbnG3gmjBuSsQTcWjMyi6v6XOfagIkRWocpfmpTGDMUAvqCvsCRSM-ie7zXz2sCUcqmFcf28Qt60eBcrerwUMEcKy8SxPysD1aMxJiOFoKwoeI31BPCHcb6Ku10aiS7r_ZdFZV5FL7oIEozM3IGlIz16mEw1MyiIoyJOOmTPX9wRz6yPlw8DGxoLcOnrStyvKrHD2uJTO2QPkAZI"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Member Avatar"
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6FvqEzy6TZn00oCHUqTbeI90ZIAa2Lg68cA33URBvuuVVq8yjzbYgrkmdlskwgS2-uoRNXdFbUxiEEd_fdOpwz4a-Le0Z3AplgDKoCOTjqpGvj9kfkaYdT1Kltf-w_Swk6tvZtmrS4OG8xbXVucLX1XDa7R_MnhZDNF3nUQV5Fi8Nr_rVoPqig7JvnMVI3R_Qw8J_7U5Z8Nrj-c_eGrPJiImMPIwsm5KqgVOo7kThnPtxSqs69PGt8gqMLkoETqeqmoCEsfwEoxs"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Member Avatar"
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB6nkJ0c6-8TClorG1G2SfsY3H01XqwNetvemz7d-ius-Mn7S4GeLeUsWhWUbVOEDWjNstM3idOTWU6y7XoH59MbUSH_BI08qCp4dHnAxTa1_15xgnjsld4xznHMo77vzYlZj5bM-pSgGocGfOLq1PYW8oTTxxxnZ5mGvh-0c4GdEkMhILeJrwIKhLN-bTf6Ojx3DV6soalatLVxky3CUhGPfam1VP-1BQTn3VOvcHTKcxNaLQ8JTgdgwoNQI-p_YUmYl83VbEsSw"
                  width={40}
                  height={40}
                />
                <div className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-black font-bold text-xs">
                  +500
                </div>
              </div>
              <p className="text-sm font-medium text-white/80">
                Active members in Addis
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-16 bg-background-light">
          <div className="max-w-2xl mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Create your account
              </h2>
              <p className="text-white/60">
                Fill in your details to get started with your fitness journey.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-white/80">
                    Full Name
                  </span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">
                      person
                    </span>
                    <input
                      className="w-full h-12 pl-12 pr-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all"
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
                  <span className="text-sm font-medium text-white/80">
                    Phone Number
                  </span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">
                      call
                    </span>
                    <input
                      className="w-full h-12 pl-12 pr-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all"
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
                <span className="text-sm font-medium text-white/80">
                  Email Address
                </span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">
                    mail
                  </span>
                  <input
                    className="w-full h-12 pl-12 pr-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent placeholder-white/40 transition-all"
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
                <span className="text-sm font-medium text-white/80">
                  Service Package
                </span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-xl">
                    category
                  </span>
                  <select
                    className="w-full h-12 pl-12 pr-4 rounded-lg bg-surface-dark border border-surface-dark-lighter text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
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
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </label>

              {error && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Registration successful! We'll contact you soon.
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

              <div className="text-center mt-2">
                <p className="text-sm text-white/60">
                  Already have an account?{" "}
                  <Link
                    className="text-primary font-bold hover:underline"
                    href="#"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}









