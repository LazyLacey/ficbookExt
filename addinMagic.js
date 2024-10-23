function addJs () {
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL('pieces/app.e070967e3f978c7f0296.js');
    document.getElementsByTagName('body')[0].appendChild(script);

    console.log(chrome.runtime.getURL('pieces/'));

    localStorage.setItem('fixxbook_folder', chrome.runtime.getURL('pieces/'));
    [...document.getElementsByTagName('img')].filter((img) => img.src.includes('logo.svg')).forEach((img) => {
        img.src = chrome.runtime.getURL('pieces/logo.svg');
    });
}

addJs();
console.log('addinMagic.js loaded');