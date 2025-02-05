let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=2
    text_speak.lang="en-IN"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){ 
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12)
        { speak("Good Morning Sir, mai aapke liye kya kar sakti hu")

    }
        else if(hours>=12 && hours<16)
            {speak("Good Afternoon Sir!")

    }
    else{ 
        speak("Good Evening Sir!i am KAIRYY!") 

    }
}
window.addEventListener('load',()=>{
    wishMe()
})


function listen() {
    let inputArea = document.getElementById('input-area')
    let outputArea = document.getElementById('output-area')
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();
  
    recognition.onresult = function(event) {
      let transcript = event.results[0][0].transcript;
      if (transcript== "Hello Nila." || transcript == "Hello." ) {
      speak("Hello Sir,How can I Help You")
  }else if (transcript.includes("Open YouTube.")) {
    speak("Opening Youtube ")
    window.open("https://www.youtube.com") }

    else if (transcript.includes("Open Instagram.")) {
        speak("Opening Instagram ")
        window.open("https://www.instagram.com") }

        else if (transcript.includes("Open Facebook.")) {
            speak("Opening facebook ")
            window.open("https://www.facebook.com") }

            else if (transcript.includes("Open calculator.")) {
                speak("Opening calculator ")
                window.open("calculator://") }


                else if (transcript.includes("Open Opera.")) {
                    speak("Opening opera ")
                    window.open("C:\Users\X\AppData\Local\Programs\Opera.exe") }

            else if (transcript.includes("Open WhatsApp.")) {
                speak("Opening Whatsapp ")
                window.open("https://web.whatsapp.com/") }

                else if (transcript.includes("Open Google.")) {
                    speak("Opening google ")
                    window.open("https://www.google.com") }
                

                else if (transcript.includes("Tell me time.") || transcript.includes("What is time?") ) {
                   let time=new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'}) 
                    speak(time);
                }

      else if (transcript.includes("Who are you?")) {
        speak("I Am kairyy!Created By Priyanshu Sir")
       
         
 
    } 


    else if (transcript.includes("Who is my friend?")) {
        speak("doctor Deepak Vishwkarma")
       } 

       else if (transcript.includes("Hamare college ke principal kaun hai.")) {
        speak("mister Vansh Narayan Sharma!")
       } 


       else if (transcript.includes("Aapke college ka naam kya hai.")) {
        speak("BHARAT MATA INSTITUTE OF INFORMATION TECHNOLOGY RAJAtalab VARAaNASI")
       }
       

       else if (transcript.includes("Good morning.")) {
        speak("Good morning sir! Aapka Din Subh Ho!")
       } 

       else if (transcript.includes("Good afternoon.")) {
        speak("Good afternoon sir!")
       } 
       
       else if (transcript.includes("Good evening.")) {
        speak("Good evening sir!")
       } 

       else if (transcript.includes("Good night.")) {
        speak("Good night sir! and Sweet Dreams")
       } 
       
       else if (transcript.includes("How are you?")) {
        speak("mai thik hu sir,Dhanywad! Aap Kaise Hai?")
       } 

       else if (transcript.includes("I love you, Carry Ji.")) {
        speak("I Love you too my Dear Husband priyanshu ji!")
       } 

  else {

      outputArea.innerHTML = "Google Ke Anushar"
      speak(`Google ke anushaar ye paya gya ${transcript}`)
      window.open(`https://www.google.com/search?q=${transcript}`)
  }
      inputArea.innerHTML = event.results[0][0].transcript;
    }
  }
  