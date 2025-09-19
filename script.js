function iniciarAbas() {
document.querySelectorAll('.tab-container').forEach(container => {
    if (!container.hasAttribute('data-initialized')) {
        const uniqueId = Math.floor(Math.random() * 100000); // Gerar um ID único aleatório
        const tabs = container.querySelectorAll('.tab-buttons label');
        const contents = container.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            const tabId = `${tab.getAttribute('data-tab')}-${uniqueId}`;
            tab.setAttribute('data-tab', tabId);
        });

        contents.forEach(content => {
            const contentId = `${content.getAttribute('data-content')}-${uniqueId}`;
            content.setAttribute('data-content', contentId);
        });

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                contents.forEach(content => {
                    content.classList.remove('active');
                });
                tabs.forEach(label => {
                    label.style.borderBottom = "thick solid #292929";
                });
                container.querySelector(`.tab-content[data-content="${tab.getAttribute('data-tab')}"]`).classList.add('active');
                tab.style.borderBottom = "3px solid var(--cor-grupo)";
            });
        });
        tabs[0].click();
        container.setAttribute('data-initialized', 'true');
    }
});
  console.log("Abas iniciadas ou reiniciadas!");
}

document.addEventListener("DOMContentLoaded", iniciarAbas);

const observer = new MutationObserver(() => {
  iniciarAbas();
});

observer.observe(document.body, { childList: true, subtree: true });

