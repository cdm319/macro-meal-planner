import db from '../../lib/db/db';
import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const handler = async (req, res) => {
    const scanCommand = new ScanCommand({ TableName: 'meals' });
    try {
        const data = await db.send(scanCommand);
        const items = data.Items;

        const unmarshalledData = items.map(item => unmarshall(item));

        res.status(200).json(unmarshalledData);
    } catch (e) {
        res.status(500).json(e);
    }
}

export default handler;