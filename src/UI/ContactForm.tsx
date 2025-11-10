import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FadeRightSection } from "./FramerAnimation";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState("");

    const validate = () => {
        const newErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name";
            isValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter a message";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSending(true);
        setSuccess("");

        emailjs
            .send(
                "service_3xz3lae", // 🔹 заміни
                "template_smbi4gj", // 🔹 заміни
                formData,
                "NnuGcqnH14lVkJRbj"   // 🔹 заміни
            )
            .then(() => {
                setIsSending(false);
                setSuccess("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error(err);
                setIsSending(false);
                setSuccess("❌ Failed to send. Try again later.");
            });
    };

    return (


        <form onSubmit={handleSubmit} className="w-full max-w-lg  mx-4" id="contact-form" name="contact-form">
            <FadeRightSection>
                <div className="mt-8">
                    <label htmlFor="name" className="block font-medium mb-1 text-black">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        autoComplete="name"
                        className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="mt-8">
                    <label htmlFor="email" className="block font-medium mb-1 text-black">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        autoComplete="email"
                        className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mt-8">
                    <label htmlFor="message" className="block font-medium mb-1 text-black">Message</label>
                    <textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        autoComplete="off"
                        className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full cursor-pointer bg-second-dark-bg text-white py-3 font-semibold tracking-wide transition duration-300 ${isSending ? "opacity-70" : "hover:bg-[#D4C4A8]"
                        }`}
                >
                    {isSending ? "Sending..." : "SEND MESSAGE"}
                </button>

                {success && <p className="text-center text-sm mt-3">{success}</p>}
            </FadeRightSection>
        </form>

    );
}
