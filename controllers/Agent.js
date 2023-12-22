const Agent = require("../models/Agent");
const catchAsync = require("../Utils/catchAsync");

exports.createAgent = catchAsync(async (req, res, next) => {
  const { name, voice_id, prompt, sub_prompt, greeting } = req.body;

  const createdAgent = new Agent({
    name,
    voice_id,
    prompt,
    sub_prompt,
    greeting,
  });
  await createdAgent.save();

  res.status(201).json({ createdAgent });
});

exports.getAllAgents = catchAsync(async (req, res, next) => {
  const allAgents = await Agent.find({});

  res.json({
    allAgents,
  });
});

exports.updateAgent = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const { name, prompt, sub_prompt } = req.body;

  // Find the agent by ID
  const agent = await Agent.findById(id);
  if (!agent) {
    return res.status(404).json({ error: "Agent not found" });
  }
  // Update the agent data
  agent.name = name;
  agent.prompt = prompt;
  agent.sub_prompt = sub_prompt;

  // Save the updated agent
  const updatedAgent = await agent.save();

  res.json(updatedAgent);
});

exports.deleteAgent = catchAsync(async (req, res, next) => {
  const { id } = req.params; // Assuming you're passing the product ID in the request parameters

  // Find the product by ID and delete it
  const deletedAgent = await Agent.findByIdAndDelete(id);

  if (!deletedAgent) {
    return res.status(404).json({ error: "Agent not found" });
  }

  res.json({ message: "Agent deleted successfully" });
});
