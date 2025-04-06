# envmerge

> 🔧 CLI tool to recursively merge multiple `.env` files into a single consolidated file.

---

## ✨ Features

- 🔍 Recursively scans folders to find `.env` files
- 🧠 Skips common junk/build folders (`node_modules`, `dist`, `.venv`, etc.)
- 📦 Merges all key-value pairs into one file (with comments showing file origin)
- ✅ Supports verbose logging
- ⚡️ Blazing fast and TypeScript-powered

---

## 📦 Installation

```bash
npm install -g envmerge
```

---

## 🚀 Usage

```bash
envmerge --path <folder> --output <out-folder> [--verbose]
```

### Example:

```bash
envmerge --path ./projects --output ./env --verbose
```

This will generate:

```
./env/merged.txt
```

With content like:

```env
# From: ./projects/service-a/.env
PORT=3000
DB_URL=postgres://a

# From: ./projects/service-b/.env
PORT=5000
API_KEY=abc123
```

---

## 🛠 CLI Options

| Flag        | Description                          | Type    | Required |
| ----------- | ------------------------------------ | ------- | -------- |
| `--path`    | Root folder to scan                  | string  | ✅       |
| `--output`  | Output directory to save merged file | string  | ✅       |
| `--verbose` | Enable detailed logs                 | boolean | ❌       |
| `--help`    | Show usage help                      | boolean | ❌       |

---

## 🧠 Why Use This?

Managing `.env` files in monorepos or multi-service projects is painful.  
`envmerge` makes it easy to consolidate configs while keeping source context.

---

## 📄 License

MIT © [Creatoon](https://github.com/Creatoon)
