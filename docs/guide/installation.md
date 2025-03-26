# Installation

## 1. Global Install (via `go install`)

```bash
go install github.com/indaco/tempo/cmd/tempo@latest
```

## 2. Local Tool Install (Go 1.24+)

With Go 1.24 or greater installed, you can install `tempo` locally in your project by running:

```bash
go get -tool github.com/indaco/tempo/cmd/tempo@latest
```

Use it with:

```bash
go tool tempo
```

## 3. Prebuilt binaries

Download the pre-compiled binaries from the [releases page](https://github.com/indaco/tempo/releases) and move the binary to a folder in your system’s PATH.

## 4. Build from Source

```bash
git clone https://github.com/indaco/tempo.git
cd tempo
make install # or: task install
```

This builds and installs the binary from source using make or task.
