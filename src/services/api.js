export async function fetchMainPage() {
  const response = await fetch('http://localhost:8000/main');
  const data = await response.json();
  return data;
}
