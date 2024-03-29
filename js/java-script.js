window.onload = function () {

function reset() {
    main.style.display="none";
    second.style.display="none";
}

    let main = document.getElementById("container");
    let second = document.getElementById("secondPage")
    let button = document.getElementById("bbig");
    button.addEventListener("click", (e) => {
        reset()
        second.style.display="block";
        let back1 = document.getElementById("back1")
        back1.addEventListener("click", (e) => {
            reset();
            main.style.display="block";
        })
    })

    function reset2() {
        main2.style.display="none";
        third.style.display="none";
    }
    
        let main2 = document.getElementById("container");
        let third = document.getElementById("thirdPage")
        let button2 = document.getElementById("sbig1");
        button2.addEventListener("click", (e) => {
            reset2()
            third.style.display="block";
            let back2 = document.getElementById("back2")
            back2.addEventListener("click", (e) => {
                reset2();
                main.style.display="block";
            })
        })

        function reset3() {
            main3.style.display="none";
            fourth.style.display="none";
        }
        
            let main3 = document.getElementById("container");
            let fourth = document.getElementById("fourthPage")
            let button3 = document.getElementById("sbig2");
            button3.addEventListener("click", (e) => {
                reset3()
                fourth.style.display="block";
                let back3 = document.getElementById("back3")
                back3.addEventListener("click", (e) => {
                    reset3();
                    main.style.display="block";
                })
            })

            function reset4() {
                main4.style.display="none";
                fifth.style.display="none";
            }
            
                let main4 = document.getElementById("container");
                let fifth = document.getElementById("fifthPage")
                let button4 = document.getElementById("fourstars");
                button4.addEventListener("click", (e) => {
                    reset4()
                    fifth.style.display="block";
                    let back4 = document.getElementById("back4")
                    back4.addEventListener("click", (e) => {
                        reset4();
                        main.style.display="block";
                    })
                })
}

 // движение фоновых звезд

//  $(document).ready(function(){
//     $(".move-area").mousemove(function(event){
//         let sdvig = $(".move1");
//         let x = (sdvig.offset().left) + (sdvig.width() / 2);
//         let y = (sdvig.offset().top) + (sdvig.height() / 2);
//         let rad = Math.atan2(event.pageX - x, event.pageY - y); 
//         let rot = (rad * (180 / Math.PI) * -1) + 180;
//         sdvig.css({
//           "transform": "rotate(" + rot + "deg)"
//         });
//       });
//       })

//       $(document).mousemove(function(e) {
//         $('#cursor').css({
//           left:e.pageX - 10,
//           top:e.pageY - 10
//         });
//       });


    // $(document).ready(function(){
    //   $('body').mousemove(function(event) {
    //     $(document).mousemove(function(e) {
    //       $('.moveback1, .moveback1port').css({
    //         left: 10 - e.pageX / 9,
    //         top: 10 - e.pageY / 9
    //       })
        
    //     })
    //   })
    // })



    
      



