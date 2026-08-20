document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar ícones da biblioteca Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Menu Mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a, button').forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // 3. Accordion Interativo (Doenças Tratadas)
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const btn = item.querySelector('.accordion-btn');

        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// 4. Integração Dinâmica com WhatsApp (Curitiba/PR)
function iniciarAgendamento(assunto = 'Consulta Gastroenterológica') {
    // Insira o número oficial com DDD 41 no lugar do modelo abaixo:
    const telefone = '554191872709'; 
    const mensagem = `Olá! Gostaria de obter informações sobre agendamento de ${assunto} com a Dra. Ivete Hafemann em Curitiba.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}