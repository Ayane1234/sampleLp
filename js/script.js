window.onload = function() {

    const xmark = document.getElementById("xmark");
    const menuBtn = document.getElementById("menuBtn");
    // xmark.style.display = "none";
    // menuBtn.style.display = "block";
}

function clickBtn(){
    // class="panel"を取得する
    const panel=document.getElementsByClassName("panel")[0];

    // id="menuBtn"を取得する
    const menuBtn = document.getElementById("menuBtn");

    // id="xmark"を取得する
    const xmark = document.getElementById("xmark");

    console.log("ボタンは押されてるよ！安心だね！")
    let style = window.getComputedStyle(panel);

    // クリック直後のプロパティの値をコンソールに出す
    console.log("クリック直後のstyle.display:",style.display);
    
    // panelがdisplay:noneだったら、"block"に切り替える
    if (getComputedStyle(panel).display == "none") {
        panel.style.display = "block";
       
        // menuBtnのdisplay=none
        menuBtn.style.display = "none";
        
        // xmarkのstyleをblock
        xmark.style.display = "block";
        
        // if文の中のプロパティをコンソールに出す
        console.log("ifの中のstyle.display:", style.display);
    }else {
    // panelがdisplay:blockだったら、noneに切り替える
        panel.style.display = "none";
        menuBtn.style.display = "block";
        xmark.style.display = "none";
        console.log("elseの中のstyle.display:", style.display);
    }

    // if文をでた後のプロパティの値をコンソールに出す 
    console.log("if文をでた後のstyle.display:", style.display);
} 
