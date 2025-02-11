/**
 * Decorate SEO title.
 * @param {string} title
 */
export default function (title) {
	return `${title} – Website`;
}


/** Dispatch event on click outside of node */
export function clickOutside(node) {
  
	const handleClick = event => {
	  if (node && !node.contains(event.target) && !event.defaultPrevented) {
		node.dispatchEvent(
		  new CustomEvent('click_outside', node)
		)
	  }
	}
  
	  document.addEventListener('click', handleClick, true);
	
	return {
	  destroy() {
		document.removeEventListener('click', handleClick, true);
	  }
	}
}


import nodemailer from 'nodemailer';
import { getFormsParams } from '$lib/queries/options.js';
  
const formsParams = await getFormsParams();

export async function formProcess ( request ) {

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

}