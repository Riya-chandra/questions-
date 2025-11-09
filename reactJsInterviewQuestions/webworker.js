// So agar tumhara JS code me koi heavy task hai (e.g. loop ya calculation 10 sec ka),
// toh UI freeze ho jaati hai 😵 — kyunki browser busy ho gaya JS chalane me.
// 💡 Solution — Web Workers:
// Web Workers allow tumhe ek background thread me JavaScript chalane ka option.
// So tumhara heavy code background me chalega,
// aur main UI thread smooth rahega (no lag ❌).