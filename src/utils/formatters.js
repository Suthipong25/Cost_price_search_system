import { PROVINCE_THAI_NAMES } from '../constants/index.js';

export const canonical = (value) =>
  (value || '').trim().replace(/\s+/g, ' ').toLocaleUpperCase('th-TH');

export const formatMoney = new Intl.NumberFormat('th-TH', {
  maximumFractionDigits: 0,
});

export const provinceThaiName = (value) =>
  PROVINCE_THAI_NAMES.get(canonical(value)) || '';

export const containsValue = (value, query) =>
  !canonical(query) || canonical(value).includes(canonical(query));

export const matchesProvinceValue = (value, query) => {
  const q = canonical(query);
  if (!q) return true;
  return canonical(value).includes(q) || containsValue(provinceThaiName(value), query);
};

export const uniqueSorted = (values) => {
  const seen = new Set();
  return values
    .filter(Boolean)
    .map((v) => String(v).trim())
    .filter((v) => {
      const key = canonical(v);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.localeCompare(b, 'th'));
};

export const refreshRouteMin = (route) => {
  if (!route || !Array.isArray(route.offers) || !route.offers.length) return;
  let minOffer = route.offers[0];
  for (const o of route.offers) {
    if (o.cost < minOffer.cost) {
      minOffer = o;
    }
  }
  route.minCost = minOffer.cost;
  route.minCompany = minOffer.company;
};
