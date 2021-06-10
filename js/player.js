//创建一个音乐播放器的类 单例模式

class Player {
    constructor() { //类的构造函数
        //如果类已经有实例了，就返回这个实例
        if (Player.instance) return Player.instance;
        //如果没有实例化，就去构造一个实例
        return this.getInstance(...arguments);
    }

    //构建实例
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        //让实例可以使用到Player的原型的属性方法
        // instance.__proto__=Player.prototype;
        // instance.constructor=Player;
        //把构建好的实例挂在Player类上
        Player.instance = instance;
        return instance;
    }
}

//歌曲信息
class Musics {
    //歌曲
    constructor() {
        this.songs = [
			{id: 1,title: '113 倩女幽魂 张国荣',songUrl: './music/113 倩女幽魂 张国荣.mp3'},
			{id: 2,title: '187区说唱新闻第十二季',songUrl: './music/187区说唱新闻第十二季.mp3'},
			{id: 3,title: '187区说唱新闻第十季',songUrl: './music/187区说唱新闻第十季.mp3'},
			{id: 4,title: '187街区馆第三季-娱乐圈',songUrl: './music/187街区馆第三季-娱乐圈.mp3'},
			{id: 5,title: '187街区馆说唱新闻2010的各种门',songUrl: './music/187街区馆说唱新闻2010的各种门.mp3'},
			{id: 6,title: '187街区馆说唱新闻第二季-国安NB',songUrl: './music/187街区馆说唱新闻第二季-国安NB.mp3'},
			{id: 7,title: '187街区馆说唱新闻第八季-春节',songUrl: './music/187街区馆说唱新闻第八季-春节.mp3'},
			{id: 8,title: '187街区馆说唱新闻第六季-蜗居',songUrl: './music/187街区馆说唱新闻第六季-蜗居.mp3'},
			{id: 9,title: '187街区馆说唱新闻第四季-剩蛋快乐',songUrl: './music/187街区馆说唱新闻第四季-剩蛋快乐.mp3'},
			{id: 10,title: '187街区馆说唱无题',songUrl: './music/187街区馆说唱无题.mp3'},
			{id: 11,title: '187街区馆说唱第一季-后脑勺的烦恼',songUrl: './music/187街区馆说唱第一季-后脑勺的烦恼.mp3'},
			{id: 12,title: 'AgainsttheWind',songUrl: './music/AgainsttheWind.mp3'},
			{id: 13,title: 'Apple',songUrl: './music/Apple.mp3'},
			{id: 14,title: 'AsLongAsYouLoveMe',songUrl: './music/AsLongAsYouLoveMe.mp3'},
			{id: 15,title: 'BabyOneMoreTime',songUrl: './music/BabyOneMoreTime.mp3'},
			{id: 16,title: 'BeautifulLoser',songUrl: './music/BeautifulLoser.mp3'},
			{id: 17,title: 'BWHATUWANNABE',songUrl: './music/BWHATUWANNABE.mp3'},
			{id: 18,title: 'ChemicalBus',songUrl: './music/ChemicalBus.mp3'},
			{id: 19,title: 'ComeandGetYourLove',songUrl: './music/ComeandGetYourLove.mp3'},
			{id: 20,title: 'CrazyCajunCakewalkBand',songUrl: './music/CrazyCajunCakewalkBand.mp3'},
			{id: 21,title: 'Creepin\'UpOnYou',songUrl: './music/Creepin\'UpOnYou.mp3'},
			{id: 22,title: 'Don\'tPushMe',songUrl: './music/Don\'tPushMe.mp3'},
			{id: 23,title: 'DriveBy',songUrl: './music/DriveBy.mp3'},
			{id: 24,title: 'FlyAway-飞儿乐团',songUrl: './music/FlyAway-飞儿乐团.mp3'},
			{id: 25,title: 'FreeLoop',songUrl: './music/FreeLoop.mp3'},
			{id: 26,title: 'GottaHaveYou',songUrl: './music/GottaHaveYou.mp3'},
			{id: 27,title: 'HeySoulSister',songUrl: './music/HeySoulSister.mp3'},
			{id: 28,title: 'InternationalLove',songUrl: './music/InternationalLove.mp3'},
			{id: 29,title: 'IsThisLove',songUrl: './music/IsThisLove.mp3'},
			{id: 30,title: 'Katmandu',songUrl: './music/Katmandu.mp3'},
			{id: 31,title: 'LargerThanLife',songUrl: './music/LargerThanLife.mp3'},
			{id: 32,title: 'LikeaRock',songUrl: './music/LikeaRock.mp3'},
			{id: 33,title: 'Lydia',songUrl: './music/Lydia.mp3'},
			{id: 34,title: 'Maggie',songUrl: './music/Maggie.mp3'},
			{id: 35,title: 'MamboNo5(ALittleBitof)',songUrl: './music/MamboNo5(ALittleBitof).mp3'},
			{id: 36,title: 'MinorSevenHeaven',songUrl: './music/MinorSevenHeaven.mp3'},
			{id: 37,title: 'NightMoves',songUrl: './music/NightMoves.mp3'},
			{id: 38,title: 'Ok',songUrl: './music/Ok.mp3'},
			{id: 39,title: 'OldTimeRockandRoll',songUrl: './music/OldTimeRockandRoll.mp3'},
			{id: 40,title: 'OneMoreTime',songUrl: './music/OneMoreTime.mp3'},
			{id: 41,title: 'OneNightIn北京',songUrl: './music/OneNightIn北京.mp3'},
			{id: 42,title: 'OnlyYouandRockandRoll',songUrl: './music/OnlyYouandRockandRoll.mp3'},
			{id: 43,title: 'PrehistoricRhythm',songUrl: './music/PrehistoricRhythm.mp3'},
			{id: 44,title: 'PromiseIWon\'tLetItShow',songUrl: './music/PromiseIWon\'tLetItShow.mp3'},
			{id: 45,title: 'Rebecca',songUrl: './music/Rebecca.mp3'},
			{id: 46,title: 'RedandBlue',songUrl: './music/RedandBlue.mp3'},
			{id: 47,title: 'Redbone-Power(PreludetoaMeans)',songUrl: './music/Redbone-Power(PreludetoaMeans).mp3'},
			{id: 48,title: 'Redbone-TheWitchQueenOfNewOrleans',songUrl: './music/Redbone-TheWitchQueenOfNewOrleans.mp3'},
			{id: 49,title: 'Redbone-woundedknee',songUrl: './music/Redbone-woundedknee.mp3'},
			{id: 50,title: 'RideOut',songUrl: './music/RideOut.mp3'},
			{id: 51,title: 'RockandRollNeverForgets',songUrl: './music/RockandRollNeverForgets.mp3'},
			{id: 52,title: 'SheMakesMeWanna(feat.Dev)',songUrl: './music/SheMakesMeWanna(feat.Dev).mp3'},
			{id: 53,title: 'SnapOutofIt',songUrl: './music/SnapOutofIt.mp3'},
			{id: 54,title: 'StayHereForever',songUrl: './music/StayHereForever.mp3'},
			{id: 55,title: 'Stefanie',songUrl: './music/Stefanie.mp3'},
			{id: 56,title: 'SunshineGirl',songUrl: './music/SunshineGirl.mp3'},
			{id: 57,title: 'Surrendering',songUrl: './music/Surrendering.mp3'},
			{id: 58,title: 'SuziGirl',songUrl: './music/SuziGirl.mp3'},
			{id: 59,title: 'TakeMeAway',songUrl: './music/TakeMeAway.mp3'},
			{id: 60,title: 'ThankYou',songUrl: './music/ThankYou.mp3'},
			{id: 61,title: 'TheLazySong',songUrl: './music/TheLazySong.mp3'},
			{id: 62,title: 'TheShow',songUrl: './music/TheShow.mp3'},
			{id: 63,title: 'WakeMeUpWhenSeptemberEnds',songUrl: './music/WakeMeUpWhenSeptemberEnds.mp3'},
			{id: 64,title: 'We\'veGotTonight',songUrl: './music/We\'veGotTonight.mp3'},
			{id: 65,title: 'WhatMakesYouBeautiful',songUrl: './music/WhatMakesYouBeautiful.mp3'},
			{id: 66,title: 'Whistle',songUrl: './music/Whistle.mp3'},
			{id: 67,title: 'WitchQueenOfNewOrleans',songUrl: './music/WitchQueenOfNewOrleans.mp3'},
			{id: 68,title: 'WolfgangAmadeusMozart-G小调第40号交响曲',songUrl: './music/WolfgangAmadeusMozart-G小调第40号交响曲.mp3'},
			{id: 69,title: 'Yeah(feat.Lil\'Jon&Ludacris)',songUrl: './music/Yeah(feat.Lil\'Jon&Ludacris).mp3'},
			{id: 70,title: 'Yellow',songUrl: './music/Yellow.mp3'},
			{id: 71,title: '一万次悲伤',songUrl: './music/一万次悲伤.mp3'},
			{id: 72,title: '一开始就没退后',songUrl: './music/一开始就没退后.WAV'},
			{id: 73,title: '三十Deme-陈麦麒',songUrl: './music/三十Deme-陈麦麒.mp3'},
			{id: 74,title: '下雨天',songUrl: './music/下雨天.mp3'},
			{id: 75,title: '两个男朋友',songUrl: './music/两个男朋友.mp3'},
			{id: 76,title: '二愣子',songUrl: './music/二愣子.mp3'},
			{id: 77,title: '你的微笑',songUrl: './music/你的微笑.mp3'},
			{id: 78,title: '你要跳舞嘛',songUrl: './music/你要跳舞嘛.mp3'},
			{id: 79,title: '你都忘了你有多美',songUrl: './music/你都忘了你有多美.mp3'},
			{id: 80,title: '做我自己',songUrl: './music/做我自己.mp3'},
			{id: 81,title: '傲慢的上校-朴树',songUrl: './music/傲慢的上校-朴树.mp3'},
			{id: 82,title: '光阴的故事',songUrl: './music/光阴的故事.mp3'},
			{id: 83,title: '公路(Live)-live',songUrl: './music/公路(Live)-live.mp3'},
			{id: 84,title: '再回首',songUrl: './music/再回首.mp3'},
			{id: 85,title: '再见,再见',songUrl: './music/再见,再见.mp3'},
			{id: 86,title: '凑热闹-林俊杰,BY2',songUrl: './music/凑热闹-林俊杰,BY2.mp3'},
			{id: 87,title: '凡人歌',songUrl: './music/凡人歌.mp3'},
			{id: 88,title: '分手吧',songUrl: './music/分手吧.mp3'},
			{id: 89,title: '别找我麻烦-蔡健雅',songUrl: './music/别找我麻烦-蔡健雅.mp3'},
			{id: 90,title: '勇气',songUrl: './music/勇气.WAV'},
			{id: 91,title: '千年之恋',songUrl: './music/千年之恋.mp3'},
			{id: 92,title: '同桌的你',songUrl: './music/同桌的你.mp3'},
			{id: 93,title: '周笔畅-嫉妒',songUrl: './music/周笔畅-嫉妒.mp3'},
			{id: 94,title: '周笔畅-笔记',songUrl: './music/周笔畅-笔记.mp3'},
			{id: 95,title: '哪里是你的拥抱',songUrl: './music/哪里是你的拥抱.mp3'},
			{id: 96,title: '嘿！你',songUrl: './music/嘿！你.mp3'},
			{id: 97,title: '四季天-曹方',songUrl: './music/四季天-曹方.mp3'},
			{id: 98,title: '因为爱所以爱(Live)',songUrl: './music/因为爱所以爱(Live).mp3'},
			{id: 99,title: '在梅边',songUrl: './music/在梅边.mp3'},
			{id: 100,title: '在淩晨',songUrl: './music/在淩晨.WAV'},
			{id: 101,title: '夜空中最亮的星',songUrl: './music/夜空中最亮的星.mp3'},
			{id: 102,title: '大城小爱',songUrl: './music/大城小爱.mp3'},
			{id: 103,title: '大海',songUrl: './music/大海.mp3'},
			{id: 104,title: '天黑黑',songUrl: './music/天黑黑.mp3'},
			{id: 105,title: '女朋友DEMO-陈麦麒',songUrl: './music/女朋友DEMO-陈麦麒.mp3'},
			{id: 106,title: '如果没有你',songUrl: './music/如果没有你.mp3'},
			{id: 107,title: '安和桥',songUrl: './music/安和桥.mp3'},
			{id: 108,title: '安阳',songUrl: './music/安阳.mp3'},
			{id: 109,title: '宝贝(inaday)',songUrl: './music/宝贝(inaday).mp3'},
			{id: 110,title: '家-许巍',songUrl: './music/家-许巍.mp3'},
			{id: 111,title: '寂寞难耐',songUrl: './music/寂寞难耐.mp3'},
			{id: 112,title: '干妹妹',songUrl: './music/干妹妹.WAV'},
			{id: 113,title: '庭竹-爱的九宫格-别傻了-128',songUrl: './music/庭竹-爱的九宫格-别傻了-128.mp3'},
			{id: 114,title: '张学友-吻别',songUrl: './music/张学友-吻别.mp3'},
			{id: 115,title: '张惠妹-听海',songUrl: './music/张惠妹-听海.mp3'},
			{id: 116,title: '张震岳-再见',songUrl: './music/张震岳-再见.mp3'},
			{id: 117,title: '弹着吉他的少年',songUrl: './music/弹着吉他的少年.mp3'},
			{id: 118,title: '当爱已成往事',songUrl: './music/当爱已成往事.mp3'},
			{id: 119,title: '彩虹',songUrl: './music/彩虹.mp3'},
			{id: 120,title: '很难',songUrl: './music/很难.mp3'},
			{id: 121,title: '心中的日月',songUrl: './music/心中的日月.mp3'},
			{id: 122,title: '思念是一种病',songUrl: './music/思念是一种病.mp3'},
			{id: 123,title: '总有一天你会欺骗我',songUrl: './music/总有一天你会欺骗我.mp3'},
			{id: 124,title: '恋爱达人',songUrl: './music/恋爱达人.mp3'},
			{id: 125,title: '想把我唱给你听',songUrl: './music/想把我唱给你听.mp3'},
			{id: 126,title: '我不想失去你',songUrl: './music/我不想失去你.mp3'},
			{id: 127,title: '我们可以在一起',songUrl: './music/我们可以在一起.mp3'},
			{id: 128,title: '我们的歌',songUrl: './music/我们的歌.mp3'},
			{id: 129,title: '我们的爱',songUrl: './music/我们的爱.mp3'},
			{id: 130,title: '我是真的爱你',songUrl: './music/我是真的爱你.mp3'},
			{id: 131,title: '我爱你',songUrl: './music/我爱你.mp3'},
			{id: 132,title: '我的未来不是梦-张雨生',songUrl: './music/我的未来不是梦-张雨生.mp3'},
			{id: 133,title: '我相信-张靓颖',songUrl: './music/我相信-张靓颖.mp3'},
			{id: 134,title: '我要钱',songUrl: './music/我要钱.WAV'},
			{id: 135,title: '我还是不懂',songUrl: './music/我还是不懂.mp3'},
			{id: 136,title: '手放开',songUrl: './music/手放开.mp3'},
			{id: 137,title: '才华有限公司',songUrl: './music/才华有限公司.mp3'},
			{id: 138,title: '执着-许巍',songUrl: './music/执着-许巍.mp3'},
			{id: 139,title: '拥梦-李柏凝-李柏凝',songUrl: './music/拥梦-李柏凝-李柏凝.mp3'},
			{id: 140,title: '挪威的森林',songUrl: './music/挪威的森林.mp3'},
			{id: 141,title: '掀开后车厢',songUrl: './music/掀开后车厢.mp3'},
			{id: 142,title: '改变',songUrl: './music/改变.WAV'},
			{id: 143,title: '放开你的心',songUrl: './music/放开你的心.mp3'},
			{id: 144,title: '新不了情-萧敬腾',songUrl: './music/新不了情-萧敬腾.mp3'},
			{id: 145,title: '无瑕',songUrl: './music/无瑕.mp3'},
			{id: 146,title: '日光倾城',songUrl: './music/日光倾城.mp3'},
			{id: 147,title: '时光-许巍',songUrl: './music/时光-许巍.mp3'},
			{id: 148,title: '星座',songUrl: './music/星座.mp3'},
			{id: 149,title: '星星点灯',songUrl: './music/星星点灯.mp3'},
			{id: 150,title: '曙光',songUrl: './music/曙光.mp3'},
			{id: 151,title: '曲婉婷-没有什么不同',songUrl: './music/曲婉婷-没有什么不同.mp3'},
			{id: 152,title: '曹卉娟-玻璃杯-星文唱片-在一起-128',songUrl: './music/曹卉娟-玻璃杯-星文唱片-在一起-128.mp3'},
			{id: 153,title: '最初的梦想-范玮琪',songUrl: './music/最初的梦想-范玮琪.mp3'},
			{id: 154,title: '最后的乐队',songUrl: './music/最后的乐队.mp3'},
			{id: 155,title: '最近比较烦',songUrl: './music/最近比较烦.mp3'},
			{id: 156,title: '有没有一首歌会让你想起我',songUrl: './music/有没有一首歌会让你想起我.mp3'},
			{id: 157,title: '李宗盛-匆匆-live',songUrl: './music/李宗盛-匆匆-live.mp3'},
			{id: 158,title: '李宗盛-壮志在我胸',songUrl: './music/李宗盛-壮志在我胸.mp3'},
			{id: 159,title: '李宗盛-山丘(Live)',songUrl: './music/李宗盛-山丘(Live).mp3'},
			{id: 160,title: '李宗盛-鬼迷心窍-live',songUrl: './music/李宗盛-鬼迷心窍-live.mp3'},
			{id: 161,title: '林凡-幸福很突然(电视剧《我家有喜》插曲)',songUrl: './music/林凡-幸福很突然(电视剧《我家有喜》插曲).mp3'},
			{id: 162,title: '毕业',songUrl: './music/毕业.mp3'},
			{id: 163,title: '水手',songUrl: './music/水手.mp3'},
			{id: 164,title: '江映蓉-坏天使-复制人-128',songUrl: './music/江映蓉-坏天使-复制人-128.mp3'},
			{id: 165,title: '汪峰-勇敢的心(电视剧《北京青年》插曲)',songUrl: './music/汪峰-勇敢的心(电视剧《北京青年》插曲).mp3'},
			{id: 166,title: '汪峰-怒放的生命',songUrl: './music/汪峰-怒放的生命.mp3'},
			{id: 167,title: '汪峰-挥挥手',songUrl: './music/汪峰-挥挥手.mp3'},
			{id: 168,title: '没有烟抽的日子-张惠妹',songUrl: './music/没有烟抽的日子-张惠妹.mp3'},
			{id: 169,title: '没有理想的人不伤心',songUrl: './music/没有理想的人不伤心.mp3'},
			{id: 170,title: '海阔天空',songUrl: './music/海阔天空.mp3'},
			{id: 171,title: '温柔',songUrl: './music/温柔.mp3'},
			{id: 172,title: '游喧-爱不懂事-128',songUrl: './music/游喧-爱不懂事-128.mp3'},
			{id: 173,title: '熊宝贝乐团-353-夜间飞行-128',songUrl: './music/熊宝贝乐团-353-夜间飞行-128.mp3'},
			{id: 174,title: '爱之初体验',songUrl: './music/爱之初体验.WAV'},
			{id: 175,title: '爱什么稀罕',songUrl: './music/爱什么稀罕.mp3'},
			{id: 176,title: '爱你不是两三天',songUrl: './music/爱你不是两三天.mp3'},
			{id: 177,title: '爱是怀疑',songUrl: './music/爱是怀疑.mp3'},
			{id: 178,title: '爱的代价',songUrl: './music/爱的代价.mp3'},
			{id: 179,title: '爱的魔法-金莎',songUrl: './music/爱的魔法-金莎.mp3'},
			{id: 180,title: '狗男女',songUrl: './music/狗男女.WAV'},
			{id: 181,title: '白安-倒着走',songUrl: './music/白安-倒着走.mp3'},
			{id: 182,title: '白安-我只想在乎我在乎的',songUrl: './music/白安-我只想在乎我在乎的.mp3'},
			{id: 183,title: '白安-麦田捕手',songUrl: './music/白安-麦田捕手.mp3'},
			{id: 184,title: '直来直往',songUrl: './music/直来直往.mp3'},
			{id: 185,title: '真心英雄-周华健,成龙,黄耀明,李宗盛',songUrl: './music/真心英雄-周华健,成龙,黄耀明,李宗盛.mp3'},
			{id: 186,title: '真心英雄（live版）-纵贯线',songUrl: './music/真心英雄（live版）-纵贯线.mp3'},
			{id: 187,title: '硬币-汪峰',songUrl: './music/硬币-汪峰.mp3'},
			{id: 188,title: '离不开你',songUrl: './music/离不开你.mp3'},
			{id: 189,title: '秘密',songUrl: './music/秘密.WAV'},
			{id: 190,title: '笨小孩(聪明版)',songUrl: './music/笨小孩(聪明版).mp3'},
			{id: 191,title: '第十三季《“发展中”的北京》-187街区馆说唱新闻',songUrl: './music/第十三季《“发展中”的北京》-187街区馆说唱新闻.mp3'},
			{id: 192,title: '结婚',songUrl: './music/结婚.mp3'},
			{id: 193,title: '给自己的歌',songUrl: './music/给自己的歌.mp3'},
			{id: 194,title: '自由',songUrl: './music/自由.WAV'},
			{id: 195,title: '茶底世界',songUrl: './music/茶底世界.mp3'},
			{id: 196,title: '蓝莲花-许巍',songUrl: './music/蓝莲花-许巍.mp3'},
			{id: 197,title: '蝴蝶泉边',songUrl: './music/蝴蝶泉边.mp3'},
			{id: 198,title: '被动',songUrl: './music/被动.mp3'},
			{id: 199,title: '该我的爱',songUrl: './music/该我的爱.mp3'},
			{id: 200,title: '谢谢侬',songUrl: './music/谢谢侬.mp3'},
			{id: 201,title: '贾立怡-独奏(新歌+精选)-移动影音-感恩节-128',songUrl: './music/贾立怡-独奏(新歌+精选)-移动影音-感恩节-128.mp3'},
			{id: 202,title: '赤裸裸-郑钧',songUrl: './music/赤裸裸-郑钧.mp3'},
			{id: 203,title: '趁早-李琦',songUrl: './music/趁早-李琦.mp3'},
			{id: 204,title: '过时',songUrl: './music/过时.mp3'},
			{id: 205,title: '这个下午很无聊',songUrl: './music/这个下午很无聊.WAV'},
			{id: 206,title: '追梦赤子心',songUrl: './music/追梦赤子心.mp3'},
			{id: 207,title: '逃跑计划-08年我们结婚 (2)',songUrl: './music/逃跑计划-08年我们结婚 (2).mp3'},
			{id: 208,title: '逃跑计划-08年我们结婚',songUrl: './music/逃跑计划-08年我们结婚.mp3'},
			{id: 209,title: '逃跑计划-Apple',songUrl: './music/逃跑计划-Apple.mp3'},
			{id: 210,title: '逃跑计划-ChemicalBus',songUrl: './music/逃跑计划-ChemicalBus.mp3'},
			{id: 211,title: '逃跑计划-IsThisLove',songUrl: './music/逃跑计划-IsThisLove.mp3'},
			{id: 212,title: '逃跑计划-Sorry',songUrl: './music/逃跑计划-Sorry.mp3'},
			{id: 213,title: '逃跑计划-TakeMeAway',songUrl: './music/逃跑计划-TakeMeAway.mp3'},
			{id: 214,title: '逃跑计划-Wonderful(Live)',songUrl: './music/逃跑计划-Wonderful(Live).mp3'},
			{id: 215,title: '逃跑计划-一万次悲伤',songUrl: './music/逃跑计划-一万次悲伤.mp3'},
			{id: 216,title: '逃跑计划-再见再见',songUrl: './music/逃跑计划-再见再见.mp3'},
			{id: 217,title: '逃跑计划-再飞行(TVVersion)',songUrl: './music/逃跑计划-再飞行(TVVersion).mp3'},
			{id: 218,title: '逃跑计划-哪里是你的拥抱',songUrl: './music/逃跑计划-哪里是你的拥抱.mp3'},
			{id: 219,title: '逃跑计划-因为理想',songUrl: './music/逃跑计划-因为理想.mp3'},
			{id: 220,title: '逃跑计划-夜空中最亮的星',songUrl: './music/逃跑计划-夜空中最亮的星.mp3'},
			{id: 221,title: '逃跑计划-直到有一天',songUrl: './music/逃跑计划-直到有一天.mp3'},
			{id: 222,title: '逃跑计划-结婚',songUrl: './music/逃跑计划-结婚.mp3'},
			{id: 223,title: '逃跑计划-阳光照进回忆里',songUrl: './music/逃跑计划-阳光照进回忆里.mp3'},
			{id: 224,title: '逃跑计划-青春没有终点',songUrl: './music/逃跑计划-青春没有终点.mp3'},
			{id: 225,title: '遇见另一个自己',songUrl: './music/遇见另一个自己.mp3'},
			{id: 226,title: '郭采洁-隐形超人-欠踹的背影-128',songUrl: './music/郭采洁-隐形超人-欠踹的背影-128.mp3'},
			{id: 227,title: '重来',songUrl: './music/重来.mp3'},
			{id: 228,title: '钟鼓楼-何勇',songUrl: './music/钟鼓楼-何勇.mp3'},
			{id: 229,title: '阳光照进回忆里',songUrl: './music/阳光照进回忆里.mp3'},
			{id: 230,title: '陈麦麒-80后的幻想（2018版）',songUrl: './music/陈麦麒-80后的幻想（2018版）.mp3'},
			{id: 231,title: '陈麦麒-三十（2018版）',songUrl: './music/陈麦麒-三十（2018版）.mp3'},
			{id: 232,title: '陈麦麒-云',songUrl: './music/陈麦麒-云.mp3'},
			{id: 233,title: '陈麦麒-女朋友（2018版）',songUrl: './music/陈麦麒-女朋友（2018版）.mp3'},
			{id: 234,title: '陈麦麒-彩云之南（2018版）',songUrl: './music/陈麦麒-彩云之南（2018版）.mp3'},
			{id: 235,title: '陈麦麒-徐半仙（2018版）',songUrl: './music/陈麦麒-徐半仙（2018版）.mp3'},
			{id: 236,title: '陈麦麒-简单',songUrl: './music/陈麦麒-简单.mp3'},
			{id: 237,title: '陈麦麒-追忆',songUrl: './music/陈麦麒-追忆.mp3'},
			{id: 238,title: '陈麦麒-青春（2018版）',songUrl: './music/陈麦麒-青春（2018版）.mp3'},
			{id: 239,title: '陈麦麒-面朝大海春暖花开',songUrl: './music/陈麦麒-面朝大海春暖花开.mp3'},
			{id: 240,title: '青春DEMO-陈麦麒',songUrl: './music/青春DEMO-陈麦麒.mp3'},
			{id: 241,title: '青春没有终点',songUrl: './music/青春没有终点.mp3'},
			{id: 242,title: '静下来',songUrl: './music/静下来.mp3'},
			{id: 243,title: '音乐故事-Vol195无拼搏，不青春.m4a',songUrl: './music/音乐故事-Vol195无拼搏，不青春.m4a'},
			{id: 244,title: '音乐故事-Vol202面具下，你不为人知的一面.m4a',songUrl: './music/音乐故事-Vol202面具下，你不为人知的一面.m4a'},
			{id: 245,title: '音乐故事-Vol203远方的另一面,旅行大吐槽.m4a',songUrl: './music/音乐故事-Vol203远方的另一面,旅行大吐槽.m4a'},
			{id: 246,title: '音乐故事-Vol204热爱吃的人，才热爱生活.m4a',songUrl: './music/音乐故事-Vol204热爱吃的人，才热爱生活.m4a'},
			{id: 247,title: '音乐故事-Vol206跑步往事，记我们玩命奔跑的岁月.m4a',songUrl: './music/音乐故事-Vol206跑步往事，记我们玩命奔跑的岁月.m4a'},
			{id: 248,title: '音乐故事-Vol217北宋往事：浮华一梦汴京城.m4a',songUrl: './music/音乐故事-Vol217北宋往事：浮华一梦汴京城.m4a'},
			{id: 249,title: '音乐故事-Vol218如果时间不走寻常路.m4a',songUrl: './music/音乐故事-Vol218如果时间不走寻常路.m4a'},
			{id: 250,title: '音乐故事-Vol219缤纷嗅觉，你最迷恋哪种气味？.m4a',songUrl: './music/音乐故事-Vol219缤纷嗅觉，你最迷恋哪种气味？.m4a'},
			{id: 251,title: '音乐故事-Vol220你的礼物，温暖了我的世界.m4a',songUrl: './music/音乐故事-Vol220你的礼物，温暖了我的世界.m4a'},
			{id: 252,title: '音乐故事-Vol221怀才不遇？那就到互联网试试吧！.m4a',songUrl: './music/音乐故事-Vol221怀才不遇？那就到互联网试试吧！.m4a'},
			{id: 253,title: '音乐故事-Vol222校园老大的嚣张往事.m4a',songUrl: './music/音乐故事-Vol222校园老大的嚣张往事.m4a'},
			{id: 254,title: '音乐故事-Vol2232017你循环最多的一首歌.m4a',songUrl: './music/音乐故事-Vol2232017你循环最多的一首歌.m4a'},
			{id: 255,title: '音乐故事-Vol224这些粤语歌唱透了人生(四周年节目）.m4a',songUrl: './music/音乐故事-Vol224这些粤语歌唱透了人生(四周年节目）.m4a'},
			{id: 256,title: '音乐故事-Vol225周董的歌关注了哪些社会问题？.m4a',songUrl: './music/音乐故事-Vol225周董的歌关注了哪些社会问题？.m4a'},
			{id: 257,title: '音乐故事-Vol226Dolores，小红莓的精灵，永远不会变老了.m4a',songUrl: './music/音乐故事-Vol226Dolores，小红莓的精灵，永远不会变老了.m4a'},
			{id: 258,title: '音乐故事-Vol227神秘巨星：最搞笑的阿米尔汗让我们哭得最惨.m4a',songUrl: './music/音乐故事-Vol227神秘巨星：最搞笑的阿米尔汗让我们哭得最惨.m4a'},
			{id: 259,title: '音乐故事-Vol228我拿歌曲战寒风.m4a',songUrl: './music/音乐故事-Vol228我拿歌曲战寒风.m4a'},
			{id: 260,title: '音乐故事-Vol229我们就一天天长大，过年前又该剪头发.m4a',songUrl: './music/音乐故事-Vol229我们就一天天长大，过年前又该剪头发.m4a'},
			{id: 261,title: '音乐故事-Vol230呼叫2008，十年弹指一挥间.m4a',songUrl: './music/音乐故事-Vol230呼叫2008，十年弹指一挥间.m4a'},
			{id: 262,title: '音乐故事-Vol231游戏黑洞：你无法想象我打游戏有多不厉害.m4a',songUrl: './music/音乐故事-Vol231游戏黑洞：你无法想象我打游戏有多不厉害.m4a'},
			{id: 263,title: '音乐故事-Vol233华语流行音乐中的异域风情.m4a',songUrl: './music/音乐故事-Vol233华语流行音乐中的异域风情.m4a'},
			{id: 264,title: '音乐故事-Vol234印象商业街，故事在哪里等着你.m4a',songUrl: './music/音乐故事-Vol234印象商业街，故事在哪里等着你.m4a'},
			{id: 265,title: '音乐故事-Vol235你期待爱情中的ta，是怎样的人-.m4a',songUrl: './music/音乐故事-Vol235你期待爱情中的ta，是怎样的人-.m4a'},
			{id: 266,title: '音乐故事-Vol236春风吹来，去感受田野的气息.m4a',songUrl: './music/音乐故事-Vol236春风吹来，去感受田野的气息.m4a'},
			{id: 267,title: '音乐故事-VOl237这！就是尬舞！一起抖起来~.m4a',songUrl: './music/音乐故事-VOl237这！就是尬舞！一起抖起来~.m4a'},
			{id: 268,title: '音乐故事-Vol238听,充满阳光的旋律.m4a',songUrl: './music/音乐故事-Vol238听,充满阳光的旋律.m4a'},
			{id: 269,title: '音乐故事-Vol239给你超能力，你会成为谁的英雄？.m4a',songUrl: './music/音乐故事-Vol239给你超能力，你会成为谁的英雄？.m4a'},
			{id: 270,title: '音乐故事-Vol240听，这些歌唱出了90年代的社会风貌.m4a',songUrl: './music/音乐故事-Vol240听，这些歌唱出了90年代的社会风貌.m4a'},
			{id: 271,title: '音乐故事-Vol241人间囧事，笑对小确丧.m4a',songUrl: './music/音乐故事-Vol241人间囧事，笑对小确丧.m4a'},
			{id: 272,title: '音乐故事-Vol242摩托飞驰，年华如风.m4a',songUrl: './music/音乐故事-Vol242摩托飞驰，年华如风.m4a'},
			{id: 273,title: '音乐故事-Vol243陪我们长大的【毒童话】，越想越可怕.m4a',songUrl: './music/音乐故事-Vol243陪我们长大的【毒童话】，越想越可怕.m4a'},
			{id: 274,title: '音乐故事-Vol244青春期时的奇葩审美.m4a',songUrl: './music/音乐故事-Vol244青春期时的奇葩审美.m4a'},
			{id: 275,title: '音乐故事-Vol245夏日里的清凉小调.m4a',songUrl: './music/音乐故事-Vol245夏日里的清凉小调.m4a'},
			{id: 276,title: '音乐故事-Vol246给我一组朝鲜族歌曲，我要吃光所有冷面拌饭.m4a',songUrl: './music/音乐故事-Vol246给我一组朝鲜族歌曲，我要吃光所有冷面拌饭.m4a'},
			{id: 277,title: '音乐故事-Vol247那些年，我们追过的女团.m4a',songUrl: './music/音乐故事-Vol247那些年，我们追过的女团.m4a'},
			{id: 278,title: '音乐故事-Vol248三十岁的音乐人，唱给三十岁的你听.m4a',songUrl: './music/音乐故事-Vol248三十岁的音乐人，唱给三十岁的你听.m4a'},
			{id: 279,title: '音乐故事-Vol249婉转动人的国风小调儿-高质量.m4a',songUrl: './music/音乐故事-Vol249婉转动人的国风小调儿-高质量.m4a'},
			{id: 280,title: '音乐故事-Vol250抖音里的闽南歌到底唱了些啥？.m4a',songUrl: './music/音乐故事-Vol250抖音里的闽南歌到底唱了些啥？.m4a'},
			{id: 281,title: '音乐故事-Vol251那些听收音机的回忆.m4a',songUrl: './music/音乐故事-Vol251那些听收音机的回忆.m4a'},
			{id: 282,title: '音乐故事-Vol252高三毕业的暑假，你还是一个少年.m4a',songUrl: './music/音乐故事-Vol252高三毕业的暑假，你还是一个少年.m4a'},
			{id: 283,title: '音乐故事-Vol32深夜听民谣时的胡思乱想.m4a',songUrl: './music/音乐故事-Vol32深夜听民谣时的胡思乱想.m4a'},
			{id: 284,title: '黄豆-陈小春',songUrl: './music/黄豆-陈小春.mp3'},
        ]
    }
    //根据索引获取歌曲的方法
    getSongByNum(index) {
        return this.songs[index];
    }
}

