
const alphabetsEnPoint = {A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,J:1,K:2,L:3,M:4,N:5,O:7,P:8,Q:1,R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7};
const alphabetsThPoint = {
    '3585': 1, // 'ก',
    '3586': 2, // 'ข',
    '3587': 3, // 'ฃ',
    '3588': 4, // 'ค',
    '3589': 3, // 'ฅ',
    '3590': 3, // 'ฆ',
    '3591': 2, // 'ง',
    '3592': 6, // 'จ',
    '3593': 5, // 'ฉ',
    '3594': 2, // 'ช',
    '3595': 7, // 'ซ',
    '3596': 5, // 'ฌ',
    '3597': 4, // 'ญ',
    '3598': 5, // 'ฎ',
    '3599': 9, // 'ฏ',
    '3600': 9, // 'ฐ',
    '3601': 3, // 'ฑ',
    '3602': 3, // 'ฒ',
    '3603': 5, // 'ณ',
    '3604': 1, // 'ด',
    '3605': 3, // 'ต',
    '3606': 1, // 'ถ',
    '3607': 1, // 'ท',
    '3608': 4, // 'ธ',
    '3609': 5, // 'น',
    '3610': 2, // 'บ',
    '3611': 2, // 'ป',
    '3612': 8, // 'ผ',
    '3613': 8, // 'ฝ',
    '3614': 8, // 'พ',
    '3615': 8, // 'ฟ',
    '3616': 1, // 'ภ',
    '3617': 5, // 'ม',
    '3618': 8, // 'ย',
    '3619': 4, // 'ร',
    '3621': 6, // 'ล',
    '3623': 6, // 'ว',
    '3624': 7, // 'ศ',
    '3625': 4, // 'ษ',
    '3626': 7, // 'ส',
    '3627': 5, // 'ห',
    '3628': 5, // 'ฬ',
    '3629': 6, // 'อ',
    '3630': 5, // 'ฮ',
    '3656': 1, // 'อ่',
    '3640': 1, // 'อุ',
    '3634': 1, // 'อา',
    '3635': 1, // 'อำ',
    '3641': 2, // 'อู',
    '3657': 2, // 'อ้',
    '3659': 3, // 'อ๋',
    '3632': 4, // 'อะ',
    '3636': 4, // 'อิ',
    '3638': 5, // 'อึ',
    '3658': 7, // 'อ๊',
    '3637': 7, // 'อี',
    '3639': 7, // 'อื',
    '3655': 8, // 'อ็',
    '3660': 9, // 'อ์',
    '3648': 2, // 'เอ',
    '3649': 2, // 'แอ',
    '3650': 4, // 'โอ',
    '3651': 6, // 'ใอ',
    '3652': 9, // 'ไอ',
}

const goodScore = [1,2,4,5,6,14,15,24,36,41,42,45,50,51,54,55,56,59,63,65,90,96,99,100,104,105,109,114,115,119,124,136,141,142,145,150,151,154,155,156,159,163,165,190,195];
const bestScore = [36, 41, 42, 45, 50, 51, 55, 59, 63, 65];
const compayNameEn = 'girls dance entertainment';
const compayNameTh = 'เธอดิ้น เอนเตอร์เทนเม้น';

const prepareCompanyNameEn = compayNameEn.replace(/\s/g,'','').toUpperCase().split('');
const prepareCompanyNameTh = compayNameTh.replace(/\s/g,'','').split('');

let scoreEn = 0;
let scoreTh = 0;

prepareCompanyNameEn.map((char) => { scoreEn = scoreEn + (alphabetsEnPoint[char] || 0); } );
prepareCompanyNameTh.map((char) => { scoreTh = scoreTh + (alphabetsThPoint[char.charCodeAt(0)] || 0); } );

console.log({
    en: {
        name: compayNameEn,
        score: scoreEn,
        isGood: !!goodScore[scoreEn],
        isBest: !!bestScore[scoreEn]
    },
    th: {
        name: compayNameTh,
        score: scoreTh,
        isGood: !!goodScore[scoreTh],
        isBest: !!bestScore[scoreTh]
    }

})