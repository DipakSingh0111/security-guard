"use client";

import { useState } from "react";
import PageBanner from "@/components/shared/Banner";
import {
  ShieldCheck,
  Send,
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";
import { getEnquiryData } from "@/data";

const data = getEnquiryData();

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  company: "",
  location: "",
  guardsCount: "",
  shiftType: data.defaultShift,
  requirements: "",
};

export default function EnquiryPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const { banner, fields, sections, serviceOptions, shiftOptions, success } =
    data;

  return (
    <>
      <PageBanner title={banner.title} image={banner.image} items={banner.items} />

      <section className="bg-[#f8fafc] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-7 shadow-2xl sm:p-12">
            <div className="border-b border-gray-100 pb-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-brass/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                <Award size={14} className="text-brass" />
                {data.badge}
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-4xl">
                {data.title.normal}{" "}
                <span className="text-brass">{data.title.highlighted}</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500">{data.description}</p>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-emerald-950">
                  {success.title}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-emerald-700">
                  {success.bodyBeforeName} <strong>{formData.name}</strong>
                  {success.bodyAfterName} <strong>{formData.phone}</strong>{" "}
                  {success.bodyAfterPhone}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(emptyForm);
                  }}
                  className="mt-6 rounded-full bg-ink px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-field"
                >
                  {success.resetLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {sections[0].title}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required={fields.name.required}
                        placeholder={fields.name.placeholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-10 pr-4 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        required={fields.phone.required}
                        placeholder={fields.phone.placeholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-10 pr-4 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        required={fields.email.required}
                        placeholder={fields.email.placeholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-10 pr-4 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {sections[1].title}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <Building2 size={16} />
                      </div>
                      <input
                        type="text"
                        required={fields.company.required}
                        placeholder={fields.company.placeholder}
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-10 pr-4 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <MapPin size={16} />
                      </div>
                      <input
                        type="text"
                        required={fields.location.required}
                        placeholder={fields.location.placeholder}
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-10 pr-4 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {sections[2].title}
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-ink transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value || "empty"} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="number"
                        min="1"
                        placeholder={fields.guardsCount.placeholder}
                        value={formData.guardsCount}
                        onChange={(e) =>
                          setFormData({ ...formData, guardsCount: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.shiftType}
                        onChange={(e) =>
                          setFormData({ ...formData, shiftType: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-ink transition-colors focus:border-ink focus:bg-white focus:outline-none"
                      >
                        {shiftOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder={fields.requirements.placeholder}
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData({ ...formData, requirements: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-sm text-ink placeholder-gray-400 transition-colors focus:border-ink focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2 text-center sm:text-left">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 rounded-full bg-brass px-9 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-70"
                  >
                    <span>
                      {loading ? data.submittingLabel : data.submitLabel}
                    </span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
