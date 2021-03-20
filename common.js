//やることを格納・出力する
		var showMessage = function() {
		const showTodo1 = document.getElementById("Todo1");
		const showTodo2 = document.getElementById("Todo2");
		const showTodo3 = document.getElementById("Todo3");
		const inputTodo1 = showTodo1.value;
		const inputTodo2 = showTodo2.value;
		const inputTodo3 = showTodo3.value;
		const output1 = "やること1 = " + inputTodo1;
		const output2 = "やること2 = " + inputTodo2;
		const output3 = "やること3 = " + inputTodo3;
		document.getElementById("output1-message").innerHTML = output1;
		document.getElementById("output2-message").innerHTML = output2;
		document.getElementById("output3-message").innerHTML = output3;

//いつまでを格納する
		const SetWhen1 = document.getElementById("When1");
		const SetWhen2 = document.getElementById("When2");
		const SetWhen3 = document.getElementById("When3");
		const inputWhen1 = SetWhen1.value;
		const inputWhen2 = SetWhen2.value;
		const inputWhen3 = SetWhen3.value;
		const WhenOutput1 = "日付1 = " + inputWhen1;
		const WhenOutput2 = "日付2 = " + inputWhen2;
		const WhenOutput3 = "日付3 = " + inputWhen3;
		document.getElementById("Whenoutput1-message").innerHTML = WhenOutput1;
		document.getElementById("Whenoutput2-message").innerHTML = WhenOutput2;
		document.getElementById("Whenoutput3-message").innerHTML = WhenOutput3;

//備考を記載する
		const SetRemarks1 = document.getElementById("Remarks1");
		const SetRemarks2 = document.getElementById("Remarks2");
		const SetRemarks3 = document.getElementById("Remarks3");
		const inputRemarks1 = SetRemarks1.value;
		const inputRemarks2 = SetRemarks2.value;
		const inputRemarks3 = SetRemarks3.value;
		const RemarksOutput1 = "備考1 = " + inputRemarks1;
		const RemarksOutput2 = "備考2 = " + inputRemarks2;
		const RemarksOutput3 = "備考3 = " + inputRemarks3;
		document.getElementById("Remarksoutput1-message").innerHTML = RemarksOutput1;
		document.getElementById("Remarksoutput2-message").innerHTML = RemarksOutput2;
		document.getElementById("Remarksoutput3-message").innerHTML = RemarksOutput3;
}
