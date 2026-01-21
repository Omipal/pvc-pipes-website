import { useState } from "react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleTitle: string;
}

const EmailModal = ({ isOpen, onClose, articleTitle }: EmailModalProps) => {
  const [senderEmail, setSenderEmail] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [note, setNote] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email sent from ${senderEmail} to ${receiverEmail}`);
    setSenderEmail("");
    setReceiverEmail("");
    setNote("");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-lg w-full max-w-[600px] p-6 animate-modal-in bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            Email this Resource
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 bg-transparent text-muted-foreground hover:text-foreground rounded transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <p className="text-[15px] font-medium text-foreground mb-6 pb-4 border-b border-border">
          {articleTitle}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sender-email"
                className="text-[13px] font-medium text-foreground"
              >
                Sender's Email
              </label>
              <input
                type="email"
                id="sender-email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="name@email.com"
                required
                className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="receiver-email"
                className="text-[13px] font-medium text-foreground"
              >
                Receiver's Email
              </label>
              <input
                type="email"
                id="receiver-email"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                placeholder="name@email.com"
                required
                className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="note"
              className="text-[13px] font-medium text-foreground"
            >
              Optional Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              className="px-3 py-2.5 text-sm border border-border rounded-md bg-background text-foreground resize-y min-h-[80px] focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="px-8 py-2.5 text-[15px] font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
