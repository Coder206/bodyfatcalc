function calc() {
    var yourSelect = document.getElementById("g");
    var sSkin = document.getElementById("skin").value;
        var ssSkin = document.getElementById("sskin").value;
        var age = document.getElementById("a").value;
    if (yourSelect.options[ yourSelect.selectedIndex ].value === "male") {
        var msSkin = 0.29288;
        var mssSkin = 0.0005;
        var mAge = 0.15845;
        var sub = 5.76377;
        
        var c1 = sSkin * msSkin;
        var c2 = ssSkin * mssSkin;
        var c3 = age * mAge;
        
        var res = c1 - c2 + c3 - sub;
        alert(res);
    }
    else {
        var msSkin = 0.29669;
        var mssSkin = 0.00043;
        var mAge = 0.02963;
        var sub = 1.4072;
        
        var c1 = sSkin * msSkin;
        var c2 = ssSkin * mssSkin;
        var c3 = age * mAge;
        
        var res = c1 - c2 + c3 + sub;
        alert(res);
    }
    
}

document.getElementById("sub").addEventListener("click", function() {
    calc(); 
});