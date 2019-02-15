const render = function (bestMatch, rVal) {
    $('#bestDisplay').html(`
    <h3>${rVal[bestMatch].name}</h3>
    <img src="${rVal[bestMatch].photo}" />
    `)

    $('#name').val('')
    $('#photo').val('')
    $('#q1').val('')
    $('#q2').val('')
    $('#q3').val('')
    $('#q4').val('')
    $('#q5').val('')
    $('#q6').val('')
    $('#q7').val('')
    $('#q8').val('')
    $('#q9').val('')
    $('#q10').val('')
    $('#myModal').modal('toggle')
}

const compare = function (req) {
    let rVal = req
    let lVal = getLocalVal()
    let diff = 0;
    let Tdiff = 100;
    let bestMatch;

    for (i = 0; i < rVal.length; i++) {
        for (n = 0; n < lVal.length; n++) {
            diff = diff + Math.abs(rVal[i].scores[n] - lVal[n])
        }
        if (diff == Tdiff) {
            //compare names or something //icebox
            // console.log("equal")
        } else if (diff < Tdiff) {
            Tdiff = diff
            bestMatch = i
        } else { }
        diff = 0
    }
    render(bestMatch, rVal)
}

const getRemoteVal = function () {
    $.ajax({
        url: "/api/employees",
        method: "GET"
    }).then(function (req, res) {
        compare(req)
    });
}

const getLocalVal = function () {
    const scores = [
        $('#q1').val(),
        $('#q2').val(),
        $('#q3').val(),
        $('#q4').val(),
        $('#q5').val(),
        $('#q6').val(),
        $('#q7').val(),
        $('#q8').val(),
        $('#q9').val(),
        $('#q10').val()
    ]
    return scores
};

const onClick = function (e) {
    e.preventDefault();
    validate()
    //GoTo() //refactor from stocks
}

const validate = function () {
    //checks the forms to be not blank, sans image checker (ie a text string will validate)
    if (
        $('#name').val() == 0 ||
        // $('#photo').val() == 0 ||
        $('#q1').val() == null ||
        $('#q2').val() == null ||
        $('#q3').val() == null ||
        $('#q4').val() == null ||
        $('#q5').val() == null ||
        $('#q6').val() == null ||
        $('#q7').val() == null ||
        $('#q8').val() == null ||
        $('#q9').val() == null ||
        $('#q10').val() == null
    ) {
        console.log("oy, answer the questions")
    } else {
        getRemoteVal()
    }
}

$('#submit').on('click', onClick)
