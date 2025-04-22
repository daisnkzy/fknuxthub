export function renderOtpTemplate({ logoUrl, code, link, domain }) {
	console.log({
		logoUrl,
		code,
		link,
		domain,
	});
	return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="en">
        <head>
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
          <meta name="x-apple-disable-message-reformatting" />
        </head>
        <div
          style="
            display: none;
            overflow: hidden;
            line-height: 1px;
            opacity: 0;
            max-height: 0;
            max-width: 0;
          "
        >
          Login with this verification link
          <div></div>
        </div>
  
        <body style="background-color: #ffffff">
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="max-width: 37.5em; padding-left: 12px; padding-right: 12px; margin: 0 auto"
          >
            <tbody>
              <tr style="width: 100%">
                <td>
                  <h1
                    style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:24px;font-weight:bold;margin:40px 0;padding:0"
                  >
                    Login
                  </h1>
                  <a
                    href="${link}"
                    style="color:#2754C5;text-decoration:underline;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px;display:block;margin-bottom:16px"
                    target="_blank"
                    >Click here to log in with this verification link</a
                  >
                  <p
                    style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-bottom:14px"
                  >
                    Or, copy and paste this temporary Login code:
                  </p>
                  <code
                    style="
                      display: inline-block;
                      padding: 16px 4.5%;
                      width: 90.5%;
                      background-color: #f4f4f4;
                      border-radius: 5px;
                      border: 1px solid #eee;
                      color: #333;
                    "
                    >${code}</code
                  >
                  <p
                    style="font-size:14px;line-height:24px;margin:24px 0;color:#ababab;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-top:14px;margin-bottom:16px"
                  >
                    If you didn&#x27;t try to login, you can safely ignore this email.
                  </p>
                  <img
                    alt="Logo"
                    height="32"
                    src="${logoUrl}"
                    style="display: block; outline: none; border: none; text-decoration: none"
                    width="30"
                  />
                  <p
                    style="font-size:12px;line-height:22px;margin:16px 0;color:#898989;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-top:12px;margin-bottom:24px"
                  >
                    <a
                      href="${domain}"
                      style="color:#898989;text-decoration:underline;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px"
                      target="_blank"
                      >${domain}</a
                    >
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;
}

export function renderWelcomeTemplate({ email }) {
	return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              background-color: #ffffff;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
              text-align: center;
              border: 1px solid #eee;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
              font-size: 24px;
              color: #2754c5;
              margin-bottom: 16px;
            }
            p {
              font-size: 16px;
              margin: 16px 0;
            }
            .cta {
              font-size: 16px;
              margin-top: 24px;
              padding: 12px 20px;
              background-color: #2754c5;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              display: inline-block;
            }
            .footer {
              font-size: 14px;
              color: #888;
              margin-top: 40px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to the crew, ${email}! 🎉</h1>
            <p>
              We're thrilled you decided to join us! Your inbox is now officially part of the insider circle, where you'll get the best tips, tools, and updates to supercharge your journey.
            </p>
            <p>
              Get ready to build amazing things, discover new ideas, and make your mark. We're here to make it simple and exciting every step of the way.
            </p>
            <p class="footer">
              If you didn’t sign up, no worries—just ignore this email.
            </p>
          </div>
        </body>
      </html>
    `;
}
