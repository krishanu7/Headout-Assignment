const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8080;
const app = express();

// Define the directory where data files are stored
const DATA_DIR = "/tmp/data";

// Define an endpoint for handling GET requests to /data
app.get("/data", (req, res) => {
  // Extract the values of 'n' and 'm' from the query parameters
  const fileName = req.query.n;
  const lineNumber = req.query.m;
  // Check if 'n' is provided
  if (!fileName) {
    // If file name is not provided respond as file name is required
    return res.status(400).send("File name is required");
  }

  // Construct the full path to the data file based on the provided file name
  const filePath = path.join(DATA_DIR, `${fileName}.txt`);

  // Check if the file exists at the specified path
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  // If 'm' is provided
  if (lineNumber !== undefined) {
    // Convert the line number to an integer
    const lineNumberInt = parseInt(lineNumber);

    // Check if the provided line number is valid
    if (isNaN(lineNumberInt) || lineNumberInt <= 0) {
      return res.status(400).send("Invalid line number");
    }
    // Read the specified line from the file
    const content = readLine(filePath, lineNumberInt);
    return res.json({ data: content });
  } else {
    //If m is not provied then send the entire content
    const content = fs.readFileSync(filePath, "utf8");
    return res.json({ data: content });
  }
});

// Function to read a specific line from a file
function readLine(filePath, lineNumber) {
  // Read the entire content of the file
  const content = fs.readFileSync(filePath, "utf8");

  // Split the content into an array of lines
  const lines = content.split("\n");

  // Check the specified line number is within the range
  if (lineNumber <= lines.length) {
    // Return the content of the specified line
    return lines[lineNumber - 1];
  } else {
    // If the line number is not within range
    return "Invalid line number";
  }
}

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
