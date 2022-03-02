
document.getElementById('error-massage').style.display = 'none';
const allPhones = () => {
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById("spinner").style.display = 'block';
    document.getElementById('error-massage').style.display = 'none';
    // if (searchText == '!=searchField') {
    //     console.log('No Phones Found');
    // }
    // else {
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.data == null) {
                document.getElementById("spinner").style.display = 'block';
                console.log('No Phone Found');
            }
            else {
                displaySearchResult(data.data)
                document.getElementById("spinner").style.display = "none";
            }
        })
        .catch(error => displayError(error))
};
const displayError = error => {
    document.getElementById('error-massage').style.display = 'block';
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // if (data.length == 0) {

    // }
    data.forEach(data => {
        console.log(data);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
     <div class="card mx-auto p-2 border-3 bg-success">
      <img src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
     <div class="card-body mx-auto">
      <h6 class="card-title">${data.phone_name}</h6>
      <h5>${data.brand}</h5>
      <button onclick="loadPhoneDetail('${data.slug}')" class="btn-secondry text-light btn btn-outline-secondary" type="button" id="detail-btn">Details</button>
     </div>
    </div>
    `;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetail = (phone) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => displayDetailResult(data.data));
};

const displayDetailResult = (info) => {
    detailResult = document.getElementById('phone-details');
    detailResult.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card2 border-2 mx-auto p-4 w-50">
  <img src="${info.image}" class="card-img-top mx-auto p-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name:${info.name}</h5>
    <h6 class="card-title">Release Date:${info.releaseDate}</h6>
    <h5 class="card-title">Brand:${info.brand}</h5>
    <p class="card-text"><small>Storage:${info.mainFeatures.storage}</small><br>
    <p class="card-text"><small>Display Size:${info.mainFeatures.displaySize}</small><br>
    <p class="card-text"><small>Chip Set:${info.mainFeatures.chipSet}</small><br>
    <p class="card-text"><small>Memory:${info.mainFeatures.memory}</small><br>
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>`
    detailResult.appendChild(div);

}



