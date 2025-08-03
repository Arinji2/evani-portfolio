# ---------- Stage 1: Build ----------
FROM golang:1.23.5-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

# Copy only go mod/sum first for caching
COPY go.mod go.sum ./

# Download deps separately to cache them
RUN go mod download -x 
# Then copy the rest of the app
COPY . .

# Build
RUN go build -x -o evani-db

# ---------- Stage 2: Minimal image ----------
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/evani-db .
COPY migrations/ ./migrations/

EXPOSE 8090
CMD ["./evani-db", "serve", "--http=0.0.0.0:8090"]
