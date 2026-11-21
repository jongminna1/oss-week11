export async function getForecast(city) {
  const res = await fetch(`/api/forecast?city=${encodeURIComponent(city)}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error);
  return data;
}
