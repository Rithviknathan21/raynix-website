import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { Chrome } from 'lucide-react';
import { toast } from 'sonner';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });

      if (error) {
        toast.error('Sign in failed', {
          description: error.message,
        });
      }
    } catch (error) {
      toast.error('An error occurred', {
        description: 'Please try again later',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sign In to Raynix
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Continue with your Google account to access all features
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full bg-primary/10 hover:bg-primary/20 text-foreground border border-primary/30 hover:border-primary/50 shadow-glow-primary"
            size="lg"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
