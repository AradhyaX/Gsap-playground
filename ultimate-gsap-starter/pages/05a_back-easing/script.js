import gsap from "gsap";

const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');
const tabRow = document.querySelector('.tab-row');

const updateIndicator = (target) => {
  // Animation logic to be added
  console.log("Updating indicator for:", target);
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    updateIndicator(tab);
  });
});

const activeTab = document.querySelector('.tab.active');
if (activeTab) {
  updateIndicator(activeTab);
}
