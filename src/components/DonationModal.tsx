
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, CreditCard, Heart, Shield, Zap } from 'lucide-react';


interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: string;
}

const DonationModal = ({ isOpen, onClose, amount }: DonationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayPalDonation = async () => {
    setIsLoading(true);
    try {
      const url = "https://www.paypal.com/donate/?hosted_button_id=YGHNLQM8XXWJA";
      window.open(url, '_blank', 'noopener,noreferrer');
      // Small delay to show loading state
      setTimeout(() => {
        setIsLoading(false);
        onClose();
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg border-0 bg-gradient-to-br from-background via-background to-accent/5 animate-scale-in">
        {/* Header with gradient background */}
        <div className="relative -mx-6 -mt-6 mb-6 px-6 pt-6 pb-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-t-lg">
          <DialogHeader>
            <div className="flex items-center justify-center mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Make a Difference Today
            </DialogTitle>
            <p className="text-muted-foreground text-center text-sm">
              {amount ? `Donate ${amount}` : 'Choose your donation amount'} to support vulnerable children in Uganda
            </p>
          </DialogHeader>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors animate-fade-in">
            <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xs font-medium text-foreground">Secure</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xs font-medium text-foreground">Instant</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xs font-medium text-foreground">Impact</p>
          </div>
        </div>

        {/* PayPal Card */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">PayPal</h3>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure & Trusted
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Donate safely using PayPal or any credit/debit card. Your contribution makes an immediate impact on children's lives.
            </p>
            
            <Button 
              onClick={handlePayPalDonation}
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Processing...
                </div>
              ) : (
                <>
                  Donate with PayPal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Questions? <a href="/contact" className="text-primary hover:text-primary/80 font-medium story-link">Contact our team</a> for assistance.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
