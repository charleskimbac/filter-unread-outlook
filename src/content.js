main();
async function main() {
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