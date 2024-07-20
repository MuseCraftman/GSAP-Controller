function createController (gsapAnimation) {
    var animation = gsapAnimation;
    
    // Create the HTML structure
    const gsapComponent = $('<div>', { id: 'gsap-component-controllers-wrapper' }).append(
        $('<div>', { id: 'gsap-controllers-container' }).append(
            $('<div>', { id: 'gsap-controllers' }).append(
                $('<div>', { id: 'drag'}).html(`
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#616161"/>
                        <circle cx="10" cy="2" r="2" fill="#616161"/>
                        <circle cx="18" cy="2" r="2" fill="#616161"/>
                        <circle cx="2" cy="8" r="2" fill="#616161"/>
                        <circle cx="10" cy="8" r="2" fill="#616161"/>
                        <circle cx="18" cy="8" r="2" fill="#616161"/>
                    </svg>
                `),
                $('<div>', { id: 'slider' }).append(
                    $('<input>', { type: 'range', id: 'slider', min: '0', max: '1', step: '0.001', value: '0' })
                ),
                $('<div>', { id: 'gsap-controllers-time' }).append(
                    $('<div>', { id: 'time-line-text-start' }).text('0.0'),
                    $('<div>', { id: 'time-line-text-end' }).text('10.0')
                ),
                $('<div>', { id: 'gsap-controllers-buttons' }).append(
                    $('<div>', { id: 'loop'}).html(`
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2L21 6M21 6L17 10M21 6H7.8C6.11984 6 5.27976 6 4.63803 6.32698C4.07354 6.6146 3.6146 7.07354 3.32698 7.63803C3 8.27976 3 9.11984 3 10.8V11M3 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V13M3 18L7 22M3 18L7 14" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    `),
                    $('<div>', { id: 'button_restart' }).html(`
                        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 29.3333C26.3637 29.3333 32.3333 23.3637 32.3333 16C32.3333 8.6362 26.3637 2.66667 19 2.66667C11.6362 2.66667 5.66667 8.6362 5.66667 16C5.66667 23.3637 11.6362 29.3333 19 29.3333Z" stroke="#0AED49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.6667 12.8C13.6667 12.0533 13.6667 11.6799 13.812 11.3947C13.9398 11.1438 14.1438 10.9398 14.3947 10.812C14.6799 10.6667 15.0533 10.6667 15.8 10.6667H22.2C22.9468 10.6667 23.3201 10.6667 23.6053 10.812C23.8563 10.9398 24.0601 11.1438 24.188 11.3947C24.3333 11.6799 24.3333 12.0533 24.3333 12.8V19.2C24.3333 19.9468 24.3333 20.3201 24.188 20.6053C24.0601 20.8563 23.8563 21.0601 23.6053 21.188C23.3201 21.3333 22.9468 21.3333 22.2 21.3333H15.8C15.0533 21.3333 14.6799 21.3333 14.3947 21.188C14.1438 21.0601 13.9398 20.8563 13.812 20.6053C13.6667 20.3201 13.6667 19.9468 13.6667 19.2V12.8Z" stroke="#0AED49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `),
                    $('<div>', { id: 'button-pause' }).html(`
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 29.3333C23.3637 29.3333 29.3333 23.3637 29.3333 16C29.3333 8.6362 23.3637 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3637 8.6362 29.3333 16 29.3333Z" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.6667 11.9538C12.6667 11.3174 12.6667 10.9992 12.7997 10.8216C12.9155 10.6668 13.0929 10.5699 13.2858 10.5561C13.5072 10.5403 13.7748 10.7124 14.3101 11.0565L20.6043 15.1028C21.0688 15.4013 21.3011 15.5507 21.3812 15.7405C21.4513 15.9064 21.4513 16.0936 21.3812 16.2595C21.3011 16.4493 21.0688 16.5987 20.6043 16.8972L14.3101 20.9435C13.7748 21.2876 13.5072 21.4597 13.2858 21.4439C13.0929 21.4301 12.9155 21.3332 12.7997 21.1784C12.6667 21.0008 12.6667 20.6827 12.6667 20.0463V11.9538Z" fill="#0AED49" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `),
                    $('<div>', {}).append(
                        $('<select>', { id: 'speed' }).append(
                            $('<option>', { value: '0.1' }).text('0.1x'),
                            $('<option>', { value: '0.25' }).text('0.25x'),
                            $('<option>', { value: '0.5' }).text('0.5x'),
                            $('<option>', { value: '1', selected: 'selected' }).text('1x'),
                            $('<option>', { value: '1.25' }).text('1.25x'),
                            $('<option>', { value: '1.5' }).text('1.5x'),
                            $('<option>', { value: '2' }).text('2x'),
                            $('<option>', { value: '4' }).text('4x'),
                            $('<option>', { value: '10' }).text('10x'),
                        )
                    )
                )
            )
        )
    );
    $('body').append(gsapComponent);

    // getting hold of elements
    const toggleButton = $('#button-pause');
    const slider = $('#slider input');
    const speedSelect = $('#speed'); 
    const timeDisplayStart = $('#time-line-text-start'); 
    const timeDisplayEnd = $('#time-line-text-end');
    const loopToggle = $("#loop");
    const buttonRestart = $("#button_restart");
    const gsapControllers = $("#gsap-controllers");

    // making it draggable
    gsap.registerPlugin(Draggable);
    Draggable.create(gsapControllers, {
        trigger: $("#drag"),
        bounds: window
    });

    // making the slider functional
    animation.vars.onUpdate = updateSlider;
    if (!animation.paused()) {
        animation.invalidate().restart();
    }
    slider.on('input', function() {
        animation.progress(slider.val()).pause();
        updatePauseHtml();
    });
    speedSelect.on('change', function() {
        animation.timeScale(speedSelect.val());
    });
    function updateSlider() {
        slider.val(animation.progress());
        timeDisplayStart.text(`Time: ${(animation.time()).toFixed(2)}s`); 
        timeDisplayEnd.text(`${animation.duration()}s`);
    }

    // pause/resume
    toggleButton.on('click', function() {
        pauseToggle();
    });
    $(document).on('keydown', (event) => {
        if (event.which === 32) {
            event.preventDefault();
            pauseToggle();
        }
    });
        
    // restart
    buttonRestart.on('click', function() {
        animation.restart();
    });

    // loop toggle
    loopToggle.on('click', function() {
        if (animation.repeat() === 0) {
            animation.repeat(-1);
            gsap.to(loopToggle, {opacity: 1, duration: 0.1, ease: "power1.Out"})
            animation.restart();
        } else {
            animation.repeat(0);
            gsap.to(loopToggle, {opacity: 0.6, duration: 0.1, ease: "power1.Out"})
            animation.restart();
        }
    });

    // some front-end stuff
    updatePauseHtml();
    if (animation.repeat() === 0) {
        gsap.to(loopToggle, {opacity: 0.6, duration: 0, ease: "none"})
    } else {
        gsap.to(loopToggle, {opacity: 1, duration: 0, ease: "none"})
    }

    // helpers
    function pauseToggle () {
        if (animation.paused()) {
            animation.resume(); // resume the animation
            toggleButton.html(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 20V12M19.3333 20V12M29.3333 16C29.3333 23.3637 23.3637 29.3333 16 29.3333C8.6362 29.3333 2.66667 23.3637 2.66667 16C2.66667 8.6362 8.6362 2.66667 16 2.66667C23.3637 2.66667 29.3333 8.6362 29.3333 16Z" stroke="#0AED49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `);
        } else {
            animation.pause(); // pause the animation
            toggleButton.html(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 29.3333C23.3637 29.3333 29.3333 23.3637 29.3333 16C29.3333 8.6362 23.3637 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3637 8.6362 29.3333 16 29.3333Z" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.6667 11.9538C12.6667 11.3174 12.6667 10.9992 12.7997 10.8216C12.9155 10.6668 13.0929 10.5699 13.2858 10.5561C13.5072 10.5403 13.7748 10.7124 14.3101 11.0565L20.6043 15.1028C21.0688 15.4013 21.3011 15.5507 21.3812 15.7405C21.4513 15.9064 21.4513 16.0936 21.3812 16.2595C21.3011 16.4493 21.0688 16.5987 20.6043 16.8972L14.3101 20.9435C13.7748 21.2876 13.5072 21.4597 13.2858 21.4439C13.0929 21.4301 12.9155 21.3332 12.7997 21.1784C12.6667 21.0008 12.6667 20.6827 12.6667 20.0463V11.9538Z" fill="#0AED49" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `);
        }
    }

    function updatePauseHtml() {
        if (animation.paused()) {
            toggleButton.html(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 29.3333C23.3637 29.3333 29.3333 23.3637 29.3333 16C29.3333 8.6362 23.3637 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3637 8.6362 29.3333 16 29.3333Z" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.6667 11.9538C12.6667 11.3174 12.6667 10.9992 12.7997 10.8216C12.9155 10.6668 13.0929 10.5699 13.2858 10.5561C13.5072 10.5403 13.7748 10.7124 14.3101 11.0565L20.6043 15.1028C21.0688 15.4013 21.3011 15.5507 21.3812 15.7405C21.4513 15.9064 21.4513 16.0936 21.3812 16.2595C21.3011 16.4493 21.0688 16.5987 20.6043 16.8972L14.3101 20.9435C13.7748 21.2876 13.5072 21.4597 13.2858 21.4439C13.0929 21.4301 12.9155 21.3332 12.7997 21.1784C12.6667 21.0008 12.6667 20.6827 12.6667 20.0463V11.9538Z" fill="#0AED49" stroke="#0AED49" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `);
        } else {
            toggleButton.html(`
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 20V12M19.3333 20V12M29.3333 16C29.3333 23.3637 23.3637 29.3333 16 29.3333C8.6362 29.3333 2.66667 23.3637 2.66667 16C2.66667 8.6362 8.6362 2.66667 16 2.66667C23.3637 2.66667 29.3333 8.6362 29.3333 16Z" stroke="#0AED49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `);
        }
    }
}