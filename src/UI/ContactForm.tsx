import React, { useState } from "react";

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
        if (validate()) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg  space-y-6 "
        >
            {/* Name */}
            <div>
                <label className="block font-medium mb-1 text-black">Name</label>
                <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="block font-medium mb-1 text-black">Email</label>
                <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label className="block font-medium mb-1 text-black">Message</label>
                <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b border-gray-300 focus:border-black outline-none py-2 placeholder-gray-400"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full cursor-pointer bg-black text-white py-3 font-semibold tracking-wide hover:bg-[#D4C4A8] transition  duration-300"
            >
                SEND MESSAGE
            </button>
        </form>
    );
}
