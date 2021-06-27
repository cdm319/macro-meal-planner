import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import db from "./db";

const getMeals = async () => {
    const scanCommand = new ScanCommand({ TableName: 'meals' });
    try {
        const data = await db.send(scanCommand);
        const unmarshalledData = data.Items.map(item => unmarshall(item));

        return unmarshalledData;
    } catch (e) {
        return {};
    }
};

export default { getMeals };