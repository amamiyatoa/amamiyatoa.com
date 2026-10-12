window.onload = () => {

    /* For visit fade */
    document.body.classList.add('fade_activate');

    /* Header menu settings */
    let header = document.getElementById('headerWrapper');
    let menuLinkBox = document.getElementById('menuListBox');
    let detailMenuItem = document.getElementById('detailMenuItem');

    window.addEventListener('scroll', () => {
        let heightScanner = document.getElementById('heightScanner');
        let headerRect = heightScanner.getBoundingClientRect().top;
        if(headerRect <= -40) {
            header.classList.remove('headerElScrollIn');
            header.classList.add('headerElScrollOut');
        } else {
            header.classList.remove('headerElScrollOut');
            header.classList.add('headerElScrollIn');
        }
    });

    menuLinkBox.addEventListener("mouseover", () => {
        if(detailMenuItem.classList != 'visibleLink') {
            detailMenuItem.classList.add('visibleLink');
            detailMenuItem.classList.remove('invisibleLink');
        }
    })
    menuLinkBox.addEventListener('mouseout', () => {
        if(detailMenuItem.classList == 'visibleLink') {
            detailMenuItem.classList.remove('visibleLink');
            detailMenuItem.classList.add('invisibleLink');
        }
    })

    /* Wish list click event */
    let boothwl = document.getElementById('boothWishList');
    let amazonwl = document.getElementById('amazonWishList');

    boothwl.addEventListener('click', () => {
        let boothwlOnclick = window.confirm('Boothの欲しいものリストに移動します。\nよろしいでしょうか？');
        if(boothwlOnclick) {
            window.open('https://booth.pm/wish_list_names/82bT1oR0', '_blank');
        }
    })
    amazonwl.addEventListener('click', () => {
        let amazonwlOnclick = window.confirm('Amazonの欲しいものリストに移動します。\nよろしいでしょうか？');
        if(amazonwlOnclick) {
            window.open('https://www.amazon.co.jp/hz/wishlist/ls/1TOXI5RA6F314?ref_=list_d_wl_lfu_nav_1', '_blank');
        }
    })

    //Clock Zero Padding
    function zeroPad(num) {
        let ret;
        if (num < 10){
            ret = "0" + num;
        } else {
            ret = num;
        }
        return ret;
    }
    //Clock main code
    function nowTime() {
        let date = new Date();
        let hour = zeroPad(date.getHours());
        let minute = zeroPad(date.getMinutes());
        let second = zeroPad(date.getSeconds());
        let now = `${hour}:${minute}:${second}`;
        document.getElementById('time').textContent = now;
    }
    setInterval(nowTime, 1000);

    //Download the Sources
    const downloaderFooter = document.getElementById('zip_downloader');
    downloaderFooter.addEventListener('click', () => {
        let downloadClick = window.confirm('zipをダウンロードします。よろしいでしょうか？');
        if(downloadClick) {
            const downloadLink = document.createElement('a');
            downloadLink.href = './sources.zip';
            downloadLink.download = 'Sources.zip';
            downloadLink.click();
        }
    });

}