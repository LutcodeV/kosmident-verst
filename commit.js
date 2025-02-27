import { execSync } from "child_process";

const message = process.env.npm_config_message

if (!message) {
  console.error("Ошибка: укажите сообщение для коммита, например:");
  console.error('npm run commit -- -m "[тип]: [сообщение]"');
  process.exit(1);
}

try {
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });
  console.log("Коммит успешно создан!");
} catch (error) {
  console.error("Ошибка при коммите:", error.message);
}
