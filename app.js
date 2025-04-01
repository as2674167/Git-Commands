let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector('#btn');
let img = document.querySelector('img');

btn.addEventListener("click", async () => {
let link = await showImage();
console.log(link);
img.setAttribute("src", link);
});

async function showImage()
{
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch (err) {
       return "No Image";
    }
}