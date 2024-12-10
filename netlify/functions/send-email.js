import Mailjet from 'node-mailjet';

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  // Parse the incoming request body
  const body = JSON.parse(event.body);

  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields' }),
    };
  }

  // Initialize Mailjet with environment variables
  const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL, // Your verified sender email
            Name: 'Your Website',
          },
          To: [
            {
              Email: process.env.RECIPIENT_EMAIL, // Where you want to receive emails
              Name: 'Site Owner',
            },
          ],
          Subject: `New Message from ${body.name}`,
          TextPart: `
            Name: ${body.name}
            Email: ${body.email}
            Message: ${body.message}
          `,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong> ${body.message}</p>
          `,
        },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending email',
        error: error.message,
      }),
    };
  }
};
