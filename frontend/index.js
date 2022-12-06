var dados = []

function ApagaRegistro(id){
    let _confirm = confirm("Deseja realmente excluir registro?")

    if(_confirm){
        for(let i=0; i<dados.length; i++){
            if (dados[i].ID == id) {
                dados.splice(i, 1)
            }  
        }

    }
    PopulaTabela()

}

function EditaRegistro(id){

    $("#modalRegistro").modal("show")

    dados.forEach(function(item){

        if(item.ID == id){
            $("#hdID").val(item.ID)
            $("#txtAgricultor").val(item.Agricultor)
            $("#txtTitular").val(item.Titular)
            $("#txtCategoria").val(item.Categoria)
            $("#txtEscolaridade").val(item.Escolaridade)
            $("#txtCadPro").val(item.CadPro)
            $("#txtResponsavel").val(item.Responsavel)
            $("#txtValidacao").val(item.Validacao.substr(6,4) + "-" + item.Validacao.substr(3,2) + "-" + item.Validacao.substr(0,2))
            $("#txtInclusao").val(item.Inclusao.substr(6,4) + "-" + item.Inclusao.substr(3,2) + "-" + item.Inclusao.substr(0,2))
        }
    })

}

function FechaRegistro(){

    $("#hdID").val("")
    $("#txtAgricultor").val("")
    $("#txtTitular").val("")
    $("#txtCategoria").val("")
    $("#txtEscolaridade").val("")
    $("#txtCadPro").val("")
    $("#txtResponsavel").val("")
    $("#txtValidacao").val("")
    $("#txtInclusao").val("")
}

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))
        $("#tblDados tbody").html("")
        i=0
        dados.forEach(function (item) {
            i++
            item.ID = i
            // TEMPLATE STRING
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Agricultor}</td>
                <td>${item.Titular}</td>
                <td>${item.Categoria}</td>
                <td>${item.Escolaridade}</td>
                <td>${item.CadPro}</td>
                <td>${item.Responsavel}</td>
                <td>${item.Validacao}</td>
                <td>${item.Inclusao}</td>
                <td><button type="button" onclick="javascript:EditaRegistro(${item.ID})" class="btn btn-primary">Editar</button>&nbsp;&nbsp; <button type="button" onclick="javascript:ApagaRegistro(${item.ID})" class="btn btn-danger">Excluir</button></td>
            </tr>`)
        })
    }

}
$(function () {
    //EXECUTA AO CARREGAR TELA
    dados = JSON.parse(localStorage.getItem("__dados__"))


    if (dados) {
        PopulaTabela();
    }


    $("#btnSalvar").click(function () {
        //EVENTO ON CLICK
        let _id = $("#hdID").val()
        let Agricultor = $("#txtAgricultor").val()
        let Titular = $("#txtTitular").val()
        let Categoria = $("#txtCategoria").val()
        let Escolaridade = $("#txtEscolaridade").val()
        let CadPro = $("#txtCadPro").val()
        let Responsavel = $("#txtResponsavel").val()
        let Validacao = new Date($("#txtValidacao").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
        let Inclusao = new Date($("#txtInclusao").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })


        let registro = {}

        registro.Agricultor = Agricultor
        registro.Titular = Titular
        registro.Categoria = Categoria
        registro.Escolaridade = Escolaridade
        registro.CadPro = CadPro
        registro.Responsavel = Responsavel
        registro.Validacao = Validacao
        registro.Inclusao = Inclusao

        if(!_id || _id == "0"){
            registro.ID = dados.length + 1
            dados.push(registro)
        }else{
            dados.forEach(function(item){
                if(item.ID == _id) {
                    item.Agricultor = Agricultor
                    item.Titular = Titular
                    item.Categoria = Categoria
                    item.Escolaridade = Escolaridade
                    item.CadPro = CadPro
                    item.Responsavel = Responsavel
                    item.Validacao = Validacao
                    item.Inclusao = Inclusao
                }
            })
        }

        alert("Registro salvo com sucesso")
        $("#modalRegistro").modal("hide")

        $("#hdID").val("")
        $("#txtAgricultor").val("")
        $("#txtTitular").val("")
        $("#txtCategoria").val("")
        $("#txtEscolaridade").val("")
        $("#txtCadPro").val("")
        $("#txtResponsavel").val("")
        $("#txtValidacao").val("")
        $("#txtInclusao").val("")

        PopulaTabela()

    })
})