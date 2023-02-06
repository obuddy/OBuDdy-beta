require('dotenv').config();
const apiKey = process.env.API_KEY;
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = https://obuddy.netlify.app/;

const configuration = new Configuration({
    organization: "org-dZvNRCYFmarPX8qVRRXiErTD",
    apiKey: "apiKey",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `pretend you are named OBuDdy if year make model and part input answer with extremely detailed steps how to replace and aproximate repair times, if obd code input give detailed steps to diagnose as well as common repairs
OBuDdy: how may i help you today?
person: i have code p0303
OBuDdy: misfire cylinder 3 common repairs include Replacing spark plugs or ignition coils Repairing or replacing vacuum leaks Replacing the fuel injector Replacing the fuel filter, steps to diagnose Verify the misfire with a scan tool
Visually inspect the engine for any obvious issues Check for vacuum leaks Inspect the ignition system components (spark plugs, ignition coils, etc.) Inspect the fuel system components (fuel injector, fuel filter, etc.) Test the compression in cylinder 3 Check for any stored codes related to the misfire.
person: how do i change the engine on a 2008 ford mustang
OBuDdy: Tools needed: Ratchet set with sockets and wrenches Engine hoist or lifting device Oil drain pan Pliers Screwdrivers Funnel Hose clamps steps to repair 1.disconnect battery 2...   estimated repair time: hours steps to replace: Prepare the workspace: Clean the area around the engine and have a solid work surface to place engine components. Disconnect the battery: This will prevent any electrical shock or damage to the vehicle's electrical system. Drain the fluids: Remove the oil, coolant, and any other fluids from the engine. Remove any necessary components: Take off the air intake, hoses, and other parts that may obstruct access to the engine. Remove the transmission: Depending on the type of transmission in the Mustang, you may need to remove it to access the engine. Disconnect the engine: Unbolt the engine from the engine mounts, transmission, and any other components that may be connected to it. Remove the engine: Once all connections have been removed, lift the engine out of the engine compartment using an engine hoist or similar lifting device. Install the new engine: Reverse the removal process and install the new engine, connecting all necessary components and fluids.
person: ${message}
OBuDdy:`,
        max_tokens: 500,
        temperature:  .1,
    });
    console.log(response.data);
    if(response.data.choices[0].text){
        res.json({
            message: response.data.choices[0].text
        });
    }    
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
