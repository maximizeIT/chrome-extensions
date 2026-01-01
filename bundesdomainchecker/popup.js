// --- Data ---
// Derived from: https://fragdenstaat.de/artikel/exklusiv/2025/12/geheimsache-domains/
const OFFICIAL_DOMAINS = [
  "auswaertiges-amt.de", "bamf.de", "bmas.de", "bmel.de", "bmleh.de", "bmvg.de", "bmz.de",
  "bundesfinanzministerium.de", "bundesumweltministerium.de", "bundeswirtschaftsministerium.de",
  "ptb.de", "rki.de", "bsi.bund.de", "bund.de", "berlin.ptb.de", "a9digital.de", "a9-digital.de",
  "agrowetter.de", "agrowetter.eu", "allergien.bund.de", "alpenflugwetter.com", "alpenflugwetter.de",
  "alpenflugwetter.eu", "alpenwetter.eu", "altersvorsorgemachtschule.de", "altersvorsorge-macht-schule.de",
  "arbeitsagentur.de", "arbeitsministerium.eu", "ausbildung-berlin.bund.de", "auslandschulwesen.de",
  "auslandsschulportal.de", "aussiedlerbeauftragter.de", "ausweisapp.bund.de", "aviation-weather.eu",
  "bafa.bund.de", "bafa.de", "bafg.de", "bafin.de", "bafoeg.online", "bafoeg-rueckzahlung.de",
  "bafza.de", "bag.bund.de", "bakoev.bund.de", "ballonwetter.de", "ballonwetter.eu", "balm.bund.de",
  "bam.de", "bamf.bund.de", "banst-pt.de", "banu.bund.de", "barrierefreieit.bund.de", "bas.bund.de",
  "base.bund.de", "bast.de", "baua.bund.de", "baua.de", "bauminister.de", "bav.bund.de", "baw.de",
  "bbk.bund.de", "bbknina.bund.de", "bbr.bund.de", "bdbos.bund.de", "beihilfe.bund.de",
  "beirat-raumentwicklung.de", "beratung.bund.de", "bescha.bund.de", "bet.bund.de", "beteiligung.bund.de",
  "bev.bund.de", "bevoelkerungsschutz.de", "bfarm.de", "bfb-bund.de", "bfdi.bund.de", "bfe.bund.de",
  "bfj.bund.de", "bfn.de", "bfr.bund.de", "bfs.bund.de", "bfs.de", "bfu-web.de", "bgh.bund.de",
  "bgr.bund.de", "bib.bund.de", "bibb.de", "bildungskredit.de", "bildungskredit.online", "bit.bund.de",
  "bitv-lotse.bund.de", "bitvlotse.de", "bitv-lotse.de", "bka.de", "bka-bund.de", "bkg.bund.de",
  "bkge.de", "ble.bund.de", "ble.de", "bma.de", "bmas.eu", "bmas.mobi", "bmbf.bund.de", "bmbf.de",
  "bmds.bund.de", "bmdv.bund.de", "bmel.bund.de", "bmf.bund.de", "bmfsfj.bund.de", "bmftr.bund.de",
  "bmg.bund.de", "bmgs.bund.de", "bmi.bund.de", "bmj.bund.de", "bmjv.bund.de", "bmu.bund.de",
  "bmukn.bund.de", "bmuv.bund.de", "bmv.bund.de", "bmvbs.bund.de", "bmvbs.de", "bmvbw.bund.de",
  "bmvi.de", "bmvi.eu", "bmvi.info", "bmvi.net", "bmvi.org", "bmwa.bund.de", "bmwi.bund.de", "bmwi.de",
  "bmwk.bund.de", "bmwsb.bund.de", "bnd.bund.de", "bpatg.de", "bpb.de", "bpra.bund.de",
  "breitbandatlas.de", "breitband-atlas.de", "briefing4aviation.com", "briefing4aviation.de",
  "briefing4aviation.eu", "briefing4pilot.com", "briefing4pilot.de", "briefing4pilot.eu", "bsg.bund.de",
  "bstu.bund.de", "bsu-bund.de", "bund.online", "bund.services", "bundesamtsozialesicherung.de",
  "bundesarbeitsgericht.de", "bundesarbeitsministerium.de", "bundesarbeitsministerium.eu",
  "bundesarchiv.de", "bundesausgleichsamt.de", "bundesbank.de", "bundesbauminister.com",
  "bundesbauminister.de", "bundesbauminister.net", "bundesbauminister.org", "bundesbauministerium.com",
  "bundesbauministerium.de", "bundesbauministerium.net", "bundesbauministerium.org",
  "bundescriminalamt.de", "bundesfinanzhof.de", "bundesgerichtshof.de", "bundeshaus.de",
  "bundeshaushalt-info.de", "bundesimmobilien.de", "bundesinfrastrukturministerium.de",
  "bundesjustizamt.de", "bundeskanzleramt.de", "bundeskanzlerin.de", "bundeskartellamt.de",
  "bundeskriminalamt.de", "bundeskriminalamt.eu", "bundeskriminalamt.info", "bundeskriminalamt.net",
  "bundeskriminalamt.org", "bundesministerium-fuer-arbeit-und-soziales.eu",
  "bundesministerium-fuer-stadtentwicklung.de", "bundesnetzagentur.de", "bundesnotbrunnen.bund.de",
  "bundespolizei.de", "bundespraesident.bund.de", "bundespraesident.de", "bundespraesidialamt.bund.de",
  "bundespreis.bmel.de", "bundespruefstelle.de", "bundesrat.de", "bundesrechnungshof.de",
  "bundesregierung.de", "bundessortenamt.de", "bundessozialgericht.de", "bundessozialministerium.de",
  "bundessozialministerium.eu", "bundessprachenamt.de", "bundesstelle-fuer-informationstechnik.de",
  "bundestag.de", "bundestag.eu", "bundestag.mobi", "bundestag-magazin.de", "bundestag-online.de",
  "bundestagsarena.de", "bundestagspraesident.de", "bundestagspraesidentin.de", "bundestag-und-schule.de",
  "bundesverfassungsgericht.de", "bundesverkehrsminister.com", "bundesverkehrsminister.de",
  "bundesverkehrsminister.net", "bundesverkehrsminister.org", "bundesverkehrsministerium.com",
  "bundesverkehrsministerium.de", "bundesverkehrsministerium.net", "bundesverkehrsministerium.org",
  "bundesversammlung.de", "bundesverwaltungsamt.de", "bundesverwaltungsgericht.de", "bundeswahlleiter.de",
  "bva.bund.de", "bva.services", "bva.website", "bva-bund.de", "bva-dienstleistungszentrum.de",
  "bvl.bund.de", "bvs.bund.de", "bvwp2015.de", "bvwp-2015.de", "bzga.de", "bzkj.bund.de", "bzst.bund.de",
  "caf.bund.de", "caf-netzwerk.de", "cert-bund.de", "cerwis.eu", "cio.bund.de", "cir.bundeswehr.de",
  "circa.bund.de", "climatemonitoring.de", "climatemonitoring.eu", "climateservice.eu",
  "climateservices.de", "climateservices.eu", "cloud.bund.de", "cmsaf.eu",
  "co2kostenaufteilung.bundeswirtschaftsministerium.de", "covid-19.rki.de", "daisy.bva.bund.de",
  "das-bildungspaket.de", "das-demographie-netzwerk.de", "das-jobcenter.de", "das-parlament.de",
  "data.rki.de", "datenschutzcockpit.bund.de", "dbtg.eu", "dbtg.tv", "dbtg-newsletter.de",
  "dbt-internet.de", "dehst.de", "dekabank.de", "demis.rki.de", "demograf.de", "dera.bund.de",
  "derbevoelkerung.de", "der-demograf.de", "destatis.de", "deutsche-polizei.eu",
  "deutscher-bundestag.de", "deutscher-bundestag.eu", "deutscherdom.de", "deutscherklimaatlas.de",
  "deutscher-klimaatlas.de", "deutscherwetterdienst.com", "deutscher-wetterdienst.com",
  "deutscherwetterdienst.de", "deutscher-wetterdienst.de", "deutscherwetterdienst.eu",
  "deutscher-wetterdienst.eu", "deutschesheer.de", "deutschesklimaportal.de",
  "deutsches-klimaportal.de", "deutsches-museum.de", "deutsches-parlament.eu", "deutscheweine.de",
  "deutschlandatlas.bund.de", "deutschland-wird-inklusiv.de", "dfs.bund.de", "dienstleistungszentrum.de",
  "dienstreisezentrum.de", "digitale-verwaltung.de", "digitalservice.bund.de", "dimdi.de", "dip21.de",
  "diplo.de", "dip-online.de", "dipul.bund.de", "dklip.de", "d-klip.de", "dnb.de", "doi-de.net",
  "doi-sec-de.net", "dorfwettbewerb.bund.de", "dpma.de",
  "drogenbeauftragte.bundesgesundheitsministerium.de", "dsc.bund.de", "dsd.online", "dsd-weltweit.de",
  "dvdv.de", "dwd.bund.de", "dwd.de", "dwd.eu", "dwd-shop.de", "dwd-shop.eu", "dzsf.bund.de",
  "eba.bund.de", "e-beschaffung.bund.de", "e-bundestag.de", "egesetzgebung.bund.de", "e-goverment.eu",
  "ehap.bmas.de", "e-id.bva.bund.de", "einfach-leichte-sprache.de", "einfachteilhaben.de",
  "einfach-teilhaben.de", "einfachteilhaben.mobi", "einfach-teilhaben.mobi", "eingruppierung.bund.de",
  "ein-und-ausblicke.de", "eisenbahn-unfalluntersuchung.de", "eparlament.de", "e-parliament.de",
  "esf.de", "esf-foerderung.de", "esf-in-deutschland.de", "esf-meine-geschichte.de", "esf-programm.de",
  "esf-projekte.bund.de", "expertensuche.gesund.bund.de", "export.service.bund.de",
  "fachkrÃ¤fte-allianz.de", "fachkrÃ¤fteoffensive.de", "fachkrÃ¤fte-offensive.de", "fachkrÃ¤ftewoche.de",
  "fachkraefte-allianz.de", "fachkraefteoffensive.de", "fachkraefte-offensive.de",
  "fachkraeftepreis.bmas.de", "fachkraeftewoche.de", "familienbot.chb.it.bund.de", "fba.bund.de",
  "federal-ministry-of-finance.de", "finanzforscher.de", "fiu.bund.de", "fli.bund.de", "flugmet.de",
  "flugmet.eu", "flugwetter.de", "flugwetter.eu", "flugwetterberatung.de", "flugwetter-beratung.de",
  "fmsa.de", "foerderfibel.bund.de", "foerderinfo.bund.de", "foerderleitfaden.bund.de",
  "foerdern-und-fordern.info", "foerderportal.bund.de", "foev-speyer.de", "fondsheimkinder.de",
  "fonds-heimkinder.de", "fons-civitatis.de", "fuehrungszeugnis.bund.de", "gba.bund.de", "gcos.de",
  "gda-psyche.de", "generalbundesanwalt.de", "germanpnrportal.bva.bund.de",
  "germanpnrwebportal.bva.bund.de", "germanypnrwebportal.bva.bund.de", "gesamtkonzept-elbe.bund.de",
  "gesetzgebung.bund.de", "gesund.bund.de", "gesundheitswetter.eu", "gisc-germany.eu",
  "gisc-offenbach.eu", "glasklar-bundestag.de", "government-site-builder.de", "govlab.bund.de",
  "govlabde.bund.de", "grippeweb.bund.de", "grippeweb.rki.de", "grosspm.bund.de", "gruan.org",
  "gsb.bund.de", "hartziv.de", "heimat.bund.de", "heimkinder-fonds.de", "hierwaechstwissen.bmel.de",
  "hingehoert.bmas.de", "hinzuverdienstrechner.de", "id.bund.de", "ida.de", "ifado.de",
  "infrastrukturministerium.de", "initiative-neue-qualitaet-der-arbeit.de", "inklusionslandkarte.de",
  "innenstadtprogramm.bund.de", "innerersicherheitsfonds.de", "inqa.de", "integration-in-deutschland.de",
  "internetenquete.de", "ipv6-programm.bund.de", "isyfact.de", "isyfact-standards.de",
  "itsi.bundesfinanzministerium.de", "itzbund.de", "iud.bundeswehr.de", "jakob-kaiser-haus.de",
  "jobboerse.bmvi.de", "jobcenterreform.de", "jobcenterservice.de", "jobcentersuche.de",
  "jobsohnebarrieren.de", "jobs-ohne-barrieren.de", "jugendinarbeit.de", "julius-kuehn.de",
  "karriere.bund.de", "kba.de", "kbst.bund.de", "kdb.bund.de", "kdbng.bund.de", "kfw-ipex-bank.de",
  "kidd.bund.de", "kimarktplatz.bund.de", "kinderkommission.de", "kkr.bund.de", "klimadaten.eu",
  "klimadeutschland.de", "klimagutachten.eu", "klimamonitoring.de", "klimaservices.de",
  "klimaueberwachung.de", "klimaueberwachung.eu", "kliwas.de", "kolibri.bund.de",
  "konsultation.bmds.bund.de", "konsultation.bundeswirtschaftsministerium.de", "k-pvs.bund.de",
  "kritis.bund.de", "kulturstaatsminister.de", "kunstdatenbank.bund.de", "kunst-im-bundestag.de",
  "kunstverwaltung.bund.de", "kuppel-kucker.de", "kuppel-kucker.info", "kuppel-kucker.org",
  "kvb.bund.de", "lba.de", "lebenslagen-in-deutschland.de", "lebensministerium.bund.de",
  "leitfadeninklusion.de", "leitfaden-inklusion.de", "lernplattform.bund.de", "liag-hannover.de",
  "lir.bund.de", "luftwaffe.de", "mad.bundeswehr.de", "marie-elisabeth-lueders-haus.de",
  "masterplan-freizeitschifffahrt.bund.de", "matomo.warnung.bund.de", "mauer-mahnmal.de",
  "medizinwetter.eu", "meet.viko.bund.de", "meincomeback.de", "mein-comeback.de", "mein-comeback.info",
  "mein-justizpostfach.bund.de", "meldestelle.bvl.bund.de", "meteoalarm.de", "metlis.eu",
  "mieterschutz.bund.de", "migration-gesundheit.bund.de", "ministere-federal-des-finances.de",
  "mit-mischen.de", "mitmischen.tv", "mks-dialog.de", "mobil.bmvi.de", "mobilitaetsforum.bund.de",
  "mobilitaetsforum-bund.bund.de", "monopolkommission.bund.de", "mri.bund.de", "mwscan.bund.de",
  "nachhaltig-mobil.bund.de", "nachhaltig-mobil-planen.bund.de", "nationale-plattform.bund.de",
  "nationalesicherheitsstrategie.de", "naturgefahrenforschung.de", "ndb.bund.de",
  "nebenwirkungen.bund.de", "nebenwirkungen.pei.de", "netzallianzdeutschland.de",
  "neue-qualitaet-der-arbeit.de", "neues-jobcenter.de", "news.bundesfinanzministerium.de", "nkcs.bund.de",
  "normenkontrollrat.bund.de", "oberpruefungsamt.de", "ohnedichkeinwir.de", "ohne-dich-kein-wir.de",
  "ombudsrad.de", "ombudsrat.de", "ombudsrat.info", "ombudsrat.net", "ombudsrat.org", "opendata.bund.de",
  "orchesterversorgung.de", "organisationsberatung.bund.de", "organisationshandbuch.bund.de",
  "organspenderegister.bund.de", "organspende-register.bund.de", "orghandbuch.bund.de",
  "orghandbuch.de", "orgportal.bund.de", "oss.bund.de", "ostseeparlamentarierkonferenz.de",
  "parlamentsfernsehen.de", "parlaments-profi.de", "paul-loebe-haus.de", "pcmet.com", "pcmet.de",
  "pcmet.eu", "pc-met.eu", "pei.de", "personal.bundeswehr.de", "personalausweisportal.de",
  "personenstandsrecht.de", "pnrwebportal.bva.bund.de", "pnrwebportalgermany.bva.bund.de",
  "polizei.bund.de", "polizei.de", "polizei-deutschland.de", "polizei-deutschland.eu", "polizei-info.de",
  "pollenflugvorhersage.eu", "portal.bmi.bund.de", "portal.bsi.bund.de", "portal.bvl.bund.de",
  "portal-barrierefreiheit.bund.de", "postfachtool.id.bund.de", "potential-leerstand.bund.de",
  "potenzial-leerstand.bund.de", "presse.bundesumweltministerium.de", "profi.bund.de",
  "projekt-e-demokratie.de", "provenienzdatenbank.bund.de", "prueferforum.bva.bund.de", "psyga-check.de",
  "radwegdeutscheeinheit.de", "recht.bund.de", "redweg-deutsche-Einheit.de", "regionengestalten.bund.de",
  "regionen-gestalten.bund.de", "regiongestalten.bund.de", "region-gestalten.bund.de",
  "registerfactory.de", "register-factory.de", "registration.bundesfinanzministerium.de", "reichstag.eu",
  "reichstagsgebaeude.de", "reichstagsgebaeude.eu", "religionsfreiheit.bmz.de", "rentenpaket.de",
  "renten-paket.de", "rentenreformpaket.de", "ris.bund.de", "rlp.bund.de",
  "sanitaetsdienst-bundeswehr.de", "segelflugwetter.de", "segelflugwetter.eu", "selberhandeln.de",
  "selber-handeln.de", "service.bund.de", "servicesuche.bund.de", "shop.bkg.bund.de",
  "sicherheit.bund.de", "signaturbuendnis.bund.de", "social.bund.de", "so-klingt-europa.de",
  "sozialbeirat.de", "soziale-entschaedigung.de", "soziale-teilhabe.bva.bund.de", "sozialministerium.eu",
  "sozialpolitische-informationen.de", "sozialversicherungswahlen.de", "sozialwerk.bund.de",
  "stabile-finanzmaerkte.de", "stabile-haushalte.de", "stabiler-euro.de", "statistik.bmz.de",
  "stbauf.bund.de", "stbauf-intern.bund.de", "tagderjobcenter.de", "tag-der-jobcenter.de",
  "technisches-Referendariat.de", "technisches-referendariat.de", "teilzeit-info.de", "thuenen.de",
  "thw.bund.de", "thw.de", "tkmeldeportal.bnetza.bund.de", "tln-mobility.eu", "trivis.de",
  "umweltbundesamt.de", "un-behindertenrechtskonvention.de", "uniohneabi.de",
  "un-koordinierungsstelle.de", "unternehmensservice-demografie.de", "unternehmensservice-demographie.de",
  "unternehmens-wert-mensch.de", "usd-portal.de", "uv-index.de", "uv-index.eu", "vbi.bund.de", "vbl.de",
  "vereintaktiv.de", "vereint-aktiv.de", "verfassungsschutz.de", "verkehrsminister.de",
  "verkehrsministerium.de", "versorgungsrechner.bund.de", "vertreterdesbundesinteresses.de",
  "verwaltungsmodernisierung.de", "verwaltungsservicezentrum.de", "viko.bund.de", "v-modell-xt.de",
  "vpki.bund.de", "vsk.bund.de", "vsz.bund.de", "wac.fli.bund.de", "was-ist-gute-arbeit.de",
  "we-are-open.info", "wehrbeauftragter.de", "weltraumwetter.bkg.bund.de", "wettergefahren.de",
  "wettergefahren.eu", "wetterlexikon.eu", "wetterwarnungen.eu", "wiewerdenwirarbeiten.de",
  "wie-werden-wir-arbeiten.de", "wiewollenwirarbeiten.de", "wie-wollen-wir-arbeiten.de",
  "willkommenindeutschland.info", "wsv.de", "wwis.dwd.de", "x500.bund.de", "xenos-de.de",
  "yesweareopen.de", "yes-we-are-open.info", "zehnte-ddr-volkskammer.de", "zielvereinbarungsregister.de",
  "zivildienst.de", "zrb.bund.de", "zukunftbreitband.de", "zukunft-breitband.de",
  "zukunft-radverkehr.bmvi.de", "zuwes.de"
];

