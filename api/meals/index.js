import fs from 'fs';
import parse from 'csv-parse/lib/sync.js';

const getMeals = () => {
    const fileContent = fs.readFileSync(process.cwd() + '/data/meals.csv');
    return parse(fileContent, {columns: true});
};

export default { getMeals };