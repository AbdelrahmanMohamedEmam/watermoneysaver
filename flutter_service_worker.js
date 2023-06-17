'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9d74abb609d34013ea6c4af24eecafeb",
"index.html": "2a80bde2552c9b7c48c1c77efc409cbc",
"/": "2a80bde2552c9b7c48c1c77efc409cbc",
"main.dart.js": "d6fd80a85d91410621dc948bd1bc1236",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f5fa087c30d3f5a51f4d8569dff537fa",
"icons/Icon-maskable-512.png.png": "16f7ae7deb490459064ba6778e1aa6e2",
"icons/Icon-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-maskable-192.png": "d1a52af1cc4393dd91020ff9955cd6fb",
"icons/Icon-512.png": "16f7ae7deb490459064ba6778e1aa6e2",
"manifest.json": "ef4f1079910ab5e89cd0862c8603b095",
".git/ORIG_HEAD": "5f224eabd666f1ded064d48f3e2feb3d",
".git/config": "5b748ef498123655660e15ed541bbed4",
".git/objects/0d/4b1abe8b6e40390157e7e9e6d3f95ac6650c05": "201f849ffbe94d5d7dc2a55406931ffd",
".git/objects/0d/a49c319bf71885aacb7566113a9b55d29e34ff": "659736766bcf8f20c78baf4cb6290029",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/66/04d25570d379259d1b28fc6cd6f65d624cf47e": "3282ae00d7185687e3570c67a5970844",
".git/objects/66/41276cb90eb414adce72d541d29f1e28366819": "4cbefe26f1673345bd56d96a8e6d84d2",
".git/objects/68/533d7d00b1ee6b596de675ea31301016bc6a87": "b9eb0ab8801d45c7cf796b0664fab596",
".git/objects/68/86eed258ff76889cf05b6358aab8a7ce4173c2": "1b39c59d2a2ca68e7081abe948baf8c2",
".git/objects/57/680e3e892eca401d292478c0685f4beb572665": "64ff87800fe1240e731f87aaf21aaf67",
".git/objects/3b/b5be0ab61f199409bfaa39b7485bb6dad20e4d": "97df1f77dc16a6446831c5cce04843d3",
".git/objects/3b/7cb70583da5c3f2c51dc57fb7e8fa8032ca5f8": "81d9a49246fb053c9061fe63f18f83e6",
".git/objects/03/fecf7f84aa63ef9a81beb07b96556783a8e0b1": "88d3af1118cdaa8fd8394f13a29f3017",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/2acdad8c2357648bb03b725c7d8237d55ed30f": "265ccbda8c40524f4b638f34833f7b44",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/6c862703d2ce46bde44fd8252b7bcc9ff875da": "564ce9d1749a71dbc444aeac0192e197",
".git/objects/04/e7f1473ab7ebbbd772854f0021dcd0342f2c4c": "dd8242e4af3ef4ea3ff3090e1d3e88b0",
".git/objects/04/a1cceb21f2ef65ab2f90bebbcc8e6ee92c2a66": "ce18a21b1b7f49ff8cb531f7d7485bbd",
".git/objects/6a/18dea88c7758f3c971b4d3362fa6962e62ed7d": "8dc6d59179533d8cb4535a4b06ba8777",
".git/objects/6a/ea4cd1af58597efacc93a770c3aa7b39259435": "3b8a85b6b7c8a5c43209f73b0d4b9544",
".git/objects/6a/936cb1d4ed727ad35b67d67ee01cfe7942bf25": "fc97903fc6f9ea180355cf399f95ba2a",
".git/objects/32/5e4e3a4c1f80b6c29f0dec901097b7558994be": "2ceac50d94a1158e5e272927a9f8b5af",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/006c868b07d61c76c1eb1ade56963c3d4eb5ca": "fc89c50e79afd7b6590d3376dd7adce8",
".git/objects/69/1be6707380af576ee0fae4ab560486df1212dd": "868d058301000f98ebc43b81e54820aa",
".git/objects/69/4f094352b356bd5bea94655f01faeb33c93ae0": "70cac87de4ec5255b0cd9c2955b36548",
".git/objects/3c/54925313f8c3bc96be89b56dc58725f9af6e44": "9f0d6b0259c7f272c40c75185ce306d0",
".git/objects/3c/237e641a5872f2b1a1b7481e72cd1ffac96bcf": "1d924e24530022bcba0fad3f9f0bd98d",
".git/objects/56/4c95cc29d2f1160897c57b3c697795de4ccbcf": "032ce8806c9d4de43ba840fc3ee55217",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/3d/57244d2aba23b820780c3931d6feed88ffa9a9": "6f534d4429cbad94eb162183efef1786",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/0158ed9d943f9af00a823de496bdcd18111b3b": "911099291a1fefdcd5a3200c26d058de",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/371c2bbbe558137adcb9dc92f329e93d0f672b": "b3438ba3fc1fe3fc35fcffe935a03f28",
".git/objects/5a/96917d3d636f921c3778e55685dec052c1eff2": "42c95f930019239cd2d6428d94610439",
".git/objects/5f/ad5286340f8aa29ed9d30d53158f40f27db7f7": "98e20e9863b19265cc7a5e98eda05a1e",
".git/objects/5f/6382edcceaba3848474fee47b214d97969141c": "612cc2fd11e5796b1e4e9d747d5ca8d5",
".git/objects/33/36df6c543df2d06de347181eb318543ae10d2e": "2ffddd6c472fb42a589ec3b252057f8f",
".git/objects/9d/13e43cbca8b8c2b7f68219ed9b875b4dc9a2cb": "776fc2ed5bb533c30ce1e02171f00cff",
".git/objects/9c/995589c8ca2712f77e8204bc8a23e02baf56b3": "68657a8990a32feeb1977bf3fd33c39a",
".git/objects/a4/e746fd9a52591367e9a9ebf5fb557ec110a0cd": "45cefa6c9e5f596a5133f875c98203f8",
".git/objects/b5/b0d9c24ecd8433165d06b953718b5f81a68f3a": "368642fdb6c7302ae6690cd3492cf36a",
".git/objects/b5/9ac322907d5847b20c71ca0fe4be9085f4bf79": "90bf04d109308b81a9bbf9f9e52e5e5b",
".git/objects/b5/814dc8e9fd3df4a056064d3dd88be944ae902f": "5efb0e9495f37cbd3713755634606389",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/cc24d348485cb34815396c318e3d3cf3ecacea": "247919fff11d5989a6bebdcd1f2c04ec",
".git/objects/b2/e2b6e9b8ace6de4c9ca38c0798f3a4c78ec681": "9e342ff6c840ffd3f87ffb4ea8cf452d",
".git/objects/d9/1dfc5efdfc4be96affe981d67d4b2308e3bb5f": "157a2054b8067b50a8d78ab1d615b8ef",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/bb/08a53b197f8cd3841a81788e6cb845d64387ea": "d00a7d27b6327ccca37d3816ab695911",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/d39c7c6f64ec462b731fa728b32bedf0ed9045": "692e588800c5ba01fc8ebcf2294714d3",
".git/objects/be/8c2f2e8d40276fb5b535c0d77e38c0deb8b05c": "e057946c028b0edbecb81ac3dfde5420",
".git/objects/df/63d85788ef43e3c958a24e81c142c666293b9a": "840c82fb63d76c4894e1ae6f4b8e4d56",
".git/objects/da/b0b73837ff75b799fbbbcfbba0d74db23444a0": "41ccde513a557ceea60de6b231b850ab",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/99ca0ad85d93664c117bd3427a3a19fe508e11": "c8039db187fd81aa52b17cdf5de04faf",
".git/objects/ae/623c476f9c8309aa5cc498de057feb169cab1f": "be741f8542862ef1c6ed57946471b71e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f4/2f3be937b01c4207aa69466415fd60ec912c43": "815041491b6ec05b9aca4d6734cfe32e",
".git/objects/f4/859424cb5d6cc1de2f61789ebf6858b81994e6": "89e72cd3ddb04d8e3070a4b736d979b7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/19c490b0d5dcddccb9c1c93587f6ea8ccdbc2f": "f55717945ce5da0b06d7cfab287a8929",
".git/objects/c0/480cc8e275239e82613d21e59450b47c498636": "69464a5bad87c58aa94536b2a2d4ac50",
".git/objects/c0/3e827ab14e6e433f27718c5a60fff3eb4bfb28": "051f8581c28201379f55f59a524b1151",
".git/objects/c0/4b1cdf421b00ff89eab6a7b6a19583bb1c3e4e": "486f5d2e9ec827199ceff02d53c25c7e",
".git/objects/f2/7b553c5ae1f62292b819201fe9b23e552d0cc8": "07a8f088a928871ce5a1937012d97831",
".git/objects/f2/4cee6b1f8075603cce17a0f9fa264ae847cda9": "fa9f758fc143df9ed8406de4e35e000f",
".git/objects/ca/eb11e6fbbc536ed02457273bc41acad604e424": "13ffca73315a4fba235c5b652a8e6093",
".git/objects/e4/4ac934b53f050d8763ad5ce928d448a2f4f283": "f8f3af76a72f7ef9c72469434007118a",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/c8/127f227b0f6044d7b554b18e34ba9df205bc5d": "d6fbea12d19c8f785fdff6c7cc68060f",
".git/objects/ed/e435bf067a48f29171580515b378c9462a8ca2": "7e2b224db5d206ea78a7de1bbff36123",
".git/objects/c6/e0476f6c846008c5fedc96941dd273198ec852": "352474d3f500b95f064bdf40c9cbd78f",
".git/objects/4e/f93e5351c61264b46435a24625316f029837d6": "571b83cb5ae73c0becf6844a3e3d2f41",
".git/objects/20/fb37f4131c87028a5d18d70424d5d243c62563": "069a44112fc21286f799518ca293dbda",
".git/objects/27/1341016585c4e6235662b484ebead08747cad7": "5360fd4f5926af3d5a653868945db7c0",
".git/objects/27/d269c0b9afbb0abf5fe02a48de631d6a7851e3": "cf646418035370f9d6782149f30a2f64",
".git/objects/27/bcb5b575ba13d0be331738c1b59053abc5d994": "f1aa594988c18a4d783f438a7313c686",
".git/objects/4b/ebb7581b7d7996fc4b7a8f43881875af78b35e": "ae385fb929f8a3bcee5b8c221bb95b30",
".git/objects/29/98f986d31abf3c5c622d9fd1dec64b8a69e678": "641e5ad57bc00702185b8991b9a5055c",
".git/objects/29/6693e504ad4f1d54b0d5fb900bf2263fcb389e": "25dbf0eede5ccb5a56526a5368695102",
".git/objects/7c/f9a07a05ca32ad27f95b54c15f7866c85bb5d2": "4aae6c302dd978b71dc90dddd130f6d8",
".git/objects/74/13982b4853cb5c7575e6bacb500a3e45da2ddc": "2a5e243ccf2f8d91d9ccb540932f57e0",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/7b/e9a276c9d0565ecac9e211be6eab94eb5a8b63": "f833b978c09f3904b08254a848ac35bd",
".git/objects/8f/740566057d75661ae63783080dbf0e1898876b": "ecdd960a2c62bd43afe6e32f05200042",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/5364c4366e71b09aa4b92dac44e226d8b5a83e": "180b0a231cb039d9be8e1f4ec93891d1",
".git/objects/21/a85057b4f31d425d54867401aa6f1f9899b31e": "b697a0a8f84d6bfafc78825b41aa0f3c",
".git/objects/75/bf0214de0dd7b69c7d5f9a24a76be6c862d16d": "11ddf54032f7c96c3424730f6d05981b",
".git/objects/75/9573619becb4777fe63887b3dc0404c76e6914": "1e0f5950fb6fec5a699bfac38bd59255",
".git/objects/72/2bf4915e2883d2bbcebceb89bea251776ed08e": "b446dfdf7ebec8f148ad7d29b8a3e5ce",
".git/objects/44/96d53cb7d6d9e537a8893fbdb12fdcd0a71483": "b1e264796ad624cc53400ecd0a8b7331",
".git/objects/44/f8f9bdae50c9f3d2aba845b796ea047d9e789a": "158926d64ce4135cb8f326ac23f42763",
".git/objects/44/6ed19912a815c9f099ac48d13a542ac892132b": "d3a951da71c2dc30cbcdebb4e80125dd",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/00/6e704819b74c9de8ec7047b18b510097660ef3": "8e4205d41fcecb19817a40aa269c05fe",
".git/objects/00/4ba02c918de858cef8658ed504d62d214af441": "9a14e57a3ab6886125e66b660bdaa6ac",
".git/objects/9a/2800b06b83524a08e69e2640d0cde005276a73": "3b1a81890826aa572149500f7f8b05f7",
".git/objects/36/4478fedba03e15e8258b5fc0dbd55d331e895c": "22f0c290989d69220f03426fb1b4f678",
".git/objects/36/401b763d28c33f6d82fcc7ff70ae5f0f196d81": "1a66668d91303db2667b6fe95a8a1a34",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/31/167e2973771b9188f9d62fddcd798f353039ab": "0733ed9de222a7c4d11b4010c38eb86b",
".git/objects/91/f46e35a0e61df43ae9b45ff419e7994659908a": "3e4636295e8ac9d5a3920eb5ac2ed4ed",
".git/objects/65/66a23f2dad88df02e9f5cf85852662cf208641": "c52c787eb7b1a13bea25b4eff284434c",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/65/efe8cfbfe29a8c2e76877cee9185cac28c1aab": "3b1d25f16779760ee6f1c7614eb0de5b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/cf93f6191cd6d4bb9dde51eb91a9b1bd189dbf": "0bcb0d42ff4c90dc624cfc98d341a0d3",
".git/objects/3a/758b4219751ee169731d1b2b497de0d405b6db": "164938f70636140edb445d188edfd2cd",
".git/objects/3a/f7361b2e8f3071ee7602097b882179ed8a3493": "36ea131378738984faf1f76a9d9f4c75",
".git/objects/98/5cad0e483bfda78e71b39346cf3b50ead3fb75": "68db9234dfca8997b1f85c39a2b9fd81",
".git/objects/53/8206d9305ed7496f71d4898098216a54bf336b": "eb3030758be2754c00765d90671c3e44",
".git/objects/30/1f029cdc42261449bdfbfbf2b8b2e8756b3bc1": "2a2d6d705c2ead073e931d2f9061d828",
".git/objects/30/d50f864fd742f0ba8f7c4f3a5a4ff7599f34af": "ef3be8c3fdc2376c42b4281f1958aac2",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/999cd995fab4e0775bca61972cadc6c106f488": "d23050871a5cd9dd2d654787724e3951",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/29029b5414debd7b1ee8890c8aecf25dafdbe5": "453ce5a224762f5ee2f80952a6a57cf7",
".git/objects/01/82c75322e0e8564f6f33629824f30a1391394c": "4512fd2fcb66f50d8e2c1323a710f7d6",
".git/objects/06/e839f0d334ebc71d226f50fb48b14d1be5cde7": "7d6706c09cdccb78ffe73acbe1688b95",
".git/objects/06/99e963682fde232949d13a13e61fccbf1ca077": "07536b13fa27d116950303ea5aed9745",
".git/objects/6c/6de893920290b131077741bebea539c1791e4c": "1c2e844cd3f7180bbeb132355c5ff7ac",
".git/objects/6c/d0549e0430363034372c5d4fe098d6eb1f27f1": "3716c82210706f727bc960423bf28ce9",
".git/objects/6c/1ab1ab3d8957d4b88c5050e3c83774dc0b4349": "6225e81dfbc0834bbf01c21f4eb4d5d4",
".git/objects/39/6bedfb8b64d03a047891e92bfaf40f30fdf4d9": "c62bd2bcc71a9079183fae5b30d75ad0",
".git/objects/52/df60b8b6daa4fa299fd05286520db630a0056e": "d8f918c001278c7f986610275e0b9a8d",
".git/objects/97/9eec54e3f2b97cd8bbb400f0fb70a7d8845d00": "bb38981672f8588f0c05201f01be3b86",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/0f/c2eccd56664dd4fe92f0972f0851fdf6faf1ce": "ad47b701996257c9f4ee44246d4e1730",
".git/objects/0f/5133d1f0fb061148c5f841cc9f8a6a5ca45638": "34e4882aac6cae87a4b73e1f4d372ccd",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/64/1d947147dafd228db198c28d6a162eac731c59": "934d1b712654f17b4c0b379012416e0f",
".git/objects/90/669d5462fe4bf8b6e98addd1b9c320ba600470": "45e8131c1b6e88d48c8222e4ce362042",
".git/objects/90/09c2f243483ae16cb7a12e8602eb47a747db18": "8857842235a71ed6a3c00c90f8e9a0e2",
".git/objects/90/9c708fe987aeb9f78c5153347c4cb232aa5cc4": "5de07ec439c5182068d24e881bda0e02",
".git/objects/bf/97aaa93215cdc602777b689b415c376193bfb3": "6fc692322c9eaa76f53217bb58a15613",
".git/objects/d3/31a7e9a0740d616d913d9e0099b28c92254a63": "64ae7329ef4cc9f807b7d9ac02bff28b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/a10c62926bd6b572e624e37fc96de2400dc1b5": "3abd62e4d80fb1bec887d151278639a1",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/ba/8b0ff12651c6024851da79825148ef89585be1": "7975367be4e55e2e7531d906680af4d4",
".git/objects/a0/08efd8ff82c77a37bc4ef54633500bc493ffa0": "f9de74ee32e26a46b52e05f86008bbe1",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/b8/2685c59d5d97b96eec6a8c1c2459c2a4a1a7ad": "3d50b92a6ca2e31c2ca25a499a9a57c8",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b8/059444d37459fb6a4b0c73293e6af58b005615": "4ba35e2bde24720e6cc6e113cfa9f86a",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dc/3e10afe3ebcec42691a29b0dbc94c68804d5ee": "e870164f05e4ad0dba621e9442163008",
".git/objects/b6/3a55b4be6f4e4ca797a0ad5d21cd2c1aee531c": "ec891186eec80b47d05564ca0467168d",
".git/objects/a9/1609bf9c4bce50aa7ddb5fdfacc6d284a71e68": "89b385fbdb69f8df272d92e593633f0d",
".git/objects/af/65c2833297b58c5fad6e9c640b0ba0b6d9298a": "20edd11efa367cbc2d968c8e23d9b33b",
".git/objects/b7/a080407fc34bc1de5d5c122fd21338ad65adc0": "11fec7fab9a80172b4e5856c32d28c51",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f06174fbb238b2e77ecf0a4a0e0694405516ea": "aa1559943f2c33621236ed813b0b803c",
".git/objects/de/75ae78fddd3b4bd2cbf2c2409d87d7310166cb": "fa75c5f16c2fe7ae0112312dab77757c",
".git/objects/de/34aa12f33a12d6214c23eca80d84bb118329b8": "6202e8308a6594c42a4c129fcf178f9c",
".git/objects/b0/1649b886352a138133b66f947008581b0d250f": "83403466b8315358dae0b60cbb4819d0",
".git/objects/a6/2e1d699d2bf9c0154c1d0eae885d90dd0be192": "977e576e9743d8a4a7a45158312a83b9",
".git/objects/a6/e79f194f56b55641bd05c1987bd11831e02373": "24b87305e4f22534251184c1e4e38969",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6e730452165af708afc244cf1adacc50fd22ec": "289e037e511f02ca255aba206a2a0539",
".git/objects/ef/de9f7463f27b7462c363b36c17207dd01e4b2f": "0220fe2144e61d6bb4168988e6ca290d",
".git/objects/c3/3c37cdc430e8e646e83845e82dcda9521397e3": "05a279e6af985813676098b4af386060",
".git/objects/c3/61b0a3e3d66fd6952fe8df7a9cffae383d3524": "cf5833ffe35aea57d413eda15a0cac64",
".git/objects/c4/96f06b017fd545c096d513d8d60677511ee8fe": "56f60036aecdeef44e0502d79f2d1dd0",
".git/objects/c4/dce9d4937a547df44ac39af2d8bca164f16cef": "2a832faa5a9098429be6b5f7d255036b",
".git/objects/ea/2e30d63ed402df78856f0db315c11e665e6ece": "681e53ad1b9aa58505ac6c583c41bd69",
".git/objects/ea/ad42cad9e8f87f42e1134288fb60ba9b4a284e": "1a67fd57b32958e2ea750b9831c0fd57",
".git/objects/e1/0f85ec51cc876b200d9697d9c7a5b36080a177": "ccfa9bd9c361f9089d55a4e2ee45c6fc",
".git/objects/cd/9465c2fefb1a2bf78f7fcbb5b785aa348b97ef": "bc96b329a2bf974d986c27bca206e27e",
".git/objects/cd/9586de362b8dbe6be89b5c7385e932f7f29511": "b6fb4c64d6c57bf33da61dd08b3ee5c4",
".git/objects/cc/56e86693feddb53724cd370ba3888dd7da030e": "d26b787ed3ce3e8ab40ba7c77fd2dfec",
".git/objects/e6/a1ae9239cd8a9452374c36e2afc92ef01e23cd": "b61bd3e61450968fac310844bdb3cf83",
".git/objects/e6/78bdfeba43c07e8d885fa09df611fa0ca6a444": "203d3925c3459d75320a84f8088da8a5",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f9/525e2e2273b935100b7d1407b6cd02e16469d1": "9b2ba22fcd109fc02cfeeca2de269867",
".git/objects/f7/d9220cde670e9fbb90040aaa25ede733db4a3e": "9a6f079686a8d0f376f94002a7beb66f",
".git/objects/f7/12d3c0665f5e6e34c0ddf8529f4749cf5c41b5": "18eb040b8db8e89e715b08054684d638",
".git/objects/fa/509cc30520a60f4a634d251061d74c561f79a8": "a05a50c29d33f36ab09835b286f57663",
".git/objects/c5/0bfb72e52a21aee457cb7463168dd8069dc5ef": "9f42debaa702bca3c0271135b66b5006",
".git/objects/c2/c06c47246f8616e0832baf90a4b5609a949954": "84da86c38671a2998dbe8a9742ad571d",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f1/dfcb80424a04ef1176ce2630dd77b962387ce4": "d46516a3d806feb8fe34da3844569693",
".git/objects/f1/7a903f3525b78afdd03623d9db9dc5214d95a9": "1f1745fcdd1c372bf5f378c78ede27f8",
".git/objects/cb/8f93e017677008f34d14e590afc17802073e26": "95dfeffcdb0e6fa4010b67fb18f76e8e",
".git/objects/cb/d3138722fef373a7e0f3df9fd31c00c6983c2b": "50920ed33ae1cb5bdb7e39df23be2342",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/e0/38d495b5162fb01f9bbf2133cb82cf3d697bc5": "23aae1b03735571528a5af9b62f850cb",
".git/objects/79/dc98b41b1358eed679afb264733592d40e2f2e": "65b31fb1e076ff1be8be221b6c5ef75c",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/2d/90b23d6f8f328eb534a401c87300705391856b": "d99a790fea2684f787bac80eeddf78d9",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/41/dbe18fde77d8134839e60b37da21f36a44d433": "fbc38fc43c15868d93051f781ccfa6f4",
".git/objects/41/45290a7728f256d9171fae183b084136d0ff44": "96b4f30751f9f3f8ba77c1ffc085c7ba",
".git/objects/83/4668c7b5f62a869c61a43335cf4c0d6850f064": "91746e68e9dfc52e3b9e1113fd84c098",
".git/objects/83/3266a4febe347325efa45cf414bb1d9be768e1": "5b867cc76528b8db251a82644d49e101",
".git/objects/77/07363d1b69ba1e76a96b0c2b9963bdaab4420d": "b219a30e53fd3bbb2bcf01b3ee4a4f11",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/7b9e11a6b0776529edbbbbd1f36414c07c4af3": "37d3271ed65a7a6ceceb269452e2b41a",
".git/objects/70/560c814279bc474b7f3ba30e39b51b2fe96fde": "1d21b42cf94b64f7a10ef5ec71c46633",
".git/objects/70/90ec530382496e64db38c72f3af9629d94b768": "ed4909f4c48c73e4f2b0ff7042307113",
".git/objects/70/50d938cf461a18e927b1143be88a1e61725876": "159653ddb223ade24c0aeb6605c2f2c4",
".git/objects/1e/8c04223fe61d298a75c1105c1afbf8fc617d08": "bdf697f788e462087e8ce8ea13dd8743",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/7fc6e53e7f276b5b91af93b063d9a4a38dcc8a": "b13c4698d708fdbd9e5f9cfc4d89eda8",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/c1602026316fe4ce78aa585d1ec2512bb34e46": "50f95a80508b248d23191e8e6e16d823",
".git/objects/15/c17b2084eb406740ed97d26924d00aadfe3b43": "cf720c9aa22fa9b8fd03f164b2b129be",
".git/objects/15/2ef93d3649eb843024c7b395aa3a7383d4351d": "5c9aa19c3613210c64e00c045d2ab4d5",
".git/objects/1d/b7e2d0d28ddac26a4df40691d50d449decf321": "d8d1ef3fe29c9a2829c5a97d8f4215a5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/50b38e1db7914a48adb24a3963292cdc0d70e6": "c6d8ad82f100de19eb080cf3372be3ab",
".git/objects/1c/0a9bcf9ba7cb28555cabafa8a2ecc2fa52b4e4": "e8bb1ab5822eea4bcce3264b0bfe6481",
".git/objects/1c/098f2630ca7322bfcf117c96dabff841997c8f": "08e58871e073d4f38fecd508ea2e31ed",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/82/2086d2df052e309d88de3fdeb9d704d5dd13d2": "61f854b26e87c7dbc8b52ebd37e6abfc",
".git/objects/2e/149abf68b61c19cfdce6d8399a0aeefe3ebce3": "f131a84c716a15f8e9303f03cb0738e3",
".git/objects/2b/d78a5e97efaa2a102ad858cf1a8315fd6fb8a5": "4c5f4b62cb8953640841d9d39f66b84b",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/78/059c80b781f68f5b1b6aaaf7a09216e1d6e8b4": "8aa477fd9d6f28770ad1b84753047bd4",
".git/objects/14/7c2ce63424b90ee6cd18567485e4929f20ffc1": "3aa16ef0832c7af3e31d54dd066684b3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/96e653cfc332efab2a683ec137e847ffe99ac7": "7f2590dfd994c9ade8beae69fdf1b360",
".git/objects/25/ebce32acf64029a43d22bce4bec8381b45c636": "d8d1f6845a86c758349a0ce03c665ab0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "37840d1c479c48d29be7d66cf03925ef",
".git/logs/refs/heads/main": "37840d1c479c48d29be7d66cf03925ef",
".git/logs/refs/remotes/origin/HEAD": "a247bdecec2c73c1f3997c9a0d2527e5",
".git/logs/refs/remotes/origin/main": "317851eb26c4e590041666eb6e263081",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5f224eabd666f1ded064d48f3e2feb3d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5f224eabd666f1ded064d48f3e2feb3d",
".git/index": "94ba3e0adc02a513472d4a408c34d819",
".git/COMMIT_EDITMSG": "9e51e01fa1cc3256e7863d2ed6143a22",
".git/FETCH_HEAD": "6767c9210874d7c4a524c36388997d27",
"assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/images/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/images/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/images/before_wizard.png": "67821a540e4344a4255731a132f6b743",
"assets/images/after_wizard.png": "a2e12ecc85d839ec605eb0d50776e3fa",
"assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/images/water_icon.png": "f36064544b9d2c599008497a6311e2bd",
"assets/images/finished_wizard.png": "e6bf1e7b0543cc07ad3a2629902685de",
"assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/images/co2_icon.png": "6c87a37a5e336f38bb3e4b8c6746054d",
"assets/images/water.png": "0f7d12652d6f05c3201196b63d3818e3",
"assets/images/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/images/money.png": "97c5422c4bcde1e92a88c3b48026ce15",
"assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/images/money_icon.png": "cc22399a494a29f17818f63df39c5347",
"assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/AssetManifest.json": "bbc41ec596cb51d622a4ce5fdedb156d",
"assets/NOTICES": "8d260f2d510de9f61635ddef0ef78514",
"assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9593ffc20af86c006a3c0b53cba7a4ee",
"assets/fonts/MaterialIcons-Regular.otf": "6bd470777ec475eaf6135836b6412ff2",
"assets/assets/images/default_empty_view_image_mobile.png": "e0333daa0bf04df60e7eb3ac947b1bce",
"assets/assets/images/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/assets/images/appbar_background.png": "a4cf970d3a177f147b678d69bcde5e6d",
"assets/assets/images/apes_logo.png": "8289123f62dcd033faadfd1e29d1704b",
"assets/assets/images/profile_icon.png": "3f1b482f0b30553cf3934ea8a6fba79f",
"assets/assets/images/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/assets/images/consumption_icon.png": "6fa0a9b5262d7b9f825d0e5b724c58e6",
"assets/assets/images/before_wizard.png": "67821a540e4344a4255731a132f6b743",
"assets/assets/images/after_wizard.png": "a2e12ecc85d839ec605eb0d50776e3fa",
"assets/assets/images/office_icon.png": "97bcca4dcba5c06d9be561d08c1ed741",
"assets/assets/images/home_icon.png": "b3aca66a54ef0cbf1b4a2c95db59714f",
"assets/assets/images/water_icon.png": "f36064544b9d2c599008497a6311e2bd",
"assets/assets/images/finished_wizard.png": "e6bf1e7b0543cc07ad3a2629902685de",
"assets/assets/images/home_mobile_background.png": "bd03b286fc2824237ee9e0cba0e023c6",
"assets/assets/images/reach_us_icon.png": "a6608746c63606fe408756546cc1a70a",
"assets/assets/images/co2_icon.png": "6c87a37a5e336f38bb3e4b8c6746054d",
"assets/assets/images/water.png": "0f7d12652d6f05c3201196b63d3818e3",
"assets/assets/images/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/assets/images/money.png": "97c5422c4bcde1e92a88c3b48026ce15",
"assets/assets/images/offers_icon.png": "ace6250b99b005177e4e006c604510f2",
"assets/assets/images/money_icon.png": "cc22399a494a29f17818f63df39c5347",
"assets/assets/images/learn_icon.png": "2736ae774bf580b621eb12b322ac04c8",
"assets/assets/images/solutions_icon.png": "0c1940ac69132d5d539c53597ab265a7",
"assets/assets/images/wms_logo.png": "2cf1f7ad832f64d81992bfece7e1498c",
"assets/assets/images/home_desktop_background.png": "4a2cd73c32307f920f962d8ae870cd56",
"assets/assets/languages/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/languages/ar.json": "99914b932bd37a50b983c5e7c90ae93b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
