import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const db = new DynamoDBClient({region: 'eu-west-1'});

export default db;
