// Service Detail Page - Load content based on ID
document.addEventListener('DOMContentLoaded', function() {
    const serviceContent = document.getElementById('serviceContent');
    
    if (serviceContent) {
        // Get service ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const serviceId = urlParams.get('id') || '1';
        
        // Service data
        const services = {
            '1': {
                icon: '💻',
                title: 'Zhvillim Web',
                description: 'Ne ofrojmë zgjidhje të plota për zhvillimin e faqeve dhe aplikacioneve web. Ekipi ynë përdor teknologjitë më të fundit për të krijuar aplikacione moderne, të shpejta dhe responsive.',
                details: [
                    'Zhvillim i faqeve web me HTML5, CSS3 dhe JavaScript',
                    'Aplikacione web dinamike me framework moderne',
                    'Dizajn responsive që funksionon në të gjitha pajisjet',
                    'Optimizim për motorët e kërkimit (SEO)',
                    'Integrim me API dhe shërbime të palëve të treta',
                    'Testim dhe debugim i plotë',
                    'Mbështetje dhe mirëmbajtje e vazhdueshme'
                ]
            },
            '2': {
                icon: '📱',
                title: 'Zhvillim Mobile',
                description: 'Krijojmë aplikacione mobile native dhe cross-platform për iOS dhe Android. Aplikacionet tona janë të optimizuara për performancë dhe përvojë përdoruesi të shkëlqyer.',
                details: [
                    'Zhvillim aplikacionesh native për iOS dhe Android',
                    'Aplikacione cross-platform me React Native ose Flutter',
                    'Dizajn UI/UX modern dhe intuitiv',
                    'Integrim me shërbime cloud',
                    'Push notifications dhe funksionalitete të avancuara',
                    'Testim në pajisje të ndryshme',
                    'Publikim në App Store dhe Google Play'
                ]
            },
            '3': {
                icon: '🎨',
                title: 'Dizajn UI/UX',
                description: 'Dizajnojmë interfejse që janë jo vetëm të bukura, por edhe funksionale dhe të lehta për t\'u përdorur. Fokusi ynë është në përvojën e përdoruesit.',
                details: [
                    'Dizajn interfejsi përdoruesi (UI)',
                    'Përvojë përdoruesi (UX) e optimizuar',
                    'Prototipe interaktive',
                    'Dizajn responsive për të gjitha pajisjet',
                    'Përdorim i ngjyrave dhe tipografisë moderne',
                    'Testim me përdorues realë',
                    'Dokumentim dhe udhëzime për zhvilluesit'
                ]
            },
            '4': {
                icon: '🔧',
                title: 'Mirëmbajtje dhe Mbështetje',
                description: 'Ofrojmë shërbime të vazhdueshme mirëmbajtjeje dhe mbështetjeje teknike për të siguruar që sistemi juaj të funksionojë gjithmonë në mënyrë optimale.',
                details: [
                    'Mbështetje teknike 24/7',
                    'Përditësime dhe sigurim të rregullt',
                    'Backup dhe rikuperim të dhënash',
                    'Monitorim i performancës',
                    'Zgjidhje problemesh dhe bug fixes',
                    'Përditësime të sigurisë',
                    'Konsultime teknike'
                ]
            },
            '5': {
                icon: '☁️',
                title: 'Cloud Solutions',
                description: 'Ndihmojmë bizneset tuaja të migrojnë në cloud dhe të përfitojnë nga avantazhet e skalueshmërisë, fleksibilitetit dhe efikasitetit të kostos.',
                details: [
                    'Migrim në cloud (AWS, Azure, Google Cloud)',
                    'Konfigurim dhe menaxhim infrastrukture',
                    'Skalueshmëri automatike',
                    'Siguri dhe backup në cloud',
                    'Konsultime për strategji cloud',
                    'Optimizim kostosh',
                    'Mbështetje dhe monitorim'
                ]
            },
            '6': {
                icon: '🔒',
                title: 'Siguria',
                description: 'Ofrojmë shërbime të plota auditimi dhe përmirësimi të sigurisë për të mbrojtur sistemin dhe të dhënat tuaja nga kërcënimet e mundshme.',
                details: [
                    'Auditim sigurie i plotë',
                    'Vlerësim vulnerabilitetesh',
                    'Penetration testing',
                    'Implementim masash sigurie',
                    'Trajnim për stafin',
                    'Monitorim dhe përgjigje incidentesh',
                    'Përditësime dhe patch management'
                ]
            }
        };
        
        // Get service data
        const service = services[serviceId] || services['1'];
        
        // Build HTML content
        let html = `
            <div class="service-detail-content">
                <div class="service-icon">${service.icon}</div>
                <h1>${service.title}</h1>
                <p>${service.description}</p>
                <h2>Çfarë përfshin ky shërbim:</h2>
                <ul style="list-style: none; padding: 0;">
        `;
        
        service.details.forEach(detail => {
            html += `<li style="padding: 0.5rem 0; color: var(--text-light);">✓ ${detail}</li>`;
        });
        
        html += `
                </ul>
                <div style="margin-top: 2rem;">
                    <a href="contact.html" class="btn btn-primary">Na kontaktoni</a>
                </div>
            </div>
        `;
        
        serviceContent.innerHTML = html;
    }
});

