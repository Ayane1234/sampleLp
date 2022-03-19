function clickBtn(){
    // class="panel"を取得する
    const panel=document.getElementsByClassName("panel")[0];
    //HTMLのclass="panel"をnoneにする
    // panel.style.display = "none";

    console.log("ボタンは押されてるよ！安心だね！")
    let style = window.getComputedStyle(panel);

    // クリック直後のプロパティの値をコンソールに出す
    console.log("クリック直後のstyle.display:",style.display);
    
    
    // panelがdisplay:noneだったら、"block"に切り替える
    if (getComputedStyle(panel).display == "none") {
        panel.style.display = "block";
        // if文の中のプロパティをコンソールに出す
        console.log("ifの中のstyle.display:", style.display);
    }else {
    // panelがdisplay:blockだったら、noneに切り替える
        panel.style.display = "none";
        console.log("elseの中のstyle.display:", style.display);
    }

    // if文をでた後のプロパティの値をコンソールに出す 
    console.log("if文をでた後のstyle.display:", style.display);
} 
// href="#"タグを取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
console.log(smoothScrollTrigger.length);
