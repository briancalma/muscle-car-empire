//last update : 2002/07/11
//modify by Benjamin Chang

var isIE = document.all;
var isNS = document.layers;

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);


function MM_popupMsg(msg) { //v1.0
  alert(msg);
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_displayStatusMsg(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}

function MM_controlSound(x, _sndObj, sndFile) { //v3.0
  var i, method = "", sndObj = eval(_sndObj);
  if (sndObj != null) {
    if (navigator.appName == 'Netscape') method = "play";
    else {
      if (window.MM_WMP == null) {
        window.MM_WMP = false;
        for(i in sndObj) if (i == "ActiveMovie") {
          window.MM_WMP = true; break;
      } }
      if (window.MM_WMP) method = "play";
      else if (sndObj.FileName) method = "run";
  } }
  if (method) eval(_sndObj+"."+method+"()");
  else window.location = sndFile;
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

/*USAGE:MM_showHideLayers('Layer1','','hide','Layer2','','show');*/
function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

/*USAGE:MM_setTextOfLayer('Layer1','','This is a test message!');*/
function MM_setTextOfLayer(objName,x,newText) { //v3.0
  if ((obj=MM_findObj(objName))!=null) with (obj)
    if (navigator.appName=='Netscape') {document.write(unescape(newText)); document.close();}
    else innerHTML = unescape(newText);
}

/*USAGE:MM_changeProp('Layer1','','style.top','500','LAYER');*/
/*USAGE:MM_changeProp('Layer1','','style.left','500','LAYER');*/
/*USAGE:MM_changeProp('Layer1','','top','500','LAYER');*/
/*USAGE:MM_changeProp('Layer1','','left','500','LAYER');*/
function MM_changeProp(objName,x,theProp,theValue) { //v3.0
  var obj = MM_findObj(objName);
  if (obj && (theProp.indexOf("style.")==-1 || obj.style)) eval("obj."+theProp+"='"+theValue+"'");
}

function Ben_changePosition(objName,left,top) {
  if(isIE) {
    MM_changeProp(objName,'','style.top',top,'LAYER');
    MM_changeProp(objName,'','style.left',left,'LAYER');
  }
  if(isNS) {
    MM_changeProp(objName,'','top',top,'LAYER');
    MM_changeProp(objName,'','left',left,'LAYER');
  }
}

function MM_dragLayer(objName,x,hL,hT,hW,hH,toFront,dropBack,cU,cD,cL,cR,targL,targT,tol,dropJS,et,dragJS) { //v3.0
  //Copyright 1998 Macromedia, Inc. All rights reserved.
  var i,j,aLayer,retVal,curDrag=null,NS=(navigator.appName=='Netscape'), curLeft, curTop;
  if (!document.all && !document.layers) return false;
  retVal = true; if(!NS && event) event.returnValue = true;
  if (MM_dragLayer.arguments.length > 1) {
    curDrag = MM_findObj(objName); if (!curDrag) return false;
    if (!document.allLayers) { document.allLayers = new Array();
      with (document) if (NS) { for (i=0; i<layers.length; i++) allLayers[i]=layers[i];
        for (i=0; i<allLayers.length; i++) if (allLayers[i].document && allLayers[i].document.layers)
          with (allLayers[i].document) for (j=0; j<layers.length; j++) allLayers[allLayers.length]=layers[j];
      } else for (i=0;i<all.length;i++) if (all[i].style&&all[i].style.position) allLayers[allLayers.length]=all[i];}
    curDrag.MM_dragOk=true; curDrag.MM_targL=targL; curDrag.MM_targT=targT;
    curDrag.MM_tol=Math.pow(tol,2); curDrag.MM_hLeft=hL; curDrag.MM_hTop=hT;
    curDrag.MM_hWidth=hW; curDrag.MM_hHeight=hH; curDrag.MM_toFront=toFront;
    curDrag.MM_dropBack=dropBack; curDrag.MM_dropJS=dropJS;
    curDrag.MM_everyTime=et; curDrag.MM_dragJS=dragJS;
    curDrag.MM_oldZ = (NS)?curDrag.zIndex:curDrag.style.zIndex;
    curLeft= (NS)?curDrag.left:curDrag.style.pixelLeft; curDrag.MM_startL = curLeft;
    curTop = (NS)?curDrag.top:curDrag.style.pixelTop; curDrag.MM_startT = curTop;
    curDrag.MM_bL=(cL<0)?null:curLeft-cL; curDrag.MM_bT=(cU<0)?null:curTop -cU;
    curDrag.MM_bR=(cR<0)?null:curLeft+cR; curDrag.MM_bB=(cD<0)?null:curTop +cD;
    curDrag.MM_LEFTRIGHT=0; curDrag.MM_UPDOWN=0; curDrag.MM_SNAPPED=false; //use in your JS!
    document.onmousedown = MM_dragLayer; document.onmouseup = MM_dragLayer;
    if (NS) document.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);
  } else {
    var theEvent = ((NS)?objName.type:event.type);
    if (theEvent == 'mousedown') {
      var mouseX = (NS)?objName.pageX : event.clientX + document.body.scrollLeft;
      var mouseY = (NS)?objName.pageY : event.clientY + document.body.scrollTop;
      var maxDragZ=null; document.MM_maxZ = 0;
      for (i=0; i<document.allLayers.length; i++) { aLayer = document.allLayers[i];
        var aLayerZ = (NS)?aLayer.zIndex:aLayer.style.zIndex;
        if (aLayerZ > document.MM_maxZ) document.MM_maxZ = aLayerZ;
        var isVisible = (((NS)?aLayer.visibility:aLayer.style.visibility).indexOf('hid') == -1);
        if (aLayer.MM_dragOk != null && isVisible) with (aLayer) {
          var parentL=0; var parentT=0;
          if (!NS) { parentLayer = aLayer.parentElement;
            while (parentLayer != null && parentLayer.style.position) {
              parentL += parentLayer.offsetLeft; parentT += parentLayer.offsetTop;
              parentLayer = parentLayer.parentElement; } }
          var tmpX=mouseX-(((NS)?pageX:style.pixelLeft+parentL)+MM_hLeft);
          var tmpY=mouseY-(((NS)?pageY:style.pixelTop +parentT)+MM_hTop);
          var tmpW = MM_hWidth;  if (tmpW <= 0) tmpW += ((NS)?clip.width :offsetWidth);
          var tmpH = MM_hHeight; if (tmpH <= 0) tmpH += ((NS)?clip.height:offsetHeight);
          if ((0 <= tmpX && tmpX < tmpW && 0 <= tmpY && tmpY < tmpH) && (maxDragZ == null
              || maxDragZ <= aLayerZ)) { curDrag = aLayer; maxDragZ = aLayerZ; } } }
      if (curDrag) {
        document.onmousemove = MM_dragLayer; if (NS) document.captureEvents(Event.MOUSEMOVE);
        curLeft = (NS)?curDrag.left:curDrag.style.pixelLeft;
        curTop = (NS)?curDrag.top:curDrag.style.pixelTop;
        MM_oldX = mouseX - curLeft; MM_oldY = mouseY - curTop;
        document.MM_curDrag = curDrag;  curDrag.MM_SNAPPED=false;
        if(curDrag.MM_toFront) {
          eval('curDrag.'+((NS)?'':'style.')+'zIndex=document.MM_maxZ+1');
          if (!curDrag.MM_dropBack) document.MM_maxZ++; }
        retVal = false; if(!NS) event.returnValue = false;
    } } else if (theEvent == 'mousemove') {
      if (document.MM_curDrag) with (document.MM_curDrag) {
        var mouseX = (NS)?objName.pageX : event.clientX + document.body.scrollLeft;
        var mouseY = (NS)?objName.pageY : event.clientY + document.body.scrollTop;
        newLeft = mouseX-MM_oldX; newTop  = mouseY-MM_oldY;
        if (MM_bL!=null) newLeft = Math.max(newLeft,MM_bL);
        if (MM_bR!=null) newLeft = Math.min(newLeft,MM_bR);
        if (MM_bT!=null) newTop  = Math.max(newTop ,MM_bT);
        if (MM_bB!=null) newTop  = Math.min(newTop ,MM_bB);
        MM_LEFTRIGHT = newLeft-MM_startL; MM_UPDOWN = newTop-MM_startT;
        if (NS) {left = newLeft; top = newTop;}
        else {style.pixelLeft = newLeft; style.pixelTop = newTop;}
        if (MM_dragJS) eval(MM_dragJS);
        retVal = false; if(!NS) event.returnValue = false;
    } } else if (theEvent == 'mouseup') {
      document.onmousemove = null;
      if (NS) document.releaseEvents(Event.MOUSEMOVE);
      if (NS) document.captureEvents(Event.MOUSEDOWN); //for mac NS
      if (document.MM_curDrag) with (document.MM_curDrag) {
        if (typeof MM_targL =='number' && typeof MM_targT == 'number' &&
            (Math.pow(MM_targL-((NS)?left:style.pixelLeft),2)+
             Math.pow(MM_targT-((NS)?top:style.pixelTop),2))<=MM_tol) {
          if (NS) {left = MM_targL; top = MM_targT;}
          else {style.pixelLeft = MM_targL; style.pixelTop = MM_targT;}
          MM_SNAPPED = true; MM_LEFTRIGHT = MM_startL-MM_targL; MM_UPDOWN = MM_startT-MM_targT; }
        if (MM_everyTime || MM_SNAPPED) eval(MM_dropJS);
        if(MM_dropBack) {if (NS) zIndex = MM_oldZ; else style.zIndex = MM_oldZ;}
        retVal = false; if(!NS) event.returnValue = false; }
      document.MM_curDrag = null;
    }
    if (NS) document.routeEvent(objName);
  } return retVal;
}

function MyMoveTo(x,y){
	if(!isNaN(x)&&!isNaN(y)){
		window.moveTo(x,y);
	}
}
function MyMoveBy(x,y){
	if(!isNaN(x)&&!isNaN(y)){
		window.moveBy(x,y);
	}
}
function MyResizeTo(w,h){
	if(!isNaN(w)&&!isNaN(h)){
		window.resizeTo(w,h);
	}
}
function MyResizeBy(w,h){
	if(!isNaN(w)&&!isNaN(h)){
		window.resizeBy(w,h);
	}
}
function MyBiggerBy(up,down,left,right){
	if(!isNaN(up)&&!isNaN(down)&&!isNaN(left)&&!isNaN(right)){
		if(up>0){
			MyResizeBy(0,up);
			MyMoveBy(0,-up);
		}
		if(down>0){
			MyResizeBy(0,down);
		}
		if(left>0){
			MyResizeBy(left,0);
			MyMoveBy(-left,0);
		}
		if(right>0){
			MyResizeBy(right,0);
		}
	}
}

function Trim(str){
	
	str = str.replace(/^\s+/,"");
	str = str.replace(/\s+$/,"");
	return str;
}
function ValidEmail(emailtoCheck)
{

	var regExp = /^[^@^\s]+@[^\.@^\s]+(\.[^\.@^\s]+)+$/;
	if ( emailtoCheck.match(regExp) )
		return true;
	else
		return false;
}
function checkID(id)
{

	var regExp = /^[a-zA-Z][1,2]\d{8}$/;
	if ( id.match(regExp) )
		return true;
	else
		return false;
}
function checkCarno(carno,cartype)
{
	
	if(cartype==1){
		var regExp1 = /^\w{2}-\d{4}$/;
		var regExp2 = /^\d{4}-\w{2}$/;
		var regExp3 = /^\w{1}d{1}-\d{4}$/;
		if ( carno.match(regExp1) || carno.match(regExp2) || carno.match(regExp3))
			return true;
		else
			return false;
	}
	else if(cartype==2){
		var regExp1 = /^\w{2}-\d{3}$/;
		var regExp2 = /^\d{3}-\w{2}$/;
		if ( carno.match(regExp1) || carno.match(regExp2))
			return true;
		else
			return false;
	}
	else if(cartype==0){
		return (checkCarno(carno,1)|checkCarno(carno,2));
	}
	else{

		return false;
	}
}
function checkMobile(mobile)
{
	
	var regExp = /^\d{10}$/;
	if ( mobile.match(regExp) )
		return true;
	else
		return false;
}
function checkSmallDateTime(sdt)
{
	
	var regExp = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
	if ( sdt.match(regExp) )
		return true;
	else
		return false;
}
function checkInvoice(invoice)
{
	
	var regExp = /^\d{8}$/;
	if ( invoice.match(regExp) )
		return true;
	else
		return false;
}
function CheckFormData(frm, CheckF, CheckFN, CheckFType, Lang)
{
	/*
	var CheckF = new Array('');
	var CheckFN = new Array('');
	var CheckFType = new Array('');
	*/
	
	var cf;
	var i, sel, chk;
	//if (arguments.length < 5) { Lang = 'TC' ;}

	switch(Lang)
	{
		case 'EN':
			ph1 = 'Please fill ';
			ph2 = ' is invalid!';
			ph3 = 'Please check one: ';
			ph4 = 'Please check one: ';
			ph5 = 'Please select: ';
			break;
		//default:
		//break;
    }

    for(i=0;i<CheckF.length;i++){
		element = frm.elements[CheckF[i]];

		if(CheckFType[i] == "text"
				|| CheckFType[i] == "textarea"
				|| CheckFType[i] == "num"
				|| CheckFType[i] == "idno"
				|| CheckFType[i] == "email"
				|| CheckFType[i] == "carno"
				|| CheckFType[i] == "mobile"
				|| CheckFType[i] == "sdt"
				|| CheckFType[i] == "invoice"
				) {
			if(Trim(element.value) == "") {
				alert(ph1 + CheckFN[i] + " !");
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "num" && isNaN(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "idno" && !checkID(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "email" && !ValidEmail(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "carno" && !checkCarno(element.value,0)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "mobile" && !checkMobile(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}

			if(CheckFType[i] == "sdt" && !checkSmallDateTime(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}
			
			if(CheckFType[i] == "invoice" && !checkInvoice(element.value)) {
				alert(CheckFN[i] + ph2);
				if(element.type!="hidden")element.focus();
				return false;
			}
		}
		else if(CheckFType[i] == "radio") {
			if(isNaN(element.length)){
				if(!element.checked){
					alert(ph3 + CheckFN[i] + " !");
					element.focus();
					return false;
				}
			}
			else{
				sel = false;
				for(j=0; j<element.length; j++) {
					sel |= element[j].checked;
				}
				if(! sel) {
					alert(ph3 + CheckFN[i] + " !");
					element[0].focus();
					return false;
				}
			}
		}
		else if(CheckFType[i] == "checkbox") {
			chk = false;
			FirstElement = 0;
			for(j=0; j<frm.elements.length; j++) {
				if(frm.elements[j].name == CheckF[i]) {
					if(FirstElement==0) FirstElement=j;
					chk |= frm.elements[j].checked;
				}
			}
			if(! chk) {
				alert(ph4 + CheckFN[i] + " !");
				frm.elements[FirstElement].focus();
				return false;
			}
		}
		else if (CheckFType[i] == "select") {
			if (element.selectedIndex<0 || element.options[element.selectedIndex].value=="") {
				alert(ph5 + CheckFN[i] + " !");
				element.focus();
				return false;
			}
		}
	}
	return true;
}






var isRecodeOrangeReadOnlyFields = false;
var RecodeOrangeReadOnlyFields = "";
function setFormReadOnly(frmName, readOnly){
	var frm = document.forms[frmName];
	for(i=0;i<frm.elements.length;i++){

		if(frm.elements[i].type=="text"
			||frm.elements[i].type=="textarea"){

			if(!isRecodeOrangeReadOnlyFields && frm.elements[i].readOnly)
				RecodeOrangeReadOnlyFields += "[" + frm.elements[i].name + "],"

			if(RecodeOrangeReadOnlyFields.indexOf("[" + frm.elements[i].name + "]")==-1){
				frm.elements[i].readOnly = readOnly;
				if(frm.elements[i].readOnly)
					frm.elements[i].style.backgroundColor = "#d3d3d3";
				else
					frm.elements[i].style.backgroundColor = "";
			}
		}
	}
	isRecodeOrangeReadOnlyFields = true;
}

function numerr1(Vip_number){
   var haserr=0   //建立錯誤發生旗標,預設是沒有錯誤的     
			
   if(Vip_number.length==0){
	 return 0;
   }
   for(i=0;i<Vip_number.length;i++){   //從第1個數字到最後數字開始檢測     
	 if(parseInt(Vip_number.substring(i,i+1))>0 || Vip_number.substring(i,i+1)=='0')
	   continue;    //就往下一個去檢測
	 else            //若是發現有非數字的字元 
       haserr=1;   //就把錯誤旗標設為1的發生狀態
	   break  		//中止迴圈的執行
   }	
   if(haserr==1)   //如果發生了錯誤
	 return 1;   //就回覆錯誤為true
   else    
	 return 0;
}

function chk2(intext){
	var invalue = intext.value; 
	//輸入不是一個數字時	
	if(numerr1(invalue))
	{
	 alert("Error");
     intext.value="";
	 intext.select();
     return false;
	}
}

function Chktelm(tel) {
   if(tel.length>=9 && !numerr1(tel)) {return false;}
   return true;
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}