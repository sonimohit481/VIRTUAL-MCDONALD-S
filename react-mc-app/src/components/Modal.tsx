import { MenuItem } from "../interface";
import { ImCancelCircle } from "react-icons/im";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: MenuItem;
  quantity: number;
  addToCart: (args: MenuItem) => void;
  removeFromCart: (args: number) => void;
}

const Modal = ({
  isOpen,
  onClose,
  product,
  quantity,
  addToCart,
  removeFromCart,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Main modal  */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className=" bg-black bg-opacity-70  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content  */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 text-white">
            {/* Modal header  */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <ImCancelCircle size={24} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body  */}
            <div className="p-4 md:p-5 space-y-4">
              {" "}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-red-600">
                    ₹{product.price.toFixed(2)}
                  </p>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
                <p className="text-gray-600 dark:text-white">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold">Nutrition Information</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Energy: {product.nutrition.energy}</div>
                    <div>Protein: {product.nutrition.protein}</div>
                    <div>Total Fat: {product.nutrition.total_fat}</div>
                    <div>Carbs: {product.nutrition.total_carbohydrates}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Allergens</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="px-2 py-1 bg-gray-100 rounded-full text-sm dark:text-black dark:bg-yellow-200"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  {quantity === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded"
                      >
                        -
                      </button>
                      <span className="font-semibold text-xl">{quantity}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
