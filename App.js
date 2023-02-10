// Import the demo class
const { DemoFlight } = require("./demo-flight");

// Create a demo class instance
// Creates the authenticated HTTP client
let demo = new DemoFlight();

// Create a pass class
demo.createClass("3388000000022198169", "flight5");

// Update a pass class
demo.updateClass("3388000000022198169", "flight5");

// Patch a pass class
// demo.patchClass("3388000000022198169", "flight5");

// Add a message to a pass class
//demo.addClassMessage("issuer_id", "class_suffix", "header", "body");

// Create a pass object
demo.createObject("3388000000022198169", "flight5", "think5");

// Update a pass object
demo.updateObject("3388000000022198169", "think5");

// Patch a pass object
//demo.patchObject("3388000000022198169", "think5");

// Add a message to a pass object
//demo.addObjectMessage("issuer_id", "object_suffix", "header", "body");

// Expire a pass object
// demo.expireObject("3388000000022198169", "think5");

// Generate an Add to Google Wallet link that creates a new pass class and object
demo.createJwtNewObjects("3388000000022198169", "flight5", "think5");

// Generate an Add to Google Wallet link that references existing pass object(s)
demo.createJwtExistingObjects("3388000000022198169");

// Create pass objects in batch
//demo.batchCreateObjects("3388000000022198169", "flight5");
