function Sunna4U(b){b=b.options[b.selectedIndex].text;document.getElementById("sunnah4u").innerHTML="Please Select <i>Surah Name And Quality</i> To Download,<br/>Recited By Sheikh <b>"+b+"</b> Below &#8595;&#8595;";document.getElementById("sunna4u 1").innerHTML="<b>This Option Will Let You Download</b><br/><div class='fati'>&#8594; ALL 114 Surahs In One <b>.Zip Compressed Archive</b> File <i>(with quality selector, MP3=high quality, OGG=medium quality)</i></div><div class='fati'>&#8594; One <b>.TORRENT</b> File <i>(For Downloading Via Torrent Clients)</i></div><div class='fati'>&#8594; M3U Playlist <i>(for offline streaming)</i></div><div class='fati'>&#8594; ROOT FOLDER VIEW</div><div class='fati'>&#8594; ONE Infomation file <i>(for the files META INFO)<i></div>All By Sheikh <b><u>"+b+"</u></b>, Choose File Below &#8595;&#8595;<br/>";
document.getElementById("sunna4u 2").innerHTML="<div class='fateee'>Sheikh "+b+"</div>"}function Sunna4Me(b){b=b.options[b.selectedIndex].text;document.getElementById("sunna4me").innerHTML="<b>REVIEW YOUR SELECTION:</b><br/><i>You Choose To Download &#8595;&#8595;</i><br/>...<font color='blue'><i>Surah Name</i> &#8594; <b>"+b+"</b></font>.<br/>"}function sUnna4U(b){b=b.options[b.selectedIndex].text;document.getElementById("sUnna4U").innerHTML="...<i>Quality</i>&#8594; <b>"+b+"</b>."};function listSel(b,a){var c=b.selectedIndex;if(" "!=b[c].value)for(var e=document.getElementById(a),d=e.options.length-1;-1<d;d--)b[c].value==e[d].value&&(e[d].selected=!0)};var tablink_idname=["tablink"],tabcontent_idname=["tabcontent"],tabcount=["3"],loadtabs=["2"],autochangemenu=0,changespeed=344,stoponhover=1;
function easytabs(b,a){b==autochangemenu&&(currenttab=a);b==autochangemenu&&1==stoponhover?stop_autochange():b==autochangemenu&&0==stoponhover&&(counter=0);b-=1;for(i=1;i<=tabcount[b];i++)document.getElementById(tablink_idname[b]+i).className="tab"+i,document.getElementById(tabcontent_idname[b]+i).style.display="none";document.getElementById(tablink_idname[b]+a).className="tab"+a+" tabactive";document.getElementById(tabcontent_idname[b]+a).style.display="block"}var timer;counter=0;
var totaltabs=tabcount[autochangemenu-1],currenttab=loadtabs[autochangemenu-1];function start_autochange(){counter+=1;timer=setTimeout("start_autochange()",1E3);counter==changespeed+1&&(currenttab++,currenttab>totaltabs&&(currenttab=1),easytabs(autochangemenu,currenttab),restart_autochange())}function restart_autochange(){clearTimeout(timer);counter=0;start_autochange()}function stop_autochange(){clearTimeout(timer);counter=0}
window.onload=function(){var b=loadtabs.length,a=0,c=1;do easytabs(c,loadtabs[a]),a++,c++;while(c<=b);0!=autochangemenu&&start_autochange()};function setOptions(b){var a=document.sunna4u.sunnah;a.options.length=0;
""==b&&(a.options[a.options.length]=new Option("Select Reciter First &#8593;&#8593;"," "));
"fares"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_fares-abbad/formats=VBR%20MP3&file=/sunna4u.blogspot.com_fares-abbad.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_fares-abbad/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_fares-abbad.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_fares-abbad/sunna4u.blogspot.com_fares-abbad_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_fares-abbad/sunna4u.blogspot.com_fares-abbad_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_fares-abbad"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_fares-abbad/sunna4u.blogspot.com_fares-abbad_meta.xml"));
"shatry"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_shatry_201402/formats=VBR%20MP3&file=/sunna4u.blogspot.com_shatry_201402.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_shatry_201402/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_shatry_201402.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_shatry_201402/sunna4u.blogspot.com_shatry_201402_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_shatry_201402/sunna4u.blogspot.com_shatry_201402_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_shatry_201402"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_shatry_201402/sunna4u.blogspot.com_shatry_201402_meta.xml"));
"mahir"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly/formats=VBR%20MP3&file=/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly/formats=OGG%20VORBIS&file=/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly"),a.options[a.options.length]=new Option("About META","http://archive.org/download/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly/Sunna4u.Blogspot.Com_Maher-Al-Muaiqly_meta.xml"));
"ajmi"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ahmad-al-ajmi/formats=VBR%20MP3&file=/sunna4u.blogspot.com_ahmad-al-ajmi.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ahmad-al-ajmi/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_ahmad-al-ajmi.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_ahmad-al-ajmi/sunna4u.blogspot.com_ahmad-al-ajmi_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_ahmad-al-ajmi/sunna4u.blogspot.com_ahmad-al-ajmi_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_ahmad-al-ajmi"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_ahmad-al-ajmi/sunna4u.blogspot.com_ahmad-al-ajmi_meta.xml"));
"mishary"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mishary/formats=VBR%20MP3&file=/sunna4u.blogspot.com_mishary.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mishary/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_mishary.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_mishary/sunna4u.blogspot.com_mishary_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_mishary/sunna4u.blogspot.com_mishary_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_mishary"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_mishary/sunna4u.blogspot.com_mishary_meta.xml"));
"ayub"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Ayub/formats=VBR%20MP3&file=/sunna4u.blogspot.com_Ayub.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Ayub/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_Ayub.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_Ayub/sunna4u.blogspot.com_Ayub_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_Ayub/sunna4u.blogspot.com_Ayub_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_Ayub"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_Ayub/sunna4u.blogspot.com_Ayub_meta.xml"));
"ayubh"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ayub_h/formats=VBR%20MP3&file=/sunna4u.blogspot.com_ayub_h.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ayub_h/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_ayub_h.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_ayub_h/sunna4u.blogspot.com_ayub_h_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_ayub_h/sunna4u.blogspot.com_ayub_h_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_ayub_h"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_ayub_h/sunna4u.blogspot.com_ayub_h_meta.xml"));
"abasetmj"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_abasetMJ/formats=VBR%20MP3&file=/sunna4u.blogspot.com_abasetMJ.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_abasetMJ/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_abasetMJ.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_abasetMJ/sunna4u.blogspot.com_abasetMJ_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_abasetMJ/sunna4u.blogspot.com_abasetMJ_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_abasetMJ"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_abasetMJ/sunna4u.blogspot.com_abasetMJ_meta.xml"));
"amuhsin"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_amuhsin/formats=VBR%20MP3&file=/sunna4u.blogspot.com_amuhsin.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_amuhsin/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_amuhsin.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_amuhsin/sunna4u.blogspot.com_amuhsin_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_amuhsin/sunna4u.blogspot.com_amuhsin_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_amuhsin"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_amuhsin/sunna4u.blogspot.com_amuhsin_meta.xml"));
"akhayat"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_akhayat/formats=VBR%20MP3&file=/sunna4u.blogspot.com_akhayat.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_akhayat/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_akhayat.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_akhayat/sunna4u.blogspot.com_akhayat_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_akhayat/sunna4u.blogspot.com_akhayat_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_akhayat"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_akhayat/sunna4u.blogspot.com_akhayat_meta.xml"));
"abasetmr"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ABasetMR_201402/formats=VBR%20MP3&file=/sunna4u.blogspot.com_ABasetMR_201402.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ABasetMR_201402/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_ABasetMR_201402.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_ABasetMR_201402/sunna4u.blogspot.com_ABasetMR_201402_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_ABasetMR_201402/sunna4u.blogspot.com_ABasetMR_201402_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_ABasetMR_201402"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_ABasetMR_201402/sunna4u.blogspot.com_ABasetMR_201402_meta.xml"));
"soofy"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Soofy/formats=VBR%20MP3&file=/sunna4u.blogspot.com_Soofy.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Soofy/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_Soofy.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_Soofy/sunna4u.blogspot.com_Soofy_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_Soofy/sunna4u.blogspot.com_Soofy_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_Soofy"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_Soofy/sunna4u.blogspot.com_Soofy_meta.xml"));
"kalbani"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_kalbani/formats=VBR%20MP3&file=/sunna4u.blogspot.com_kalbani.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_kalbani/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_kalbani.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_kalbani/sunna4u.blogspot.com_kalbani_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_kalbani/sunna4u.blogspot.com_kalbani_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_kalbani"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_kalbani/sunna4u.blogspot.com_kalbani_meta.xml"));
"akhdar"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_akhdar/formats=VBR%20MP3&file=/sunna4u.blogspot.com_akhdar.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_akhdar/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_akhdar.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_akhdar/sunna4u.blogspot.com_akhdar_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_akhdar/sunna4u.blogspot.com_akhdar_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_akhdar"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_akhdar/sunna4u.blogspot.com_akhdar_meta.xml"));
"albanamj"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_albanaMJ/formats=VBR%20MP3&file=/sunna4u.blogspot.com_albanaMJ.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_albanaMJ/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_albanaMJ.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_albanaMJ/sunna4u.blogspot.com_albanaMJ_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_albanaMJ/sunna4u.blogspot.com_albanaMJ_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_albanaMJ"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_albanaMJ/sunna4u.blogspot.com_albanaMJ_meta.xml"));
"albanamr"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_albanaMR/formats=VBR%20MP3&file=/sunna4u.blogspot.com_albanaMR.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_albanaMR/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_albanaMR.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_albanaMR/sunna4u.blogspot.com_albanaMR_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_albanaMR/sunna4u.blogspot.com_albanaMR_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_albanaMR"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_albanaMR/sunna4u.blogspot.com_albanaMR_meta.xml"));
"tablawy"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_tablawy/formats=VBR%20MP3&file=/sunna4u.blogspot.com_tablawy.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_tablawy/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_tablawy.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_tablawy/sunna4u.blogspot.com_tablawy_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_tablawy/sunna4u.blogspot.com_tablawy_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_tablawy"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_tablawy/sunna4u.blogspot.com_tablawy_meta.xml"));
"basfar"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_basfar/formats=VBR%20MP3&file=/sunna4u.blogspot.com_basfar.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_basfar/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_basfar.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_basfar/sunna4u.blogspot.com_basfar_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_basfar/sunna4u.blogspot.com_basfar_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_basfar"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_basfar/sunna4u.blogspot.com_basfar_meta.xml"));
"ghamdi"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ghamdi/formats=VBR%20MP3&file=/sunna4u.blogspot.com_ghamdi.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ghamdi/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_ghamdi.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_ghamdi/sunna4u.blogspot.com_ghamdi_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_ghamdi/sunna4u.blogspot.com_ghamdi_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_ghamdi"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_ghamdi/sunna4u.blogspot.com_ghamdi_meta.xml"));
"hani"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_hani/formats=VBR%20MP3&file=/sunna4u.blogspot.com_hani.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_hani/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_hani.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_hani/sunna4u.blogspot.com_hani_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_hani/sunna4u.blogspot.com_hani_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_hani"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_hani/sunna4u.blogspot.com_hani_meta.xml"));
"khudhaify"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khudhaify/formats=VBR%20MP3&file=/sunna4u.blogspot.com_khudhaify.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khudhaify/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_khudhaify.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_khudhaify/sunna4u.blogspot.com_khudhaify_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_khudhaify/sunna4u.blogspot.com_khudhaify_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_khudhaify"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_khudhaify/sunna4u.blogspot.com_khudhaify_meta.xml"));
"juhaini"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_juhaini/formats=VBR%20MP3&file=/sunna4u.blogspot.com_juhaini.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_juhaini/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_juhaini.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_juhaini/sunna4u.blogspot.com_juhaini_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_juhaini/sunna4u.blogspot.com_juhaini_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_juhaini"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_juhaini/sunna4u.blogspot.com_juhaini_meta.xml"));
"khalid"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khalid/formats=VBR%20MP3&file=/sunna4u.blogspot.com_khalid.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khalid/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_khalid.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_khalid/sunna4u.blogspot.com_khalid_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_khalid/sunna4u.blogspot.com_khalid_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_khalid"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_khalid/sunna4u.blogspot.com_khalid_meta.xml"));
"matrud"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_matrud/formats=VBR%20MP3&file=/sunna4u.blogspot.com_matrud.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_matrud/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_matrud.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_matrud/sunna4u.blogspot.com_matrud_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_matrud/sunna4u.blogspot.com_matrud_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_matrud"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_matrud/sunna4u.blogspot.com_matrud_meta.xml"));
"jabir"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_jabir/formats=VBR%20MP3&file=/sunna4u.blogspot.com_jabir.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_jabir/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_jabir.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_jabir/sunna4u.blogspot.com_jabir_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_jabir/sunna4u.blogspot.com_jabir_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_jabir"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_jabir/sunna4u.blogspot.com_jabir_meta.xml"));
"minshawy"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_minshawy/formats=VBR%20MP3&file=/sunna4u.blogspot.com_minshawy.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_minshawy/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_minshawy.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_minshawy/sunna4u.blogspot.com_minshawy_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_minshawy/sunna4u.blogspot.com_minshawy_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_minshawy"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_minshawy/sunna4u.blogspot.com_minshawy_meta.xml"));
"minshawym"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_minshawyM/formats=VBR%20MP3&file=/sunna4u.blogspot.com_minshawyM.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_minshawyM/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_minshawyM.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_minshawyM/sunna4u.blogspot.com_minshawyM_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_minshawyM/sunna4u.blogspot.com_minshawyM_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_minshawyM"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_minshawyM/sunna4u.blogspot.com_minshawyM_meta.xml"));
"fahad"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mixed/formats=VBR%20MP3&file=/sunna4u.blogspot.com_mixed.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mixed/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_mixed.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_mixed/sunna4u.blogspot.com_mixed_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_mixed/sunna4u.blogspot.com_mixed_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_mixed"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_mixed/sunna4u.blogspot.com_mixed_meta.xml"));
"mhassan"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mhassan/formats=VBR%20MP3&file=/sunna4u.blogspot.com_mhassan.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mhassan/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_mhassan.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_mhassan/sunna4u.blogspot.com_mhassan_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_mhassan/sunna4u.blogspot.com_mhassan_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_mhassan"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_mhassan/sunna4u.blogspot.com_mhassan_meta.xml"));
"mjibriel"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mjibriel/formats=VBR%20MP3&file=/sunna4u.blogspot.com_mjibriel.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_mjibriel/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_mjibriel.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_mjibriel/sunna4u.blogspot.com_mjibriel_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_mjibriel/sunna4u.blogspot.com_mjibriel_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_mjibriel"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_mjibriel/sunna4u.blogspot.com_mjibriel_meta.xml"));
"nabil"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_nabil/formats=VBR%20MP3&file=/sunna4u.blogspot.com_nabil.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_nabil/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_nabil.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_nabil/sunna4u.blogspot.com_nabil_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_nabil/sunna4u.blogspot.com_nabil_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_nabil"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_nabil/sunna4u.blogspot.com_nabil_meta.xml"));
"salahb"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_salahB/formats=VBR%20MP3&file=/sunna4u.blogspot.com_salahB.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_salahB/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_salahB.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_salahB/sunna4u.blogspot.com_salahB_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_salahB/sunna4u.blogspot.com_salahB_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_salahB"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_salahB/sunna4u.blogspot.com_salahB_meta.xml"));
"salahbd"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_salahBD/formats=VBR%20MP3&file=/sunna4u.blogspot.com_salahBD.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_salahBD/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_salahBD.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_salahBD/sunna4u.blogspot.com_salahBD_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_salahBD/sunna4u.blogspot.com_salahBD_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_salahBD"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_salahBD/sunna4u.blogspot.com_salahBD_meta.xml"));
"ramadan"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ramadan/formats=VBR%20MP3&file=/sunna4u.blogspot.com_ramadan.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_ramadan/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_ramadan.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_ramadan/sunna4u.blogspot.com_ramadan_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_ramadan/sunna4u.blogspot.com_ramadan_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_ramadan"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_ramadan/sunna4u.blogspot.com_ramadan_meta.xml"));
"tawfeeq"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Tawfeeq/formats=VBR%20MP3&file=/sunna4u.blogspot.com_Tawfeeq.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Tawfeeq/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_Tawfeeq.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_Tawfeeq/sunna4u.blogspot.com_Tawfeeq_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_Tawfeeq/sunna4u.blogspot.com_Tawfeeq_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_Tawfeeq"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_Tawfeeq/sunna4u.blogspot.com_Tawfeeq_meta.xml"));
"shuraim"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_shuraim/formats=VBR%20MP3&file=/sunna4u.blogspot.com_shuraim.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_shuraim/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_shuraim.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_shuraim/sunna4u.blogspot.com_shuraim_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_shuraim/sunna4u.blogspot.com_shuraim_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_shuraim"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_shuraim/sunna4u.blogspot.com_shuraim_meta.xml"));
"abaseteng"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Abaset_ENGLISH/formats=VBR%20MP3&file=/sunna4u.blogspot.com_Abaset_ENGLISH.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_Abaset_ENGLISH/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_Abaset_ENGLISH.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_Abaset_ENGLISH/sunna4u.blogspot.com_Abaset_ENGLISH_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_Abaset_ENGLISH/sunna4u.blogspot.com_Abaset_ENGLISH_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_Abaset_ENGLISH"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_Abaset_ENGLISH/sunna4u.blogspot.com_Abaset_ENGLISH_meta.xml"));
"khusary"==b&&(a.options[a.options.length]=new Option("MP3 COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khusary/formats=VBR%20MP3&file=/sunna4u.blogspot.com_khusary.zip"),a.options[a.options.length]=new Option("OGG COMPRESSED File","http://archive.org/compress/sunna4u.blogspot.com_khusary/formats=OGG%20VORBIS&file=/sunna4u.blogspot.com_khusary.zip"),a.options[a.options.length]=new Option("Torrent File","http://archive.org/download/sunna4u.blogspot.com_khusary/sunna4u.blogspot.com_khusary_archive.torrent"),a.options[a.options.length]=new Option("M3U PLAYLIST","http://archive.org/download/sunna4u.blogspot.com_khusary/sunna4u.blogspot.com_khusary_vbr.m3u"),a.options[a.options.length]=new Option("Root List","http://archive.org/download/sunna4u.blogspot.com_khusary"),a.options[a.options.length]=new Option("About META","http://archive.org/download/sunna4u.blogspot.com_khusary/sunna4u.blogspot.com_khusary_meta.xml"));};



