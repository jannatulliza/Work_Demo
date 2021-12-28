const OTPAuth = require('otpauth')

function generateOtp (issuer, label, secret) {
    let totp = new OTPAuth.TOTP({
        issuer,
        label,
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret // or "OTPAuth.Secret.fromBase32('NB2W45DFOIZA')"
    });

    return totp.generate()
}

module.exports={generateOtp}