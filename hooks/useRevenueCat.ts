import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Purchases, { CustomerInfo, PurchasesOffering } from "react-native-purchases";

const apiKeys = {
  google: "appl_zTUdWBJbKbXknbvoybXbqNskPYH",
};

const typeMembership = {
  monthly: "proMonthly",
  yearly: "proYearly",
};

function useRevenueCat() {
  const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const isProMember =
    customerInfo?.activeSubscriptions.includes(typeMembership.monthly) || customerInfo?.activeSubscriptions.includes(typeMembership.yearly);

  useEffect(() => {
    const fetchData = async () => {
      Purchases.setDebugLogsEnabled(true);

      if (Platform.OS === "android") {
        await Purchases.configure({
          apiKey: apiKeys.google,
        });
      } else {
        await Purchases.configure({
          apiKey: apiKeys.google,
        });
      }
      const offerings = await Purchases.getOfferings();
      const costumerInfo = await Purchases.getCustomerInfo();

      setCurrentOffering(offerings.current);
      setCustomerInfo(costumerInfo);
    };
    fetchData();
  }, []);
}

export default useRevenueCat;
