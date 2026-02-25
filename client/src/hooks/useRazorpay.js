import { useCallback } from "react";

const loadScript = (src) =>
  new Promise((res) => {
    const s = document.createElement("script");
    s.src = src; s.onload = () => res(true); s.onerror = () => res(false);
    document.body.appendChild(s);
  });

const useRazorpay = () => {
  const openCheckout = useCallback(async (options) => {
    const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!loaded) throw new Error("Razorpay SDK failed to load");
    const rzp = new window.Razorpay(options);
    rzp.open();
  }, []);
  return { openCheckout };
};

export default useRazorpay;
