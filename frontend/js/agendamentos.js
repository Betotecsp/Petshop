document.addEventListener("DOMContentLoaded", async () => {
  const agendamentosList = document.getElementById("agendamentosList");

  try {
    const response = await fetch("http://localhost:3000/api/appointments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const agendamentos = await response.json();

      agendamentos.forEach((agendamento) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
          <div class="agendamento-card">
            <h3>${agendamento.servico}</h3>
            <p>Pet: ${agendamento.pet_nome}</p>
            <p>Cliente: ${agendamento.cliente_nome}</p>
            <p>Telefone: ${agendamento.cliente_telefone}</p>
            <p class="data">${new Date(
              agendamento.data
            ).toLocaleDateString()}</p>
            <p>Status: ${agendamento.status}</p>
          </div>
        `;
        agendamentosList.appendChild(col);
      });
    } else {
      console.error("Erro ao buscar agendamentos.");
      agendamentosList.innerHTML = `<p class="text-danger">Erro ao carregar agendamentos.</p>`;
    }
  } catch (error) {
    console.error("Erro ao conectar à API:", error);
    agendamentosList.innerHTML = `<p class="text-danger">Erro ao conectar ao servidor.</p>`;
  }
});
