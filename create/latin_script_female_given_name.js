// Based on https://www.wikidata.org/wiki/User:Jura1/cli/latinscriptfemalegivenname.js

module.exports = {
  args: '<name>' ,

  description: 'Create an item for a femal given name in latin script',

  examples: [
    { args: 'Clarenza' , comment: 'Created Q100967811 in one edit https://www.wikidata.org/w/index.php?title=Q100967811&oldid=1298859817' },
  ],

  template: function (name) {
    return {
      type: 'item',
      summary: `female given name [[Special:Search/${name} haswbstatement:P31=Q5 -haswbstatement:P735|${name}]]`,
      labels: {
        nn: name,
        sl: name,
        pl: name,
        fr: name,
        en: name,
        hu: name,
        de: name,
        nl: name,
        af: name,
        an: name,
        ast: name,
        bar: name,
        br: name,
        ca: name,
        co: name,
        cs: name,
        cy: name,
        da: name,
        'de-at': name,
        'de-ch': name,
        'en-ca': name,
        'en-gb': name,
        eo: name,
        es: name,
        et: name,
        eu: name,
        fi: name,
        frp: name,
        fur: name,
        ga: name,
        gd: name,
        gl: name,
        gsw: name,
        hr: name,
        ia: name,
        id: name,
        ie: name,
        io: name,
        is: name,
        it: name,
        kg: name,
        lb: name,
        li: name,
        lij: name,
        mg: name,
        min: name,
        ms: name,
        nap: name,
        nb: name,
        nds: name,
        'nds-nl': name,
        nrm: name,
        oc: name,
        pcd: name,
        pms: name,
        pt: name,
        'pt-br': name,
        rm: name,
        ro: name,
        sc: name,
        scn: name,
        sco: name,
        sk: name,
        'sr-el': name,
        sv: name,
        sw: name,
        vec: name,
        vi: name,
        vls: name,
        vo: name,
        wa: name,
        wo: name,
        zu: name,
        tr: name,
        lv: name,
        lt: name,
        az: name,
        sq: name,
        aa: name,
        ace: name,
        'aeb-latn': name,
        ak: name,
        aln: name,
        ang: name,
        arn: name,
        atj: name,
        avk: name,
        ay: name,
        ban: name,
        bbc: name,
        'bbc-latn': name,
        bcl: name,
        bi: name,
        bm: name,
        bs: name,
        bto: name,
        'cbk-zam': name,
        ceb: name,
        ch: name,
        cho: name,
        chy: name,
        cps: name,
        'crh-latn': name,
        csb: name,
        din: name,
        dsb: name,
        dtp: name,
        ee: name,
        egl: name,
        eml: name,
        ext: name,
        ff: name,
        fit: name,
        fj: name,
        fo: name,
        frc: name,
        frr: name,
        fy: name,
        gag: name,
        gn: name,
        'gom-latn': name,
        gor: name,
        gv: name,
        ha: name,
        haw: name,
        hif: name,
        'hif-latn': name,
        hil: name,
        ho: name,
        hrx: name,
        hsb: name,
        ht: name,
        hz: name,
        ig: name,
        ik: name,
        'ike-latn': name,
        ilo: name,
        jam: name,
        jbo: name,
        jut: name,
        jv: name,
        kaa: name,
        kab: name,
        kbp: name,
        kea: name,
        ki: name,
        kj: name,
        'kk-latn': name,
        'kk-tr': name,
        kl: name,
        kr: name,
        kri: name,
        krj: name,
        krl: name,
        ksh: name,
        'ku-latn': name,
        kw: name,
        la: name,
        lad: name,
        lfn: name,
        lg: name,
        liv: name,
        lmo: name,
        ln: name,
        loz: name,
        ltg: name,
        lus: name,
        'map-bms': name,
        mh: name,
        mi: name,
        mt: name,
        mus: name,
        mwl: name,
        na: name,
        nah: name,
        ng: name,
        niu: name,
        nov: name,
        nso: name,
        nv: name,
        ny: name,
        nys: name,
        olo: name,
        pag: name,
        pam: name,
        pap: name,
        pdc: name,
        pdt: name,
        pfl: name,
        pih: name,
        prg: name,
        qu: name,
        qug: name,
        rgn: name,
        rif: name,
        rn: name,
        'roa-tara': name,
        rup: name,
        'ruq-latn': name,
        rw: name,
        sdc: name,
        se: name,
        sei: name,
        sg: name,
        sgs: name,
        'shi-latn': name,
        sje: name,
        sli: name,
        sm: name,
        sma: name,
        smj: name,
        sn: name,
        so: name,
        srn: name,
        srq: name,
        ss: name,
        st: name,
        stq: name,
        su: name,
        szl: name,
        tet: name,
        'tg-latn': name,
        tn: name,
        to: name,
        tpi: name,
        ts: name,
        'tt-latn': name,
        tum: name,
        tw: name,
        ty: name,
        'ug-latn': name,
        ve: name,
        vmf: name,
        vro: name,
        war: name,
        xh: name,
        yo: name,
        zea: name
      },
      descriptions: {
        af: 'vroulike voornaam',
        ar: `أسم مؤنث معطى (${name})`,
        ast: 'nome femenín',
        bar: 'Weiwanam',
        be: `жаночае асабістае імя (${name})`,
        bg: `женско собствено име (${name})`,
        bn: `প্রদত্ত মহিলা নাম (${name})`,
        br: 'anv merc’hed',
        bs: 'žensko ime',
        ca: 'prenom femení',
        ce: `зудчун шен цӀе (${name})`,
        cs: 'ženské křestní jméno',
        cy: 'enw personol benywaidd',
        da: 'pigenavn',
        de: 'weiblicher Vorname',
        'de-at': 'weiblicher Vorname',
        'de-ch': 'weiblicher Vorname',
        el: `γυναικείο όνομα (${name})`,
        en: 'female given name',
        'en-ca': 'female given name',
        'en-gb': 'female given name',
        eo: 'virina persona nomo',
        es: 'nombre femenino',
        et: 'naisenimi',
        eu: 'emakumezko izena',
        fa: `نام‌های زنانه (${name})`,
        fi: 'naisen etunimi',
        fr: 'prénom féminin',
        gl: 'nome feminino',
        he: `שם פרטי של אישה (${name})`,
        hr: 'žensko ime',
        hsb: 'žonjace předmjeno',
        hu: 'női keresztnév',
        hy: `իգական անձնանուն (${name})`,
        id: 'nama perempuan feminin',
        is: 'kvenmannsnafn',
        it: 'prenome femminile',
        ja: `女性の名前 (${name})`,
        ko: `여성의 이름 (${name})`,
        la: 'praenomen femininum',
        lb: 'weibleche Virnumm',
        lt: 'moteriškas vardas',
        lv: 'sieviešu personvārds',
        mk: `женско лично име (${name})`,
        nb: 'kvinnenavn',
        ne: `स्त्रीलिङ्गी नाम (${name})`,
        nl: 'vrouwelijke voornaam',
        nn: 'kvinnenamn',
        pl: 'imię żeńskie',
        pt: 'nome próprio feminino',
        'pt-br': 'nome próprio feminino',
        ro: 'prenume feminin',
        ru: `женское личное имя - ${name}`,
        scn: 'nomu di battìu fimmininu',
        sco: 'female gien name',
        sk: 'ženské krstné meno',
        sl: 'žensko osebno ime',
        sq: 'emër femëror',
        sr: `женско лично име (${name})`,
        'sr-ec': `женско лично име (${name})`,
        'sr-el': 'žensko lično ime',
        sv: 'kvinnonamn',
        sw: 'jina la mwanamke',
        ta: 'பெண்களுக்கு சூட்டிய பெயர்',
        tg: 'номи шахсии занона',
        'tg-cyrl': `номи занона (${name})`,
        'tg-latn': 'nomi zanona',
        th: `ชื่อผู้หญิง (${name})`,
        tr: 'kadın ismidir',
        uk: `жіноче особове ім’я (${name})`,
        yue: `女性人名 (${name})`,
        zh: `女性人名 (${name})`,
        'zh-cn': `女性人名  (${name})`,
        'zh-hans': `女性人名 (${name})`,
        'zh-hant': `女性人名 (${name})`,
        'zh-hk': `女性人名 (${name})`,
        'zh-mo': `女性人名 (${name})`,
        'zh-my': `女性人名 (${name})`,
        'zh-sg': `女性人名 (${name})`,
        'zh-tw': `女性人名 (${name})`,
        fy: 'famkesnamme'
      },
      aliases: {
        ru: name ,
        en: [
          `${name} (given name)`,
          `${name} (first name)`
        ],
        be: name ,
        nl: `${name} (voornaam)` ,
        ja: name ,
        ab: name ,
        ady: name ,
        'ady-cyrl': name ,
        aeb: name ,
        'aeb-arab': name ,
        am: name ,
        anp: name ,
        ar: name ,
        arc: name ,
        arq: name ,
        ary: name ,
        arz: name ,
        as: name ,
        awa: name ,
        av: name ,
        az: name ,
        ba: name ,
        bcc: name ,
        'be-tarask': name ,
        bg: name ,
        bgn: name ,
        bho: name ,
        bjn: name ,
        bn: name ,
        bo: name ,
        bpy: name ,
        bqi: name ,
        brh: name ,
        bug: name ,
        bxr: name ,
        cdo: name ,
        ce: name ,
        chr: name ,
        ckb: name ,
        cr: name ,
        'crh-cyrl': name ,
        cu: name ,
        cv: name ,
        diq: name ,
        dty: name ,
        dv: name ,
        dz: name ,
        el: name ,
        fa: name ,
        gan: name ,
        'gan-hans': name ,
        'gan-hant': name ,
        glk: name ,
        gom: name ,
        'gom-deva': name ,
        got: name ,
        grc: name ,
        gu: name ,
        hak: name ,
        he: name ,
        hi: name ,
        hy: name ,
        ii: name ,
        ik: name ,
        'ike-cans': name ,
        inh: name ,
        iu: name ,
        ka: name ,
        kbd: name ,
        'kbd-cyrl': name ,
        khw: name ,
        kiu: name ,
        kk: name ,
        'kk-arab': name ,
        'kk-cyrl': name ,
        'kk-cn': name ,
        'kk-kz': name ,
        km: name ,
        kn: name ,
        ko: name ,
        'ko-kp': name ,
        koi: name ,
        krc: name ,
        ks: name ,
        'ks-arab': name ,
        'ks-deva': name ,
        ku: name ,
        'ku-arab': name ,
        kv: name ,
        ky: name ,
        lbe: name ,
        lez: name ,
        lki: name ,
        lo: name ,
        lrc: name ,
        luz: name ,
        lv: name ,
        lzh: name ,
        lzz: name ,
        mai: name ,
        mdf: name ,
        mhr: name ,
        min: name ,
        mk: name ,
        ml: name ,
        mn: name ,
        mo: name ,
        mr: name ,
        mrj: name ,
        my: name ,
        myv: name ,
        mzn: name ,
        nan: name ,
        ne: name ,
        new: name ,
        nod: name ,
        om: name ,
        or: name ,
        os: name ,
        ota: name ,
        pa: name ,
        pi: name ,
        pnb: name ,
        pnt: name ,
        ps: name ,
        rmy: name ,
        rue: name ,
        ruq: name ,
        'ruq-cyrl': name ,
        rwr: name ,
        sa: name ,
        sah: name ,
        sat: name ,
        sd: name ,
        sdh: name ,
        ses: name ,
        sh: name ,
        shi: name ,
        'shi-tfng': name ,
        shn: name ,
        si: name ,
        sr: name ,
        'sr-ec': name ,
        ta: name ,
        tcy: name ,
        te: name ,
        tg: name ,
        'tg-cyrl': name ,
        th: name ,
        ti: name ,
        tk: name ,
        tl: name ,
        tly: name ,
        tru: name ,
        tt: name ,
        'tt-cyrl': name ,
        tyv: name ,
        udm: name ,
        ug: name ,
        'ug-arab': name ,
        uk: name ,
        ur: name ,
        uz: name ,
        vep: name ,
        vot: name ,
        wuu: name ,
        xal: name ,
        xmf: name ,
        yi: name ,
        yue: name ,
        za: name ,
        zh: name ,
        'zh-cn': name ,
        'zh-hans': name ,
        'zh-hant': name ,
        'zh-hk': name ,
        'zh-mo': name ,
        'zh-my': name ,
        'zh-sg': name ,
        'zh-tw': name
      },
      claims: {
        // instance of: female given name
        P31: 'Q11879590',
        // native label
        P1705: {
          text: name,
          // multiple languages
          language: 'mul'
        },
        // writing system: Latin script
        P282: 'Q8229',
      }
    }
  }
}
