fetch("http://localhost:5000/api/contacts/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    message: "Hi there"
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
