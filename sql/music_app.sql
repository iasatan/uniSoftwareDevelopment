use music_app;
create table user(uid int primary key auto_increment, name varchar(100) not null, email varchar(50) not null, password varchar(100) not null, gender enum('m','f', 'o') not null, address varchar(100), typeOfResidence enum('flat', 'detached house', 'cottage', 'mansion','dormitory'));
create table genre(gid int primary key auto_increment, name varchar(50), parentId int, foreign key(parentId) references genre(gid));
create table user_genre(uid int, foreign key(uid) references user(uid), gid int, foreign key(gid) references genre(gid));
create table music (mid int(11) auto_increment primary key, filename varchar(255) default NULL, artist varchar(255) default NULL, title varchar(255) default NULL, album varchar(255) default NULL, comment varchar(255) default NULL, track tinyint(2) default NULL, year smallint(4) default NULL, genre int, foreign key(genre) references genre(gid), path varchar(255) default NULL, filesize smallint(6) default NULL, copyright varchar(255) default NULL, layer varchar(255) default NULL, stereo varchar(32) default NULL, goodframes int(6) default NULL, badframes int(6) default NULL, frequency int(6) default NULL, playtime int(6) default NULL, UNIQUE KEY path (path) );
create table user_music(uid int, foreign key(uid) references user(uid), mid int, foreign key(mid) references music(mid), rating float, lastPlayed datetime, numberOfPlay int);

INSERT  INTO user (name, email, password, gender, address, typeOfResidence) VALUES ('Fanni', 'goz@uni-miskolc.hu', 'pW1o2V', 'f', 'Miskolc', 'flat');
INSERT  INTO genre (name) VALUES ('POP');
INSERT  INTO genre (name) VALUES ('JPOP');
INSERT  INTO genre (name) VALUES ('JAZZ');
INSERT  INTO genre (name) VALUES ('Acid Jazz');
INSERT  INTO genre (name) VALUES ('Bebop');
insert  into user (name, email, password, gender, address, typeOfResidence) values ('Megyeri Balázs', 'mrbalazs@gmail.com', '12345678', 'm', 'Miskolc', 'flat')
INSERT  INTO music ( filename, artist, title, album, comment, track, year, genre, path, filesize, copyright, layer, stereo, goodframes, badframes, frequency, playtime) VALUES ( 'coldheart.mp3', 'Elton John, Dua Lipa', 'Cold Heart', 'The Lockdown Sessions', NULL, 2, 2021, 1, 'home/downloads/coldheart.mp3', '4.11', 'Elthon John', 'layer', NULL, 2, 2, 22, 4);
INSERT  INTO music ( filename, artist, title, album, comment, track, year, genre, path, filesize, copyright, layer, stereo, goodframes, badframes, frequency, playtime) VALUES ( 'nevergoinghome.mp3', 'Kungs', 'Never Going Home', 'Never Going Home: Remixes', NULL, 2, 2021, 1, 'home/downloads/nevergoinghome.mp3', '3.91', 'Val Production', NULL, 'yes', 5, 5, 22, 4);
INSERT  INTO music ( filename, artist, title, album, comment, track, year, genre, path, filesize, copyright, layer, stereo, goodframes, badframes, frequency, playtime) VALUES ( 'WAWW.mp3', 'Louis Armstrong', 'What A Wonderful World', 'What A Wonderful World', NULL, 1, 1967, 1, 'home/downloads/WAWW.mp3', '3.7', 'UMG', NULL, NULL, 3, 1, 10, 2.30);
INSERT  INTO music ( filename, artist, title, album, comment, track, year, genre, path, filesize, copyright, layer, stereo, goodframes, badframes, frequency, playtime) VALUES ( 'kisapam.mp3', 'Varga Irén', 'Kisapám', '-', NULL, 1, 2021, 1, 'home/downloads/kisapam.mp3', '12.5', 'Tunecore', NULL, NULL, 63000, 21000, 10, 2.42);