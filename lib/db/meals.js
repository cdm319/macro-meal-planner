import { ScanCommand, QueryCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
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

const getMeals = async (userId) => {
    const queryCommand = new QueryCommand({
        TableName: 'macromate',
        KeyConditionExpression: 'PK = :u',
        ExpressionAttributeValues: {
            ":u": { S: `USER#${userId}` }
        }
    });

    try {
        const data = await db.send(queryCommand);
        const unmarshalledData = data.Items
            .map(item => unmarshall(item))
            .sort(sortMeals);

        return unmarshalledData;
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};

const addMeal = async meal => {
    const putCommand = new PutItemCommand({ TableName: 'macromate', Item: marshall(meal) });
    try {
        const data = await db.send(putCommand);
        return data;
    } catch (e) {
        console.error(e);
        throw new Error(e);
    }
};

export default { getMeals, addMeal };