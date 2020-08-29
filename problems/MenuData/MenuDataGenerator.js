module.exports = (data) => {
    const dataSplit = data.map((str) => str.split("/"))
    dataSplit.sort()
    const menuData = [{
        title: dataSplit[0][0],
        data: []
    }]

    for (let i = 0; i < dataSplit.length; i++) {
        const lastMenuData = menuData[menuData.length - 1]
        const currentMenuData = dataSplit[i]
        if (lastMenuData.title === currentMenuData[0] && currentMenuData.length === 2) {
            lastMenuData.data.push(currentMenuData[1])
        } else if (currentMenuData.length === 2) {
            menuData.push({
                title: currentMenuData[0],
                data: [currentMenuData[1]]
            })
        }

    }
    return menuData
}