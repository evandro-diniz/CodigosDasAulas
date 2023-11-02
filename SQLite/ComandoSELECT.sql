/* Forma mais básica do comando SELECT*/
SELECT * FROM alunos;

/* Cláusula WHERE */
SELECT * FROM alunos a WHERE a.matricula_aluno = '20231TEI.ARA0016';

/* Cláusula WHERE */
SELECT * FROM alunos a WHERE a.nome_aluno = 'Amanda Oliveira e Oliveira';

/* Cláusula WHERE */
SELECT a.matricula_aluno, a.nome_aluno FROM alunos a WHERE a.nome_aluno LIKE '%Santos%';

/* Retornar valores específicos */
SELECT a.nome_aluno, a.nota_etapa2_aluno FROM alunos a 
WHERE a.nota_etapa2_aluno >= 9 ORDER BY a.nota_etapa2_aluno DESC;

/* Ordenamento */
SELECT * FROM alunos a ORDER BY a.matricula_aluno ASC;

/* Ordenamento */
SELECT a.matricula_aluno, a.nome_aluno FROM alunos a ORDER BY a.matricula_aluno ASC;

/* Ordenamento */
SELECT a.matricula_aluno, a.nome_aluno FROM alunos a ORDER BY a.matricula_aluno DESC;

/* Cláusula AND */
SELECT * FROM alunos a 
WHERE a.nome_aluno LIKE 'A%' AND a.nota_etapa2_aluno >= 8;

/* Cláusulas NOT e BETWEEN */
SELECT a.nome_aluno, a.nota_etapa2_aluno FROM alunos a 
WHERE a.nota_etapa2_aluno NOT BETWEEN 2 AND 6 ORDER BY a.nota_etapa2_aluno ASC;

/* Cláusula TOP */
/* Ordenamento com os primeiros */
SELECT a.nome_aluno, a.nota_etapa2_aluno FROM alunos a 
ORDER BY a.nota_etapa2_aluno DESC LIMIT 5;
