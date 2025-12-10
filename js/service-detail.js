// Service Detail Page - Load content based on ID
document.addEventListener('DOMContentLoaded', function() {
    const serviceDetail = document.getElementById('serviceDetail');
    
    if (serviceDetail) {
        // Get service ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const serviceId = urlParams.get('id') || '1';
        
        // Service data
        const services = {
            '1': {
                icon: '💇',
                title: 'Stilizim Flokësh',
                description: 'Shërbime profesionale për flokët tuaj me teknika moderne dhe produkte premium.',
                details: [
                    'Prerje flokësh për burra dhe gra me stil moderne',
                    'Ngjyrosje profesionale me produkte premium',
                    'Balayage dhe highlights për një pamje natyrale',
                    'Stilizim për evente speciale (martesa, festa, etj.)',
                    'Trajtime për flokët për shëndet dhe shkëlqim',
                    'Konsultime për stilin më të përshtatshëm për ju'
                ],
                price: '2000 - 5000 lekë',
                duration: '1-3 orë'
            },
            '2': {
                icon: '💅',
                title: 'Kujdesi i Thonjve',
                description: 'Manikyr dhe pedikyr profesionale me dizajn artistik për thonjtë tuaj.',
                details: [
                    'Manikyr klasik me oshmë dhe trajtim',
                    'Manikyr gel për qëndrueshmëri më të gjatë',
                    'Pedikyr relaksuese me masazh',
                    'Dizajn thonjsh artistik dhe kreativ',
                    'Trajtim thonjsh për shëndet',
                    'Produkte premium për rezultate më të mira'
                ],
                price: '1500 - 3000 lekë',
                duration: '45 min - 1.5 orë'
            },
            '3': {
                icon: '✨',
                title: 'Trajtim i Fytyrës',
                description: 'Trajtime fytyre profesionale për lëkurë të shëndetshme, të re dhe të shkëlqyer.',
                details: [
                    'Trajtim fytyre klasik për pastrim dhe hidratim',
                    'Trajtim anti-moshë për reduktimin e rrudhave',
                    'Pastrim i thellë i lëkurës për probleme',
                    'Masazh fytyre për relaksim dhe qarkullim',
                    'Produkte organike dhe natyrore',
                    'Konsultime për kujdesin e lëkurës'
                ],
                price: '3000 - 6000 lekë',
                duration: '1-1.5 orë'
            },
            '4': {
                icon: '💆',
                title: 'Masazh Terapi',
                description: 'Shërbime masazhi relaksuese dhe terapeutike për shëndet dhe mirëqenie.',
                details: [
                    'Masazh relaksues për reduktimin e stresit',
                    'Masazh terapeutik për dhimbje muskulore',
                    'Masazh sportiv për atletë',
                    'Masazh aromaterapi me vajra esenciale',
                    'Masazh për shpinë dhe qafë',
                    'Masazh për këmbë për relaksim'
                ],
                price: '2500 - 5000 lekë',
                duration: '1-1.5 orë'
            }
        };
        
        // Get service data
        const service = services[serviceId] || services['1'];
        
        // Build HTML content
        let html = `
            <div class="detail-content">
                <div class="detail-icon">${service.icon}</div>
                <h1>${service.title}</h1>
                <p class="detail-description">${service.description}</p>
                <div class="detail-info">
                    <div class="info-item">
                        <strong>Çmimi:</strong> ${service.price}
                    </div>
                    <div class="info-item">
                        <strong>Kohëzgjatja:</strong> ${service.duration}
                    </div>
                </div>
                <h2>Çfarë përfshin:</h2>
                <ul class="detail-list">
                    ${service.details.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="contact.html" class="btn-primary">Rezervo Termin</a>
            </div>
        `;
        
        serviceDetail.innerHTML = html;
    }
});
