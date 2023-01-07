export const StripeEmail = (email: any) => {
    const username = email.split("@")[0];
    return username;
}