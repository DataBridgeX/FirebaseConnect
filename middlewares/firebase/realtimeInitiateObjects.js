import RealTime from "../../models/firebase/RealTimeModel.js";

const realtimeInitiateObjects = async (req, res, next) => {
  try {
    const { path } = req.body;
    const realtimeInstance = new RealTime(path);
    req.realtimeInstance = realtimeInstance;
    next();
  } catch (error) {
    // Handle any errors gracefully
    console.error("Error initializing RealTime instance:", error);
    res.status(500).json({ error: error.message });
  }
};

export default realtimeInitiateObjects;
