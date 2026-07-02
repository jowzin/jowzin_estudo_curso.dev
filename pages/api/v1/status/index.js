function status(req, res) {
  res
    .status(200)
    .json({ message: "aluno do  curso.dev é o melhor do mundo né" });
}

export default status;
