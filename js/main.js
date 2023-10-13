// api all data call on this functions

const lodePhone2 = async(searchText, isShow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const getData = data.data;
    getPhone(getData, isShow);    
}
const lodePhone = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const getData = data.data;
    getPhone(getData);
    
    
}

// modal data showing function 

const showModal = async (id) =>{
    
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const getInfo = data.data;
   showInfo(getInfo)
}

const showInfo = (infos) => {
    console.log(infos)
    const modalDiv = document.getElementById('my_modal_1');
    const div = document.createElement("div");
    div.classList = `modal-box`;
    div.innerHTML = `
                <a href="#">
                    <img class="p-8 ml-[1.5rem] ml lg:ml-[6vw] rounded-t-lg" src="${infos.image}" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                      <a href="#">
                      <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name: ${infos.name} </h2>
                      </a><br>
                      <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">brand: ${infos.brand} </h5>
                      </a><br>
                      <a href="#">
                      <h6 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Storage: ${infos.mainFeatures.storage} </h6>
                      </a><br>
                      <a href="#">
                      <h6 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Display Size: ${infos.mainFeatures.displaySize} </h6>
                      </a><br>
                      <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Memory: ${infos.mainFeatures.memory} </h5>
                      </a><br>
                      <a href="#">
                      <h6 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Slug: ${infos.slug} </h6>
                      </a>
                    </div>
                <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
                </div>
    `;
    modalDiv.appendChild(div);
}


// now this function make a card with api data and add it on web site 

const getPhone = (getData, isShow) => {
    const mainDiv = document.getElementById('allData');
    mainDiv.textContent = '';

    const lodingBTN = document.getElementById('loadingBTN');
    if(getData.length > 6 && !isShow ){
        lodingBTN.classList.remove('hidden');
    }
    else if(getData.length<=0){
        alert('not get any data about it....');
        lodingBTN.classList.add('hidden');

    }
    else{
        lodingBTN.classList.add('hidden');
    }
     
    if(!isShow){
        getData = getData.slice(0,6);
    }

    getData.forEach(phone => {
        const div = document.createElement('div');
        div.classList = `w-full my-[20px] lg:ml-[3rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
        div.innerHTML = `
        <a href="#">
          <img class="p-8 ml-[3.5rem] lg:ml-[5rem] rounded-t-lg" src="${phone.image}" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Name: ${phone.phone_name}</h2>
            </a>
            <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">brand: ${phone.brand}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"     viewBox="0 0 22 20">
                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.  375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
             <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
              <a href="#" onclick = 'showModal("${phone.slug}") ; my_modal_1.showModal() '  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Details</a>
            </div>
        </div>
        `;
        // onclick="my_modal_1.showModal()"
        mainDiv.appendChild(div);

    });

    spinnerStart(false);
};


const getValue = (isShow) => {
    
    spinnerStart(true);
    const searchValue = document.getElementById('default-search').value;
    lodePhone2(searchValue, isShow);

};

const spinnerStart = (Order)=>{
    const spin = document.getElementById('spinner');
    if(Order){
        spin.classList.remove('hidden')
    }
    else{
        spin.classList.add('hidden');
    }
};

const showALL = () => {
    getValue(true);
    console.log('tik ase');
}




lodePhone();
