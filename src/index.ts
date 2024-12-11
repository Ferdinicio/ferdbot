import * as dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response)=> {
    res.send('Teste Ferd Bot');
});

app.get('/bots', (req: Request, res: Response)=> {
    res.json({
        message: 'Listando todos os bots'
    })
});

app.post('/bots', (req: Request, res: Response) => {
    const { name, phone } = req.body;
    res.json({
        message: `Bot ${name} com telefone ${phone}`
    })
})

app.listen(port, () => console.log(`Servidor rodando em ${port}`));