const getPool = require("../../utils/sql.utils");

const getCity = async (req) => {
  const {
    LocalityId,
    cityName,
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("LocalityID", LocalityId)
    .input("CityName", cityName)
    .execute("sp_GetCity");
  return response;
};
const deleteCity = async (req) => {
  const {
    cityId,
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("CityID", cityId)
    .execute("sp_DeleteCity");
  return response;
};
const InsertCity = async (req) => {
  const { cityName, stateName } = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("Name", cityName)
    .input("StateName", stateName)
       .execute("sp_InsertCity");
  return response;
};
const updateCity = async (req) => {
  const { cityId, cityName, stateName} = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("CityID", cityId)
    .input("Name", cityName)
    .input("StateName", stateName)
    .execute("sp_UpdateCity");
  return response;
};

const cityDa = { getCity, deleteCity, InsertCity, updateCity };
module.exports = cityDa;
