// CRATING A MAIL SENDING NETLIFY FUNCTION
import { Mailjet } from 'node-mailjet';
const mailjet = Mailjet.connect(import.meta.env.MAILJET_API, import.meta.env.MAILJET_SECRET);

export async function sendMail(data) {
    console.log(data);
}
export const config = {
    path: '/api/send-mail'
};