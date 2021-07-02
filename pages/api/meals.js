import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { getSession } from 'next-auth/client';
import { v4 as uuidv4 } from 'uuid';
import mealsApi from "../../lib/db/meals";

const isValidName = name => (name.length > 3 && name.length < 100);
const isValidType = type => (type === 'breakfast' || type === 'main' || type === 'snack');
const isValidKcal = kcal => (kcal > 0 && kcal < 2000);
const isValidMacro = macro => (macro > 0 && macro < 500);

const isValidMeal = meal => {
    return isValidName(meal.name)
        && isValidType(meal.type)
        && isValidKcal(meal.kcal)
        && isValidMacro(meal.protein)
        && isValidMacro(meal.carbs)
        && isValidMacro(meal.fat);
}

const handleGET = async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        const result = await mealsApi.getMeals(session.user.sub);
        res.status(200).json(result);
    } else {
        res.status(401).end();
    }
}

const handlePOST = async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        const userId = session.user.sub;
        const mealId = uuidv4();
        const meal = {
            PK:      `USER#${userId}`,
            SK:      `MEAL#${mealId}`,
            name:    req.body.name.trim(),
            type:    req.body.type.trim(),
            kcal:    parseInt(req.body.kcal),
            protein: parseInt(req.body.protein),
            carbs:   parseInt(req.body.carbs),
            fat:     parseInt(req.body.fat)
        }

        if (isValidMeal(meal)) {
            const data = await mealsApi.addMeal(meal);
            res.status(200).json(data);
        } else {
            res.status(400).end();
        }
    } else {
        res.status(401).end();
    }

}

const handler = async (req, res) => {
    if (req.method === 'GET') {
        handleGET(req, res);
    } else if (req.method === 'POST') {
        handlePOST(req, res);
    } else {
        res.status(404).end();
    }
}

export default handler;