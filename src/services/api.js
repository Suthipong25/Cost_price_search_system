const API_BASE = '/api';

export async function fetchCosts() {
  const res = await fetch(`${API_BASE}/costs`);
  if (!res.ok) {
    throw new Error(`Failed to fetch costs: ${res.statusText}`);
  }
  return res.json();
}

export async function updateCost(id, cost) {
  const res = await fetch(`${API_BASE}/costs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cost }),
  });
  if (!res.ok) {
    throw new Error(`Failed to update cost: ${res.statusText}`);
  }
  return res.json();
}

export async function revertCost(id) {
  const res = await fetch(`${API_BASE}/costs/revert/${id}`, {
    method: 'POST',
  });
  if (!res.ok) {
    throw new Error(`Failed to revert cost: ${res.statusText}`);
  }
  return res.json();
}

export async function createCost(costData) {
  const res = await fetch(`${API_BASE}/costs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(costData),
  });
  if (!res.ok) {
    throw new Error(`Failed to create cost: ${res.statusText}`);
  }
  return res.json();
}

export async function checkHealth() {
  const res = await fetch(`${API_BASE}/health`);
  return res.ok;
}
