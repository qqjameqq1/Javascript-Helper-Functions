//-------------------------------------------------------
//函式: tab()
//用途: 頁籤程序
//日期: 2012年4月17日
//作者: jeff@max-life
//-------------------------------------------------------

function tab(menu_id,cont_id){
//頁籤程序
    var otab_menu=document.getElementById(menu_id);
    var otab_cont=document.getElementById(cont_id);
    var olis =otab_menu.getElementsByTagName("li");
    var otabs=otab_cont.getElementsByTagName("div");

    for(var i=0;i<olis.length;i++){
        var oli =olis[i];
        var otab=otabs[i];
        oli.olis =olis;
        oli.otabs=otabs;

        oli.setAttribute('inx',i);

        oli.onclick=function(){
            var olis =this.olis;
            var otabs=this.otabs;

            var inx  =this.getAttribute("inx");
            var otab =otabs[inx];

            for(var i=0;i<olis.length;i++){
                try{
                    olis[i].className="off";
                    otabs[i].className="hide";
                }catch(e){}
            }

            try{
                this.className="on";
                otab.className="show";
            }catch(e){}
        }
    }
}