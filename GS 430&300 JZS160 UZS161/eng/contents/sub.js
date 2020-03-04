function GetTitleName() {
  document.write("<TITLE>" + L_GetModelName() + "</TITLE>");
}

function GetModelName() {
  document.write(L_GetModelName());
}

function L_GetModelName() {
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOM�I�u�W�F�N�g�̍쐬
  xmldoc.async=false;
  var XmlFile="model.xml"; // �z�[���f�B���N�g���ւ̑��΃p�X
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML�����̓ǂݍ���
  var Root=xmldoc.documentElement; // ���[�g�m�[�h�̎擾
  var sRet ="";
  var Len=Root.childNodes.length; // �q�m�[�h���̎擾
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "modelname") {
      sRet = Root.childNodes(i).text;
      break;
    }
  }
  return sRet;
}

function GetModelCodes() {
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOM�I�u�W�F�N�g�̍쐬
  xmldoc.async=false;
  var XmlFile="model.xml"; // �z�[���f�B���N�g���ւ̑��΃p�X
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML�����̓ǂݍ���
  var Root=xmldoc.documentElement; // ���[�g�m�[�h�̎擾
  var sRet ="";
  var Len=Root.childNodes.length; // �q�m�[�h���̎擾
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "modelcode") {
      var oChildNode = Root.childNodes.item(i); //�q�m�[�h�ɃJ�����g���ړ�(menu)

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
  var xmldoc = new ActiveXObject("Microsoft.XMLDOM"); // DOM�I�u�W�F�N�g�̍쐬
  xmldoc.async=false;
  var XmlFile="model.xml"; // �z�[���f�B���N�g���ւ̑��΃p�X
  var HomePath="./"
  xmldoc.load(HomePath + XmlFile); // XML�����̓ǂݍ���
  var Root=xmldoc.documentElement; // ���[�g�m�[�h�̎擾
  var sRet ="";
  var Len=Root.childNodes.length; // �q�m�[�h���̎擾
  for(var i=0;i<Len;i++) {
    if (Root.childNodes(i).nodeName == "copyrightyear") {
      sRet = Root.childNodes(i).text;
      break;
    }
  }
  document.write(sRet);
}
