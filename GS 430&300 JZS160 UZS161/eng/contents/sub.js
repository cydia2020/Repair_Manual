function GetTitleName() {
  document.write("<TITLE>" + L_GetModelName() + "</TITLE>");
}

function GetModelName() {
  document.write(L_GetModelName());
}

function L_GetModelName() {
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOMオブジェクトの作成
  xmldoc.async=false;
  var XmlFile="model.xml"; // ホームディレクトリへの相対パス
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML文書の読み込み
  var Root=xmldoc.documentElement; // ルートノードの取得
  var sRet ="";
  var Len=Root.childNodes.length; // 子ノード数の取得
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "modelname") {
      sRet = Root.childNodes(i).text;
      break;
    }
  }
  return sRet;
}

function GetModelCodes() {
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOMオブジェクトの作成
  xmldoc.async=false;
  var XmlFile="model.xml"; // ホームディレクトリへの相対パス
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML文書の読み込み
  var Root=xmldoc.documentElement; // ルートノードの取得
  var sRet ="";
  var Len=Root.childNodes.length; // 子ノード数の取得
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "modelcode") {
      var oChildNode = Root.childNodes.item(i); //子ノードにカレントを移動(menu)

      var ModelLen = oChildNode.childNodes.length;
      for(var j=0;j<ModelLen;j++) {
        if (sRet!="") sRet += "<BR>";
        sRet += oChildNode.childNodes(j).text;
      }
    }
  }
  document.write(sRet);
}
function GetCopyrightYear() {
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOMオブジェクトの作成
  xmldoc.async=false;
  var XmlFile="model.xml"; // ホームディレクトリへの相対パス
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML文書の読み込み
  var Root=xmldoc.documentElement; // ルートノードの取得
  var sRet ="";
  var Len=Root.childNodes.length; // 子ノード数の取得
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "copyrightyear") {
      sRet = Root.childNodes(i).text;
      break;
    }
  }
  document.write(sRet);
}
