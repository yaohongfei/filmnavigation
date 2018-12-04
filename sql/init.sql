INSERT INTO `test`.`user` (`userId`, `userName`, `password`, `level`, `origin`, `extend1`, `extend2`) VALUES ('1', 'hoyao', 'll520', '100', '0', 'NULL', 'NULL');



INSERT INTO `test`.`film` (`id`, `name`, `type`, `detailInfo`, `area`, `score`, `level`, `img`, `path`, `director`, `actors`, `release_time`, `duration`) VALUES ('1', '复仇者联盟3', '19', '银河系中的至尊霸主灭霸（乔什·布洛林饰）带着几个得力手下洗劫了全宇宙，只为了将所有的无限宝石镶嵌于金属手套上，这个手套可以将整个银河系毁灭于弹指间。为了拯救宇宙，托尼·斯塔克（小罗伯特·唐尼饰）和史蒂夫·罗杰斯（克里斯·埃文斯饰）需要摒弃前嫌，重组复仇者联盟，并与蜘蛛侠（汤姆·赫兰德饰）、奇异博士（本尼迪克特·康伯巴奇饰）、银河护卫队、黑豹（查德维克·博斯曼饰）以及瓦坎达人民的力量一同作战 [2]  。', '3', '8', '1', '/assets/img/poster/Avengers3.jpg', 'assets/video/test.mp4', '导演', '唐尼,卷福', '2018-04-06', '110');
INSERT INTO `test`.`film` (`id`, `name`, `type`, `detailInfo`, `area`, `score`, `level`, `img`, `path`, `director`, `actors`, `release_time`, `duration`) VALUES ('2', '奔跑吧', '3', '奔跑吧 兄弟', '1', 'NULL', 'NULL', 'no img', 'assets/video/test.mp4', '导演', '唐尼,卷福', '2018-04-06', '120');
INSERT INTO `test`.`film` (`id`, `name`, `type`, `detailInfo`, `area`, `score`, `level`, `img`, `path`, `director`, `actors`, `release_time`, `duration`) VALUES ('3', '极限挑战', '3', 'NULL', '1', 'NULL', 'NULL', 'no img', 'assets/video/test.mp4', '导演', '唐尼,卷福', '2018-04-06', '125');
INSERT INTO `test`.`film` (`id`, `name`, `type`, `detailInfo`, `area`, `score`, `level`, `img`, `path`, `director`, `actors`, `release_time`, `duration`) VALUES ('4', '归去来', '2', 'NULL', '1', 'NULL', 'NULL', 'no img', 'assets/video/test.mp4', '导演', '唐尼,卷福', '2018-04-06', '115');
INSERT INTO `test`.`film` (`id`, `name`, `type`, `detailInfo`, `area`, `score`, `level`, `img`, `path`, `director`, `actors`, `release_time`, `duration`) VALUES ('5', '21克拉', '1', 'NULL', '1', 'NULL', 'NULL', 'no img', 'assets/video/test.mp4', '导演', '唐尼,卷福', '2018-04-06', '130');



INSERT INTO `test`.`home_film` (`id`, `name`, `index`, `img`, `description`, `extend`) VALUES ('1', '复仇者联盟3', '1', 'assets/img/poster/main/Avengers3.jpg', 'NULL', '复仇者联盟:十年布局，就此一战');
INSERT INTO `test`.`home_film` (`id`, `name`, `index`, `img`, `description`, `extend`) VALUES ('2', '奔跑吧', '2', 'assets/img/poster/main/benpaoba.jpg', 'NULL', '奔跑吧:水炮强击沙溢求放过');
INSERT INTO `test`.`home_film` (`id`, `name`, `index`, `img`, `description`, `extend`) VALUES ('3', '极限挑战', '3', 'assets/img/poster/main/jixiantiaozhan.jpg', 'NULL', '极限挑战：张艺兴玩业务篮球');
INSERT INTO `test`.`home_film` (`id`, `name`, `index`, `img`, `description`, `extend`) VALUES ('4', '归去来', '4', 'assets/img/poster/main/guiqulai.jpg', 'NULL', '归去来：罗晋唐嫣再度携手');
INSERT INTO `test`.`home_film` (`id`, `name`, `index`, `img`, `description`, `extend`) VALUES ('5', '21克拉', '5', 'assets/img/poster/main/21kela.jpg', 'NULL', '21克拉:热巴掌掴\"男小三\"');




INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('c', '1', '内地', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_AREA', '4', '其他', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_AREA', '3', '欧美', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_AREA', '2', '港台', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '12', '悬疑', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '10', '恐怖', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '3', '喜剧', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '1', '爱情', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '4', '伦理', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '5', '歌舞', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '6', '动漫', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '7', '武侠', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '8', '古装', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '20', '魔幻', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '2', '剧情', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '13', '记录', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '14', '战争', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '15', '历史', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '16', '传记', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '17', '体育', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '18', '冒险', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '19', '科幻', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '11', '犯罪', '');
INSERT INTO `test`.`data_dictionary` (`data_key`, `data_id`, `data_name`, `extend`) VALUES ('FILM_TYPE', '9', '动作', '');
