const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();    // fetch the .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// sends the responses to email via emailjs
app.post('/send-email', async (req, res) => {
    const { responses } = req.body;

    if (!responses) {
        res.status(400).send('No responses found!');
    }

    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceID ||
        !templateID ||
        !publicKey
    ) {
        return res.status(500).json({ success: false, error: 'No .env variables found' })
    }

    try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
              message: JSON.stringify(responses, null, 2),
            }
        });

        return res.status(200).json({ success: true, message:'Email sent successfully!' });
    } catch (error) {
        console.log('Error sending email:', error.response?.data || error.message);
        return res.status(500).json({ success: false, error: 'Server error.' });
    }
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});