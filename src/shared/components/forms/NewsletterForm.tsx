"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Subscribed:", data.email);
    setStatus("success");
    form.reset();

    // Reset success message after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-md text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
        <p className="text-gray-400 text-sm">
          Get the latest updates on new products and upcoming sales directly to
          your inbox.
        </p>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 rounded-xl pl-4 pr-12 focus-visible:ring-white/30"
                {...form.register("email")}
                disabled={status === "submitting" || status === "success"}
              />
              {status === "success" && (
                <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-400" />
              )}
            </div>
            <Button
              type="submit"
              className="h-12 px-6 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors"
              disabled={status === "submitting" || status === "success"}
            >
              {status === "submitting" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <span className="hidden sm:inline">Subscribe</span>
                  <Send className="h-4 w-4 sm:ml-2" />
                </>
              )}
            </Button>
          </div>
          {form.formState.errors.email && (
            <p className="absolute -bottom-6 left-2 text-xs text-red-400 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              {form.formState.errors.email.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
