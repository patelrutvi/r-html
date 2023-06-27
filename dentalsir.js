let tc_s = 1, tc_c = 500
let f_s = 2, f_c = 1500
let rct_s = 4, rct_c = 2500
let r_s = 6, rc_c = 12000
let br_s = 12, br_c = 35000

let final_tr, final_se, final_co, final_dt

const dis = (name, seiting, costing) => {
    document.getElementById("trname").innerHTML = name
    document.getElementById("trs").innerHTML = seiting
    document.getElementById("trc").innerHTML = costing

    final_tr = name;
    final_se = seiting;
    final_co = costing;
}

const heandelChange = () => {

    let tr_type = document.getElementById("dental").value

    // console.log(tr_type);

    if (tr_type === "tc") {
        dis("Teeth Cleaning", tc_s, tc_c)
    } else if (tr_type === "fl") {
        dis("Fillings", f_s, f_c)
    } else if (tr_type === "rct") {
        dis("Root Canal Treatment", rct_s, rct_c)
    } else if (tr_type === "r_c") {
        dis("RCT + Cover", r_s, rc_c)
    } else if (tr_type === "br") {
        dis("Braces/Invisalign", br_s, br_c)
    }


    document.getElementById("disapt").style.display = "inline-block"
}

const selectDate = () => {
    let selecteddate = document.getElementById("date").value

    final_dt = selecteddate

    // console.log(selecteddate);


}

const heandelApt = () => {
    let d = new Date(final_dt)

    let tab = final_co / final_se;
    // console.log(tab);

    let data = ' <tr> <th>Sr no.</th> <th>Appoiment Date</th><th>Costing</th></tr>'

    for (let i = 0; i < final_se; i++) {

        if (i === 0) {
            data += '<tr>'
            data += '<td>' + (i + 1) + '</td>'
            data += '<td>' + d.toLocaleDateString() + '</td>'
            data += '<td>' + tab + '</td>'
            data += '</tr>'
            // console.log(d.toLocaleDateString(), tab);
        } else {
            d.setDate(d.getDate() + 7)
            let newdate = d.toLocaleDateString()

            data += '<tr>'
            data += '<td>' + (i + 1) + '</td>'
            data += '<td>' + newdate + '</td>'
            data += '<td>' + tab + '</td>'
            data += '</tr>'

            // console.log(newdate, tab)    
        }

        console.log(data);
        document.getElementById("aptmyplan").innerHTML = data;

        document.getElementById("aptmyplan").style.display = "inline-block"

    }
}