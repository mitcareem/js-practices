var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Mohammad";

fetch(url)
.then(response => response.json())
.then(json => console.log(json))