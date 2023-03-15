function generate_input_field() {
    var much_field = parseInt(document.getElementById("generate_text").value);
    var name_field = document.getElementById("nama_field").value
    var inputValues = []; // tambahkan array untuk menyimpan inputan
    document.getElementById("button_generate_text").disabled = true;
    document.getElementById("generate_text").disabled = true;
    document.getElementById("nama_field").disabled = true;
    for (var i = 0; i < much_field; i++) {
      var br = document.createElement("br");
      var textLabel = document.createElement("label");
      var textField = document.createElement("input");
      textField.type = "text";
      textField.value = "";
      textField.id = "textField"+(i+1);
      textLabel.innerHTML = "Pilihan " + (i + 1) + " : ";
      document.getElementById("form").appendChild(br);
      document.getElementById("form").appendChild(textLabel);
      document.getElementById("form").appendChild(textField);
      document.getElementById("form").appendChild(br);
      inputValues.push(textField); // tambahkan setiap input ke dalam array
    }
    var makeNewButtonOk = document.createElement("button");
    makeNewButtonOk.innerHTML = "Ok";
    makeNewButtonOk.onclick = function() {
      sf(inputValues, name_field); // panggil sf dengan array input sebagai argumen
    };
    document.getElementById("form").appendChild(makeNewButtonOk);
  }
  
  function sf(inputValues, name_field) {
    event.preventDefault();
    var br = document.createElement("br");
    document.getElementById("form").appendChild(br);
    var much_field = inputValues.length; // ambil panjang array sebagai jumlah opsi dropdown
    var selectField = document.createElement("select");
  
    for (var i = 0; i < much_field; i++) {
      var option = document.createElement("option");
      document.getElementById("textField"+(i+1)).disabled = true;
      option.value = i+1;
      option.text = inputValues[i].previousSibling.textContent +" "+inputValues[i].value;
      selectField.appendChild(option);
    }
    var makeNewButtonOk = document.createElement("button");
    makeNewButtonOk.innerHTML = "Ok";
    makeNewButtonOk.onclick = function() {
      var selectedOption = selectField.options[selectField.selectedIndex].text;
      var values = [];
      for (var i = 0; i < inputValues.length; i++) {
        values.push(inputValues[i].value);
      }
      alert("Hallo, nama saya "+name_field+", saya mempunyai sejumlah "+inputValues.length+" pilhan yaitu {" +values.join(", ")+ "} dan saya memilih "+selectedOption);
    };
  
    document.getElementById("form").appendChild(selectField);
    document.getElementById("form").appendChild(makeNewButtonOk);
  }