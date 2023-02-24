var a = {
    mobiles: {
        samsung: {
            a30: {
                name: "a30",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 2000,
            },
            note10: {
                name: "note10",
                ram: "6gb",
                rom: "128gb",
                camera: "50px",
                price: 4000,
            },
            s10: {
                name: "s10",
                ram: "3gb",
                rom: "128gb",
                camera: "10px",
                price: 5000,
            },
        },
        iphone: {
            iphone4: {
                name: "iphone4",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            iphone4s: {
                name: "iphone4s",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 20000,
            },
            iphone5: {
                name: "iphone5",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
            iphone6: {
                name: "iphone6",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
        },
        xiomi: {
            redminote10: {
                name: "redminote10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redminote11: {
                name: "redminote11",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10: {
                name: "redmi10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10pro: {
                name: "redmi10pro",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
        },
        oppo: {
            a3s: {
                name: "a3s",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
        },
    },
}



// var brand = document.getElementById('brand')
// var phone = document.getElementById('phone')
// var ph = document.getElementById('nam')
// function addvalue() {

// var ii=a.mobiles[brand.value][phone.value]
// // console.log(a.mobiles[brand.value][phone.value])
// ph.innerHTML+=`model : ${ii.name}` 
// ph.innerHTML+=`ram : ${ii.ram}`
// ph.innerHTML+=`rom : ${ii.rom}`
// ph.innerHTML+=`camera : ${ii.camera}`
// ph.innerHTML+=`camera : ${ii.price}`


// // var mob=a.mobiles[brand.value][phone.value]
// // ph.innerHTML+=`model: ${mob.name}`

// }


// var arr=[0,null,undefine,1,-1,false,true,[],{},'']
// if(){


// }


var arr = [
    1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1,
    0, 0, 0, 1, 0, 1,
];

for (var i = 0; i < arr.length; i++) {
    if (i == arr[1]) {
        console.log(i)
    }
}