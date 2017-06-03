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

function aoaToSheet(aoa) {
  const data = {};

  let minRow = -1;
  let minColumn = -1;
  let maxRow = -1;
  let maxColumn = -1;

  aoa.forEach((row, rowIndex) => {
    if (row) {
      row.forEach((column, colIndex) => {
        const cell = parseCell({ row: rowIndex + 1, column: colIndex + 1 });
        if (column) {
          if (minRow > rowIndex || minRow < 0) minRow = rowIndex;
          if (minColumn > colIndex || minColumn < 0) minColumn = colIndex;
          if (maxRow < rowIndex || maxRow < 0) maxRow = rowIndex;
          if (maxColumn < colIndex || maxColumn < 0) maxColumn = colIndex;
          data[cell] = column;
        }
      });
    }
  });

  if (minRow >= 0 && minColumn >= 0 && maxRow >= 0 && maxColumn >= 0) {
    const minCell = parseCell({ row: minRow + 1, column: minColumn + 1 });
    const maxCell = parseCell({ row: maxRow + 1, column: maxColumn + 1 });
    if (minCell === maxCell) {
      data['!ref'] = minCell;
    } else {
      data['!ref'] = `${minCell}:${maxCell}`;
    }
  }

  return data;
}


module.exports.sheetToAoa = sheetToAoa;
module.exports.aoaToSheet = aoaToSheet;
