$(document).ready(function () {

    'use strict'; // use strict mode

    $("#unit1").click(function (e) {
        e.preventDefault();
//         alert("test");
        var unit = $("#unit1").val();
        var email = $("#email").val();
        var message = $("#message").val();

        var error = false;
        
//         if(email.length == 0 || email.indexOf("@") == "-1" || email.indexOf(".") == "-1"){
//           var error = true;
//           $("#error_email").fadeIn(500);
//         }else{
//           $("#error_email").fadeOut(500);
//         }
//     

        if (error == false) {
            var mult = {
                "l": ["Pulgadas a Milímetros x25.4" ,"Pulgadas a Centímetros x2.54","Pulgadas a Metros x0.0254", "Pies a Metros x0.3048", "Yardas a Metros x0.9144", 
                    "Milímetros a Pulgadas x0.03937", "Centimetros a Pulgadas x0.3937", "Metros a Pulgadas x39.37", "Metros a Pies x3.281", "Metros a Yardas x1.0936"],
                
                "s": ["Pulgadas Cuadrada a centímetros cuadrados x6.452", "Pulgadas Cuadrada a metros cuadrados x0.0929 ","Yardas cuadradas a metros cuadrados x0.8361",
                    "Centímetros cuadrados a Pulgadas Cuadrada x0.155", "Metros cuadrados a pies cuadrados x10.764", "Metros cuadrados a yardas cuadrados x1.196"],
                
                "v": ["Pulgadas cúbicos a centrímetros cúbicos x16.387","Pies cúbicos a Metros cúbicos x0.028317" ,"Yardas cúbicos a Metros cúbicos x0.0.7646",
                    "Centímetros cúbicos a pulgadas cúbicas x0.06102", "Metros cúbicos a pies cúbicos x35.314", "Metros cúbicos a pies cúbicos x1.308"],
                "p": ["Onzas a kilogramos x0.02835", "Libras a kilogramos x0.4536", "Toneladas a kilogramos x1000","Toneladas a Libras x2204.6", "Kilogramos a Libras x2.2046"]
            };

            $("#unit2 option").remove();
            if (unit === "l") {
                $.each(mult.l, llenar);
            }else if (unit === "s") {
                $.each(mult.s, llenar);
                
            }else if (unit === "v") {
                $.each(mult.v, llenar);
                
            }else if (unit === "p") {
                    $.each(mult.p, llenar);
                
//             var mult={
//                 "l" :[
//                     {"pulgadas":[
//                             {milímetros: 25.4},
//                             {centimetros:2.54},
//                             {metros:0.0254} 
//                        ]},
//                     {"pies":[{metro:0.3048}]},
//                     {"Yardas": [{metro:0.9144}]}
//                         
//                 ]
//             };         
            }
        }
        return false;
    });
    
    $("#calculate").click(function (e) {
        e.preventDefault();
        var unit = $("#unit2").val();
        var val = $("#value1").val();
//        alert(unit);
        var email = $("#result").val(unit*val);
        
    });
});

function llenar(i, item) {

    $("#unit2").append($('<option>', {
        
        value: item.split("x")[1],
        text: item.split("x")[0]
    }));
}
