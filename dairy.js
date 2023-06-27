let dairy = document.getElementById("dairy");

const handelSubmit = () => {
    // console.log("hhg")
    return false;
}



const handelClick = () => {
    let am = parseInt(document.getElementById("milk").value)
    let bm = parseInt(document.getElementById("buttermilk").value)
    let cd = parseInt(document.getElementById("Curd").value)
    let pn = parseInt(document.getElementById("panir").value)
    let ches = parseInt(document.getElementById("chees").value)

    let ans  = 0 , ans1 = 0, ans2 = 0,ans3 = 0;
    let a1 = 0 , a2 = 0, a3 = 0, a4 = 0;
  
     ans = bm * 2
     ans1 = cd * 3
     ans2 = pn * 5
     ans3 = ches * 10

    
    if ((am - ans) >= 0) {
        a1 = am - ans
        document.getElementById("p1").innerHTML = ans + "ready"
    } else if((am - ans) < 0) {
        a1 = am
        ans = 0
        document.getElementById("p1").innerHTML =  "not ready"
    }


    
    if ((a1 - ans1) >= 0) {
        a2 = a1 - ans1
        document.getElementById("p2").innerHTML = ans1 + "ready"
    } else if ((a1 - ans1) < 0) {
        a2 = a1
        ans1 = 0
        document.getElementById("p2").innerHTML =  "not ready"
    }


    
    if ((a2 - ans2) >= 0) {
        a3 = a2 - ans2
        document.getElementById("p3").innerHTML = ans2 + "ready"
    } else if ((a2 - ans2) < 0) {
        a3 = a2
        ans2 = 0
        document.getElementById("p3").innerHTML = ans2 + "not ready"
    }

    
    if ((a3 - ans3) >= 0) {
        a4 = a3 - ans3
        document.getElementById("p4").innerHTML = ans3 + "ready"
    } else if ((a3 - ans3) < 0) {
        a4 = a3
        ans3 = 0
        document.getElementById("p4").innerHTML =  "not ready"

    }


    let atotal = ans + ans1 + ans2 + ans3;
    let ftotal = am - atotal;
    document.getElementById("rm").innerHTML = ftotal

    document.getElementById("ansd").style.display = "inline-block"

}

