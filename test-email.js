// Test Email Configuration for Custom Domain
// Run this with: node test-email.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

console.log('=== Email Configuration Test ===\n');

// Check environment variables
console.log('Environment Variables:');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***@${process.env.EMAIL_USER.split('@')[1]}` : 'NOT SET');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? `${process.env.EMAIL_PASS.substring(0, 3)}***` : 'NOT SET');
console.log('');

const emailDomain = process.env.EMAIL_USER?.split('@')[1]?.toLowerCase();
console.log('Email domain detected:', emailDomain);
console.log('');

// Test multiple SMTP configurations
async function testSMTPConfig(name, config) {
  console.log(`Testing ${name}...`);
  try {
    const transporter = nodemailer.createTransport(config);
    await transporter.verify();
    console.log(`✅ ${name}: Connection successful!`);
    return { success: true, name, config };
  } catch (error) {
    console.log(`❌ ${name} failed:`, error.message);
    return { success: false, name, error: error.message };
  }
}

// Run comprehensive tests
async function runTests() {
  const results = [];
  
  // Test based on email domain
  if (emailDomain === 'gmail.com') {
    results.push(await testSMTPConfig('Gmail SMTP', {
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    }));
  } else if (emailDomain?.includes('zoho')) {
    results.push(await testSMTPConfig('Zoho SMTP', {
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false, ciphers: 'SSLv3' }
    }));
  } else {
    // Test multiple configurations for custom domains
    const smtpConfigs = [
      {
        name: 'Gmail SMTP',
        config: {
          service: 'gmail',
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        }
      },
      {
        name: 'Outlook/Hotmail SMTP',
        config: {
          service: 'outlook',
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        }
      },
      {
        name: 'Yahoo SMTP',
        config: {
          service: 'yahoo',
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        }
      },
      {
        name: 'Custom SMTP (Port 587)',
        config: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
          tls: { rejectUnauthorized: false }
        }
      }
    ];
    
    for (const smtpConfig of smtpConfigs) {
      results.push(await testSMTPConfig(smtpConfig.name, smtpConfig.config));
      console.log(''); // Add spacing between tests
    }
  }
  
  // Summary
  console.log('=== Test Results Summary ===');
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  if (successful.length > 0) {
    console.log(`🎉 ${successful.length} configuration(s) working:`);
    successful.forEach(r => console.log(`  ✅ ${r.name}`));
    
    if (successful.length === 1) {
      console.log(`\nUse this configuration in your contact form API.`);
    }
  }
  
  if (failed.length > 0) {
    console.log(`\n❌ ${failed.length} configuration(s) failed:`);
    failed.forEach(r => console.log(`  ❌ ${r.name}: ${r.error}`));
  }
  
  if (successful.length === 0) {
    console.log('\n❌ All configurations failed. Possible issues:');
    console.log('  1. Incorrect email/password');
    console.log('  2. 2FA enabled (need App Password)');
    console.log('  3. SMTP access disabled');
    console.log('  4. Network/firewall blocking SMTP');
  }
}

runTests().catch(console.error);
