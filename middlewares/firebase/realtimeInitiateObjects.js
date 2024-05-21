import RealTime from "../../models/firebase/RealTimeModel.js";
const realtimeInitiateObjects = async (req, res, next) => {
  const { path } = req.body;
  const realtimeInstance = new RealTime(path);
  req.realtimeInstance = realtimeInstance;
  next();
};
export default realtimeInitiateObjects;
