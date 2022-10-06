const listBody = document.getElementById('listBody')
        
async function products() {
    const url = await fetch('/products')
    const res = await url.json()
            
    res.forEach(p => {
        listBody.innerHTML += `
        <div class="row my-3">
            <div class="col py-3" 
            style="width: 100px;
            border-top: 1px solid #DCDCDC;
            border-bottom: 1px solid #DCDCDC;"
            >
                <strong>${p.name}</strong>
                <p class="m-0">${p.description}</p>
            </div>
            <div class="col-5 d-flex align-items-center justify-content-center" 
            style="border-top: 1px solid #DCDCDC; 
            border-bottom: 1px solid #DCDCDC;"
            >
                <a href="/edit-product?id=${p.id}" class="btn btn-primary mx-1">
                    Edit
                </a>
                <a href="/delete-product?id=${p.id}" class="btn btn-danger mx-1">
                    Delete
                </a>
            </div>
        </div>
        `
    })
}
products()