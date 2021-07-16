import { SiteClient } from 'datocms-client';

export default async function requestReceiver (req, res){
    if(req.method === 'POST'){
        const TOKEN = '139ac0a36d9ab8821715f2fde76519';

        const client = new SiteClient(TOKEN);
        console.log('foi')

        const record = await client.items.create({
            itemType: "970943",
            ...req.body
        })
        res.json({
            createdRegister: record
        })
        return res.status(200);
    }
    res.status(404);
    }
