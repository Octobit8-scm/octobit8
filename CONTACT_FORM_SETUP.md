# Contact Form Setup Guide

## Overview

The contact form has been successfully implemented with backend functionality to send emails. The form captures project inquiries and sends them to your business email while also sending confirmation emails to users.

## Features

- ✅ Complete contact form with all necessary fields
- ✅ Form validation and error handling
- ✅ Email notifications to your business
- ✅ Confirmation emails to users
- ✅ Professional email templates
- ✅ Loading states and success/error messages
- ✅ Form reset after successful submission

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
EMAIL_USER=your-email@zoho.com
EMAIL_PASS=your-zoho-password
```

### 2. Zoho Email Setup

For Zoho, you can use your regular password or generate an App Password for better security:

1. Go to your [Zoho Mail settings](https://mail.zoho.com/cpanel/)
2. Navigate to Security & Privacy
3. Generate an App Password for "Mail" (recommended)
4. Use that App Password in your `.env.local` file

**Important**: The contact form is configured to use Zoho's SSL SMTP settings:

- **Host**: `smtp.zoho.com`
- **Port**: `465` (SSL)
- **Security**: SSL/TLS

### 3. Alternative Email Services

The contact form is currently configured to use Zoho email service. You can modify the API route (`src/app/api/contact/route.ts`) to use other email services if needed:

#### For Gmail:

```typescript
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Outlook/Hotmail:

```typescript
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Custom SMTP:

```typescript
const transporter = nodemailer.createTransport({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Email Templates

The system sends two types of emails:

1. **Business Notification**: Sent to `contact@octobit8.com` with all form details
2. **User Confirmation**: Sent to the user's email with a thank you message

Both emails use professional HTML templates that match your brand colors.

## Form Fields

### Required Fields:

- First Name
- Last Name
- Email Address
- Project Type
- Project Description

### Optional Fields:

- Phone Number
- Company Name
- Website
- Budget Range
- Project Timeline
- Additional Information

## Security Features

- Form validation on both client and server side
- Input sanitization
- Rate limiting (can be added if needed)
- Environment variable protection

## Testing

1. Fill out the form on your contact page
2. Submit the form
3. Check your business email for the notification
4. Check the user's email for the confirmation
5. Verify all form data is captured correctly

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check your environment variables and Zoho email credentials
2. **Form not submitting**: Check browser console for errors
3. **Validation errors**: Ensure all required fields are filled

### Zoho-Specific Issues:

1. **EAUTH Error (Missing credentials)**:

   - Ensure your `.env.local` file has correct `EMAIL_USER` and `EMAIL_PASS`
   - Try using an App Password instead of your regular password
   - Verify your Zoho account has SMTP access enabled

2. **Connection Issues**:
   - Check if your network allows outbound connections to port 465
   - Ensure Zoho SMTP is not blocked by your firewall
   - Try using port 587 with TLS if port 465 doesn't work

### Debug Mode:

Add console logs in the API route to debug email sending issues.

## Customization

- Modify email templates in `src/app/api/contact/route.ts`
- Adjust form validation rules
- Change email styling and branding
- Add additional form fields as needed

## Deployment Notes

- Ensure environment variables are set in your production environment
- Test the form thoroughly before going live
- Consider adding rate limiting for production use
- Monitor email delivery rates

## Support

If you encounter any issues, check the browser console and server logs for error messages.
