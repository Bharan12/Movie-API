function submit() {


    var movie = document.getElementById("name").value;
    let container = document.getElementById("container");

    var Data;
    async function getdata() {
        try {
            container.innerHTML = null;
            let res = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=8a284514`);
            data = await res.json();
            Data = data.Search;
            appendproduct(Data);

            console.log(Data);

        }
        catch (error) {
            console.log(error);
            let image = document.createElement("img");
            image.src = "https://cdn.vectorstock.com/i/1000x1000/87/33/blue-background-with-window-message-error-oops-vector-16718733.webp"
            container.append(image)
        }
    }
    getdata()

    let url = "https://fakestoreapi.com/products"

    let mypromise = fetch(`https://www.omdbapi.com/?s=${movie}&apikey=8a284514`);
    var Data;

    mypromise.then(function (response) {

        return response.json();

    })
        .then(function (response) {
            container.innerHTML = null;
            Data = response.Search
            appendproduct(Data);
            console.log(Data)
        });
    mypromise.catch(function (error) {
        console.log(error)
    })

    function appendproduct(Data) {
        Data.forEach(function (el) {


            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = el.Poster;
            let title = document.createElement("p");
            title.innerText = el.Title;

            let Type = document.createElement("p");
            Type.innerText = el.Type;

            let Year = document.createElement("p");
            Year.innerText = el.Year;



            div.append(img, title, Year, Type);
            container.append(div);
        });

    }

}