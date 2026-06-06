function loadComponents(id, url){
    fetch(url)
            .then(response => response.text())
            .then(data=>{
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.warn(`Element  "${id}" non trouvé`);
                }
            }).catch(error => console.log(error));
}
document.addEventListener('DOMContentLoaded', function(){
    loadComponents('header', 'includes/header.html');
    loadComponents('footer', 'includes/footer.html');
});
