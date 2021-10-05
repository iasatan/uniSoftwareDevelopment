create table user(uid int primary key not null auto_increment, name varchar(100) not null, email varchar(50) not null, password varchar(100) not null, gender enum('m','f', 'o') not null, address varchar(100), typeOfResidence enum('flat', 'detached house', 'cottage', 'mansion','dormitory'));
create table genre(gid int primary key not null, name varchar(50));
create table user_genre(uid int, foreign key(uid) references user(uid), gid int, foreign key(gid) references genre(gid));
CREATE TABLE music (
mid int(11) NOT NULL auto_increment primary key,
  filename varchar(255) default NULL, 
  artist varchar(255) default NULL,
  title varchar(255) default NULL,
  album varchar(255) default NULL,
  comment varchar(255) default NULL,
  track tinyint(2) default NULL,
  year smallint(4) default NULL,
  genre varchar(255) default NULL,
  path varchar(255) default NULL,
  filesize smallint(6) default NULL,
  copyright varchar(255) default NULL,
  layer varchar(255) default NULL,
  stereo varchar(32) default NULL,
  goodframes int(6) default NULL,
  badframes int(6) default NULL,
  frequency int(6) default NULL,
  playtime int(6) default NULL,
  UNIQUE KEY path (path)
);

create table user_music(uid int, foreign key(uid) references user(uid), mid int, foreign key(mid) references music(mid), rating float, lastPlayed datetime, numberOfPlay int);

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