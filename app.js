$(document).ready(function() {

    for(var i = 1; i <= 35; i++) {

        var img = `images/${i}.jpg`;
        if(i < 10){
            img = `images/0${i}.jpg`;
        }

        $(`<li class="splide__slide p-splide__slide" style="margin-right: 36px; width: 628px; height: 614px; background: url(${img}); background-size: contain; background-position: center; background-repeat: no-repeat;"></li>`)
            .appendTo($('#example-sync-list'));

        $(`<li class="splide__slide p-splide__slide" style="margin-right: 10px; background: url(${img});background-size: contain; background-position: center; background-repeat: no-repeat;"></li>`).appendTo($('#example-sync-thumbnail-list'));
    }

    var imgElements = $('#images>div').click(openPopup);
    
    // Create and mount the thumbnails slider.
    var secondarySlider = new Splide( '#example-sync-thumbnail', {} ).mount();

    // Create the main slider.
    var primarySlider = new Splide( '#example-sync', {
        type       : 'fade',
        heightRatio: 1,
        pagination : false,
        arrows     : false,
        cover      : true,
    } );

    // Set the thumbnails slider as a sync target and then call mount.
    primarySlider.sync( secondarySlider ).mount();
    $('#connect-click').click(onPhoneClick);
});

var textPhone = ['+3', '8 066 256', '7340', ', ', '+43 ', '677', ' 61301173']

function onPhoneClick() {
    setTimeout(() => {
        $('#phone-holder').text(textPhone.join(''));
    }, 500);
    
}

function openPopup() {
    //$('#imageModal').modal('toggle')
}
