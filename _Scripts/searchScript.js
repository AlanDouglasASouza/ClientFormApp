window.onload = () => {

    // Pegando o parâmetro de cnpj da url
    const urlParams = new URLSearchParams(window.location.search);
    const getCnpj = urlParams.get('cnpj');
    const cnpjOk = getCnpj.replace('/', '*');

    // Consultando a API com o parametro cnpj para retornar a pesquisa       
    try {
        oneCompany(cnpjOk);
    } catch (err) {
        console.error(`Erro ao procurar cadastro: ${err}`);
    }        
} 

// Consultando a API com o parametro cnpj para retornar a pesquisa de um registro
const oneCompany = async (cnpj) => {
    const title = document.getElementById('iu');
    try {            
        const result = await fetch(`http://localhost:8080/findCompanyByCnpj/${cnpj}`);
        const tupla = await result.json();        
            creates({
                name: tupla.name,
                cnpj: tupla.companies_information.cnpj,
                phone: tupla.companies_information.phone,
                insta: tupla.companies_information.instagram,
                email: tupla.companies_information.email,
                adress: tupla.companies_information.adress,
                complement: tupla.companies_information.complement,
                causes: tupla.companies_information.causes,
                director: tupla.companies_information.director,
                abstract: tupla.abstract,
                inscEs: tupla.companies_information.insc_est,
                inscMu: tupla.companies_information.insc_mun,
                face: tupla.companies_information.facebook,
                site: tupla.companies_information.website,
                photo: tupla.photoCompany
            })            
    } catch (err) {
        console.error(`Erro ao consultar API: ${err}`);
        title.innerHTML = 'Nenhum resultado encontrado :('
    }
}