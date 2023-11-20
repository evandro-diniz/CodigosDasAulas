# Codigo python x sqlite

import sqlite3

def print_hi(name):
    # Função de apresentação
    print(f'Hi, {name}')

def create_db():
    # Funcao que conecta/cria o bd
    conn = sqlite3.connect('clientes.db')
    conn.close()

def create_schema():
    # Funcao que cria tabela
    conn = sqlite3.connect('clientes.db')
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE clientes (
            id_cliente INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            nome_cliente TEXT NOT NULL,
            idade_cliente INTEGER,
            cpf_cliente VARCHAR(11) NOT NULL,
            email_cliente TEXT NOT NULL,
            fone_cliente TEXT,
            cidade_cliente TEXT,
            uf_cliente VARCHAR(2) NOT NULL,
            criado_em_cliente DATE NOT NULL
        );
        """)
    print('Tabela criada com sucesso!')
    conn.close()

def create_data():
    # Função que cria os dados
    conn = sqlite3.connect('clientes.db')
    cursor = conn.cursor()
    # solicitando os dados ao usuário
    print('Digite os dados do cliente.')
    p_nome = input('Nome: ')
    p_idade = input('Idade: ')
    p_cpf = input('CPF: ')
    p_email = input('Email: ')
    p_fone = input('Fone: ')
    p_cidade = input('Cidade: ')
    p_uf = input('UF: ')
    p_criado_em = input('Criado em (yyyy-mm-dd): ')
    # inserindo dados na tabela
    cursor.execute("""
    INSERT INTO clientes (nome_cliente, idade_cliente, cpf_cliente, email_cliente, fone_cliente, cidade_cliente, uf_cliente, criado_em_cliente)
    VALUES (?,?,?,?,?,?,?,?)
    """, (p_nome, p_idade, p_cpf, p_email, p_fone, p_cidade, p_uf, p_criado_em))
    conn.commit()
    print('Dados inseridos com sucesso!')
    conn.close()

def read_data():
    # Funcao para ler os dados armazenados no banco
    conn = sqlite3.connect('clientes.db')
    cursor = conn.cursor()
    # Lendo os dados
    cursor.execute("""
    SELECT * FROM clientes;
    """)
    for linha in cursor.fetchall():
        print(linha)
    conn.close()

def delete_data():
    # Função que deleta dados
    conn = sqlite3.connect('clientes.db')
    cursor = conn.cursor()
    id_cliente = input('Para deleter, digite o ID: ')
    cursor.execute("""
    DELETE FROM clientes
    WHERE id = ?
    """, (id_cliente,))

def menu():
    # Função para escolher a funcionalidade
    print('Escolha uma opção:')
    print('1 - Criar o banco de dados')
    print('2 - Criar tabela')
    print('3 - Inserir dados')
    print('4 - Listar dados')
    print('5 - Deletar dados')
    op = input('Opção: ')
    if op == '1':
        create_db()
    elif op == '2':
        create_schema()
    elif op == '3':
        create_data()
    elif op == '4':
        read_data()
    else:
        delete_data()


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('Exemplo para manter banco!')
    flag = True
    while flag:
        menu()
        sair = input('Deseja continuar - sim / nao: ')
        if sair == 'nao':
            flag = False
