const db = require("../../../data/db-config");

const getEvents = () => {
  return db("events");
};

const createEvent = async (newEvent) => {
  const [id] = await db("events").insert(newEvent);
  return db("events").where("event_id", id).first();
};

module.exports = {
    getEvents,
    createEvent
};
