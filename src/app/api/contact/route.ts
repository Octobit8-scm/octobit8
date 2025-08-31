import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Debug: Check environment variables
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      emailUserLength: process.env.EMAIL_USER?.length || 0,
      emailPassLength: process.env.EMAIL_PASS?.length || 0
    });

    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      projectType,
      budget,
      timeline,
      message,
      additionalInfo
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

              // Create email transporter - try multiple services based on email domain
          let transporter;
          const emailDomain = process.env.EMAIL_USER?.split('@')[1]?.toLowerCase();
          
          console.log('Email domain detected:', emailDomain);
          
          if (emailDomain === 'gmail.com') {
            // Use Gmail SMTP
            transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
              },
            });
            console.log('Using Gmail SMTP service');
          } else if (emailDomain?.includes('zoho')) {
            // Use Zoho SMTP
            transporter = nodemailer.createTransport({
              host: 'smtp.zoho.com',
              port: 587,
              secure: false,
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
              },
              tls: {
                rejectUnauthorized: false,
                ciphers: 'SSLv3'
              }
            });
            console.log('Using Zoho SMTP service');
          } else {
            // Try common SMTP configurations for custom domains
            const smtpConfigs = [
              {
                name: 'Outlook/Hotmail',
                config: {
                  service: 'outlook',
                  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
                }
              },
              {
                name: 'Yahoo',
                config: {
                  service: 'yahoo',
                  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
                }
              },
              {
                name: 'Custom SMTP (Port 587)',
                config: {
                  host: 'smtp.gmail.com', // Try Gmail as relay
                  port: 587,
                  secure: false,
                  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
                  tls: { rejectUnauthorized: false }
                }
              }
            ];
            
            let connectionSuccess = false;
            for (const smtpConfig of smtpConfigs) {
              try {
                console.log(`Trying ${smtpConfig.name}...`);
                transporter = nodemailer.createTransport(smtpConfig.config);
                await transporter.verify();
                console.log(`✅ ${smtpConfig.name} connection successful!`);
                connectionSuccess = true;
                break;
              } catch (error) {
                const errorMessage = error && typeof error === 'object' && 'message' in error 
                  ? (error as { message: string }).message 
                  : 'Unknown error';
                console.log(`❌ ${smtpConfig.name} failed:`, errorMessage);
              }
            }
            
            if (!connectionSuccess) {
              throw new Error('All SMTP configurations failed. Please check your email provider settings.');
            }
          }

          // Verify connection configuration
          if (!transporter) {
            throw new Error('Failed to create email transporter');
          }
          await transporter.verify();
          console.log('Email connection verified successfully');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@octobit8.com', // Your business email
      subject: `New Contact Form Submission - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${website ? `<p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>` : ''}
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            ${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          ${additionalInfo ? `
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Additional Information</h3>
            <p style="white-space: pre-wrap;">${additionalInfo}</p>
          </div>
          ` : ''}

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              This submission was received from the Octobit8 website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Octobit8',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Thank you for contacting Octobit8!
          </h2>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>Thank you for reaching out to us. We have received your inquiry about <strong>${projectType}</strong> and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
            <ul style="color: #374151;">
              <li>Our team will review your requirements</li>
              <li>We'll schedule a consultation call if needed</li>
              <li>You'll receive a detailed proposal</li>
              <li>We'll discuss next steps and timeline</li>
            </ul>
          </div>

          <p>If you have any urgent questions, feel free to call us at <strong>+91-9923706784</strong>.</p>
          
          <p>Best regards,<br>
          <strong>The Octobit8 Team</strong></p>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Octobit8</strong><br>
              DevOps, Cloud & AI Solutions<br>
              Email: contact@octobit8.com<br>
              Phone: +91-9923706784
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Form submitted successfully! Check your email for confirmation.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit form. Please try again or contact us directly.';
    
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'EAUTH') {
        errorMessage = 'Email authentication failed. Please check your email credentials.';
      } else if (error.code === 'ECONNECTION') {
        errorMessage = 'Connection to email server failed. Please try again later.';
      } else if (error.code === 'ETIMEDOUT') {
        errorMessage = 'Email server connection timed out. Please try again later.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
