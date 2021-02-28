// Assignment Code
var generateBtn = document.querySelector("#generate");

// Logic Function
function generatePassword() {
  var charset = "";
  var retVal = "";
  var errorMsg = "Ah, Ah, Ah, You didn't say the magic word!";
  var length = document.querySelector("#length[name=length]").value;
  var checkbox1 = document.querySelector("#lowercase[name=lowercase]");
  var checkbox2 = document.querySelector("#uppercase[name=uppercase]");
  var checkbox3 = document.querySelector("#numeral[name=numeral]");
  var checkbox4 = document.querySelector("#special[name=special]");
  var lowercase = checkbox1.checked;
  var uppercase = checkbox2.checked;
  var numerals = checkbox3.checked;
  var special = checkbox4.checked;

  if (length <8 || length>128){
    alert("Length must be between 8 and 128 characters long.");
    return errorMsg;
  };

  // Character set groups for math
  if (lowercase == true) {
    charset = "abcdefghijklmnopqrstuvwxyz";
  };

  if (uppercase == true) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  if (numerals == true) {
    charset += "0123456789";
  };

  if (special == true) {
    charset += "!@#$%^&*=+";
  };

  if (charset === ""){
        alert("Please check at least one requirement.");
        return errorMsg;
      }

  // Math
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  };

  return retVal;
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword(),
      passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
