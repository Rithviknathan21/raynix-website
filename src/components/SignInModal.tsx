import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    onClose();
    navigate('/auth');
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
            onClick={handleSignIn}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
            size="lg"
          >
            Sign In / Sign Up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
