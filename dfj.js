s4u = jQuery.noConflict(true);
 // quick dd-listen flash
s4u(function () {
    //initialize
    //testilize
    s4u("#sunna4u-p").flash({
        swf: 'https://ia601507.us.archive.org/5/items/sunna4u_SWF/sunna4u.swf',
        height: 275,
        width: 270,
        flashvars: {
            playList: "https://archive.org/download/S4U_PLAYLIST/home.xml",
            ShowPlaylist: 1,
            ShowEQ: 1,
            firstTrack: 1,
            initVol: 100
        }
    });

    //on change
    s4u("#rct").change(function () {
        s4u("#sunna4u-p").flash({
            swf: 'https://ia601507.us.archive.org/5/items/sunna4u_SWF/sunna4u.swf',
            height: 275,
            width: 270,
            flashvars: {
                playList: "https://archive.org/download/S4U_PLAYLIST/" + s4u(this).val() + ".xml",
                ShowPlaylist: 1,
                ShowEQ: 1,
                firstTrack: 1,
                initVol: 100
            }
        });
    });
});

// jquery to append the surah URL 
s4u(document).ready(function() {
  s4u("#ddd").click(function() {
    var rct = s4u("#rct option:selected").attr('val');
    var suratu = s4u("#suratu option:selected").attr('val');
    var den = s4u("#den option:selected").attr('val');
    var format = s4u("#format option:selected").attr('val');
    var uri = "http://archive.org/download/"+rct+"/"+suratu+""+den+"."+format+" ";
    window.location.href = uri;
  });
}); 
