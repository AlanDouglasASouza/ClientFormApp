$('#pesquisar').mask('00.000.000/0000-00');

//Levar para a page de pesquisar passando parametro por URL
const search = () => {
    const p = getId('pesquisar').value;      
    location.href = `search.html?cnpj=${p}`
} 

//Reenderiza chamando a função getCompanies
window.onload = () => {
    getCompanies();
}
    
    //Acessa a API e Renderiza na tela todos os registros encontrados
    const getCompanies = async () => {
        try {
            const result = await fetch('http://localhost:8080/home/company-inf');
            const data = await result.json();
            console.log(data);
            for (const tupla of data){
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
            }
        } catch (err) {
            console.error(`Deu ruim: ${err}`);
        }
    }    
    
    //Faz os elementos para mostrar os registros na tela
    const creates = async (elements) => {
        const divBod = getId('bod');
        const divCompany = createNode('div');
        const divGeral = createNode('div');
        const divDir = createNode('div');
        const tab1 = createNode('table');
        const tr = [];        
        const tdName = [createNode('td'), createNode('td')];
        const tdCnpj = [createNode('td'), createNode('td')];
        const tdInscEst = [createNode('td'), createNode('td')];
        const tdInscMun = [createNode('td'), createNode('td')];
        const tdCauses = [createNode('td'), createNode('td')];
        const tdDirector = [createNode('td'), createNode('td')];
        const tdPhone = [createNode('td'), createNode('td')];
        const divEsq = createNode('div');
        const divDowm = createNode('div');
        const tab2 = createNode('table');
        const tdAdress = [createNode('td'), createNode('td')];
        const tdInsta = [createNode('td'), createNode('td')];
        const tdFace = [createNode('td'), createNode('td')];
        const tdEmail = [createNode('td'), createNode('td')];
        const tdSite = [createNode('td'), createNode('td')];
        const tdComplement = [createNode('td'), createNode('td')];
        const tdAbstract = [createNode('td'), createNode('td')];

        for (i=0; i<14; i++) {
            tr.push(createNode('tr'));
        }

        divCompany.id = 'company';
        divGeral.id = 'geral';
        divDir.id = 'dir';
        tab1.id = 'tabela';
        divEsq.id = 'esq';       
        divEsq.style = `background-image: url(../FormApp/api-form-donate/${elements.photo.replace( /\\/g, '/')})`
        divDowm.className = 'dowm';
        tab2.className = 'tab'
        tab2.id = 'tabela';        
        
        //Criando a Primeira Tabela
        table (tdName, 'Nome', elements.name, tab1, tr[0], 'cd');
        table (tdCnpj, 'CNPJ', elements.cnpj, tab1, tr[1], 'cd');
        table (tdInscEst, 'Inscrição Estadual', elements.inscEs, tab1, tr[2], 'cd');
        table (tdInscMun, 'Inscrição Municipal', elements.inscMu, tab1, tr[3], 'cd');
        table (tdCauses, 'Causa', elements.causes, tab1, tr[4], 'cd');
        table (tdDirector, 'Diretor', elements.director, tab1, tr[5], 'cd');
        table (tdPhone, 'Telefone', elements.phone, tab1, tr[6], 'cd');
        
        //Criando a segunda Tabela
        table (tdAdress, 'Endereço', elements.adress, tab2, tr[7], 'cdd');
        table (tdComplement, 'Complemento', elements.complement, tab2, tr[8], 'cdd');
        table (tdInsta, 'Instagram', elements.insta, tab2, tr[9], 'cdd');
        table (tdFace, 'Facebook', elements.face, tab2, tr[10], 'cdd');
        table (tdEmail, 'E-mail', elements.email, tab2, tr[11], 'cdd');
        table (tdSite, 'Website', elements.site, tab2, tr[12], 'cdd');
        table (tdAbstract, 'Resumo', elements.abstract, tab2, tr[13], 'cdd');

        //Fazendo as Divs        
        append(divBod, divCompany);
        append(divCompany, divGeral);
        append(divGeral, divDir);
        append(divDir, tab1);

        append(divGeral, divEsq);

        append(divGeral, divDowm);

        append(divDowm, tab2);
    }
   
    function table (var1, var2, var3, tab, tr, classN) {
            var1[0].className = 'ce';
            var1[0].innerHTML = var2;
            var1[1].className = classN
            var1[1].innerHTML = var3;

            append(tab, tr);
            append(tr, var1[0]);
            append(tr, var1[1]);
        }
    
    // Criar elementos HTML
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
    return parent.appendChild(el);
    }

    function getId(id) {
        return document.getElementById(id);
    }