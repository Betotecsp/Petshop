const db = require("../models/db");

exports.createAppointment = (req, res) => {
  const { servico, descricao, pet_nome, cliente_id, data } = req.body;
  const imagem = req.file ? req.file.filename : null; // captura o nome do arquivo da imagem

  if (!servico || !pet_nome || !cliente_id || !data) {
    return res.status(400).json({
      message: "Serviço, nome do pet, cliente e data são obrigatórios.",
    });
  }

  const query = `
    INSERT INTO agendamentos 
    (servico, descricao, pet_nome, cliente_id, data, imagem, status) 
    VALUES (?, ?, ?, ?, ?, ?, 'pendente')
  `;

  db.query(
    query,
    [servico, descricao, pet_nome, cliente_id, data, imagem],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({
        message: "Agendamento criado com sucesso!",
        id: result.insertId,
        imagem: imagem ? `/uploads/${imagem}` : null, // retorna a URL da imagem se existir
      });
    }
  );
};
exports.getAppointments = (req, res) => {
  const query = `
    SELECT a.*, u.nome AS cliente_nome, u.telefone AS cliente_telefone
    FROM agendamentos a
    JOIN usuarios u ON a.cliente_id = u.id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.updateAppointment = (req, res) => {
  const { id } = req.params;
  const { servico, descricao, pet_nome, data, status } = req.body;

  const query =
    "UPDATE agendamentos SET servico = ?, descricao = ?, pet_nome = ?, data = ?, status = ? WHERE id = ?";
  db.query(
    query,
    [servico, descricao, pet_nome, data, status, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Agendamento não encontrado." });
      res.json({ message: "Agendamento atualizado com sucesso!" });
    }
  );
};

exports.deleteAppointment = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM agendamentos WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Agendamento não encontrado." });
    res.json({ message: "Agendamento excluído com sucesso!" });
  });
};  