function loadComponents(id, url){
    fetch(url)
            .then(response => response.text())
            .then(data=>{
                document.getElementById(id).innerHTML = data;
            }).catch(error => console.log(error));
}
document.addEventListener('DOMContentLoaded', function(){
    loadComponents('header', '/includes/header.html');
    loadComponents('footer', 'includes/footer.html');
});
