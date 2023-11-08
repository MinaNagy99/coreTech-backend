export const contactusTemplate = (name, phone, message) => `
<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>رسالة اتصل بنا</title>
    <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        #email-container {
            width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }

        #email-logo {
            text-align: center;
            display: block;
        }

        #email-logo img {
            width: 140px;
        }

        h1 {
            text-align: center;
            color: #ff0000;
        }

        h2.blog-title {
            color: #333;
            text-align: right;
        }

        .blog-text {
            color: #666;
        }

        p {
            text-align: center;
            color: #888;
        }
    </style>
</head>

<body>
    <table id="email-container">
        <tr>
            <td>
                <a id="email-logo" href="https://example.com" title="logo" target="_blank">
                    <img src='https://images.wuzzuf-data.net/files/company_logo/111586021464e4a36d26e46-og.png' alt="logo">
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <h1>رسالة اتصل بنا</h1>
            </td>
        </tr>
        <tr>
            <td>
                <h2 class="blog-title">تفاصيل الرسالة:</h2>
                <p class="blog-text">
                    الإسم: ${name} <br>
                    رقم الهاتف: ${phone} <br>
                    الرسالة: ${message}
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <p>&copy; ${new Date().getFullYear()} اسم موقعك. جميع الحقوق محفوظة.</p>
            </td>
        </tr>
    </table>
</body>

</html>
`;
