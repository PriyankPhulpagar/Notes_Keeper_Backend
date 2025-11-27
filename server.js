import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", notesRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

