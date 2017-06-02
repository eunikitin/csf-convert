import parseCell from 'excel-cell-parser';


function sheetToAoa(data) {
  const aoa = [];

  Object.keys(data).forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(data, item) && item !== '!ref') {
      const cell = parseCell(item);
      if (!aoa[cell.row - 1]) {
        aoa[cell.row - 1] = [];
      }

      aoa[cell.row - 1][cell.column - 1] = data[item];
    }
  });
  return aoa;
}


module.exports.sheetToAoa = sheetToAoa;
