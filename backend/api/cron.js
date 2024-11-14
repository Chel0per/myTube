const { resetDaylyInsertions } = require("../services/resetDaylyInsertions.js");

export default async function () {
    resetDaylyInsertions();
}