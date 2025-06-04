const getPool = require("../../utils/sql.utils");

const getState = async (req) => {
  const {
    stateId,
    stateName,
  
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("StateID", stateId)
    .input("StateName", stateName)
    .execute("sp_GetState");
  return response;
};
const deleteState = async (req) => {
  const { stateId } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("StateID", stateId)
    .execute("sp_DeleteState");
  return response;
};
const InsertState = async (req) => {
  const { stateName} = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("Name", stateName)
    .execute("sp_InsertState");
  return response;
};
const updateState = async (req) => {
  const { stateId, stateName } = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("StateID", stateId)
    .input("Name", stateName)
    .execute("sp_UpdateState");
  return response;
};

const stateDa = { getState, deleteState, InsertState, updateState };
module.exports = stateDa;
