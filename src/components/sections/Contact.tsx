"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

export default function Contact() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitState("success");
      reset();
      setTimeout(() => setSubmitState("idle"), 5000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 5000);
    }
  }

  return (
    <SectionWrapper id="contact" bg="dark">
      <AnimatedText className="text-center mb-16">
        <p className="text-tan font-medium tracking-widest uppercase text-sm mb-4">
          Get Started
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream">
          Ready to Become
          <br />
          <span className="text-tan">Your Own Bank?</span>
        </h2>
        <p className="mt-6 text-cream-dark/70 max-w-2xl mx-auto text-lg">
          Take the first step toward financial independence. Book your free
          consultation today.
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cream mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 rounded-lg bg-green-dark-light border border-tan/20 text-cream placeholder:text-cream/30 focus:border-tan focus:ring-1 focus:ring-tan outline-none transition-colors"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cream mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 rounded-lg bg-green-dark-light border border-tan/20 text-cream placeholder:text-cream/30 focus:border-tan focus:ring-1 focus:ring-tan outline-none transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-cream mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg bg-green-dark-light border border-tan/20 text-cream placeholder:text-cream/30 focus:border-tan focus:ring-1 focus:ring-tan outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cream mb-2">
                Message <span className="text-cream/40">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="w-full px-4 py-3 rounded-lg bg-green-dark-light border border-tan/20 text-cream placeholder:text-cream/30 focus:border-tan focus:ring-1 focus:ring-tan outline-none transition-colors resize-none"
                placeholder="Tell us about your financial goals..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Status Messages */}
            {submitState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </p>
              </motion.div>
            )}

            {submitState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-heading text-2xl font-semibold text-cream mb-6">
              Get In Touch
            </h3>
            <p className="text-cream-dark/70 leading-relaxed mb-8">
              Whether you&apos;re ready to start or just curious about how it
              works, we&apos;re here to help. No pressure, no obligations — just
              an honest conversation about your financial future.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="tel:7199302059"
              className="flex items-start gap-4 p-5 rounded-xl bg-green-dark-light border border-tan/10 hover:border-tan/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-tan/10 flex items-center justify-center shrink-0 group-hover:bg-tan/20 transition-colors">
                <Phone className="w-6 h-6 text-tan" />
              </div>
              <div>
                <p className="font-medium text-cream">Phone</p>
                <p className="text-tan text-lg">(719) 930-2059</p>
              </div>
            </a>

            <a
              href="mailto:david@financialfreedom-inc.net"
              className="flex items-start gap-4 p-5 rounded-xl bg-green-dark-light border border-tan/10 hover:border-tan/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-tan/10 flex items-center justify-center shrink-0 group-hover:bg-tan/20 transition-colors">
                <Mail className="w-6 h-6 text-tan" />
              </div>
              <div>
                <p className="font-medium text-cream">Email</p>
                <p className="text-tan text-lg break-all">david@financialfreedom-inc.net</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-green-dark-light border border-tan/10">
              <div className="w-12 h-12 rounded-xl bg-tan/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-tan" />
              </div>
              <div>
                <p className="font-medium text-cream">Location</p>
                <p className="text-cream-dark/70">
                  The Woodlands &amp; Conroe, TX
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
