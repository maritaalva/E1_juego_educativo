window.onload = () => {
    let wheight = window.innerHeight;
    let wwidth = window.innerWidth;
    let portadaJuego = document.querySelector(".portada");
    let cambio_img_nokia = document.getElementById("imgnokia");
    let btn_juego = document.querySelector("#iniciar_juego");
    let btn_juego_m = document.querySelector("#iniciar_juego_m");


    let lvl1_btn = document.querySelector("#nivel1_btn");
    let lvl2_btn = document.querySelector("#nivel2_btn");
    let lvl3_btn = document.querySelector("#nivel3_btn");
    let lvl1_btnm = document.querySelector("#nivel1_btnm");
    let lvl2_btnm = document.querySelector("#nivel2_btnm");
    let lvl3_btnm = document.querySelector("#nivel3_btnm");
    let lvl1Info = document.querySelector("#lv1_info");
    let lvl2Info = document.querySelector("#lv2_info");
    let lvl3Info = document.querySelector("#lv3_info");
    let lvl1InfoM = document.querySelector("#lv1_info_m");
    let lvl2InfoM = document.querySelector("#lv2_info_m");
    let lvl3InfoM = document.querySelector("#lv3_info_m");


    let nivel1_cont = document.querySelector("#nivel1");
    let nivel2_cont = document.querySelector("#nivel2");
    let nivel3_cont = document.querySelector("#nivel3");
    let pantallaFinal = document.querySelector("#final");

    let menuInfo = document.querySelector(".menu_information");
    let menuInfoM = document.querySelector(".menu_information_m");
    let menu = document.querySelector("#menuContainer");
    let lvlInfo = document.querySelector(".lvl_info_container");

    let juego = document.querySelector("#juego");

    let home = document.querySelector("#icon_home");
    let homem = document.querySelector("#icon_home_m");

    let counter = document.querySelector("#contador");
    let counterM = document.querySelector("#contador_m");

    let lvlNumber = document.querySelector("#lvl_number");
    let lvlName = document.querySelector("#lvl_name");
    let lvlPregunta = document.querySelector(".pregunta");
    let lvlNumberM = document.querySelector("#lvl_number_m");
    let lvlNameM = document.querySelector("#lvl_name_m");
    let lvlPreguntaM = document.querySelector(".pregunta_m");

    let correctAnswer1 = document.querySelector("#correct1");
    let correctAnswer2 = document.querySelector("#correct2");
    let correctAnswer3 = document.querySelector("#correct3");

    let nextq = document.querySelector(".nextquestion");
    let nextqm = document.querySelector(".nextquestion_m");
    let contadorL1 = 0;
    let contadorL2 = 0;
    let contadorL3 = 0;

    let l2op1 = document.querySelector(".l2op1");
    let l2op2 = document.querySelector(".l2op2");
    let l2oop1 = document.querySelector(".l2oop1");
    let l2oop2 = document.querySelector(".l2oop2");
    let body = document.querySelector(".body");
    let l2caja1 = document.querySelector("#l2_caja1");
    let l2caja2 = document.querySelector("#l2_caja2");

    let l1opC = document.querySelector("#l1op_correct");
    let l1opI = document.querySelector("#l1op_incorrect");
    let l1img = document.querySelector("#lv1_img");
    let l1caja1 = document.querySelector("#l1_caja1");
    let l1caja2 = document.querySelector("#l1_caja2");

    let l3opC = document.querySelector("#l3op_correct");
    let l3opI = document.querySelector("#l3op_incorrect");
    let l3img = document.querySelector("#lv3_img");
    let l3caja1 = document.querySelector("#l3_caja1");
    let l3caja2 = document.querySelector("#l3_caja2");


    let ordencajas = document.querySelector(".level_container_inside");
    let niveles_data = "";
    let nivel1_data = "";
    let nivel2_data = "";
    let nivel3_data = "";




    /////////////////// VENTANA PORTADA VIUDEOJUEGO//////////////////////

    //animacion llamada movil
    let images = ["assets/img/nokia_1.png", "assets/img/nokia_2.png", "assets/img/nokia_3.png"];
    let index = 0;

    function changeImage() {
        cambio_img_nokia.setAttribute("src", images[index]);
        index++;
        if (index >= images.length) {
            index = 0;
        }
    }
    setInterval(changeImage, 1000);

    //boton iniciar juego
    btn_juego.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarMenu();
    });
    btn_juego_m.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarMenuM();


    });

    /////////////////////VENTANA MENU DE NIVELES////////////////////////

    function mostrarMenu() {
        juego.style.display = "none";
        portadaJuego.style.display = "none";
        menuInfo.style.display = "flex";
        menuInfoM.style.display = "none";

    }

    function mostrarMenuM() {
        juego.style.display = "none";
        portadaJuego.style.display = "none";
        menuInfo.style.display = "none";
        menuInfoM.style.display = "flex";
    }
    // //Cambio imagenes nivel3
    // let cambio_img_level_3 = document.getElementById("img_l3");

    // let images_level3 = ["assets/img/title_level_3.png", "assets/img/title_level_3_3.png"];
    // let indexl3 = 0;

    // function changeImageLevel3() {
    //     cambio_img_level_3.setAttribute("src", images_level3[indexl3]);
    //     indexl3++;
    //     if (indexl3 >= images_level3.length) {
    //         indexl3 = 0;
    //     }
    // }
    // setInterval(changeImageLevel3, 800);

    //información e instrucciones de los niveles
    lvl1_btn.addEventListener('mouseover', (e) => {
        lvl1Info.style.opacity = 1;
    });
    lvl1_btn.addEventListener('mouseout', (e) => {
        lvl1Info.style.opacity = 0
    });
    lvl2_btn.addEventListener('mouseover', (e) => {
        lvl2Info.style.opacity = 1
    });
    lvl2_btn.addEventListener('mouseout', (e) => {
        lvl2Info.style.opacity = 0
    });
    lvl3_btn.addEventListener('mouseover', (e) => {
        lvl3Info.style.opacity = 1
    });
    lvl3_btn.addEventListener('mouseout', (e) => {
        lvl3Info.style.opacity = 0
    });


    /////////////////////CARGA DE LOS NIVELES////////////////////////

    fetch('assets/data/data.json')
        .then(res => res.json())
        .then(data => {
            niveles_data = data.niveles;
            nivel1_data = data.nivel1;
            nivel2_data = data.nivel2;
            nivel3_data = data.nivel3;
        })



    /////////////////////MOSTRAR NIVELES////////////////////////
    home.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarMenu();
        menu.style.display = "flex";

    });
    nextq.addEventListener('click', () => {
        siguientePregunta();
       
    });

    lvl1_btn.addEventListener('click', (e) => {
        nivel = 1;
        e.preventDefault();
        mostrarJuego();
    });

    function btn_2() {
        lvl2_btn.addEventListener('click', (e) => {
            nivel = 2;
            e.preventDefault();
            mostrarJuego();
        });
    }
    function btn_3() {
        lvl3_btn.addEventListener('click', (e) => {
            nivel = 3;
            e.preventDefault();
            mostrarJuego();
        });
    }
    function mostrarJuego() {
        menuInfo.style.display = "none";
        menuInfoM.style.display = "none";
        menu.style.display = "none";
        juego.style.display = "block";

        if (nivel == 1) {
            nivel1_cont.style.display = "block";
            nivel2_cont.style.display = "none";
            nivel3_cont.style.display = "none";
            lvlNumber.innerText = niveles_data[0].lnumber;
            lvlName.innerText = niveles_data[0].lname;
            lvlPregunta.innerText = niveles_data[0].lpregunta;
            lvlNumberM.innerText = niveles_data[0].lnumber;
            lvlNameM.innerText = niveles_data[0].lname;
            lvlPreguntaM.innerText = niveles_data[0].lpregunta;
        }
        if (nivel == 2) {
            nivel1_cont.style.display = "none";
            nivel2_cont.style.display = "block";
            nivel3_cont.style.display = "none";
            lvlNumber.innerText = niveles_data[1].lnumber;
            lvlName.innerText = niveles_data[1].lname;
            lvlPregunta.innerText = niveles_data[1].lpregunta;
            lvlNumberM.innerText = niveles_data[1].lnumber;
            lvlNameM.innerText = niveles_data[1].lname;
            lvlPreguntaM.innerText = niveles_data[1].lpregunta;
        }
        if (nivel == 3) {
            nivel1_cont.style.display = "none";
            nivel2_cont.style.display = "none";
            nivel3_cont.style.display = "block";
            lvlNumber.innerText = niveles_data[2].lnumber;
            lvlName.innerText = niveles_data[2].lname;
            lvlPregunta.innerText = niveles_data[2].lpregunta;
            lvlNumberM.innerText = niveles_data[2].lnumber;
            lvlNameM.innerText = niveles_data[2].lname;
            lvlPreguntaM.innerText = niveles_data[2].lpregunta;
        }
    }

    function siguientePregunta() {
        //op1.src = option1[contador];
        //op2.src = option2[contador];
        //body.src = bodytype[contador];
     
        //pregunta.innerText = nquestion[contador];
        if (nivel == 1) {
            contadorL1++;

            l1caja1.style.order = nivel1_data[contadorL1].c1;
            l1caja2.style.order = nivel1_data[contadorL1].c2;
            l1img.src = nivel1_data[contadorL1].clue_img;
            l1opC.innerText = nivel1_data[contadorL1].option1;
            l1opI.innerText = nivel1_data[contadorL1].option2;
            lvlPregunta.innerText = nivel1_data[contadorL1].nquestion;
            correctAnswer1.innerHTML = ``;
            nextq.style.display = "none";

            if (nivel1_data[contadorL1].id == 7) {
                juego.style.display = "none";
                mostrarMenu();
                menu.style.display = "flex";
                lvl1_btn.style.backgroundColor = '#64ffa7';
                btn_2();
            }


        };
        if (nivel == 2) {
            contadorL2++;

            l2caja1.setAttribute('data-x', 0);
            l2caja2.setAttribute('data-y', 0);
            l2caja1.style.transform = 'translate(0px, 0px)';
            l2caja2.style.transform = 'translate(0px, 0px)';
            l2caja1.style.order = nivel2_data[contadorL2].c1;
            l2caja2.style.order = nivel2_data[contadorL2].c2;
            l2op1.src = nivel2_data[contadorL2].option1px;
            l2op2.src = nivel2_data[contadorL2].option2px;
            l2oop1.src = nivel2_data[contadorL2].option1;
            l2oop2.src = nivel2_data[contadorL2].option2;
            body.src = nivel2_data[contadorL2].model_dol;
            lvlPregunta.innerText = nivel2_data[contadorL2].nquestion;
            correctAnswer2.innerHTML = ``;
            nextq.style.display = "none";

            if (nivel2_data[contadorL2].id == 5) {
                juego.style.display = "none";
                mostrarMenu();
                menu.style.display = "flex";
                lvl2_btn.style.backgroundColor = '#64ffa7';
                btn_3();
            }

        };

        if (nivel == 3) {
            contadorL3++;
            l3caja1.style.order = nivel3_data[contadorL3].c1;
            l3caja2.style.order = nivel3_data[contadorL3].c2;
            l3img.src = nivel3_data[contadorL3].clue_img;
            l3opC.innerText = nivel3_data[contadorL3].option1;
            l3opI.innerText = nivel3_data[contadorL3].option2;
            lvlPregunta.innerText = nivel3_data[contadorL3].nquestion;
            correctAnswer3.innerHTML = ``;
            nextq.style.display = "none";

            if (nivel3_data[contadorL3].id == 4) {
                juego.style.display = "none";
                menu.style.display = "none";
                pantallaFinal.innerHTML = `<div class="correct_box"><h3 id="answer_because">Congratulations!</h3><p id="correct_text">You have obtain all the clothing and ${count} stars to spend in Everskies </p></div>`;
                pantallaFinal.style.display = "block";
            }

        };

    }




    lvl1_btnm.addEventListener('click', (e) => {
        nivel = 1;
        e.preventDefault();
        mostrarJuego();
    });
    function btn_2m() {
        lvl2_btnm.addEventListener('click', (e) => {
            nivel = 2;
            e.preventDefault();
            mostrarJuego();
        });
    }
    function btn_3m() {
        lvl3_btnm.addEventListener('click', (e) => {
            nivel = 3;
            e.preventDefault();
            mostrarJuego();
        });
    }
    nextqm.addEventListener('click', () => {
        siguientePreguntam();
    });
    homem.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarMenuM();
    });

    function siguientePreguntam() {

        //op1.src = option1[contador];
        //op2.src = option2[contador];
        //body.src = bodytype[contador];

        //pregunta.innerText = nquestion[contador];
        if (nivel == 1) {
            contadorL1++;
            l1caja1.style.order = nivel1_data[contadorL1].c1;
            l1caja2.style.order = nivel1_data[contadorL1].c2;
            l1img.src = nivel1_data[contadorL1].clue_img;
            l1opC.innerText = nivel1_data[contadorL1].option1;
            l1opI.innerText = nivel1_data[contadorL1].option2;
            lvlPreguntaM.innerText = nivel1_data[contadorL1].nquestion;
            correctAnswer1.innerHTML = ``;
            nextqm.style.display = "none";
            if (nivel1_data[contadorL1].id == 7) {
                juego.style.display = "none";
                mostrarMenuM();
                menu.style.display = "flex";
                lvl1_btnm.style.backgroundColor = '#64ffa7';
                btn_2m();
            }
        }
        if (nivel == 2) {
            contadorL2++;
            l2caja1.setAttribute('data-x', 0);
            l2caja2.setAttribute('data-y', 0);
            l2caja1.style.transform = 'translate(0px, 0px)';
            l2caja2.style.transform = 'translate(0px, 0px)';
            l2caja1.style.order = nivel2_data[contadorL2].c1;
            l2caja2.style.order = nivel2_data[contadorL2].c2;
            l2op1.src = nivel2_data[contadorL2].option1px;
            l2op2.src = nivel2_data[contadorL2].option2px;
            l2oop1.src = nivel2_data[contadorL2].option1;
            l2oop2.src = nivel2_data[contadorL2].option2;
            body.src = nivel2_data[contadorL2].model_dol;
            lvlPreguntaM.innerText = nivel2_data[contadorL2].nquestion;
            correctAnswer2.innerHTML = ``;
            nextqm.style.display = "none";

            if (nivel2_data[contadorL2].id == 5) {
                juego.style.display = "none";
                mostrarMenuM();
                menu.style.display = "flex";
                lvl2_btnm.style.backgroundColor = '#64ffa7';
                btn_3m();
            }

        }

        if (nivel == 3) {
            contadorL3++;
            l3caja1.style.order = nivel3_data[contadorL3].c1;
            l3caja2.style.order = nivel3_data[contadorL3].c2;
            l3img.src = nivel3_data[contadorL3].clue_img;
            l3opC.innerText = nivel3_data[contadorL3].option1;
            l3opI.innerText = nivel3_data[contadorL3].option2;
            lvlPreguntaM.innerText = nivel3_data[contadorL3].nquestion;
            correctAnswer3.innerHTML = ``;
            nextqm.style.display = "none";
            if (nivel3_data[contadorL3].id == 4) {
                juego.style.display = "none";
                menu.style.display = "none";
                pantallaFinal.innerHTML = `<div class="correct_box"><h3 id="answer_because">Congratulations!</h3><p id="correct_text">You have obtain all the clothing and ${count} stars to spend in Everskies </p></div>`;
                pantallaFinal.style.display = "block";
            }
        }

        console.log(nivel2_data[contadorL2].c1)
    }

    count = 0;

    ////////////////////NIVEL 1////////////
    function respuestaCorrecta() {
        correctAnswer1.innerHTML = `<div class="correct_box"><h3 id="answer_because">That's because..</h3><p id="correct_text">${nivel1_data[contadorL1].answer}</p></div>`;

    };

    l1caja1.addEventListener('click', () => {
        l1img.src = nivel1_data[contadorL1].clue_img_px;
        correctAnswer1.innerHTML = `<div class="correct_box"><h3 id="answer_because">You're right!..</h3><p id="correct_text">${nivel1_data[contadorL1].answer}</p></div>`;
        count += 50;
        counter.innerHTML = count;
        counter.style.color = '#64ffa7';
        counterM.innerHTML = count;
        counterM.style.color = '#64ffa7';
        nextq.style.display = "block";
        nextqm.style.display = "block";




    });
    l1caja2.addEventListener('click', () => {
        count -= 25;
        counter.style.color = '#ff5757';
        counter.innerHTML = count;
        counterM.style.color = '#ff5757';
        counterM.innerHTML = count;

    });

    console.log(correctAnswer1)

    /////////////////////DRAG AND DROP NIVEL 2////////////////////////

    let item;
    let positionx = 500;
    let positiony = 0;

    // function change_img_px (event) {
    //     const actionInfo = JSON.stringify(event.interaction.prepared, null, 2)

    //     event.target.textContent = `action: ${actionInfo} \ncoords: ${event.pageX}, ${event.pageY}`
    //   }

    //   const interactable = interact('.opimg')

    //   interactable.draggable({
    //     listeners: {
    //       move: change_img_px,
    //       onend: showEventInfo,
    //     }
    //   })
    interact('.cajas')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    // restriction: 'parent',
                    endOnly: true
                })
            ],

            // autoScroll: true,
            listeners: {
                end(e) {
                    let target = e.target
                    if (e.relatedTarget == null) {
                        // translate the element
                        target.style.webkitTransform =
                            target.style.transform =
                            'translate(0px, 0px)'
                        // op1.src=nivel2_data[contador].option1;
                        // op2.src=nivel2_data[contador].option2;

                        count -= 25;
                        counter.style.color = '#ff5757';
                        counter.innerHTML = count;
                        counterM.style.color = '#ff5757';
                        counterM.innerHTML = count;

                        // update the posiion attributes
                        target.setAttribute('data-x', 0)
                        target.setAttribute('data-y', 0)
                    } else {
                        target.style.webkitTransform =
                            // target.style.transform =
                            // 'translate(' + (wheight - (wheight - nivel2_data[contador].positionx)) + 'px, ' + (wwidth - (wwidth - nivel2_data[contador].positiony)) + 'px)'

                            correctAnswer2.innerHTML = `<div class="correct_box"><h3 id="answer_because">You're right!..</h3><p id="correct_text">${nivel2_data[contadorL2].answer}</p></div>`;
                        // op1.src=nivel2_data[contador].option1px;
                        // op2.src=nivel2_data[contador].option2px;
                        count += 50;
                        counter.style.color = '#64ffa7';
                        counter.innerHTML = count;
                        counterM.innerHTML = count;
                        counterM.style.color = '#64ffa7';
                        nextq.style.display = "block";
                        nextqm.style.display = "block";


                        //siguientePregunta();
                        // 'translate(' +(Math.sqrt(Math.pow(e.x0 - positionx, 2)) + 'px, ' + (Math.pow(e.y0 - positiony, 2) | 0)) + 'px)'
                        //             (Math.sqrt(Math.pow(e.pageX - e.x0, 2) +
                        //             Math.pow(e.pageY - e.y0, 2) | 0))
                        //    .toFixed(2)
                        // // update the posiion attributes
                        // target.setAttribute('data-x', 0)
                        // target.setAttribute('data-y', 0)
                    }
                },
                move(e) {
                    let target = e.target;
                    // // target.src="assets/img/sto_2_1.png";
                    // op2.src=nivel2_data[contador].option2px;
                    // keep the dragged position in the data-x/data-y attributes
                    let x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
                    let y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy

                    // translate the element
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)'

                    // update the posiion attributes
                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                },
            }
        });
    console.log(correctAnswer2)

    // console.log(elementdata)
    // let elementAcc = document.querySelector("#caja1");
    // let elementAcc = elementdata.c1;
    // console.log(nivel2_data[contador].c1) 
    // console.log(elementAcc)


    //    let br = JSON.parsenivel2_data[contador].c1};
    interact('.areal2')
        .dropzone({

            accept: '#l2_caja1',
            ondragenter: function (event) {
                // document.getElementById("op1").src="../assets/img/sto_4_1_px.png";
                // op1.src=nivel1_data[contador].option1       kpx;
                event.target.classList.add('drop-activated')
            },
            ondragleave: function (event) {
                // document.getElementById("op1").src="../assets/img/sto_4_1.png";
                // op1.src=nivel1_data[contador].option1;

                event.target.classList.remove('drop-activated')

            },
            ondrop: function (event) {
                // poner aquí el código de lo que tiene que pasar al soltar el elemento
                // en el sitio correcto. (p.e. que desaparezca)
                event.target.classList.remove('drop-activated')


            }
        })

    /////////////////////NIVEL 3///////////////////////
    function respuestaCorrecta() {
        correctAnswer3.innerHTML = `<div class="correct_box"><h3 id="answer_because">You're right!..</h3><p id="correct_text">${nivel3_data[contadorL3].answer}</p></div>`;

    }

    l3opC.addEventListener('click', () => {
        count += 50;
        counter.style.color = '#64ffa7';
        counter.innerHTML = count;
        counterM.innerHTML = count;
        counterM.style.color = '#64ffa7';
        respuestaCorrecta();
        l3img.src = nivel3_data[contadorL3].clue_img_px;
        nextq.style.display = "block";
        nextqm.style.display = "block";


    });
    l3opI.addEventListener('click', () => {
        count -= 25;
        counter.innerHTML = count;
        counter.style.color = '#ff5757';
        counterM.style.color = '#ff5757';
        counterM.innerHTML = count;

    });
};
