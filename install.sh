#!/usr/bin/env bash
#
# Установщик «Агент-Завод» в один запуск.
# Ставит дом агента в текущую папку: авторизует GitHub через браузер,
# скачивает шаблон, убирает склад с ноутбука и отвязывает от git.
#
# Запуск (в пустой папке):
#   /bin/bash -c "$(curl -fsSL https://<АДРЕС>/install.sh)"
#
set -euo pipefail

REPO="Ntmib/agent-zavod"
BRANCH="main"

say()  { printf "\n\033[1m%s\033[0m\n" "$1"; }
err()  { printf "\n\033[31m%s\033[0m\n" "$1" >&2; }

# 0. Папка должна быть пустой
if [ -n "$(ls -A . 2>/dev/null)" ]; then
  err "Папка не пустая. Открой install в новой пустой папке и запусти снова."
  exit 1
fi

# 1. Проверяем gh (GitHub CLI) — им проще всего авторизоваться без токенов
if ! command -v gh >/dev/null 2>&1; then
  say "Ставлю GitHub CLI (gh)..."
  if   command -v brew >/dev/null 2>&1; then brew install gh
  elif command -v apt-get >/dev/null 2>&1; then sudo apt-get update -y && sudo apt-get install -y gh
  elif command -v dnf >/dev/null 2>&1; then sudo dnf install -y gh
  else
    err "Не смог поставить gh автоматически. Поставь его вручную: https://cli.github.com/ и запусти снова."
    exit 1
  fi
fi

# 2. Авторизация через браузер (device flow) — код вставляешь в браузере, токены руками не трогаешь
if ! gh auth status >/dev/null 2>&1; then
  say "Открываю вход в GitHub через браузер. Подтверди код — и вернись сюда."
  gh auth login --hostname github.com --git-protocol https --web
fi

# 3. Скачиваем дом агента
say "Скачиваю дом агента..."
gh repo clone "$REPO" . -- --depth 1 --branch "$BRANCH"

# 4. Убираем склад с ноутбука (он живёт в репозитории, докупается по одному)
say "Убираю склад инструментов с ноутбука (останется на будущее онлайн)..."
rm -rf skills

# 5. Отвязываем от общего репозитория — дом теперь твой
say "Отвязываю от git — дом теперь твой..."
rm -rf .git install.sh

say "Готово. Открой эту папку в Claude Code и напиши: привет"
echo  "Агент проведёт экскурсию по дому и предложит знакомство."
