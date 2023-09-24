import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function CourseStudent() {
  const pStyle = {
    padding: '40px 40px',
    width: 800,
    margin: '40px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '40px'
  };

  const studentItemStyle = {
    margin: '10px',
    padding: '15px',
    textAlign: 'left',
    width: '100%',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseStudents, setCourseStudents] = useState([]);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClickOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleClickCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Por favor, preencha os campo de nome corretamente.');
      return;
    }

    if (!email.trim()) {
      setError('Por favor, preencha o campo de email.');
      return;
    }

    const courseStudent = { name, email };

    if (courseStudents.some(student => student.email === email)) {
      setError('Este email já está cadastrado.');
      return;
    }

    fetch('http://localhost:8080/courseStudent/put', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(courseStudent),
    })
      .then(() => {
        console.log("Novo aluno cadastrado");
        fetch('http://localhost:8080/courseStudent/getAll')
          .then((res) => res.json())
          .then((result) => {
            setCourseStudents(result);
            setError('');
            setIsFormOpen(false);
          });
      });
  };

  useEffect(() => {
    fetch('http://localhost:8080/courseStudent/getAll')
      .then((res) => res.json())
      .then((result) => {
        setCourseStudents(result);
      });
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const textFieldStyle = {
    marginBottom: '15px',
  };

  return (
    <Container style={containerStyle}>
      <Paper style={pStyle} elevation={5}>
        <h1 style={{ color: 'black' }}>
          <p>Registrar estudante</p>
        </h1>
        {isFormOpen ? (
          <>
            <TextField
              id="outlined-basic"
              label="Nome do aluno"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={textFieldStyle}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={textFieldStyle}
            />
            <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column' }}>
              <Button variant="contained" color="primary" onClick={handleFormSubmit} style={{ marginBottom: '10px' }}>
                Enviar
              </Button>
              <Button variant="contained" color="secondary" onClick={handleClickCloseForm}>
                Cancelar
              </Button>
          </div>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={handleClickOpenForm}>
            Abrir Formulário
          </Button>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Paper>

      <Paper style={pStyle} elevation={5}>
        <h1>Alunos Cadastrados</h1>
        {courseStudents.map((courseStudent) => (
          <Paper style={studentItemStyle} elevation={10} key={courseStudent.id}>
            Id: {courseStudent.id}
            <br />
            Name: {courseStudent.name}
            <br />
            Email: {courseStudent.email}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
