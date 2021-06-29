import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const db = new DynamoDBClient({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID_MACROMATE,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MACROMATE,
    },
    region: 'eu-west-1'
});

export default db;
