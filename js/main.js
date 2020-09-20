
/* ---------- 関数 ---------- */
function kakuritu(x) {
   if (x == 6 || x == 8) {
     r = 13.89;
   } else if (x == 5 || x == 9) {
     r = 11.11;
   } else if (x == 4 || x == 10) {
     r = 8.33;
   } else if (x == 3 || x == 11) {
     r = 5.56;
   } else if (x == 2 || x == 12) {
     r = 2.78;
   } else {
     r = 0.0;
   }
   return r;
}

/* ---------- ボタン ---------- */

$(function() {
  $('#button_keisan').on('click', function(){
    var ia1 = $('#ia1').val();
    var ia2 = $('#ia2').val();
    var ia3 = $('#ia3').val();
    var oa1 = kakuritu(ia1);
    var oa2 = kakuritu(ia2);
    var oa3 = kakuritu(ia3);
    $('#oa1').text(oa1);
    $('#oa2').text(oa2);
    $('#oa3').text(oa3);
    $('#oa').text(oa1 + oa2 + oa3);

    var ib1 = $('#ib1').val();
    var ib2 = $('#ib2').val();
    var ib3 = $('#ib3').val();
    var ob1 = kakuritu(ib1);
    var ob2 = kakuritu(ib2);
    var ob3 = kakuritu(ib3);
    $('#ob1').text(ob1);
    $('#ob2').text(ob2);
    $('#ob3').text(ob3);
    $('#ob').text(ob1 + ob2 + ob3);

    var ic1 = $('#ic1').val();
    var ic2 = $('#ic2').val();
    var ic3 = $('#ic3').val();
    var oc1 = kakuritu(ic1);
    var oc2 = kakuritu(ic2);
    var oc3 = kakuritu(ic3);
    $('#oc1').text(oc1);
    $('#oc2').text(oc2);
    $('#oc3').text(oc3);
    $('#oc').text(oc1 + oc2 + oc3);

  });
});

/* Clear */
$(function() {
  $('#button_clear').on('click', function(){
    $('#ia1').val("");
    $('#ia2').val("");
    $('#ia3').val("");
    $('#ib1').val("");
    $('#ib2').val("");
    $('#ib3').val("");
    $('#ic1').val("");
    $('#ic2').val("");
    $('#ic3').val("");
  });
});
