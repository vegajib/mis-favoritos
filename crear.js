let datosTarjetas = [
    {
        "direccion": "http://www.google.com",
        "titulo": "Google",
        "imagen": "./img/google.jpg"
    },
    {
        "direccion": "http://www.hotmail.com",
        "titulo": "Hotmail",
        "imagen": "./img/hotmail.jpg"
    },
    {
        "direccion": "http://www.gmail.com",
        "titulo": "Gmail",
        "imagen": "./img/gmail.jpg"
    },
    {
        "direccion": "http://www.yahoo.com",
        "titulo": "yahoo",
        "imagen": "./img/yahoo.jpg"
    },
    {
        "direccion": "http://www.mercadolibre.com.co",
        "titulo": "Mercadolibre",
        "imagen": "./img/MERCADOLIBRE.jpg"
    },
    {
        "direccion": "https://chat.openai.com/",
        "titulo": "Chat GPT",
        "imagen": "./img/gpt.jpg"
    },
    {
        "direccion": "https://certificados.supernotariado.gov.co/certificado",
        "titulo": "C. Tradición",
        "imagen": "./img/Supernotariado.jpg"
    },
    {
        "direccion": "https://web.whatsapp.com/",
        "titulo": "Whatsapp",
        "imagen": "./img/whatsapp.jpg"
    },
    {
        "direccion": "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=b89e8a09-e12e-46bd-3e19-585df2f0d3bb&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=micafeinternet.co&nonce=638295515307697022.4de07d29-e03a-4d4b-9b8d-150581a3d718&state=DctJCoAwDEDRVs_hEarpENMuxLNEE0FwABG8vl28v_vWGNNWTWWhxtAYcyiIHiPQWAhC6JMokITiFCK7JGlxZcniPAJmz1HIZ1vfbrg_HuZH-Tinc1950_169bn07df7Bw#wa=wsignin1.0",
        "titulo": "Outlook 365",
        "imagen": "./img/outlook.jpg"
    },
    {
        "direccion": "https://sirse.bemovil.net/login/?next=/",
        "titulo": "Recargas",
        "imagen": "./img/bemovil.jpg"
    },
    {
        "direccion": "https://portal.sisben.gov.co/Paginas/consulta-tu-grupo.html",
        "titulo": "Sisben",
        "imagen": "./img/SISBEN.jpg"
    },
    {
        "direccion": "https://www.adres.gov.co/consulte-su-eps",
        "titulo": "ADRES Fosyga",
        "imagen": "./img/adres.jpg"
    },
    {
        "direccion": "https://sede.colpensiones.gov.co/login",
        "titulo": "Colpensiones H Laboral",
        "imagen": "./img/colpensiones.jpg"
    },
    {
        "direccion": "https://sub.colpensionestransaccional.gov.co/LoginDaMLayout.aspx?tagcliente=cup",
        "titulo": "Colpensiones Recibo",
        "imagen": "./img/colpensiones.jpg"
    },
    {
        "direccion": "https://portalfacturas-acuavalle.arqbs.com/InvoiceDowload/faces/index.xhtml",
        "titulo": "Acuavalle",
        "imagen": "./img/acuavalle.jpg"
    },
    {
        "direccion": "https://www.gdo.com.co/Paginas/Duplicado.aspx",
        "titulo": "Gases de Occidente",
        "imagen": "./img/GDO.jpg"
    },
    {
        "direccion": "https://nube.celsia.com:4443/clientes/paga-tus-facturas",
        "titulo": "Celsia",
        "imagen": "./img/celsia.png"
    },
    {
        "direccion": "https://appserv.emcali.com.co/web/servicios/duplicado-de-facturas",
        "titulo": "Emcali",
        "imagen": "./img/emcali.jpg"
    },
    {
        "direccion": "https://www.dian.gov.co/",
        "titulo": "DIAN Rut actualización",
        "imagen": "./img/dian.jpg"
    },
    {
        "direccion": "https://muisca.dian.gov.co/WebRutVirtualInscripcion/#/proceso-guiado/inicio",
        "titulo": "DIAN Rut registro",
        "imagen": "./img/dian.jpg"
    },
    {
        "direccion": "https://agendamientodigiturno.dian.gov.co/Player.aspx?recurso=NavegacionDian",
        "titulo": "DIAN Cita",
        "imagen": "./img/dian.jpg"
    },
    {
        "direccion": "https://www.tuya.com.co:8461/PortalTransaccionalTuya/login.aspx",
        "titulo": "Exito tuya",
        "imagen": "./img/tuya.jpg"
    },
    {
        "direccion": "https://oferta.senasofiaplus.edu.co/sofia-oferta/certificaciones.html",
        "titulo": "Certificado SENA",
        "imagen": "./img/sofia.jpg"
    },
    {
        "direccion": "https://antecedentes.policia.gov.co:7005/WebJudicial/",
        "titulo": "Certificado pasado judicial",
        "imagen": "./img/judicial.jpg"
    },
    {
        "direccion": "https://inhabilidades.policia.gov.co:8080/",
        "titulo": "Certificado Delitos sexuales",
        "imagen": "./img/policia.jpg"
    },
    {
        "direccion": "https://www.procuraduria.gov.co/Pages/Generacion-de-antecedentes.aspx",
        "titulo": "Certificado Procuraduría",
        "imagen": "./img/procuraduria.jpg"
    },
    {
        "direccion": "https://srvcnpc.policia.gov.co/PSC/frm_cnp_consulta.aspx",
        "titulo": "Cert. Medidas correctivas",
        "imagen": "./img/correctivas.jpg"
    },
    {
        "direccion": "https://resultados.icfes.gov.co/login",
        "titulo": "Resultado ICFES",
        "imagen": "./img/icfes.jpg"
    },
    {
        "direccion": "https://carpetaciudadana.and.gov.co/",
        "titulo": "Carpeta Digital",
        "imagen": "./img/carpetadigital.jpg"
    },
    {
        "direccion": "https://imagenesdx.com/",
        "titulo": "Imagenes Dx",
        "imagen": "./img/imagenesdx.jpg"
    },
    {
        "direccion": "https://clinimagenes.com/",
        "titulo": "Clinimagenes",
        "imagen": "./img/clinimagenes.jpg"
    },
    {
        "direccion": "https://fcm.org.co/simit/#/home-public",
        "titulo": "Simit multas",
        "imagen": "./img/simit.jpg"
    },
    {
        "direccion": "https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx",
        "titulo": "Certificado Sispro ReThus",
        "imagen": "./img/rethus.jpg"
    },
    {
        "direccion": "https://ruaf.sispro.gov.co/TerminosCondiciones.aspx",
        "titulo": "Certificado Sispro Ruaf",
        "imagen": "./img/ruaf2.jpg"
    },
    {
        "direccion": "https://proteccion.com/certifacil/#/certificados",
        "titulo": "Certificados Proteccion",
        "imagen": "./img/proteccion.jpg"
    },
    {
        "direccion": "https://www.porvenir.com.co/web/certificados-y-extractos/certificado-de-afiliacion",
        "titulo": "Certificados Porvenir",
        "imagen": "./img/porvenir.jpg"
    },
    {
        "direccion": "https://www.fomag.gov.co/fomagzp/",
        "titulo": "Fomag",
        "imagen": "./img/fomag.jpg"
    },
    {
        "direccion": "http://www.facebook.com",
        "titulo": "Facebook",
        "imagen": "./img/facebook.jpg"
    },
    {
        "direccion": "http://www.instagram.com",
        "titulo": "Instagram",
        "imagen": "./img/instagram.jpg"
    },
    {
        "direccion": "https://www.klipartz.com/",
        "titulo": "Imagenes PNG",
        "imagen": "./img/klipartz.jpg"
    },
    {
        "direccion": "https://www.pngegg.com/es",
        "titulo": "Imagenes PNG EGG",
        "imagen": "./img/pngegg.jpg"
    },
    {
        "direccion": "http://www.youtube.com",
        "titulo": "Youtube",
        "imagen": "./img/youtube.jpg"
    },
    {
        "direccion": "https://www.bancolombia.com/personas/solicitud-documentos",
        "titulo": "Certificados Bancolombia",
        "imagen": "./img/bancolombia.jpg"
    },
    {
        "direccion": "https://www.vehiculosvalle.com.co/impuestosweb/#/home-public",
        "titulo": "Impuesto Vehículo Valle",
        "imagen": "./img/impv.jpg"
    },
    {
        "direccion": "https://tramites.igac.gov.co/geltramitesyservicios/home.seam",
        "titulo": "Certificado IGAC",
        "imagen": "./img/igac.jpg"
    },
    {
        "direccion": "https://pasaportes.valledelcauca.gov.co/home/agendar",
        "titulo": "Cita pasaporte",
        "imagen": "./img/pasaporte.jpg"
    },
    {
        "direccion": "https://viva1a.com.co/",
        "titulo": "Viva1a",
        "imagen": "./img/viva1a.jpg"
    },
    {
        "direccion": "https://www.cali.gov.co/tic/publicaciones/132373/Facturas/",
        "titulo": "Impuesto predial Cali",
        "imagen": "./img/cali.jpg"
    },
    {
        "direccion": "https://www.ilovepdf.com/es",
        "titulo": "PDF",
        "imagen": "./img/pdf.jpg"
    },
    {
        "direccion": "http://www.asanchezradiologos.com",
        "titulo": "A Sanchez radiologos",
        "imagen": "./img/radiologos.jpg"
    },
    {
        "direccion": "http://190.252.107.132:8081/resultados/CResultados?accion=inicioHome#nbb",
        "titulo": "Annar Lab",
        "imagen": "./img/annar.jpg"
    },
    {
        "direccion": "https://hsjrestrepo.gov.co/resultados-imagenologia/",
        "titulo": "Hospital San Jose",
        "imagen": "./img/hsj.jpg"
    },
    {
        "direccion": "https://www.contraloria.gov.co/web/guest/persona-natural",
        "titulo": "Contraloria",
        "imagen": "./img/contraloria.jpg"
    },
    {
        "direccion": "#",
        "titulo": "#",
        "imagen": "./img/mikfe.jpg"
    },
    {
        "direccion": "#",
        "titulo": "#",
        "imagen": "./img/mikfe.jpg"
    },
    {
        "direccion": "#",
        "titulo": "#",
        "imagen": "./img/mikfe.jpg"
    }
    
];

datosTarjetas.forEach((element) => {
    let contenedor = document.getElementById("contenedorFavoritos");
    let tarjeta = document.createElement("div");
    tarjeta.className = "enlaces";
    contenedor.appendChild(tarjeta);

    let contenedorEnlace = document.createElement("div");
    tarjeta.appendChild(contenedorEnlace);

    let direccionWeb = document.createElement("a");
    direccionWeb.href = element.direccion;
    direccionWeb.target ="_blank";
    direccionWeb.className = "link";
    direccionWeb.tabIndex = "-1"
    contenedorEnlace.appendChild(direccionWeb);

    let imagen = document.createElement("img");
    imagen.src = element.imagen;
    direccionWeb.appendChild(imagen);

    let titulo = document.createElement("div");
    titulo.className = "texto";
    titulo.innerText = element.titulo;
    tarjeta.appendChild(titulo);
});
