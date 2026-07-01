import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  // Workaround for TypeScript error: Property 'env' does not exist on type 'ImportMeta'
  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = (import.meta as any).env || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_bgv6sno",
        "template_kwypwak",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "KwYZ3LTIZIDwcXety"
      );

      setStatus("✅ Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send your message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-auto w-full">
      <div className="mx-auto flex max-w-3xl flex-col px-6 py-20">
        <div className="mb-12 text-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mb-5 text-5xl text-blue-500"
          />

          <h1 className="text-5xl font-bold">Contact Me</h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Have a project, internship opportunity, or just want to say hello?
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-800 bg-[#111111] p-8 shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-gray-700 bg-black px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-700"
            >
              <FontAwesomeIcon icon={faPaperPlane} />

              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-gray-300">
                {status}
              </p>
            )}
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500">Or contact me directly</p>

          <a
            href="mailto:jern.0719@email.com"
            className="mt-3 inline-block text-lg font-semibold text-blue-400 transition hover:text-blue-300"
          >
            jern.0719@email.com
          </a>
        </div>
      </div>
    </div>
  );
}