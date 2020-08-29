"use strict";

module.exports = function (data) {
  var dataSplit = data.map(function (str) {
    return str.split("/");
  });
  dataSplit.sort();
  var menuData = [{
    title: dataSplit[0][0],
    data: []
  }];

  for (var i = 0; i < dataSplit.length; i++) {
    var lastMenuData = menuData[menuData.length - 1];
    var currentMenuData = dataSplit[i];

    if (lastMenuData.title === currentMenuData[0] && currentMenuData.length === 2) {
      lastMenuData.data.push(currentMenuData[1]);
    } else if (currentMenuData.length === 2) {
      menuData.push({
        title: currentMenuData[0],
        data: [currentMenuData[1]]
      });
    }
  }

  return menuData;
};