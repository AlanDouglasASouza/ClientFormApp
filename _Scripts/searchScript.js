window.onload = () => {

    // Pegando o parâmetro de cnpj da url
    const urlParams = new URLSearchParams(window.location.search);
    const getCnpj = urlParams.get('cnpj');

    // Consultando a API com o parametro cnpj para retornar a pesquisa       
    try {
        oneCompany(getCnpj);
    } catch (err) {
        console.error(`Erro ao procurar cadastro: ${err}`);
    }        
} 

// Consultando a API com o parametro cnpj para retornar a pesquisa de um registro
const oneCompany = async (cnpj) => {
    const title = document.getElementById('iu');
    try {            
        const result = await fetch(`http://localhost:8080/findOneCompany/${cnpj}`);
        const data = await result.json();                       
            creates({
                name: data.name,
                cnpj: '00000000/00',
                phone: '0444444444',
                insta: 'insta alguma coisa',
                email: 'um.mail.com',
                adress: 'algum lugar',
                complement: 'alguma coisa',
                causes: 'food',
                director: 'Alguem',
                abstract: 'ajdhnasdsanbkask',
                inscEs: '415644163464',
                inscMu: '326323625232',
                face: 'facekjksn',
                site: 'www.lololo.com',
                photo: data.photoCompany
            })            
    } catch (err) {
        console.error(`Erro ao consultar API: ${err}`);
        title.innerHTML = 'Nenhum resultado encontrado :('
    }
}