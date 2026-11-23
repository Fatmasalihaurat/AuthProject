// AUTH-9: Modül Entegrasyon Testleri
const { registerUser } = require('./registerApi');
const { loginUser } = require('./loginApi');
const { resetPassword } = require('./resetPasswordApi');

function runIntegrationTests() {
    console.log("--- Entegrasyon Testleri Başlatılıyor (AUTH-9) ---");

    const regResult = registerUser("Test Kullanıcı", "test@ornek.com", "123456");
    console.log("1. Kayıt Testi:", regResult.success ? "BAŞARILI" : "HATALI");

    const loginResult = loginUser("test@ornek.com", "123456");
    console.log("2. Giriş Testi:", loginResult.success ? "BAŞARILI" : "HATALI");

    const resetResult = resetPassword("test@ornek.com", "yeniSifre123");
    console.log("3. Şifre Sıfırlama Testi:", resetResult.success ? "BAŞARILI" : "HATALI");
}

runIntegrationTests();