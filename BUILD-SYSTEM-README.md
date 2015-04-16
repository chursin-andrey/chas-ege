# Система сборки проекта "Час ЕГЭ"

## Зависимости
* Python 3.4
* click
* jinja

**NOTICE:** *Данная система работает только на unix-системах*

## Использование
Система сборки состоит их трёх составных частей:
* Таски
  задачи, которые нужно выполнить
* Режимы сборки
  объеденяет таски под опр. именем
* Тулзы
  инструменты, которые выполняют таски

Конкретные команды для запуска прописаны в Makefile и вам о них заботиться не нужно

```
make РЕЖИМ
```

* dev -- режим для разработки

Если вы работаете над измененим в системе сборки или просто хотите понять почему она не работает [у вас]:

```
make РЕЖИМ BUILD_TOOL_FLAGS=--debug\ --dump-variables
```

Сборка будет в директории `build/РЕЖИМ`