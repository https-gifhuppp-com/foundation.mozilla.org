export default () => {
  document.querySelectorAll(`#product-tab`).forEach((element) => {
    const allTabs = element.querySelectorAll("span[data-product-label]");

    // First tab is active by default
    allTabs[0].classList.remove("tw-bg-white", "tw-text-black");
    allTabs[0].classList.add("tw-bg-black", "tw-text-white");

    allTabs.forEach((tabButton) => {
      tabButton.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        // reset active tab stylings
        for (var i = 0; i < allTabs.length; i++) {
          allTabs[i].classList.remove("tw-bg-black", "tw-text-white");
          allTabs[i].classList.add("tw-bg-white", "tw-text-black");
        }

        // set active tab styling
        event.currentTarget.classList.remove("tw-bg-white", "tw-text-black");
        event.currentTarget.classList.add("tw-bg-black", "tw-text-white");

        // set active tab content
        const tabIndex = parseInt(
          event.currentTarget.getAttribute("data-product-label")
        );
        document.getElementById(
          "product-tab-content"
        ).style.transform = `translateX(${tabIndex * -100}%)`;
      });
    });
  });
};
