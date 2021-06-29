import { ScanCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import db from "./db";

const sortMeals = (a, b) => {
    return a.type > b.type
        ? 1
        : (a.type < b.type
            ? -1
            : (a.name > b.name
                ? 1
                : (a.name < b.name
                    ? -1
                    : 0)));
}

const getMeals = async () => {
    const scanCommand = new ScanCommand({ TableName: 'meals' });
    try {
        const data = await db.send(scanCommand);
        const unmarshalledData = data.Items
            .map(item => unmarshall(item))
            .sort(sortMeals);

        return unmarshalledData;
    } catch (e) {
        console.err(e);
        return e;
    }
};

const addMeal = async meal => {
    const putCommand = new PutItemCommand({ TableName: 'meals', Item: marshall(meal) });
    try {
        const data = await db.send(putCommand);
        return data;
    } catch (e) {
        console.err(e);
        return e;
    }
};

export default { getMeals, addMeal };