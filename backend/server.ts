import app from "./app.js";

const PORT = Number(process.env.BACKEND_PORT) || 5400;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});