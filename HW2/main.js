
    

    document.getElementById("averageButton").addEventListener("click", function() {
        var val1 = document.getElementById("average1").value;
        var val2 = document.getElementById("average2").value;
        var val3 = document.getElementById("average3").value;
        var averageValue = ((parseInt(val1) + parseInt(val2) + parseInt(val3)) / 3);
        document.getElementById("averageOutput").innerHTML = averageValue;
    })

})


