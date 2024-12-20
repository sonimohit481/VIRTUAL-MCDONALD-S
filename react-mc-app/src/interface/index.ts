export interface UserSession {
  $id: string; //"673323aa43tag3a6269f1c5fasdfa5162d50f";
  $createdAt: string; //"2024-12-18T06:21:37.812+00:00";
  $updatedAt: string; //"2024-12-19T05:15:34.151+00:00";
  name: string; //"test two";
  registration: string; //"2024-12-18T06:21:37.810+00:00";
  status: boolean; // true;
  labels: string[]; // [];
  passwordUpdate: string; //"";
  email: string; //"t946800002@gmail.com";
  phone: string; // "";
  emailVerification: boolean; // true;
  phoneVerification: boolean; // false;
  mfa: boolean; // false;
  prefs: any; // {};
  targets: [
    {
      $id: string; //"676269f1dag43qasdf4e23ra34td7810dfc708";
      $createdAt: string; //"2024-12-18T06:21:37.907+00:00";
      $updatedAt: string; //"2024-12-18T06:21:37.907+00:00";
      name: string; //"";
      userId: string; //"676awt43qafver26tqa34a9f1c5fa51asdf3qaf3qa3t62d50f";
      providerId: string | null; // null;
      providerType: string; //"email";
      identifier: string; // "t9468000asdf3q234weaf02@gmail.com";
      expired: boolean; // false;
    }
  ];
  accessedAt: string; // "2024-12-18T06:21:37.811+00:00";
}

export interface LogInForm {
  name?: string | undefined;
  email: string;
  password: string;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  serving_size: string;
  allergens: string[];
  nutrition: {
    energy: string;
    protein: string;
    total_fat: string;
    saturated_fat: string;
    trans_fat: string;
    cholesterol: string;
    total_carbohydrates: string;
    total_sugars: string;
    added_sugars: string;
    sodium: string;
  };
  image: string;
  price: number;
  qan: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface PaymentOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

export interface PaymentModalProps {
  isVisible: boolean;
  message: string;
  type: "preparing" | "verified" | "failed";
  onClose: () => void;
}
