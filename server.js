const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(cors());
app.use(express.json());

const db = knex({
    client: 'mysql',
    connection: {
        host: '192.168.0.128',
        user: 'chananate',
        password: 'Chana@2540',
        database: 'temp_pook',
        ssl: { rejectUnauthorized: false }
    }
});

app.get('/', async (req, res) => {
    try {
        // const data = await db.select('*').from('temp_pook.budget_job_detail_edit2').where('office_name', '2570');
        const data = [{ id: 1, name: 'Sample Data' },{}]; // Placeholder for now
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});