function cadastrar() {
    var titulo = document.getElementById("titulo").value;
    var episodios = document.getElementById("episodios").value;
    var descricao = document.getElementById("descricao").value;
    var autor = document.getElementById("autor").value;

    window.location.href= "index.html"

    alert("Titulo cadastrado: \nTítulo: " + titulo + "\nEpisódios: " + episodios + "\nDescricao: " + descricao + "\nAutor: " + autor)
}