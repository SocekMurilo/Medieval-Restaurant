use master
go

if exists(select * from sys.databases where name = 'Restaurant_Medieval_DB')
	drop database Restaurant_Medieval_DB

create database Restaurant_Medieval_DB
go

use Restaurant_Medieval_DB
go

create table Users(
	IDUser int identity primary key,
	Name varchar(80) not null,
	Email varchar(80) not null,
	CPF varchar(20) not null,
	IsAdm bit not null,
	Salt varchar(200) not null,
	Password varchar(MAX) not null,
);
go

create table Image(
	IDImage int identity primary key,
	Photo varbinary(MAX) not null
);
go

create table Product(
	IDProduct int identity primary key,
	Name varchar(80) not null,
	Description varchar(200) not null,
	Value Float not null,
	ImageID int references Image(IDImage) not null
);
go


create table Orders(
	IDOrder int identity primary key,
	StartTime datetime not null,
	Finish bit not null,
	ValueOrder float not null,
	UserID int references Users(IDUser) not null,
);
go

create table ProductOrder(
	IDProductOrder int identity primary key,
	Quantity int not null,
	OrderID int references Orders(IDOrder) not null,
	ProductID int references Product(IDProduct) not null
);
go

create table Promotion(
	IDPromotion int identity primary key,
	PromotionalKey varchar(50) not null,
	NewValue Float not null,
	ProductID int references Product(IDProduct) not null
);
go
