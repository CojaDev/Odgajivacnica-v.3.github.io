function sendEmail(){
    Email.send({
        SecureToken : "51b15c06-589b-4dd8-a833-d5852ef7ab6d",
        To : 'acodhenoob123@gmail.com',
        From : "amarcetic04@gmail.com",
        Subject : document.querySelector('#naslov').value,
        Body : "Ime: "+ document.querySelector('#ime').value + "<br>" + "Prezime: "+ document.querySelector('#prezime').value +
        "<br>"+"Email: "+ document.querySelector('#email').value + "<br>" + "Poruka: "+ document.querySelector('#poruka').value 
    }).then(
     alert("Poruka je Poslata")
    );
}