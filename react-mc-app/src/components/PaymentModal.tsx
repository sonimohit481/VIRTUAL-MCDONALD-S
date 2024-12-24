import { PaymentModalProps } from "../interface";

const PaymentModal = ({
  isVisible,
  message,
  type,
  onClose,
}: PaymentModalProps) => {
  if (!isVisible) return null;

  const gif =
    type === "preparing"
      ? "/preparing.gif"
      : type === "verified"
      ? "/verified.gif"
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {gif && (
          <div className="flex justify-center mb-4">
            <img
              src={gif}
              alt={type === "preparing" ? "Preparing" : "Verified"}
              className="w-80 h-80 object-contain"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 text-center">
          {message}
        </h3>
        <div className="text-center mt-4">
          {type === "failed" && (
            <p className="text-sm text-red-600">
              There was an issue verifying your payment. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
