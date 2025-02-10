main();
async function main() {
  const response = await chrome.storage.local.get("isEnabled");
  let isEnabled;

  if (Object.keys(response).length === 0 ) { // if empty, true by def
    chrome.storage.local.set({isEnabled: true});
    isEnabled = true;
  } else {
    isEnabled = response.isEnabled;
  }

  // update checkbox
  const checkboxElement = document.querySelector("#enabledCheckbox");
  if (isEnabled) {
    checkboxElement.checked = true;
  } else {
    checkboxElement.checked = false;
  }

  // listener
  checkboxElement.addEventListener("change", () => {
    if (checkboxElement.checked === true) { // now true
      chrome.storage.local.set({isEnabled: true});
    } else {
      chrome.storage.local.set({isEnabled: false});
    }
  });
}