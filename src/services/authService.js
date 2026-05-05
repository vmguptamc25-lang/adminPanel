export const loginUser = async (credentials) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: credentials.username, // keep this
      password: credentials.password
    })
  });

  const data = await res.json();
  console.log("API response:", data);

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};