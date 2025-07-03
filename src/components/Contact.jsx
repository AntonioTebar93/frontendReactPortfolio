import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState(null);

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!form.email.trim()) {
            newErrors.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "El email no es válido";
        }
        if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
        setServerError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);
        setServerError(null);

        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://tu-dominio.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Error al enviar el mensaje");
            }

            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setErrors({});
        } catch (error) {
            setServerError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-0 px-6 bg-secondary/30 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Ponte en contacto <span className="text-primary">conmigo</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
                    ¿Necesitas una solución web para tu proyecto o negocio? Hablemos. Siempre estoy buscando nuevos retos y oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <div className="space-y-10">
                        <div className="flex flex-col items-center bg-white/10 rounded-xl p-8 shadow-lg cursor-default">
                            <MdEmail className="text-primary text-5xl mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Email</h4>
                            <a
                                className="text-muted-foreground transition-colors"
                            >
                                toni_11.tebar@hotmail.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center bg-white/10 rounded-xl p-8 shadow-lg cursor-default">
                            <MdPhone className="text-primary text-5xl mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Teléfono</h4>
                            <a

                                className="text-muted-foreground transition-colors"
                            >
                                +34 658 431 719
                            </a>
                        </div>

                        <div className="flex flex-col items-center bg-white/10 rounded-xl p-8 shadow-lg cursor-default">
                            <MdLocationOn className="text-primary text-5xl mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Ubicación</h4>
                            <p className="text-muted-foreground text-center">Valencia, España</p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="bg-white/10 rounded-xl p-8 shadow-lg">
                        <h3 className="text-3xl font-bold mb-8 text-center">
                            Envíame un <span className="text-primary">mensaje</span>
                        </h3>

                        {submitted && (
                            <p className="mb-6 text-center text-green-500 font-semibold">
                                ¡Gracias por contactarme! Te responderé pronto.
                            </p>
                        )}

                        {serverError && (
                            <p className="mb-6 text-center text-red-500 font-semibold">
                                {serverError}
                            </p>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 font-semibold">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.name ? "border-red-500" : ""
                                        }`}
                                    placeholder="Tu nombre"
                                    disabled={loading}
                                />
                                {errors.name && (
                                    <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition ${errors.email ? "border-red-500" : ""
                                        }`}
                                    placeholder="tu@email.com"
                                    disabled={loading}
                                />
                                {errors.email && (
                                    <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 font-semibold">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    className={`w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none ${errors.message ? "border-red-500" : ""
                                        }`}
                                    placeholder="Escribe tu mensaje aquí..."
                                    disabled={loading}
                                />
                                {errors.message && (
                                    <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-primary text-white font-semibold py-3 rounded-md transition cosmic-button flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                                    }`}
                            >
                                {loading ? "Enviando..." : (
                                    <>
                                        Enviar <MdSend className="inline-block" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
