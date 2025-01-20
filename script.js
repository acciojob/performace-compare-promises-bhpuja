// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
async function fetchUsingPromiseAll() {
  const start = performance.now();
  await Promise.all(apiUrls.map((url) => fetch(url).then((res) => res.json())));
  const end = performance.now();
  return end - start;
}

async function fetchUsingPromiseAny() {
  const start = performance.now();
  await Promise.any(apiUrls.map((url) => fetch(url).then((res) => res.json())));
  const end = performance.now();
  return end - start;
}

document.getElementById("compare").addEventListener("click", async () => {
  const outputAll = document.getElementById("output-all");
  const outputAny = document.getElementById("output-any");

  // Reset table data
  outputAll.textContent = "Loading...";
  outputAny.textContent = "Loading...";

  try {
    // Measure Promise.all performance
    const timeAll = await fetchUsingPromiseAll();
    outputAll.textContent = `${timeAll.toFixed(2)} ms`;

    // Measure Promise.any performance
    const timeAny = await fetchUsingPromiseAny();
    outputAny.textContent = `${timeAny.toFixed(2)} ms`;
  } catch (error) {
    console.error("Error fetching data:", error);
    outputAll.textContent = "Error";
    outputAny.textContent = "Error";
  }
});
// You can write your code here
