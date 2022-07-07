$("#boton").click(() => {
    let lista = $("#lista")
    lista.empty()
    $.get("http://localhost:5000/amigos", (data) => {
        for (let i = 0; i < data.length; i++) {
            lista.append(`<li>${data[i].name}</li>`)
        }
    })
})

$("#search").click(() => {
    let input = $("#input").val()

    console.log(input)

    $("#input").val("")

    $.get(`http://localhost:5000/amigos/${input}`, (data) => {
        $("#amigo").text(data.name)
        console.log(data)
    })
})

$("#delete").click(() => {
    let input = $("#inputDelete").val()

    console.log(input)

    $("#input").val("")

    $.ajax({
        url: `http://localhost:5000/amigos/${input}`,
        type: "DELETE",
        success: (data) => {
            console.log(data)
            let success = $("#success")
            success.text("Amigo eliminado")
        }
    })
})