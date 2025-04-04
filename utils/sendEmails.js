



import emailjs from '@emailjs/browser';


export const sendEmail = async (formElement) => {
  try {
    // 1. Envoi du formulaire via EmailJS
    const response = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formElement,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    // 2. Vérification que l'envoi a réussi (status 200)
    if (response.status !== 200) {
      throw new Error(`EmailJS returned status ${response.status}`);
    }

    // 3. Retourne un objet de succès
    return {
      success: true,
      message: "Message envoyé avec succès ! Je vous répondrai dès que possible."
    };

  } catch (error) {
    // 4. Gestion des erreurs détaillée
    console.error("Erreur d'envoi EmailJS:", {
      error: error.message,
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    });

    // 5. Retourne un objet d'erreur
    return {
      success: false,
      message: `Échec de l'envoi. Veuillez réessayer ou me contacter directement. (Erreur: ${error.message})`
    };
  }
};