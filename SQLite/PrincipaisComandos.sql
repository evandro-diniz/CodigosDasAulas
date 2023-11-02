/*Cria a tabela Clientes*/
CREATE TABLE Clientes (
	id_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
	nome_cliente TEXT(255) NOT NULL,
	fone_cliente TEXT(11)
);

/*Cria a tabela Pedidos*/
CREATE TABLE Pedidos (
	id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
	num_pedido INTEGER NOT NULL,
	idcliente_pedido INTEGER NOT NULL,
	CONSTRAINT CliPedidos_fk FOREIGN KEY (idcliente_pedido) 
	REFERENCES Clientes (id_cliente)
);

/*Inseri dados na tabela mensionada*/
INSERT INTO Clientes (nome_cliente, fone_cliente)
VALUES ('Laura','86888888888');

/*Altera a estrutura da tabela, inserindo uma nova coluna*/
ALTER TABLE Clientes ADD end_cliente TEXT(255);

/*Altera os dados de uma determinada instância de dados*/
UPDATE Clientes SET end_cliente = 'Rua das Flores 43' WHERE id_cliente = 3;

/*Selecionanda dados armarzenados*/
SELECT nome_cliente, end_cliente FROM Clientes WHERE nome_cliente = 'Cirilo';
