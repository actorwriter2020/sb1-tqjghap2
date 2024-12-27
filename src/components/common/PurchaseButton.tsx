import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PurchaseButtonProps {
  eventId: number;
  className?: string;
}

const PurchaseButton = ({ eventId, className = '' }: PurchaseButtonProps) => {
  const handlePurchase = (id: number) => {
    // In a real app, this would redirect to a ticket purchasing system
    const ticketUrls: Record<number, string> = {
      1: 'https://sakuracon.org/tickets',
      2: 'https://www.animeboston.com/registration',
      3: 'https://www.acen.org/registration',
      4: 'https://animenyc.com/tickets'
    };

    const url = ticketUrls[id];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={() => handlePurchase(eventId)}
      className={`flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${className}`}
    >
      Get Tickets
      <ExternalLink className="w-4 h-4" />
    </button>
  );
};

export default PurchaseButton;