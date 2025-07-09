
export const WHATSAPP_NUMBER = "+256755122707";

export type MessageType = 
  | "general"
  | "sponsor" 
  | "volunteer"
  | "partner"
  | "event"
  | "donation"
  | "programs";

const messageTemplates: Record<MessageType, string> = {
  general: "Hello, I would like to get more information about Bright Futures Foundation and your programs.",
  sponsor: "Hello, I would like to sponsor a child through Bright Futures Foundation. Can you please provide me with more information about the sponsorship program?",
  volunteer: "Hello, I would like to join your team as a volunteer at Bright Futures Foundation. Can you please tell me about the available volunteer opportunities?",
  partner: "Hello, I would like to become a partner with Bright Futures Foundation. Can you please provide me with information about partnership opportunities?",
  event: "Hello, I would like to plan a fundraising event for Bright Futures Foundation. Can you please guide me on how to organize an event to support your cause?",
  donation: "Hello, I would like to make a donation to support Bright Futures Foundation. Can you please provide me with information about donation options?",
  programs: "Hello, I would like to learn more about the programs offered by Bright Futures Foundation. Can you please share details about your current initiatives?"
};

export const redirectToWhatsApp = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppUrl = (messageType: MessageType, customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
