const section = document.createElement("section");

document.body.setAttribute("class","bg-dark d-flex justify-content-center align-items-center")

document.body.appendChild(section);

async function getquotes(){
    try {
        const res = await fetch("https://web-series-quotes-api.deta.dev/quote/");
        const data =await res.json();
        // console.log(data);
        section.innerHTML+=`
        <div class="quote-cont text-dark bg-warning m-5 p-3">
        <h4>Author: ${data[0].author} <span><i class="bi bi-emoji-laughing-fill"></i></sapn></h4>
        <p>Quote: <br>${data[0].quote}</p>
        <h6 class="text-center">---- Web Series: ${data[0].series}</h6>
        <button class="btn btn-primary" onclick="window.location.reload()">Click Here For More</button>
        </div>
        `
    } catch (error) {
        alert("Side Is Under Maintainance.")
    }
}
getquotes();