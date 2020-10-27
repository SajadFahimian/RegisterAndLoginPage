function randInt(min, max) {
    number = Math.ceil(Math.random() * (max - min)) + min;
    return number;
};

function randChar() {
    list_char = ['a', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'w', 'z', 'x'];
    char = list_char[randInt(0, 27)];
    return char;
};

function create_captcha() {
    list = [];
    for (var i = 0; i < 3; i++) {
        list.push(randChar());
        list.push(String(randInt(0, 9)));
    }
    str = list.join(' ');
    document.getElementById('captchatext1').value = str.toUpperCase();
    document.getElementById('captchatext2').value = str.toUpperCase();
};
$('body').ready(function() {
    create_captcha();

});

function rigister() {
    if (document.getElementById("password1").value && document.getElementById("enterpassword").value && document.getElementById("username").value && document.getElementById("email").value && document.getElementById("entercaptch1").value) {
        if (document.getElementById("captchatext1").value.replace(/ /g, "").toLowerCase() == document.getElementById("entercaptch1").value.replace(/ /g, "").toLowerCase()) {
            $("#captchaerror1").css({ "display": "none" });
            if (document.getElementById("password1").value == document.getElementById("enterpassword").value) {
                $("#passworderror").css({ "display": "none" });
                if (/.+@.+\..+/.test(document.getElementById("email").value)) {
                    $("#emailerror").css({ "display": "none" });
                    $("#rigisterForm").submit();
                    $("#rigisterForm").css({ "display": "none" });
                    $("#rigisterres").css({ "display": "block" });
                } else {
                    $("#emailerror").css({ "display": "block" });
                    document.getElementById("email").value = "";
                    create_captcha();
                };

            } else {
                $("#passworderror").css({ "display": "block" });
                document.getElementById("password1").value = "";
                document.getElementById("enterpassword").value = "";
                create_captcha();
            };

        } else {
            $("#captchaerror1").css({ "display": "block" });
            create_captcha();
        }

    } else {

        create_captcha();
        $("#captchaerror1").css({ "display": "none" });
        $("#passworderror").css({ "display": "none" });
        $("#emailerror").css({ "display": "none" });
        alert("You can not leave fields blank");
    };


};

function cancel() {
    $("#rigisterForm").css({ "display": "none" });
    $("#loginForm").css({ "display": "none" });
    $("#navbar").css({ "display": "block" });

};

function rigister_block() {
    $("#rigisterForm").css({ "display": "block" });
    $("#loginForm").css({ "display": "none" });
    $("#navbar").css({ "display": "none" });
};

function login_block() {
    $("#rigisterForm").css({ "display": "none" });
    $("#loginForm").css({ "display": "block" });
    $("#navbar").css({ "display": "none" });
};

function login() {
    if (document.getElementById("password2").value && document.getElementById("usernameoremail").value && document.getElementById("entercaptch2").value) {
        if (document.getElementById("captchatext2").value.replace(/ /g, "").toLowerCase() == document.getElementById("entercaptch2").value.replace(/ /g, "").toLowerCase()) {
            $("#captchaerror2").css({ "display": "none" });
            $("#loginForm").submit();
            $("#loginForm").css({ "display": "none" });
            $("#loginres").css({ "display": "block" });
        } else {
            $("#captchaerror2").css({ "display": "block" });
            create_captcha();
        }
    } else {

        create_captcha();
        $("#captchaerror2").css({ "display": "none" });
        alert("You can not leave fields blank");
    };
};