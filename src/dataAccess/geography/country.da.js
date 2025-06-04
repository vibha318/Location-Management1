const getPool = require("../../utils/sql.utils");

const getCountry = async (req) => {
  const {
    CountryID,
    CountryName,
  } = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("CountryID", CountryID)
    .input("CountryName", CountryName)
    .execute("sp_GetCountry");
    
  return response;
};
const deleteCountry = async (req) => {
  const { CountryID} = req.body;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("CountryID", CountryID)
    .execute("sp_DeleteCountry");
  return response;
};
const InsertCountry = async (req) => {
  const {countryName} = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("Name", countryName)
    .execute("sp_InsertCountry");
  return response;
};
const updateCountry = async (req) => {
  const { countryId, countryName } = req.body;
  const reqUserId = req.user.userId;
  const pool = await getPool();
  const response = await pool
    .request()
    .input("CountryID", countryId)
    .input("Name", countryName)
    .execute("sp_UpdateCountry");
  return response;
};

const countryDa = { getCountry, deleteCountry, InsertCountry, updateCountry };
module.exports = countryDa;
