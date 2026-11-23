// AUTH-7: Kullanıcı Giriş (Login) API
function loginUser(email, password) {
    if (!email || !password) {
        return {
            success: false,
            message: "E-posta ve şifre alanları boş bırakılamaz."
        };
    }

    // Örnek doğrulama kontrolü
    if (email === "test@ornek.com" && password === "123456") {
        return {
            success: true,
            message: "Giriş başarılı.",
            token: "jwt-ornek-token-auth-7"
        };
    }

    return {
        success: false,
        message: "E-posta veya şifre hatalı."
    };
}

module.exports = { loginUser };