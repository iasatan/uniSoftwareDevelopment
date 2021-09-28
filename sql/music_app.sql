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