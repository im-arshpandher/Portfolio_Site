const token = import.meta.env.VITE_BOT_TOKEN;
const chatId = import.meta.env.VITE_CHAT_ID;

export const handleSubmit =
  (form, contactSchema, setErrors, onSuccess, onError) => async (e) => {
    e.preventDefault();

    // Honeypot check — bots fill this, humans don't
    if (form.honeypot) return;

    // Rate limiting — max 1 submission per 10 minutes
    const lastSent = localStorage.getItem("lastFormSubmit");
    const now = Date.now();
    if (lastSent && now - Number(lastSent) < 10 * 60 * 1000) {
      onError("Please wait before sending another message.");
      return;
    }

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const text = `
📩 New Contact Form Message
👤 Name: ${form.fullName}
📧 Email: ${form.email}
📞 Phone: ${form.countryCode}${form.phone}
📌 Reason: ${form.reason}
📝 Subject: ${form.subject}
💬 Message: ${form.message}
  `.trim();

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send message");
      localStorage.setItem("lastFormSubmit", Date.now());
      onSuccess();
    } catch (error) {
      console.error("Error occurred:", error);
      onError();
    }
  };
