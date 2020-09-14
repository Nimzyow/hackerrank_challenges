module.exports = (data) => {
    const dataSplit = data.map((word) => word.split("/"));
    dataSplit.sort();
    let returnedData = [
        {
            title: dataSplit[0][0],
            data: [dataSplit[0][1]],
        },
    ];
    for (let i = 1; i < dataSplit.length; i++) {
        const lastDataMerged = returnedData[returnedData.length - 1];
        const currentDataToCompare = dataSplit[i];
        if (
            lastDataMerged.title === currentDataToCompare[0] &&
            currentDataToCompare.length === 2
        ) {
            returnedData[returnedData.length - 1].data.push(
                currentDataToCompare[1],
            );
        } else if (currentDataToCompare.length === 2) {
            returnedData.push({
                title: currentDataToCompare[0],
                data: [currentDataToCompare[1]],
            });
        }
    }

    return returnedData;
};
