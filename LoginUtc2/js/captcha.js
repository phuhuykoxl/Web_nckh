(function(){
    const fonts= ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha() {
        let value = btoa(Math.random()* 1000000);
        value = value.substring(0,4 + Math.random()*5);
        captchaValue= value;
    }
    function setCapcha() {
        let html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span style='transform: rotate(${rotate}deg); font-family: ${fonts[font]}'>
                ${char}
            </span>`;
        }).join("");
        document.querySelector(".login100-form .input-prepend .preview").innerHTML = html;
    } 
    function initCaptcha() {
        document.querySelector(".login100-form .input-prepend .refresh").addEventListener("click",function() {
            generateCaptcha();
            setCapcha();
        });
        generateCaptcha();
        setCapcha();
    }
    initCaptcha();
})();