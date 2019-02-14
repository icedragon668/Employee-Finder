const render = function () {
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
    console.log("render")
}

const compare = function () {
    let rVal = getRemoteVal()
    let lVal = getLocalVal()
    let diff = 0;
    let Tdiff = 100;
    let bestMatch;

    for (i = 0; i < rVal.length; i++) {
        for (n = 0; n < lVal.length; n++) {
            diff = diff + Math.abs(rVal[i].scores[n] - lVal[n])
        }
        console.log(rVal[i].name, "is", diff, "than input")
        if (diff == Tdiff) {
            //compare names or something //icebox
            console.log("equal")
        } else if (diff < Tdiff) {
            Tdiff = diff
            bestMatch = i
            console.log('less')
        } else {
            console.log('greater')
        }
        diff = 0
    }
    console.log("compare", bestMatch)
    render()
}

const getRemoteVal = function () {
    let tVal = employeeObject
    return tVal

}

/*ABOVE IS TEMP
//get non-local {obj}
$.ajax({
    url: http://localhost:8080/api/employees
    method: "POST"
}).then(function (res) {
    //do stuff
    //is this the object i need?
})
}
THIS IS THE MVP CODE (INCOMPLETE) */

//local scores to compare
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
    compare()
    console.log("onClick")
    //GoTo()
}


$('#submit').on('click', onClick)



/////DELETE ME//////
//////TEMP DATA//////
const employeeObject = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    }];
//////TEMP DATA//////