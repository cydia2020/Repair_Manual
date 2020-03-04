function showText(){
	var fileName = getCurrentDspFile();
	if( fileName != null )	openSubWnd( "text/" + fileName, "ewd_sub" );
}

function showConnector(){
	var fileName = getCurrentDspFile();
	if( fileName == null ){
		alert( "system code error" );
		return;
	}
	var code = cutExtension(fileName);
	openSubWnd( "../conn.html?code=" + code, "ewd_sub" );
}

function showRelayLocation(){
	confirm("show Relay Location");
}

function showWiringRouting(){
	confirm( "show Wiring Routing" );
}

function showLocation(){
	var fileName = getCurrentDspFile();
	if( fileName == null ){
		alert( "system code error" );
		return;
	}
	var code = cutExtension(fileName);
	openSubWnd( "../location.html?code=" + code, "ewd_sub" );
}

function showLocationList(){
	openSubWnd( "../loclist.html", "ewd_sub" );
}

function showConnectorList(){
	openSubWnd( "../connlist.html", "ewd_sub" );
}


function printPDF(){
	var fileName = getCurrentDspFile();
	if( fileName != null )	openSubWnd( "print/" + fileName, "ewd_print" );
}

function getCurrentDspFile()
{
	if( parent == null ){
		alert( "parent not found" );
		return null;
	}
	
	var fileName = getFileName( getCurrentPDFName() );
	if( fileName.indexOf(".pdf") == -1 ){
		alert( "destination flie not found" );
		return null;
	}
	return fileName;
}

// 2003-12-11 change
function openSubWnd(urlStr, wndName)
{
	w = window.open( urlStr, wndName,
		"left = 0, top = 0, width=715, height=570, toolbar=no, menubar=no, location=no, status=no, resizable=yes, scrollbars=yes" );
	w = window.open( urlStr, wndName,
		"left = 0, top = 0, width=715, height=570, toolbar=no, menubar=no, location=no, status=no, resizable=yes, scrollbars=yes" );
	return w;
}

// test code
function setPDFTest()
{
	if( parent != null ){
		parent.setPDF( "print/ac-mac.pdf" );
	}
	else{
		alert( "error" );
	}
}
