import { registerUser } from "./services/register.service.js";

(async () => {
  const user = await registerUser({
    first_name: "Debug",
    last_name: "Test",
    email: "debugtest@example.com",
    password: "password123"
  });

  console.log(user);
  process.exit(0);
})();