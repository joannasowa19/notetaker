// Dependencies
const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.PORT || 3000;

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
