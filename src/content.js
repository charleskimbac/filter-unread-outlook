main();
async function main() {
  const response = await chrome.storage.local.get("isEnabled");
  let isEnabled;

  if (Object.keys(response).length === 0) { // if empty, true by def
    chrome.storage.local.set({isEnabled: true});
    isEnabled = true;
  } else {
    isEnabled = response.isEnabled;
  }

  if (!isEnabled) {
    return;
  }

  let filterButton = document.querySelector("#mailListFilterMenu");
  while (!filterButton || !filterButton.isConnected) {
    filterButton = await waitForElement("#mailListFilterMenu", 500);
    clog("filterButton timed out");
  }
  filterButton.click();

  let unreadButton = document.querySelector("[title='Unread']");
  while (!unreadButton || !unreadButton.isConnected) {
    unreadButton = await waitForElement("[title='Unread']", 500);
    clog("unreadButton timed out");
  }
  unreadButton.click();
}