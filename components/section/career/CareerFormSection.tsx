"use client";

import { useState } from "react";
import {
  Upload,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getCareersData } from "@/data";

const data = getCareersData();
const emptyForm = { name: "", email: "", mobile: "", address: "" };

export default function CareerFormSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { roadSign, form } = data;
  const f = form.fields;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-field/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-brass/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-brass/20 bg-gradient-to-b from-field via-ink-soft to-ink p-8 shadow-2xl sm:p-12">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
              <div className="pointer-events-none absolute top-1/2 -left-20 h-48 w-48 rounded-full bg-brass/15 blur-2xl" />

              <div className="relative z-10 my-auto py-6">
                <div className="relative mx-auto w-full max-w-md transform rounded-2xl border-[6px] border-white/95 bg-field p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.02] sm:p-7">
                  <div className="absolute top-3 left-3 h-3 w-3 rounded-full border border-gray-400/50 bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm" />
                  <div className="absolute top-3 right-3 h-3 w-3 rounded-full border border-gray-400/50 bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm" />
                  <div className="absolute bottom-3 left-3 h-3 w-3 rounded-full border border-gray-400/50 bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm" />
                  <div className="absolute right-3 bottom-3 h-3 w-3 rounded-full border border-gray-400/50 bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm" />

                  <div className="flex items-center justify-between gap-4 rounded-xl border-2 border-white/90 p-4 sm:p-5">
                    <div>
                      <span className="block font-sans text-2xl font-black tracking-widest text-white uppercase drop-shadow sm:text-4xl">
                        {roadSign.title}
                      </span>
                      <span className="text-[11px] font-bold tracking-wider text-brass uppercase sm:text-xs">
                        {roadSign.subtitle}
                      </span>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-xs">
                      <FaArrowRightLong className="h-9 w-9 drop-shadow-md sm:h-11 sm:w-11" />
                    </div>
                  </div>
                </div>
                <div className="mx-auto h-14 w-6 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 shadow-lg" />
                <div className="mx-auto h-3 w-20 rounded-full bg-ink/40 blur-xs" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-10">
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {form.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{form.description}</p>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-brass/15 text-ink sm:flex">
                    <FileText size={24} className="text-brass" />
                  </div>
                </div>
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-signal to-brass" />
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-field/30 bg-gradient-to-b from-mist to-white p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-field text-white shadow-xl">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="mt-4 text-2xl font-bold text-ink">
                    {form.success.title}
                  </h4>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-field">
                    {form.success.bodyBeforeName} <strong>{formData.name}</strong>
                    {form.success.bodyAfterName}{" "}
                    <strong>{formData.mobile}</strong>
                    {form.success.bodyAfterMobile}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(emptyForm);
                      setFileName(null);
                    }}
                    className="mt-6 rounded-xl bg-ink px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow transition-colors hover:bg-field"
                  >
                    {form.success.resetLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                      {f.name.label}{" "}
                      {f.name.required && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        required={f.name.required}
                        placeholder={f.name.placeholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 transition-all focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                        {f.email.label}{" "}
                        {f.email.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          required={f.email.required}
                          placeholder={f.email.placeholder}
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/60 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 transition-all focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/10 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                        {f.mobile.label}{" "}
                        {f.mobile.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          required={f.mobile.required}
                          placeholder={f.mobile.placeholder}
                          value={formData.mobile}
                          onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                          }
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/60 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 transition-all focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/10 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                      {f.address.label}{" "}
                      {f.address.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                        <MapPin size={18} />
                      </div>
                      <input
                        type="text"
                        required={f.address.required}
                        placeholder={f.address.placeholder}
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 placeholder-gray-400 transition-all focus:border-signal focus:bg-white focus:ring-4 focus:ring-signal/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <label className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                      {f.resume.label}
                    </label>
                    <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50/60 transition-all focus-within:border-signal focus-within:ring-4 focus-within:ring-signal/10">
                      <div className="flex flex-1 items-center truncate px-4 py-3 text-xs text-gray-500 sm:text-sm">
                        {fileName ? (
                          <span className="flex items-center gap-1.5 truncate font-semibold text-field">
                            📄 {fileName}
                          </span>
                        ) : (
                          <span className="text-gray-400">{f.resume.emptyText}</span>
                        )}
                      </div>
                      <label className="flex shrink-0 cursor-pointer items-center gap-2 bg-field px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-all hover:bg-ink active:scale-95">
                        <Upload size={14} />
                        {f.resume.uploadLabel}
                        <input
                          type="file"
                          accept={f.resume.accept}
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setFileName(e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full min-w-[200px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-signal via-signal-bright to-signal px-10 py-3.5 text-base font-bold tracking-wider text-white uppercase shadow-lg shadow-signal/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-signal/45 active:scale-95 disabled:opacity-70 sm:w-auto"
                    >
                      {loading ? (
                        form.submittingLabel
                      ) : (
                        <>
                          <span>{form.submitLabel}</span>
                          <Send
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 border-t border-gray-100 pt-4 text-center">
                <p className="text-xs text-gray-500">
                  {form.hrContact.prefix}{" "}
                  <a
                    href={form.hrContact.phoneHref}
                    className="font-bold text-ink hover:underline"
                  >
                    {form.hrContact.phone}
                  </a>{" "}
                  | {form.hrContact.emailLabel}{" "}
                  <a
                    href={form.hrContact.emailHref}
                    className="font-bold text-ink hover:underline"
                  >
                    {form.hrContact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
