<!DOCTYPE html>
<html>
<head>
    
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    
        <script>
            L_NO_TOUCH = false;
            L_DISABLE_3D = false;
        </script>
    
    <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>
    <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>
    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"/>
    
            <meta name="viewport" content="width=device-width,
                initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <style>
                #map_9453e6348f5b5c892fecce11af16db05 {
                    position: relative;
                    width: 100.0%;
                    height: 100.0%;
                    left: 0.0%;
                    top: 0.0%;
                }
                .leaflet-container { font-size: 1rem; }
            </style>
        
</head>
<body>
    
    
            <div class="folium-map" id="map_9453e6348f5b5c892fecce11af16db05" ></div>
        
</body>
<script>
    
    
            var map_9453e6348f5b5c892fecce11af16db05 = L.map(
                "map_9453e6348f5b5c892fecce11af16db05",
                {
                    center: [55.704013, 37.521231],
                    crs: L.CRS.EPSG3857,
                    zoom: 4,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_87e285d3f38df09e7d38b5df10e90a83 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var marker_9681511149921fdc663bb55e8e9cc9ff = L.marker(
                [55.704013, 37.521231],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_39af615ac5c87b41166164e996fc48ae = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_9681511149921fdc663bb55e8e9cc9ff.setIcon(icon_39af615ac5c87b41166164e996fc48ae);
        
    
        var popup_69b991fb26af713c0b952a1354fb6a09 = L.popup({"maxWidth": "100%"});

        
            
                var html_7401232d9a693c196ebb78673503e964 = $(`<div id="html_7401232d9a693c196ebb78673503e964" style="width: 100.0%; height: 100.0%;"><i>My Alma Mater where I fell in love with science and met amazing people </i><img src=IMG_5733.JPG width=250px></div>`)[0];
                popup_69b991fb26af713c0b952a1354fb6a09.setContent(html_7401232d9a693c196ebb78673503e964);
            
        

        marker_9681511149921fdc663bb55e8e9cc9ff.bindPopup(popup_69b991fb26af713c0b952a1354fb6a09)
        ;

        
    
    
            marker_9681511149921fdc663bb55e8e9cc9ff.bindTooltip(
                `<div>
                     Lomonosov Moscow State University
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_7946e226209ad53b5c14e4bc87597e20 = L.marker(
                [56.036295213027785, 37.167295251924145],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_700e4897075899dc177f28325bd2b4c5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_7946e226209ad53b5c14e4bc87597e20.setIcon(icon_700e4897075899dc177f28325bd2b4c5);
        
    
        var popup_2443e419d292479f5a619aff111c3f4c = L.popup({"maxWidth": "100%"});

        
            
                var html_0239dc0cd2ea04f2c2c028a9ab91ecf0 = $(`<div id="html_0239dc0cd2ea04f2c2c028a9ab91ecf0" style="width: 100.0%; height: 100.0%;"><i> Plenty of months of unforgettable field practices </i><img src=IMG_91.JPG width=300px></div>`)[0];
                popup_2443e419d292479f5a619aff111c3f4c.setContent(html_0239dc0cd2ea04f2c2c028a9ab91ecf0);
            
        

        marker_7946e226209ad53b5c14e4bc87597e20.bindPopup(popup_2443e419d292479f5a619aff111c3f4c)
        ;

        
    
    
            marker_7946e226209ad53b5c14e4bc87597e20.bindTooltip(
                `<div>
                     Experimental field training center Chashnikovo
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_a0c4032e8a625e58ef62c4d27160050e = L.marker(
                [55.72100019731472, 37.68684706727606],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_c409e1a6b29a10cd01735d65cfa751ce = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_a0c4032e8a625e58ef62c4d27160050e.setIcon(icon_c409e1a6b29a10cd01735d65cfa751ce);
        
    
        var popup_c13f72c7436f5385362624477db62a24 = L.popup({"maxWidth": "100%"});

        
            
                var html_a947c4c50366813746c4989d45965cbe = $(`<div id="html_a947c4c50366813746c4989d45965cbe" style="width: 100.0%; height: 100.0%;"><i> A place where DJing and electronic music became part of my life </i><img src=IMG_9272.JPG width=250px></div>`)[0];
                popup_c13f72c7436f5385362624477db62a24.setContent(html_a947c4c50366813746c4989d45965cbe);
            
        

        marker_a0c4032e8a625e58ef62c4d27160050e.bindPopup(popup_c13f72c7436f5385362624477db62a24)
        ;

        
    
    
            marker_a0c4032e8a625e58ef62c4d27160050e.bindTooltip(
                `<div>
                     Electronic music center Mutabor
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_10299f71f5d72e10800a4aee2ddf7d88 = L.marker(
                [54.88780850605498, 38.07820254551422],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_a9e2bd32e2ba49c1208fe8e9cc5117f8 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_10299f71f5d72e10800a4aee2ddf7d88.setIcon(icon_a9e2bd32e2ba49c1208fe8e9cc5117f8);
        
    
        var popup_403f0a6fbd223cef282039df97a14857 = L.popup({"maxWidth": "100%"});

        
            
                var html_6117e5a5ac5a425fe2879ba6a660b07e = $(`<div id="html_6117e5a5ac5a425fe2879ba6a660b07e" style="width: 100.0%; height: 100.0%;"><i>My countryside. Here I reconnect with nature and drink tea with my grandmother</i><img src=IMG_11.JPG width=250px></div>`)[0];
                popup_403f0a6fbd223cef282039df97a14857.setContent(html_6117e5a5ac5a425fe2879ba6a660b07e);
            
        

        marker_10299f71f5d72e10800a4aee2ddf7d88.bindPopup(popup_403f0a6fbd223cef282039df97a14857)
        ;

        
    
    
            marker_10299f71f5d72e10800a4aee2ddf7d88.bindTooltip(
                `<div>
                     Forest Glade
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_b23f1c42aa6108cc6bf050e22880b8ca = L.marker(
                [61.94836678528589, 30.579351975033173],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_a7e598108ddef415ec2bf49e3b98a8e7 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b23f1c42aa6108cc6bf050e22880b8ca.setIcon(icon_a7e598108ddef415ec2bf49e3b98a8e7);
        
    
        var popup_53c19a56a0d781e519ef8cfcb7164bab = L.popup({"maxWidth": "100%"});

        
            
                var html_b05b3fe211d62cf02ab55e751477caa5 = $(`<div id="html_b05b3fe211d62cf02ab55e751477caa5" style="width: 100.0%; height: 100.0%;"><i>Beautiful Russian North. A place with a tragic fate and inspiring nature. A place where I recover </i><img src=IMG_12.JPG width=250px></div>`)[0];
                popup_53c19a56a0d781e519ef8cfcb7164bab.setContent(html_b05b3fe211d62cf02ab55e751477caa5);
            
        

        marker_b23f1c42aa6108cc6bf050e22880b8ca.bindPopup(popup_53c19a56a0d781e519ef8cfcb7164bab)
        ;

        
    
    
            marker_b23f1c42aa6108cc6bf050e22880b8ca.bindTooltip(
                `<div>
                     Ruskeala Mountain Park
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_c1b4bdb2e4b2ae5fec8532eb9e771508 = L.marker(
                [55.879774067558735, -3.0739869175759487],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_c9d5636e8dc72a2f8683c45681a12725 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c1b4bdb2e4b2ae5fec8532eb9e771508.setIcon(icon_c9d5636e8dc72a2f8683c45681a12725);
        
    
        var popup_23abf948632d3c80b286c87ebd598f04 = L.popup({"maxWidth": "100%"});

        
            
                var html_3c4066204a85b3d95457c7bc4659daf3 = $(`<div id="html_3c4066204a85b3d95457c7bc4659daf3" style="width: 100.0%; height: 100.0%;"><i>The boundaries are only in your head. 9 years ago I began my journey to explore the World </i><img src=IMG_13.JPG width=250px></div>`)[0];
                popup_23abf948632d3c80b286c87ebd598f04.setContent(html_3c4066204a85b3d95457c7bc4659daf3);
            
        

        marker_c1b4bdb2e4b2ae5fec8532eb9e771508.bindPopup(popup_23abf948632d3c80b286c87ebd598f04)
        ;

        
    
    
            marker_c1b4bdb2e4b2ae5fec8532eb9e771508.bindTooltip(
                `<div>
                     Nebattle Abbey
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_b1cdc7c771567127853aa559f5b657bc = L.marker(
                [51.503344831922035, -0.11967762185989927],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_4b10a2037b6951b0f53c020dd4b5e1fa = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b1cdc7c771567127853aa559f5b657bc.setIcon(icon_4b10a2037b6951b0f53c020dd4b5e1fa);
        
    
        var popup_a8c84c410b56bb9a6a259f2ecd3a23f9 = L.popup({"maxWidth": "100%"});

        
            
                var html_175f1e2fc51eadd9702ffd654879e032 = $(`<div id="html_175f1e2fc51eadd9702ffd654879e032" style="width: 100.0%; height: 100.0%;"><i>My first language internship </i><img src=IMG_14.JPG width=250px></div>`)[0];
                popup_a8c84c410b56bb9a6a259f2ecd3a23f9.setContent(html_175f1e2fc51eadd9702ffd654879e032);
            
        

        marker_b1cdc7c771567127853aa559f5b657bc.bindPopup(popup_a8c84c410b56bb9a6a259f2ecd3a23f9)
        ;

        
    
    
            marker_b1cdc7c771567127853aa559f5b657bc.bindTooltip(
                `<div>
                     London Eye
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_b43325f8f8801b57e2c59f4b572cf08f = L.marker(
                [55.78339062740753, 37.421446578285284],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_70f2d27a798c713b1aca46c5199dc699 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b43325f8f8801b57e2c59f4b572cf08f.setIcon(icon_70f2d27a798c713b1aca46c5199dc699);
        
    
        var popup_16bae32e3a20ca2017178970a89a66c0 = L.popup({"maxWidth": "100%"});

        
            
                var html_70619cd45e52eb973ffa69a2866f95ee = $(`<div id="html_70619cd45e52eb973ffa69a2866f95ee" style="width: 100.0%; height: 100.0%;"><i>My favorite park where I walked as a child </i><img src=IMG_5465.JPG width=250px></div>`)[0];
                popup_16bae32e3a20ca2017178970a89a66c0.setContent(html_70619cd45e52eb973ffa69a2866f95ee);
            
        

        marker_b43325f8f8801b57e2c59f4b572cf08f.bindPopup(popup_16bae32e3a20ca2017178970a89a66c0)
        ;

        
    
    
            marker_b43325f8f8801b57e2c59f4b572cf08f.bindTooltip(
                `<div>
                     Serebryany Bor
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_c178a3787b0c9ce68ef8b5f447243f9a = L.marker(
                [55.704013, 37.521231],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_c153d0e8bc4acdeab87357b318d72026 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c178a3787b0c9ce68ef8b5f447243f9a.setIcon(icon_c153d0e8bc4acdeab87357b318d72026);
        
    
        var popup_6d2a61c2287e7685427fb02baf62404f = L.popup({"maxWidth": "100%"});

        
            
                var html_e633d940b8c59ed6e3f942ec278e174d = $(`<div id="html_e633d940b8c59ed6e3f942ec278e174d" style="width: 100.0%; height: 100.0%;"><i>My Alma Mater where I fell in love with science and met amazing people </i><img src=IMG_5733.JPG width=250px></div>`)[0];
                popup_6d2a61c2287e7685427fb02baf62404f.setContent(html_e633d940b8c59ed6e3f942ec278e174d);
            
        

        marker_c178a3787b0c9ce68ef8b5f447243f9a.bindPopup(popup_6d2a61c2287e7685427fb02baf62404f)
        ;

        
    
    
            marker_c178a3787b0c9ce68ef8b5f447243f9a.bindTooltip(
                `<div>
                     Lomonosov Moscow State University
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_1a8dd0d96fb4ddefb454d727a504a56e = L.marker(
                [56.036295213027785, 37.167295251924145],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_353fde7d0898b06bbb99e08f7d305fdb = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_1a8dd0d96fb4ddefb454d727a504a56e.setIcon(icon_353fde7d0898b06bbb99e08f7d305fdb);
        
    
        var popup_51adbfad365384c3c93c3c69f1078a2f = L.popup({"maxWidth": "100%"});

        
            
                var html_f65cb554acd7ecee05ac7c9debbb7abf = $(`<div id="html_f65cb554acd7ecee05ac7c9debbb7abf" style="width: 100.0%; height: 100.0%;"><i> Plenty of months of unforgettable field practices </i><img src=IMG_91.JPG width=300px></div>`)[0];
                popup_51adbfad365384c3c93c3c69f1078a2f.setContent(html_f65cb554acd7ecee05ac7c9debbb7abf);
            
        

        marker_1a8dd0d96fb4ddefb454d727a504a56e.bindPopup(popup_51adbfad365384c3c93c3c69f1078a2f)
        ;

        
    
    
            marker_1a8dd0d96fb4ddefb454d727a504a56e.bindTooltip(
                `<div>
                     Experimental field training center Chashnikovo
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_60993553da441b7ac2a6fc48e437d472 = L.marker(
                [55.72100019731472, 37.68684706727606],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_078b33f05e2f47f8f5bb01fa3fd6fb66 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_60993553da441b7ac2a6fc48e437d472.setIcon(icon_078b33f05e2f47f8f5bb01fa3fd6fb66);
        
    
        var popup_743c4c333f13fe59f65024332089487b = L.popup({"maxWidth": "100%"});

        
            
                var html_b6132dd36a6031e50325a3c834f8d467 = $(`<div id="html_b6132dd36a6031e50325a3c834f8d467" style="width: 100.0%; height: 100.0%;"><i> A place where DJing and electronic music became part of my life </i><img src=IMG_9272.JPG width=250px></div>`)[0];
                popup_743c4c333f13fe59f65024332089487b.setContent(html_b6132dd36a6031e50325a3c834f8d467);
            
        

        marker_60993553da441b7ac2a6fc48e437d472.bindPopup(popup_743c4c333f13fe59f65024332089487b)
        ;

        
    
    
            marker_60993553da441b7ac2a6fc48e437d472.bindTooltip(
                `<div>
                     Electronic music center Mutabor
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_bb93f462521077c2fb3a1aba37246d2b = L.marker(
                [54.88780850605498, 38.07820254551422],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_775afef631597772276f20f176da2eb1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bb93f462521077c2fb3a1aba37246d2b.setIcon(icon_775afef631597772276f20f176da2eb1);
        
    
        var popup_0a74ee3552e33ed69e61dff6872da834 = L.popup({"maxWidth": "100%"});

        
            
                var html_b327bb6cb053aa05b120e1b18ad1b847 = $(`<div id="html_b327bb6cb053aa05b120e1b18ad1b847" style="width: 100.0%; height: 100.0%;"><i>My countryside. Here I reconnect with nature and drink tea with my grandmother</i><img src=IMG_11.JPG width=250px></div>`)[0];
                popup_0a74ee3552e33ed69e61dff6872da834.setContent(html_b327bb6cb053aa05b120e1b18ad1b847);
            
        

        marker_bb93f462521077c2fb3a1aba37246d2b.bindPopup(popup_0a74ee3552e33ed69e61dff6872da834)
        ;

        
    
    
            marker_bb93f462521077c2fb3a1aba37246d2b.bindTooltip(
                `<div>
                     Forest Glade
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_bc0c8888fbf94fd1897c4ba447033d3a = L.marker(
                [61.94836678528589, 30.579351975033173],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_f11d0a5602e28f273c51252524e78592 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_bc0c8888fbf94fd1897c4ba447033d3a.setIcon(icon_f11d0a5602e28f273c51252524e78592);
        
    
        var popup_204f4518fae7d168433980cec6e649eb = L.popup({"maxWidth": "100%"});

        
            
                var html_07db05b284cb77565f3af34ed0ca74aa = $(`<div id="html_07db05b284cb77565f3af34ed0ca74aa" style="width: 100.0%; height: 100.0%;"><i>Beautiful Russian North. A place with a tragic fate and inspiring nature. A place where I recover </i><img src=IMG_12.JPG width=250px></div>`)[0];
                popup_204f4518fae7d168433980cec6e649eb.setContent(html_07db05b284cb77565f3af34ed0ca74aa);
            
        

        marker_bc0c8888fbf94fd1897c4ba447033d3a.bindPopup(popup_204f4518fae7d168433980cec6e649eb)
        ;

        
    
    
            marker_bc0c8888fbf94fd1897c4ba447033d3a.bindTooltip(
                `<div>
                     Ruskeala Mountain Park
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_009e5b427d71ab626bba1a8bae3d329c = L.marker(
                [55.879774067558735, -3.0739869175759487],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_7da759e30ce9f7a06ad8bcf58ebbfef6 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_009e5b427d71ab626bba1a8bae3d329c.setIcon(icon_7da759e30ce9f7a06ad8bcf58ebbfef6);
        
    
        var popup_85fe0751996243b09ea4ce636005bf58 = L.popup({"maxWidth": "100%"});

        
            
                var html_fcb281ced4712b08d3b59431792d9121 = $(`<div id="html_fcb281ced4712b08d3b59431792d9121" style="width: 100.0%; height: 100.0%;"><i>The boundaries are only in your head. 9 years ago I began my journey to explore the World </i><img src=IMG_13.JPG width=250px></div>`)[0];
                popup_85fe0751996243b09ea4ce636005bf58.setContent(html_fcb281ced4712b08d3b59431792d9121);
            
        

        marker_009e5b427d71ab626bba1a8bae3d329c.bindPopup(popup_85fe0751996243b09ea4ce636005bf58)
        ;

        
    
    
            marker_009e5b427d71ab626bba1a8bae3d329c.bindTooltip(
                `<div>
                     Nebattle Abbey
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_3d362209e1f4c914bf724ad41d0090db = L.marker(
                [51.503344831922035, -0.11967762185989927],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_beffdc42020096dbeeb5cd1ab33731d9 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_3d362209e1f4c914bf724ad41d0090db.setIcon(icon_beffdc42020096dbeeb5cd1ab33731d9);
        
    
        var popup_0e67a878055b91524425755919647771 = L.popup({"maxWidth": "100%"});

        
            
                var html_d6832bb3dd693783e5c396500881a3c7 = $(`<div id="html_d6832bb3dd693783e5c396500881a3c7" style="width: 100.0%; height: 100.0%;"><i>My first language internship </i><img src=IMG_14.JPG width=250px></div>`)[0];
                popup_0e67a878055b91524425755919647771.setContent(html_d6832bb3dd693783e5c396500881a3c7);
            
        

        marker_3d362209e1f4c914bf724ad41d0090db.bindPopup(popup_0e67a878055b91524425755919647771)
        ;

        
    
    
            marker_3d362209e1f4c914bf724ad41d0090db.bindTooltip(
                `<div>
                     London Eye
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_c0486bc0adb3aa3d08082b44141819cb = L.marker(
                [55.78339062740753, 37.421446578285284],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_50125f7913e2cf396e60fa05ffbfde1b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c0486bc0adb3aa3d08082b44141819cb.setIcon(icon_50125f7913e2cf396e60fa05ffbfde1b);
        
    
        var popup_56d2ff736839be9a4fed98cbcf515d6b = L.popup({"maxWidth": "100%"});

        
            
                var html_6f142cfcc9142dd343b2927714672865 = $(`<div id="html_6f142cfcc9142dd343b2927714672865" style="width: 100.0%; height: 100.0%;"><i>My favorite park where I walked as a child </i><img src=IMG_5465.JPG width=250px></div>`)[0];
                popup_56d2ff736839be9a4fed98cbcf515d6b.setContent(html_6f142cfcc9142dd343b2927714672865);
            
        

        marker_c0486bc0adb3aa3d08082b44141819cb.bindPopup(popup_56d2ff736839be9a4fed98cbcf515d6b)
        ;

        
    
    
            marker_c0486bc0adb3aa3d08082b44141819cb.bindTooltip(
                `<div>
                     Serebryany Bor
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_d3396626034368ff569b10327407dcd1 = L.marker(
                [55.704013, 37.521231],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_c3dcc9a4ebb11ec77a574cb98d1e5775 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_d3396626034368ff569b10327407dcd1.setIcon(icon_c3dcc9a4ebb11ec77a574cb98d1e5775);
        
    
        var popup_6e799396bc300986659d128ba5e5f89e = L.popup({"maxWidth": "100%"});

        
            
                var html_91e4338f7e32bb9b95376aee485e1844 = $(`<div id="html_91e4338f7e32bb9b95376aee485e1844" style="width: 100.0%; height: 100.0%;"><i>My Alma Mater where I fell in love with science and met amazing people </i><img src=IMG_5733.JPG width=250px></div>`)[0];
                popup_6e799396bc300986659d128ba5e5f89e.setContent(html_91e4338f7e32bb9b95376aee485e1844);
            
        

        marker_d3396626034368ff569b10327407dcd1.bindPopup(popup_6e799396bc300986659d128ba5e5f89e)
        ;

        
    
    
            marker_d3396626034368ff569b10327407dcd1.bindTooltip(
                `<div>
                     Lomonosov Moscow State University
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_6633be705eec196c2fd3a5f70a70830e = L.marker(
                [56.036295213027785, 37.167295251924145],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_51b88f418218e00acc30df403250900e = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6633be705eec196c2fd3a5f70a70830e.setIcon(icon_51b88f418218e00acc30df403250900e);
        
    
        var popup_3dc6ef55d3a09bc8d42752a32c44886a = L.popup({"maxWidth": "100%"});

        
            
                var html_12823b866251c678d93d37bc78adbd5a = $(`<div id="html_12823b866251c678d93d37bc78adbd5a" style="width: 100.0%; height: 100.0%;"><i> Plenty of months of unforgettable field practices </i><img src=IMG_91.JPG width=300px></div>`)[0];
                popup_3dc6ef55d3a09bc8d42752a32c44886a.setContent(html_12823b866251c678d93d37bc78adbd5a);
            
        

        marker_6633be705eec196c2fd3a5f70a70830e.bindPopup(popup_3dc6ef55d3a09bc8d42752a32c44886a)
        ;

        
    
    
            marker_6633be705eec196c2fd3a5f70a70830e.bindTooltip(
                `<div>
                     Experimental field training center Chashnikovo
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_6a20cf4639b4803cf0d996655642f24b = L.marker(
                [55.72100019731472, 37.68684706727606],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_1cc8aff60c5e5184441dde5bc700268a = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6a20cf4639b4803cf0d996655642f24b.setIcon(icon_1cc8aff60c5e5184441dde5bc700268a);
        
    
        var popup_985d623d0cdb532f189a6f868cdaaaa3 = L.popup({"maxWidth": "100%"});

        
            
                var html_6056ec277461cb9b3961dffe164bb055 = $(`<div id="html_6056ec277461cb9b3961dffe164bb055" style="width: 100.0%; height: 100.0%;"><i> A place where DJing and electronic music became part of my life </i><img src=IMG_9272.JPG width=250px></div>`)[0];
                popup_985d623d0cdb532f189a6f868cdaaaa3.setContent(html_6056ec277461cb9b3961dffe164bb055);
            
        

        marker_6a20cf4639b4803cf0d996655642f24b.bindPopup(popup_985d623d0cdb532f189a6f868cdaaaa3)
        ;

        
    
    
            marker_6a20cf4639b4803cf0d996655642f24b.bindTooltip(
                `<div>
                     Electronic music center Mutabor
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_b512d15e2fc77e9544b0ac3e4b5cc020 = L.marker(
                [54.88780850605498, 38.07820254551422],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_237eaea45e59079b5c0db0682c14dc80 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_b512d15e2fc77e9544b0ac3e4b5cc020.setIcon(icon_237eaea45e59079b5c0db0682c14dc80);
        
    
        var popup_2cc60ca8ba04c2ab562494351fec4063 = L.popup({"maxWidth": "100%"});

        
            
                var html_2b6211d6b929249e1a5adf1820470e41 = $(`<div id="html_2b6211d6b929249e1a5adf1820470e41" style="width: 100.0%; height: 100.0%;"><i>My countryside. Here I reconnect with nature and drink tea with my grandmother</i><img src=IMG_11.JPG width=250px></div>`)[0];
                popup_2cc60ca8ba04c2ab562494351fec4063.setContent(html_2b6211d6b929249e1a5adf1820470e41);
            
        

        marker_b512d15e2fc77e9544b0ac3e4b5cc020.bindPopup(popup_2cc60ca8ba04c2ab562494351fec4063)
        ;

        
    
    
            marker_b512d15e2fc77e9544b0ac3e4b5cc020.bindTooltip(
                `<div>
                     Forest Glade
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_13c3afb416962192d7082bebcf897430 = L.marker(
                [61.94836678528589, 30.579351975033173],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_7fe47e4a6cf685070c7e556e4139286b = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_13c3afb416962192d7082bebcf897430.setIcon(icon_7fe47e4a6cf685070c7e556e4139286b);
        
    
        var popup_26ca97da4bfd34ad9ae630f388290589 = L.popup({"maxWidth": "100%"});

        
            
                var html_2227166a40e4ab625d8182603bf9ed4c = $(`<div id="html_2227166a40e4ab625d8182603bf9ed4c" style="width: 100.0%; height: 100.0%;"><i>Beautiful Russian North. A place with a tragic fate and inspiring nature. A place where I recover </i><img src=IMG_12.JPG width=250px></div>`)[0];
                popup_26ca97da4bfd34ad9ae630f388290589.setContent(html_2227166a40e4ab625d8182603bf9ed4c);
            
        

        marker_13c3afb416962192d7082bebcf897430.bindPopup(popup_26ca97da4bfd34ad9ae630f388290589)
        ;

        
    
    
            marker_13c3afb416962192d7082bebcf897430.bindTooltip(
                `<div>
                     Ruskeala Mountain Park
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_66bc517b98e4401cb811d603b84c64fd = L.marker(
                [55.879774067558735, -3.0739869175759487],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_d848bf6ee3689f25c17de3c02d4cc9f5 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_66bc517b98e4401cb811d603b84c64fd.setIcon(icon_d848bf6ee3689f25c17de3c02d4cc9f5);
        
    
        var popup_fcd54dbb35f300004bdf62fb7a13f344 = L.popup({"maxWidth": "100%"});

        
            
                var html_35b6607e3371691aac814abb189da759 = $(`<div id="html_35b6607e3371691aac814abb189da759" style="width: 100.0%; height: 100.0%;"><i>The boundaries are only in your head. 9 years ago I began my journey to explore the World </i><img src=IMG_13.JPG width=250px></div>`)[0];
                popup_fcd54dbb35f300004bdf62fb7a13f344.setContent(html_35b6607e3371691aac814abb189da759);
            
        

        marker_66bc517b98e4401cb811d603b84c64fd.bindPopup(popup_fcd54dbb35f300004bdf62fb7a13f344)
        ;

        
    
    
            marker_66bc517b98e4401cb811d603b84c64fd.bindTooltip(
                `<div>
                     Nebattle Abbey
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_6835903e8a48cfd872348c333df814dc = L.marker(
                [51.503344831922035, -0.11967762185989927],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_bf7cd05a4ced6e76293068fd9fc62d32 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_6835903e8a48cfd872348c333df814dc.setIcon(icon_bf7cd05a4ced6e76293068fd9fc62d32);
        
    
        var popup_9a2371bcc184a063de1b385abf38bc97 = L.popup({"maxWidth": "100%"});

        
            
                var html_b316df3dcd30851c1c21814ade798c18 = $(`<div id="html_b316df3dcd30851c1c21814ade798c18" style="width: 100.0%; height: 100.0%;"><i>My first language internship </i><img src=IMG_14.JPG width=250px></div>`)[0];
                popup_9a2371bcc184a063de1b385abf38bc97.setContent(html_b316df3dcd30851c1c21814ade798c18);
            
        

        marker_6835903e8a48cfd872348c333df814dc.bindPopup(popup_9a2371bcc184a063de1b385abf38bc97)
        ;

        
    
    
            marker_6835903e8a48cfd872348c333df814dc.bindTooltip(
                `<div>
                     London Eye
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_c7dee53204873111feda204b391cef2d = L.marker(
                [55.78339062740753, 37.421446578285284],
                {}
            ).addTo(map_9453e6348f5b5c892fecce11af16db05);
        
    
            var icon_bb90e3de86653c1b66b3455e31135ac1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "heart", "iconColor": "white", "markerColor": "red", "prefix": "fa"}
            );
            marker_c7dee53204873111feda204b391cef2d.setIcon(icon_bb90e3de86653c1b66b3455e31135ac1);
        
    
        var popup_30a1f09a1d01fac1d8f8dad10f278a08 = L.popup({"maxWidth": "100%"});

        
            
                var html_bca275e33c9a011576c72b6b9fc5301c = $(`<div id="html_bca275e33c9a011576c72b6b9fc5301c" style="width: 100.0%; height: 100.0%;"><i>My favorite park where I walked as a child </i><img src=IMG_5465.JPG width=250px></div>`)[0];
                popup_30a1f09a1d01fac1d8f8dad10f278a08.setContent(html_bca275e33c9a011576c72b6b9fc5301c);
            
        

        marker_c7dee53204873111feda204b391cef2d.bindPopup(popup_30a1f09a1d01fac1d8f8dad10f278a08)
        ;

        
    
    
            marker_c7dee53204873111feda204b391cef2d.bindTooltip(
                `<div>
                     Serebryany Bor
                 </div>`,
                {"sticky": true}
            );
        
</script>
</html>