//真正的构建播放器的类
class PlayerCreator {
    constructor() {
        this.audio = document.querySelector('.music-player__audio') // Audio dom元素, 因为很多api都是需要原生audio调用的，所以不用jq获取
        // this.audio.muted = true; // 控制静音
        this.audio.volume = 0.8;

        //工具
        this.util = new Util();
        this.musics = new Musics(); //歌曲信息
        this.song_index = 0; // 当前播放的歌曲索引
        this.loop_mode = 0; // 1 2
        // 下方歌曲列表容器
        this.song_list = $('.music__list_content');

        this.render_doms = { //切换歌曲时需要渲染的dom组
            title: $('.music__info--title'),
            singer: $('.music__info--singer'),
            image: $('.music-player__image img'),
            blur: $('.music-player__blur')
        }
        this.ban_dom = { //禁音时需要渲染的dom组
            control__btn: $('.control__volume--icon')
        }

        // 时间显示容器
        this.render_time = {
            now: $('.nowTime'),
            total: $('.totalTime')
        }

        // 唱片
        this.disc = {
            image: $('.music-player__image'),
            pointer: $('.music-player__pointer')
        };
        //播放器初始化
        this.init();
    }
    //初始化函数
    init() {
        this.renderSongList();
        this.renderSongStyle();
        this.bindEventListener();
    }
    //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根据歌曲去渲染视图
    renderSongStyle() {
        let {
            title,
            singer,
            songUrl,
            imageUrl
        } = this.musics.getSongByNum(this.song_index);
        this.audio.src = songUrl;
        this.render_doms.title.html(title);
        this.render_doms.singer.html(singer);
        this.render_doms.image.prop('src', imageUrl);
        this.render_doms.blur.css('background-image', 'url("' + imageUrl + '")');

        //切换列表中的item的类名 play
        this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
    }
    //绑定各种事件
    bindEventListener() {
        //播放按钮
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        //上一首
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        //下一首
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        //循环模式
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        //禁音
        this.$ban = new Btns('.control__volume--icon', {
            click: this.banNotes.bind(this)
        })
        //列表点击
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })

        //音量控制 audio标签音量 vlouem 属性控制0-1

        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => { //更改进度时
                this.audio.volume = value;
            }
        })


        //歌曲进度 this.audio.duration

        //可以播放的时候触发（歌曲的基本信息都已经获取到了）
        this.audio.oncanplay = () => {
            //避免重复实例化
            if (this.progress) {
                this.progress.max = this.audio.duration; //切换歌曲后更新时长
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                min: 0,
                max: this.audio.duration,
                value: 0,
                handler: (value) => {
                    this.audio.currentTime = value;
                }
            })
            //调整总时长
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }

        //会在播放的时候持续触发
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            //调整当前时长
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }

        //当歌曲播放完成的时候
        this.audio.onended = () => {
            this.changeSong('next');
            //播放完，换歌后，重新播放
            this.audio.play();
        }

    }

    //播放暂停控制
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        //this.audio.pauseed值为true 说明目前是不播放
        if (this.audio.paused) { //现在是暂停的 要播放
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }

    //更改循环模式
    changePlayMode() {
        this.loop_mode++;
        if (this.loop_mode > 2) this.loop_mode = 0;
        this.renderPlayMode();
    }
    //更改按钮样式
    renderPlayMode() {
        let _classess = ['loop', 'random', 'single'];
        let _o_i = this.$mode.$el.find('i');
        //prop 改一些标签的自有属性 attr改一些标签的自定义属性
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }

    //更改歌曲索引
    changeSongIndex(type) {
        if (typeof type === 'number') {
            this.song_index = type;
        } else {
            if (this.loop_mode === 0) {
                //列表循环
                this.song_index += type === 'next' ? 1 : -1;
                if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
            } else if (this.loop_mode === 1) {
                //随机播放
                let _length = this.musics.songs.length;
                let _random = Math.floor(Math.random() * _length);
                for (let i = 0; i < 10000; i++) { //随机的数为本身则继续随机
                    if (this.song_index == _random) {
                        _random = Math.floor(Math.random() * _length);
                    } else {
                        this.song_index = _random;
                        break;
                    }
                }
            } else if (this.loop_mode === 2) {
                this.song_index = this.song_index;
            }
        }
    }
    //歌曲时长
    songTime() {
        let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
        let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
        $('.totalTime').text(totalMinute + ':' + totalSecond);
    }
    //切换歌曲
    changeSong(type) {
        //更改索引
        this.changeSongIndex(type);
        //记录切歌前的状态
        let _is_pause = this.audio.paused;
        //切歌后更改视图显示
        this.renderSongStyle();
        //如果切歌前是在播放，就继续播放
        if (!_is_pause) this.audio.play();
    }
    //禁音
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) { //如果禁音则开启
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}

