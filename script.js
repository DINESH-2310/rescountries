var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
row.classList.add("row", "m-3");
container.append(row);

var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((data1) => foo(data1));


function foo(data1) {
  for (var i = 0; i < data1.length; i++) {
    // console.log(data1[i]);
    row.innerHTML += `
  <div class="col-lg-4 md-6">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem; id="card">
 <h2 class="card-title">${data1[i].name}</h2>
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Capital: ${data1[i].capital}</h5>
  <h5 class="card-title">Region: ${data1[i].region}</h5>
  <h5 class="card-title">Country code: ${data1[i].cioc}</h5>
  <a href="#" class="btn btn-primary onclick="">Click to weather:</a>
  </div >
</div > `;
    document.body.append(container);
  }
};