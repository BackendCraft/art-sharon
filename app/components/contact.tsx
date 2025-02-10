"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// 📌 Validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  // 📌 Function to send email using EmailJS
  async function sendMessage(values: z.infer<typeof formSchema>) {
    try {
      await emailjs.send(
        "service_4p77coq",  // ✅ Service ID correcto
        "template_ewoqfmi", // ✅ Template ID correcto
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "lgPOKYK574Mnh6jWq" // ✅ Public Key correcto
      );

      alert("✅ Message sent successfully!");
    } catch (error) {
      alert("❌ Error sending message. Please try again later.");
    }
  }

  return (
    <section id="get-in-touch" className="w-full py-12 md:py-24 lg:py-32 bg-black flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Get in Touch</h2>
          <p className="max-w-lg text-zinc-400 md:text-xl">
            Have a project in mind? Send me a message.
          </p>
        </div>

        <div className="mx-auto max-w-[500px] mt-8">
          <Card className="bg-zinc-950 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(sendMessage)} className="space-y-4">
                  {/* 📌 Name Field */}
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-900 border-zinc-800 text-white" placeholder="Your name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* 📌 Email Field */}
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Email</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-900 border-zinc-800 text-white" placeholder="your@email.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* 📌 Message Field */}
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-400">Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-zinc-900 border-zinc-800 text-white" placeholder="Tell me about your project..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* 📌 Submit Button */}
                  <Button type="submit" className="w-full bg-white text-black hover:bg-zinc-200">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
  