//进度条
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///给this挂载传入的参数
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }

    //进度条初始化
    init() {
        this.renderBackAndPointer();
        //this.bindEvents();
        this.drag();
        this.value;
        this.changeDOMStyle(this.width * this.value);
    }
    //为进度条渲染back和pointer
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }

    setValue(value) { //主动调用，传入value值，设置进度条样式
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }

    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false; //鼠标是否点击
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min); //当前的音量值
                    this.changeDOMStyle(_distance);
                    this.handler(_value); //更改进度之后，执行回调
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })

    }

    bindEvents() { //鼠标点击时更改
        this.$el.click((e) => {
            let _x = e.offsetX; //鼠标距离元素左边的距离
            let _ratio = _x / this.width;
            let _value = _ratio * (this.max - this.min); //当前的音量值
            this.changeDOMStyle(_x);
            this.handler(_value); //更改进度之后，执行回调
        })
    }
    //更改pointer和back
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7);//进度为0时将进度条背景改为0否则加上进度按钮的长度
        this.$pointer.css('left', distance + 'px');
    }
}


//按钮类 
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector); //元素
        this.bindEvents(handlers);
    }
    bindEvents(handlers) { //绑定事件
        for (const event in handlers) {
            //使用值的时候保证键值对在对象中是存在的
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();