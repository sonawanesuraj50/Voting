export const toEther = (library: any, amount: string): string => {
  return library.utils.toWei(amount, "ether");
};

export const fromEther = (library: any, amount: string): string => {
  return library.utils.fromWei(amount, "ether");
};

export const renderTokenAmountText = (amount: string): string => {
  const value = !!amount ? amount : "";

  const token = value.replace(/,/g, "");

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token).toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }
  return "1";
};
