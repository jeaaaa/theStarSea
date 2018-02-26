/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [
	[{
		"basic":true,
		"name":"萌萌哒歌单",
		"singer":"路人甲",
		"img":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
	},
	{
		"name":"我的一个道姑朋友",
		"singer":"以冬",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/i/F/004dErOJ3OJeiF.jpg",
		"src":"http://dl.stream.qqmusic.qq.com/C1000030r1IY3gZbhn.m4a?vkey=651DF5DFE4E8990723A94570FA0046FFCD304E63D2BB61E38732062D80336B73195891115A3844147382318D94AB193A83631AC8CD8CAAAC&guid=7860862480&uin=0&fromtag=66",
		"lrc":"[00:00.00]我的一个道姑朋友[00:00.48]而你撑伞拥我入怀中[00:05.85]一字一句誓言多慎重[00:11.84]你眼中有柔情千种[00:16.72]如脉脉春风 冰雪也消融[00:54.22]那年长街春意正浓[00:58.68]策马同游 烟雨如梦[01:05.96]檐下躲雨[01:07.92]望进一双 深邃眼瞳[01:13.54]宛如华山夹着细雪的微风[01:19.35]雨丝微凉[01:20.87]风吹过暗香朦胧[01:23.78]一时心头悸动 似你温柔剑锋[01:26.91]过处翩若惊鸿[01:32.82]是否情字写来都空洞[01:35.71]一笔一画斟酌着奉送[01:38.89]甘愿卑微换个笑容[01:41.10]或沦为平庸[01:44.81]而你撑伞拥我入怀中[01:47.91]一字一句誓言多慎重[01:51.04]你眼中有柔情千种[01:53.31]如脉脉春风 冰雪也消融[02:10.93]后来谁家喜宴重逢[02:15.75]佳人在侧 烛影摇红[02:23.23]灯火缱绻[02:25.46]映照一双 如画颜容[02:29.95]宛如豆蔻枝头温柔的旧梦[02:36.01]对面不识[02:37.61]恍然间思绪翻涌[02:40.71]望你白衣如旧，神色几分冰冻[02:43.70]谁知我心惶恐[02:46.75]也许我应该趁醉装疯[02:49.49]借你怀抱留一抹唇红[02:52.53]再将旧事轻歌慢诵[02:54.79]任旁人惊动[02:58.73]可我只能假笑扮从容[03:01.66]侧耳听那些情深意重[03:04.93]不去看你熟悉脸孔[03:07.23]只默默饮酒 多无动于衷[03:14.45]山门外 雪拂过白衣 又在指尖消融[03:20.29]负长剑 试问江湖阔大 该何去何从[03:26.33]今生至此 像个笑话一样  自己都嘲讽[03:32.61]一厢情愿，有始无终[03:43.17]若你早与他人两心同[03:45.06]何苦惹我错付了情衷[03:48.24]难道看我失魂落魄[03:50.28]你竟然心动[03:54.08]所幸经年漂浮红尘中[03:57.31]这颗心已是千疮百孔[04:00.44]怎惧你以薄情为刃[04:02.71]添一道裂缝[04:04.96]又不会痛[04:06.62]不如将过往埋在风中[04:09.46]以长剑为碑 以霜雪为冢[04:12.96]此生若是错在相逢[04:14.96]求一个善终[04:18.78]孤身打马南屏旧桥边过[04:21.84]恰逢山雨来时雾蒙蒙[04:24.93]想起那年伞下轻拥[04:27.06]就像躺在桥索之上，做了一场梦[04:32.54]梦醒后跌落，粉身碎骨，无影亦无踪[05:13.54]梦醒后跌落，粉身碎骨，无影亦无踪"
	},
	{
		"name":"童话镇",
		"singer":"陈一发儿",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/c/k/0044cHmg45iock.jpg",
		"src":"http://dl.stream.qqmusic.qq.com/C4000041vb5D3WMtrl.m4a?vkey=77861C3589C75716B402C4F7E5EAF53245F37768518C69F7AA6C0CA34ED81F753B63BB5ED8EBBD0A430334AD25F105CB963367A871BD227F&guid=7860862480&uin=0&fromtag=66",
		"lrc":"[00:00.00]童话镇[00:05.00]演唱：陈一发[00:10.00]作曲 : 暗杠[00:15.00]作词 : 竹君[00:22.93]听说白雪公主在逃跑[00:26.43]小红帽在担心大灰狼[00:29.83]听说疯帽喜欢爱丽丝 [00:33.17]丑小鸭会变成白天鹅[00:36.34]听说彼得潘总长不大[00:40.23]杰克他有竖琴和魔法[00:43.56]听说森林里有糖果屋[00:46.82]灰姑娘丢了心爱的玻璃鞋[00:50.39]只有睿智的河水知道[00:53.68]白雪是因为贪玩跑出了城堡[00:57.31]小红帽有件抑制自己[01:00.73]变成狼的大红袍[01:03.80]总有一条蜿蜒在童话镇里七彩的河[01:11.00]沾染魔法的乖张气息[01:14.42]却又在爱里曲折[01:17.76]川流不息扬起水[01:20.87]又卷入一帘时光入水[01:24.68]让全部很久很久以前[01:28.12]都走到幸福结局的时刻[01:33.18]music....[01:47.00]听说睡美人被埋藏[01:50.44]小人鱼在眺望金殿堂[01:53.79]听说阿波罗变成金乌[01:57.12]草原有奔跑的剑齿虎[02:00.73]听说匹诺曹总说着谎[02:04.16]侏儒怪拥有宝石满箱[02:07.57]听说悬崖有颗长生树[02:10.80]红鞋子不知疲倦地在跳舞[02:14.43]只有睿智的河水知道[02:17.84]睡美人逃避了生活的煎熬[02:21.14]小人鱼把阳光抹成眼影[02:24.58]投进泡沫的怀抱[02:27.77]总有一条蜿蜒在童话镇里七彩的河[02:35.06]沾染魔法的乖张气息[02:38.43]却又在爱里曲折[02:41.82]川流不息扬起水花[02:44.87]又卷入一帘时光入水[02:48.69]让所有很久很久以前[02:52.00]都走到幸福结局的时刻[02:55.46]总有一条蜿蜒在童话镇里梦幻的河[03:02.47]分隔了理想分隔现实[03:05.82]又在前方的山口汇合[03:09.22]川流不息扬起水花[03:12.36]又卷入一帘时光入水[03:16.23]让所有很久很久以前[03:19.38]都走到幸福结局的时刻[03:22.72]又陌生[03:24.52]啊~~啊~~啊~~啊~~[04:18.10]啊~~啊~~啊~~啊~~"
	},
	
	{
		"name":"恋",
		"singer":"星野源",
		"src":"http://dl.stream.qqmusic.qq.com/C100002j6RW2270o6W.m4a?vkey=651DF5DFE4E8990723A94570FA0046FFCD304E63D2BB61E38732062D80336B73195891115A3844147382318D94AB193A83631AC8CD8CAAAC&guid=7860862480&uin=0&fromtag=66",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/2/N/001hZIOv3wLL2N.jpg",
		"lrc":"[ti:恋][00:11.29][00:12.99]営みの  天色渐暗[00:15.33]街が暮れたら色めき  平常的街道开始活跃起来[00:18.95]風たちは運ぶわ  晚风推动者[00:21.34]カラスと人々の群れ  密集的乌鸦和纷扰的人群[00:23.78][00:25.28]意味なんか  没有什么特殊的意义[00:27.43]ないさ暮らしがあるだけ  只是普普通通的生活[00:31.06]ただ腹を空かせて  只是饿着肚子[00:33.50]君の元へ帰るんだ  回到有你的家[00:35.68][00:37.16]物心ついたらふと  忽然理解了[00:40.20]見上げて思うことが  这才是生活的美妙[00:43.25]この世にいる誰も  无论这世界上的每一个人[00:46.02]二人から  从两个人开始 [00:48.54][00:49.07]胸の中にあるもの  内心的某种情感[00:52.10]いつか見えなくなるもの   不知何时会消失的那种情感[00:55.10]それは側にいること  这种情感就在身边[00:58.14]いつも思い出して  无论何时都会想起[01:01.26]君の中にあるもの  你心中的那种情感[01:04.21]距離の中にある鼓動  距离感中产生的那种悸动[01:07.30]恋をしたの貴方の  恋爱中的你[01:10.19]指の混ざり頬の香り 相扣的十指脸庞的芳香[01:13.28]夫婦を超えてゆけ  超越了夫妇的情感[01:15.37][01:16.46][01:26.74][01:29.00]みにくいと 丑陋的[01:31.23]秘めた想いは色づき  秘密的心事开始成熟[01:34.79]白鳥は運ぶわ  随着天鹅飞向远方[01:37.30]当たり前を変えながら  改变着理所当然[01:39.74][01:40.95]恋せずにいられないな 忍不住要去恋爱[01:43.99]似た顔も虚構にも  无论相似的还是幻想的你的脸庞[01:47.05]愛が生まれるのは  人们会产生爱意[01:49.85]一人から  正因为都是孑然一身[01:52.31][01:52.80]胸の中にあるもの  内心的某种情感[01:55.89]いつか見えなくなるもの  不知何时会消失的那种情[01:58.99]それは側にいること  这种情感就在你的身边[02:01.98]いつも思い出して  无论何时都会想起[02:04.91]君の中にあるもの  你心中的那种情感[02:07.98]距離の中にある鼓動  距离感中产生的那种悸动[02:11.10]恋をしたの貴方の  恋爱中的你[02:14.00]指の混ざり頬の香り  相扣的十指脸庞的芳香[02:16.90]夫婦を超えてゆけ  是超越了夫妇之间的那种感情[02:19.59]泣き顔も　黙る夜も无论是哭泣的脸沉默的夜[02:45.40]揺れる笑顔も  还是摇曳的笑脸[02:53.57]いつまでも　いつまでも  无论何时无论何时[02:59.35][02:59.72]胸の中にあるもの  内心的那种情感[03:02.79]いつか見えなくなるもの  不知何时会消失的那种情感[03:05.77]それは側にいること  这种情感就在你的身边[03:08.68]いつも思い出して  无论何时都会想起[03:11.93]君の中にあるもの  你心中的那种情感[03:14.90]距離の中にある鼓動  距离感中产生的那种悸动[03:17.90]恋をしたの貴方の  恋爱中的你[03:20.84]指の混ざり　頬の香  相扣的十指脸庞的芳香[03:23.80]夫婦を超えてゆけ 是超越了夫妇之间的那种情感[03:26.89]二人を超えてゆけ  是超越了两个人的那种情感[03:29.86]一人を超えてゆけ 是超越了自己的那种情感[03:32.16]一人を超えてゆけ 是超越了自己的那种情感[04:08.47]一人を超えてゆけ 是超越了自己的那种情感[04:13.54]一人を超えてゆけ 是超越了自己的那种情感"
	},
	{
		"name":"小城大事",
		"singer":"杨千嬅",
		"src":"http://dl.stream.qqmusic.qq.com/C1000031Ecjg1tdNzL.m4a?vkey=651DF5DFE4E8990723A94570FA0046FFCD304E63D2BB61E38732062D80336B73195891115A3844147382318D94AB193A83631AC8CD8CAAAC&guid=7860862480&uin=0&fromtag=66",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/h/t/003uKwNs4aEiht.jpg",
		"lrc":"[ti:小城大事][ar:杨千桦][al:电光幻影][offset:500][00:02.01]小城大事[00:04.86]作曲 / 编曲 / 监制 ： 雷颂德[00:08.23]作词 ： 林夕[00:17.73]青春仿佛因爱上你开始 [00:20.92]但却令我看破爱这个字 [00:25.04]自你患上失忆 [00:27.82]便是我扭转命数的事 [00:33.60]只因当失忆症发作加深 [00:36.91]没记住我但却另有更新蜜运[00:41.06]像狐狸精般 [00:44.32]并未允许我步近 [00:48.91]无回忆的余生 [00:50.74]忘掉往日情人 [00:52.91]却又记住移情别爱的命运[00:56.72]无回忆的男人 [00:58.71]就当偷厄与瞒骗 [01:01.52]抱抱我不过份 [02:24.89][01:03.87]吻下来 豁出去 [02:29.53][01:08.33]这吻别似覆水 [02:33.83][01:12.63]再来也许要天上团聚 [01:19.38]再回头 你不许 [01:23.76]如曾经不登对 [03:05.07][01:28.10]你何以双眼好像流泪 [01:52.28]彼此追忆不怕爱要终止 [01:55.21]但我大概上世做过太多坏事 [01:59.70]能从头开始 [02:02.78]跪在教堂说愿意 [02:07.67]娱乐行的人影 [02:09.40]还在继续繁荣 [02:11.72]我在算着甜言蜜语的寿命 [02:15.44]人造的蠢卫星 [02:17.22]没探测出我们已 [02:20.44]已再见不再认 [02:40.82]我下来 你出去 [02:45.27]讲再会也心虚 [02:49.54]我还记得到天上团聚 [02:56.41]吻下来 豁出去 [03:00.72]从前多么登对 [03:13.43]每年这天记得再流泪[03:29.10]每年这天记得再流泪"
	},
	{
		"name":"sugar",
		"singer":"Maroon5",
		"src":"http://dl.stream.qqmusic.qq.com/C100001lrqyg0FcPKk.m4a?vkey=651DF5DFE4E8990723A94570FA0046FFCD304E63D2BB61E38732062D80336B73195891115A3844147382318D94AB193A83631AC8CD8CAAAC&guid=7860862480&uin=0&fromtag=66",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/Y/V/0006ftqt2nAMYV.jpg",
		"lrc":"[ti:Sugar][ar:Maroon 5][al:V (Deluxe Version)][offset:0][00:00.56]Sugar - Maroon 5[00:08.76]I'm hurting baby,[00:09.65][00:10.75]I'm broken down[00:11.78][00:12.75]I need your loving, loving[00:14.75]I need it now[00:15.74][00:16.78]When I'm without you[00:17.86][00:18.65]I'm something weak[00:19.63][00:20.74]You got me begging, begging[00:22.76]I'm on my knees[00:23.89][00:24.66]I don't wanna be needing your love[00:26.67]I just wanna be deep in your love[00:28.64]And it's killing me when you're away[00:30.44][00:31.68]Ooh baby,[00:32.65]cause a bullet don't care[00:33.74]where you are[00:34.62]I just wanna be there where you are[00:36.13][00:36.70]And I gotta get one little taste[00:38.96][00:39.86]Sugar[00:40.95][00:41.75]Yes please[00:43.09][00:43.77]Won't you come and put it down on me[00:46.82][00:47.72]Oh right here, cause I need[00:50.97][00:51.83]Little love and little sympathy[00:54.92][00:55.75]Yeah you show me good loving[00:58.21]Make it alright[01:00.26]Need a little a sweetness in my life[01:03.27][01:03.80]Sugar[01:05.05][01:05.75]Yes please[01:07.13][01:07.75]Won't you come and put it down on me[01:10.84][01:12.65]My broken pieces[01:13.73][01:14.75]You put them up[01:15.78][01:16.79]Don't leave me hanging, hanging[01:18.74]Come get me some[01:19.88][01:20.67]When I'm without ya[01:21.91][01:22.64]So insecure[01:23.88][01:24.74]You are the one thing, one thing[01:26.78]I'm never full[01:27.91][01:28.59]I don't wanna be needing your love[01:30.72]I just wanna be deep in your love[01:32.75]And it's killing me when you're away[01:34.79][01:35.73]Ooh baby,[01:36.68]cause a bullet don't care where you are[01:38.62]I just wanna be there where you are[01:40.66]And I gotta get one little taste[01:42.86][01:43.84]Sugar[01:44.97][01:45.83]Yes please[01:47.06][01:47.81]Won't you come and put it down on me[01:50.90][01:51.70]Oh right here, cause I need[01:55.05][01:55.80]Little love and little sympathy[01:58.86][01:59.70]Yeah you show me good loving[02:02.12]Make it alright[02:04.25]Need a little a sweetness in my life[02:07.26][02:07.79]Sugar[02:09.02][02:09.75]Yes please[02:11.22][02:11.78]Won't you come and put it down on me[02:14.87][02:15.74]Yeah[02:15.99][02:16.62]I want that red velvet[02:18.65]I want that sugar sweet[02:20.09][02:20.60]Don't let nobody touch it[02:22.55]Unless that somebody is me[02:24.61]I gotta be a man[02:26.65]There ain't no other way[02:28.66]Cause girl you're hotter[02:29.83]than a southern california bae[02:32.75]I don't wanna play no games[02:34.71]I don't gotta be afraid[02:36.58]Don't give all that shy shit[02:38.15]No make up on[02:39.31]That's my[02:39.90]Sugar[02:41.04][02:41.68]Yes please[02:43.12][02:43.89]Won't you come and put it down on me[02:46.80][02:47.73]Oh right here, cause I need[02:51.04][02:51.80]Little love and little sympathy[02:55.17][02:55.77]Yeah you show me good loving[02:57.65][02:58.17]Make it alright[02:59.72][03:00.23]Need a little a sweetness in my life[03:03.78]Sugar[03:05.00][03:05.74]Yes please[03:07.05][03:07.73]Won't you come and put it down on me[03:10.84][03:11.81]Sugar[03:13.01][03:13.98]Yes please[03:15.18][03:15.91]Won't you come and put it down on me[03:18.81][03:19.96]Oh right here, cause I need[03:22.88][03:23.90]Little love and little sympathy[03:26.94][03:27.85]Yeah you show me good loving[03:30.12]Make it alright[03:32.20]Need a little a sweetness in my life[03:35.75]Sugar[03:36.90][03:37.79]Yes please[03:39.12][03:39.78]Won't you come and put it down on me[03:55.10]Won't you come and put it down on me"
	}],

	[{
		"basic":true,
		"name":"呵呵哒歌单",
		"singer":"路人乙",
		"img":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
	},
	{
		"name":"我的一个道姑朋友",
		"singer":"以冬",
		"img":"http://imgcache.qq.com/music/photo/mid_album_90/i/F/004dErOJ3OJeiF.jpg",
		"src":"http://dl.stream.qqmusic.qq.com/C1000030r1IY3gZbhn.m4a?vkey=651DF5DFE4E8990723A94570FA0046FFCD304E63D2BB61E38732062D80336B73195891115A3844147382318D94AB193A83631AC8CD8CAAAC&guid=7860862480&uin=0&fromtag=66",
		"lrc":"[00:00.00]我的一个道姑朋友[00:00.48]而你撑伞拥我入怀中[00:05.85]一字一句誓言多慎重[00:11.84]你眼中有柔情千种[00:16.72]如脉脉春风 冰雪也消融[00:54.22]那年长街春意正浓[00:58.68]策马同游 烟雨如梦[01:05.96]檐下躲雨[01:07.92]望进一双 深邃眼瞳[01:13.54]宛如华山夹着细雪的微风[01:19.35]雨丝微凉[01:20.87]风吹过暗香朦胧[01:23.78]一时心头悸动 似你温柔剑锋[01:26.91]过处翩若惊鸿[01:32.82]是否情字写来都空洞[01:35.71]一笔一画斟酌着奉送[01:38.89]甘愿卑微换个笑容[01:41.10]或沦为平庸[01:44.81]而你撑伞拥我入怀中[01:47.91]一字一句誓言多慎重[01:51.04]你眼中有柔情千种[01:53.31]如脉脉春风 冰雪也消融[02:10.93]后来谁家喜宴重逢[02:15.75]佳人在侧 烛影摇红[02:23.23]灯火缱绻[02:25.46]映照一双 如画颜容[02:29.95]宛如豆蔻枝头温柔的旧梦[02:36.01]对面不识[02:37.61]恍然间思绪翻涌[02:40.71]望你白衣如旧，神色几分冰冻[02:43.70]谁知我心惶恐[02:46.75]也许我应该趁醉装疯[02:49.49]借你怀抱留一抹唇红[02:52.53]再将旧事轻歌慢诵[02:54.79]任旁人惊动[02:58.73]可我只能假笑扮从容[03:01.66]侧耳听那些情深意重[03:04.93]不去看你熟悉脸孔[03:07.23]只默默饮酒 多无动于衷[03:14.45]山门外 雪拂过白衣 又在指尖消融[03:20.29]负长剑 试问江湖阔大 该何去何从[03:26.33]今生至此 像个笑话一样  自己都嘲讽[03:32.61]一厢情愿，有始无终[03:43.17]若你早与他人两心同[03:45.06]何苦惹我错付了情衷[03:48.24]难道看我失魂落魄[03:50.28]你竟然心动[03:54.08]所幸经年漂浮红尘中[03:57.31]这颗心已是千疮百孔[04:00.44]怎惧你以薄情为刃[04:02.71]添一道裂缝[04:04.96]又不会痛[04:06.62]不如将过往埋在风中[04:09.46]以长剑为碑 以霜雪为冢[04:12.96]此生若是错在相逢[04:14.96]求一个善终[04:18.78]孤身打马南屏旧桥边过[04:21.84]恰逢山雨来时雾蒙蒙[04:24.93]想起那年伞下轻拥[04:27.06]就像躺在桥索之上，做了一场梦[04:32.54]梦醒后跌落，粉身碎骨，无影亦无踪[05:13.54]梦醒后跌落，粉身碎骨，无影亦无踪"
	}]

];