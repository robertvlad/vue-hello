const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            message: "Hello World",
            image: "https://i.picsum.photos/id/182/200/300.jpg?hmac=W6MnOpe7fP0LlNAyWl6rzWbjyLOM3ix2TXRcFx7vEPE"
        }
    }
}).mount("#app")