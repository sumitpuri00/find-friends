const socket=io()
 
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {longitude,latitude}=position.coords
        socket.emit('send-location',{longitude,latitude})
        
    },(Error)=>{
         
        console.error(Error);
        
    },{
        enableHighAccuracy:true,
        maximumAge: 0, /* this will disable caching */
        timeout: 1000 /* send user's location in every 3 sec */

    })
}

const map = L.map('mapp').setView([0,0],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: "sumit puri"}).addTo(map); 
 

const markers={}

socket.on('receive-location',(data)=>{
    const{id,latitude,longitude}=data;
     
    
    map.setView([latitude,longitude],16);
    if(markers[id]){ /* at first this will give "undefine" , so conditon will go the else statement */
        markers[id].setLatLng([latitude,longitude]);
    }else{
       
        /* here mark is a empty object{} , but we adding the value for the key "id". so key "id" will get automatically created and some value will get assigh to the id.. here our object looks like this const mark={8994hhsjsu49: some-value} */
        
        markers[id]=L.marker([latitude,longitude]).addTo(map);
         
    }
})

socket.on('user-disconnected',(id)=>{
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})





