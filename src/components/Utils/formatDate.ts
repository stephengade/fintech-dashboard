export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};



const currencySymbols: { [x: string]: string; } = {
  NGN: '₦',
  USD: '$',
  // ... add other currency codes as needed
};

export const formatMoney = (currency: string, value: any) => {
  const symbol = currencySymbols[currency] || '';
  return `${symbol}${value}`;
}