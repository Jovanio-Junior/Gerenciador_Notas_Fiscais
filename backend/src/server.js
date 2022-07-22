import Express from "express";
import Rotas from "./routes";
export class Server {
  app = Express();
  porta = 3000;
  host = "localhost";

  iniciar() {
    this.app.use(Rotas);

    this.app.listen(this.porta, (error) => {
      if (!error) {
        console.log(`Servidor iniciado em http://${this.host}:${this.porta}`);
      } else {
        console.log(error);
      }
    });
  }

  setupRoutes() {
    this.app.get("/teste", (req, res) => {
      res.send("Funcionando :)");
    });
  }
}