// --- Logic ---

/**
 * Normalizes a URL to a hostname.
 */
const extractHostname = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.toLowerCase();
  } catch (e) {
    return null;
  }
};

/**
 * Checks if the hostname is in the official list.
 */
const checkDomain = (url) => {
  const hostname = extractHostname(url);

  if (!hostname) {
    return {
      status: 'ERROR',
      domain: url,
    };
  }

  // 1. Direct match check
  if (OFFICIAL_DOMAINS.includes(hostname)) {
    return {
      status: 'VALID',
      domain: hostname,
      matchedEntry: hostname
    };
  }

  // 2. Suffix/Root check
  const rootMatch = OFFICIAL_DOMAINS.find(official => 
    hostname.endsWith(`.${official}`)
  );

  if (rootMatch) {
    return {
      status: 'VALID',
      domain: hostname,
      matchedEntry: rootMatch
    };
  }

  return {
    status: 'INVALID',
    domain: hostname
  };
};

const setState = (stateId, result = null) => {
  // Hide all states
  ['state-loading', 'state-error', 'state-valid', 'state-invalid'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  // Show requested state
  const activeEl = document.getElementById(stateId);
  if (activeEl) {
    activeEl.classList.remove('hidden');
  }

  // Populate data if result exists
  if (result) {
    if (stateId === 'state-valid') {
      document.getElementById('valid-host').textContent = result.domain;
      document.getElementById('valid-match').textContent = result.matchedEntry;
    } else if (stateId === 'state-invalid') {
      document.getElementById('invalid-host').textContent = result.domain;
    }
  }
};

const init = () => {
  if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url;
      if (url) {
        const result = checkDomain(url);
        if (result.status === 'VALID') {
          setState('state-valid', result);
        } else if (result.status === 'INVALID') {
          setState('state-invalid', result);
        } else {
          setState('state-error');
        }
      } else {
        setState('state-error');
      }
    });
  } else {
    // Development Fallback
    const mockUrl = window.location.href.includes('localhost') 
      ? 'https://www.bundesregierung.de/breg-de' // Test Case
      : window.location.href;
    
    const result = checkDomain(mockUrl);
    
    // Simulate delay for effect
    setTimeout(() => {
        if (result.status === 'VALID') {
          setState('state-valid', result);
        } else {
          setState('state-invalid', result);
        }
    }, 500);
  }
};

document.addEventListener('DOMContentLoaded', init);