// AUTH-8: Şifre Sıfırlama API
function resetPassword(email, newPassword) {
    if (!email || !newPassword) {
        return {
            success: false,
            message: "E-posta ve yeni şifre alanları zorunludur."
        };
    }

    if (newPassword.length < 6) {
        return {
            success: false,
            message: "Yeni şifre en az 6 karakter olmalıdır."
        };
    }

    return {
        success: true,
        message: `${email} adresi için şifre başarıyla güncellendi.`
    };
}

module.exports = { resetPassword };