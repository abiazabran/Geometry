function calculate(inputField) {
  const inputFildStr = document.querySelector(inputField);
  const inputFildValue = parseFloat(inputFildStr.value);
  inputFildStr.value = '';
  return inputFildValue;
}

function setArea(element, areaValue) {
  const setArea = document.querySelector(element);
  setArea.innerText = areaValue;
}

function core(element1, element2) {
  const firstInput = calculate(element1);
  const secondInput = calculate(element2);
  const multiply = firstInput * secondInput;
  return multiply;
}

let allLog = [];

function calculationAntry(areaType, area) {
  allLog.push({
    areaType,
    area,
    id: Date.now().toString(),
  });
  renderLogList(allLog);
}

function deleteLog(id) {
  console.log('deleteLog', id);
  const tempArr = [...allLog].filter((item) => item.id !== id);
  allLog = tempArr;
  renderLogList(allLog);
}

function renderLogList(arr) {
  const calculationLog = document.querySelector('.log-list');
  let html = ``;
  arr.map((item, idx) => {
    html += `
    <div class="inner-txt">
  ${idx + 1}. ${item.areaType} ${item.area}  <sub>cm</sub>
  <button onclick="deleteLog('${item.id}')" class="btn btn-sm btn-succes bg-red-600 text-white ml-6 mb-2 font-bold">Delete</button>
  </div>
    `;
  });
  calculationLog.innerHTML = html;
}

function clearBtn() {
  allLog = [];
  renderLogList(allLog);
}
