create table user(uid int primary key auto_increment, name varchar(100) not null, email varchar(50) not null, password varchar(100) not null, gender enum('m','f', 'o') not null, address varchar(100), typeOfResidence enum('flat', 'detached house', 'cottage', 'mansion','dormitory'));
create table genre(gid int primary key, name varchar(50), parentId int, foreign key(parentId) references genre(gid));
create table user_genre(uid int, foreign key(uid) references user(uid), gid int, foreign key(gid) references genre(gid));
create table music (mid int(11) auto_increment primary key, filename varchar(255) default NULL, artist varchar(255) default NULL, title varchar(255) default NULL, album varchar(255) default NULL, comment varchar(255) default NULL, track tinyint(2) default NULL, year smallint(4) default NULL, genre int, foreign key(genre) references genre(gid), path varchar(255) default NULL, filesize smallint(6) default NULL, copyright varchar(255) default NULL, layer varchar(255) default NULL, stereo varchar(32) default NULL, goodframes int(6) default NULL, badframes int(6) default NULL, frequency int(6) default NULL, playtime int(6) default NULL, UNIQUE KEY path (path) );
create table user_music(uid int, foreign key(uid) references user(uid), mid int, foreign key(mid) references music(mid), rating float, lastPlayed datetime, numberOfPlay int);

INSERT INTO `user` (`uid`, `name`, `email`, `password`, `gender`, `address`, `typeOfResidence`) VALUES (NULL, 'Fanni', 'goz@uni-miskolc.hu', 'pW1o2V', 'f', 'Miskolc', 'flat');

INSERT INTO `genre` (`gid`, `name`, `parentId`) VALUES ('13', 'POP', '13');
INSERT INTO `genre` (`gid`, `name`, `parentId`) VALUES ('146', 'JPOP', '13');
INSERT INTO `genre` (`gid`, `name`, `parentId`) VALUES ('8', 'JAZZ', '8');
INSERT INTO `genre` (`gid`, `name`, `parentId`) VALUES ('74', 'Acid Jazz', '8');
INSERT INTO `genre` (`gid`, `name`, `parentId`) VALUES ('85', 'Bebop', '8');

INSERT INTO `music` (`mid`, `filename`, `artist`, `title`, `album`, `comment`, `track`, `year`, `genre`, `path`, `filesize`, `copyright`, `layer`, `stereo`, `goodframes`, `badframes`, `frequency`, `playtime`) VALUES (NULL, 'coldheart.mp3', 'Elton John, Dua Lipa', 'Cold Heart', 'The Lockdown Sessions', NULL, '2', '2021', '13', 'home/downloads/coldheart.mp3', '4.11', 'Elthon John', 'layer', NULL, '2', '2', '22', '4');
INSERT INTO `music` (`mid`, `filename`, `artist`, `title`, `album`, `comment`, `track`, `year`, `genre`, `path`, `filesize`, `copyright`, `layer`, `stereo`, `goodframes`, `badframes`, `frequency`, `playtime`) VALUES (NULL, 'nevergoinghome.mp3', 'Kungs', 'Never Going Home', 'Never Going Home: Remixes', NULL, '2', '2021', '13', 'home/downloads/nevergoinghome.mp3', '3.91', 'Val Production', NULL, 'yes', '5', '5', '22', '4');
INSERT INTO `music` (`mid`, `filename`, `artist`, `title`, `album`, `comment`, `track`, `year`, `genre`, `path`, `filesize`, `copyright`, `layer`, `stereo`, `goodframes`, `badframes`, `frequency`, `playtime`) VALUES (NULL, 'WAWW.mp3', 'Louis Armstrong', 'What A Wonderful World', 'What A Wonderful World', NULL, '1', '1967', '8', 'home/downloads/WAWW.mp3', '3.7', 'UMG', NULL, NULL, '3', '1', '10', '2.30');

insert into user(name, email, password, gender, address, typeOfResidence) values ("Megyeri Balázs", "mrbalazs@gmail.com", "12345678", "male", "Miskolc", "flat")
insert into genre(gid, name) values (2, "jazz"), (3, "funk"), (4, "electronic")

insert into music(
    filename,
    artist,
    title,
    album,
    comment,
    track,
    year,
    genre,
    path,
    filesize,
    copyright,
    layer,
    stereo,
    goodframes,
    badframes,
    frequency,
    playtime
) values (
    "spanom.mp3", 
    "Dzsúdló", 
    "SPANOM", 
    "Fotofóbia", 
    "Comment", 
    10, 
    2020, 
    "pop", 
    "/music/spanom.mp3", 
    255, 
    "copyright1", 
    "layer1", 
    "stereo1", 
    100, 
    0, 
    30, 
    211
  ),
  (
    "mindenki_tancol.mp3", 
    "Majka", 
    "Mindenki táncol", 
    "Mindenki táncol", 
    "Comment2", 
    1, 
    2017, 
    "pop", 
    "/music/mindenki_tancol.mp3", 
    255, 
    "copyright2", 
    "layer2", 
    "stereo2", 
    100, 
    5, 
    100, 
    328
  ),
   (
    "requiem.mp3", 
    "W.A. Mozart", 
    "Requiem in D minor", 
    "Requiem in D minor", 
    "Comment3", 
    1, 
    1791, 
    "classic", 
    "/music/requiem.mp3", 
    255, 
    "copyright3", 
    "layer3", 
    "stereo3", 
    100, 
    0, 
    500, 
    533
  )