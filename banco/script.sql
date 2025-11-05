-- lembretes --- observações
create database BDLembretes;
use BDLembretes;
create table tbLembretes(
	id int auto_increment primary key,
	titulo varchar(20) not null,
    texto varchar(50) not null
);
select * from tbLembretes;

create database BDObservacoes;
use BDObservacoes;
create table tbObservacoes(
	idObs int auto_increment primary key,
    idlembrete int not null,
    texto varchar(50) not null
);
Select * from tbObservacoes;