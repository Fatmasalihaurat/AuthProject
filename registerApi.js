// AUTH-6: Kullanıcı Kayıt (Register) API
function registerUser(fullName, email, password) {
    if (!fullName || !email || !password) {
        return {
            success: false,
            message: "Tüm alanların doldurulması zorunludur."
        };
    }

    if (password.length < 6) {
        return {
            success: false,
            message: "Şifre en az 6 karakter olmalıdır."
        };
    }

    const newUser = {
        id: Date.now(),
        fullName: fullName,
        email: email,
        createdAt: new Date().toISOString()
    };

    return {
        success: true,
        message: "Kullanıcı kaydı başarıyla tamamlandı.",
        user: newUser
    };
}

module.exports = { registerUser };