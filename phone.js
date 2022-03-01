
document.getElementById('error-massage').style.display = 'none';
const allPhones = () => {
    const searchField = document.getElementById('search-box');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-massage').style.display = 'none';
    // if (searchText == '') {

    // }
    // else {
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
        .catch(error => displayError(error));
    // }
    const displayError = error => {
        document.getElementById('error-massage').style.display = 'block';
    }
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
         <div class="card w-100 mx-auto">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${data.phone_name}</h6>
                    <h5>${data.brand}</h5>
                    <button onclick="loadPhoneDetail('${data.slug}')" class="btn-success text-light btn btn-outline-secondary" type="button" id="detail-btn">Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetail = () => {
    const detailPart = document.getElementById('detail-btn');
    // console.log(searchText);
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;


    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailResult(data.mainFeatures[0]));
}

const displayDetailResult = mainFeatures => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    mainFeatures.forEach(mainFeature => {
        console.log(data.mainFeatures);
        if (data.length == 0) {

        }

        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        < img src = "${data.image}" class="card-img-top w-50 mx-auto" alt = "..." >
            <div class="card-body">
                <h6 class="card-title">${data.phone_name}</h6>
                <h5>${data.brand}</h5>
                <p class="card-text">${data.mainFeatures}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                `;
        phoneDetails.appendChild(div);
    })
}