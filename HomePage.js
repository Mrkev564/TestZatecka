function profileInfo(cislo) {
    let button1 = document.getElementById("profilebutton1");
    let button2 = document.getElementById("profilebutton2");
    let button3 = document.getElementById("profilebutton3");
    let text1 = "\"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.\”";
    let text2 = '"From invoicing to tax prep, Noble Finance has been a game-changer for my freelance business.”';
    let text3 = '"I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.”';
    let profileText = document.getElementById("profileInfo");
    let avatar = document.getElementById("avatar");
    let jmeno = document.getElementById("jmeno");
    let vek = document.getElementById("vek");
    let jmeno1 = "Taylor M.";
    let jmeno2 = "Markus N.";
    let jmeno3 = "Margaret L.";
    let vek1 = "28 years old";
    let vek2 = "31 years old";
    let vek3 = "24 years old";
    if(cislo == 1)
    {
        setActive(button1);
        setDefault(button2);
        setDefault(button3);
        profileText.textContent = text1;
        avatar.src = "ProfilePictures/Image1.png";
        jmeno.textContent = jmeno1;
        vek.textContent = vek1;
    }
    else if (cislo == 2)
    {
        setActive(button2);
        setDefault(button1);
        setDefault(button3);
        profileText.textContent = text2;
        avatar.src = "ProfilePictures/Image2.png";
        jmeno.textContent = jmeno2;
        vek.textContent = vek2;
    }
    else if (cislo==3)
    {
        setActive(button3);
        setDefault(button1);
        setDefault(button2);
        profileText.textContent = text3;
        avatar.src = "ProfilePictures/Image3.png";
        jmeno.textContent = jmeno3;
        vek.textContent = vek3;
    }
}
function setDefault(button)
{
    button.style.backgroundColor = "white";
    button.style.borderRadius = "0px";
    button.style.color = "var(--green)";
}
function setActive(button)
{
    button.style.backgroundColor = "var(--paragraph)";
    button.style.borderRadius = "7px";
    button.style.color = "white";
}