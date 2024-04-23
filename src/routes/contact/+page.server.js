
import nodemailer from 'nodemailer';
import Contact from '$lib/emails/Contact.svelte';
import { getContactPage } from "$lib/queries/pages"
import { getFormsParams } from '$lib/queries/options.js';

const page = await getContactPage();
const formsParams = await getFormsParams();

export async function load() {
    return {
      page
    }
}

export const actions = {

	contact: async ({request}) => {
		
        let { name, mail, message } = Object.fromEntries(await request.formData());

        const emailHtml = `<html><p>Hello ${name} - ${mail}</p><p>${message}</html>`;

        const smtpParams = {
          host: formsParams.smtp.host,
          port: parseInt(formsParams.smtp.port),
          secure: true,
          auth: {
            user: formsParams.smtp.authUser,
            pass: formsParams.smtp.authPass
          }
        }

        const options = {
          from: 'hello@thomasflorentin.net',
          to: 'hello@thomasflorentin.net',
          subject: 'hello world',
          text: "Plaintext version of the message",
          html: emailHtml
        };

        const transporter = nodemailer.createTransport(smtpParams);

        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");
          }
        });

        transporter.sendMail(options);

        return true;

	},
};
