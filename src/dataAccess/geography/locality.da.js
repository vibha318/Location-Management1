const getPool = require("../../utils/sql.utils");

const getLocality = async (req) => {
  const {
    localityId,
    CityName,
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("LocalityID", localityId)
    .input("CityName", CityName)
    .execute("sp_GetLocality");
  return response;
};
const deleteLocality = async (req) => {
  const {
    localityId,
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("LocalityID", localityId)
    .execute("sp_DeleteLocality");
  return response;
};
const InsertLocality = async (req) => {
  const {localityName, CityName} = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("Name", localityName)
    .input("CityName", CityName)
    .execute("sp_InsertLocality");
  return response;
};
const UpdateLocality = async (req) => {
  const { localityId, localityName,localityNewName} = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("id", localityId)
    .input("new_name", localityName)
    .input("new_city_name",localityNewName )
    .execute("LocalityUpdate");
  return response;
};

const localityDa = { getLocality, deleteLocality, InsertLocality, UpdateLocality };
module.exports = localityDa;
