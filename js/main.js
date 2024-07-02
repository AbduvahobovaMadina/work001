const navbar = document.querySelector(".navbar__collection");

function toggleShow() {
    navbar.classList.toggle("show");
}



{
    //1. faqat musbat sonlarni qaytaring 
    function onlyEven(array) {
        return  array.filter((son) => son > 0)
    }
    // console.log(onlyEven([-5, 6, -3, 7, 9]));
}
{
    //2. o'nliklar xonasida raqamni qaytaring 
    function tenth(number) {
        return Math.floor (number / 10 ) % 10
    }
    // console.log(tenth(123));
    // console.log(tenth(529));
}
{
    //3. 1 kirsa true nol kirsa false boshqa har qanday son uchun null qaytaring
    function binary(number) {
        if (number === 0) {
            return `false`
        }if (number === 1) {
            return `true`
        } else {
            return null
        }
    }
    // console.log(binary(1));
    // console.log(binary(0));
    // console.log(binary(29));
}
{
    // 4.agar ikkinchi argument false bo'lsa carta raqami yashirilsin aks holda aksi
    function card(num, bool) {
        if (bool === false) {
          num = num.slice(0, 4) + "*******";
        }
        console.log(num);
    }
    //   console.log(card("9860012106407476", true));
    //   console.log(card("9860012106407476", false));
}

{
    // 5. Passwordni tekshiring uzunligi kamida 8,number bo'lishi, harf bo'lishi
    function checkPassword(password) {
        
    }
    // console.log( checkPassword("12345678") );
    // console.log( checkPassword("12345hello") );
}
{
    // 6.Camel caes qiling
    function camelCase(str) {
        return str.replace(/[-](.)/g, (match, char) => char.toUpperCase());
    }
    // console.log( camelCase("kabab-case"));
    // console.log( camelCase("lorem-ipsum-dollor"));
}

{
    // 7.string ichidagi eng katta va eng kichik sonni toping
    function bigAndSmall(num) {
        const numbers = num.trim().split(` `).map(Number)
        
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

        return {min, max}
    }
    // console.log( bigAndSmall("1 2 3 4 5 "));
    // console.log( bigAndSmall("5 25 33 44"));
}
