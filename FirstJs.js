const csv = require('csv-parser');
const fs = require('fs');



async function toReadExcel(fileName) {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(fileName)
            .on('error', error => {
                reject(error);
            })
            .pipe(csv({}))
            .on('data', (data) => {
                results.push(data)
                // console.log(data);
                // return results;
            })
            .on('end', () => {
                resolve(results);
            });
    });
}

async function GetData(fileName) {

        const data = await toReadExcel(fileName);
        return data;
       catch (error) {
        return error;
    }
}

GetData('userGroup.csv');
