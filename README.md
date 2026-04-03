# lambo
A master-slave automation app with a server for websocket communication

# Lambo Server

Lambo Server is a robust, Dart-based WebSocket relay server designed for real-time device synchronization using a "Master-Slave" architecture. It facilitates seamless communication within isolated "Rooms," where actions from a master device are broadcasted to connected slaves.

## Features

- **Room-based Connectivity**: Isolated sessions identified by unique room codes.
- **Master-Slave Relay**: Efficiently broadcasts JSON messages from masters to slaves.
- **Stateful Sync**: Automatically caches the last "room-state" and delivers it to late-joining slaves.
- **Automatic Lifecycle Management**: 
    - **Room Cleanup**: Empty rooms are automatically pruned to reclaim memory.
    - **Heartbeat**: Built-in ping/pong mechanism to detect and close stale connections.
- **Reliability & Security**:
    - **Rate Limiting**: Protects the server with a per-client limit (default 50 msg/s).
    - **Validation**: Strict validation for room codes and message structures.
- **Docker Ready**: Includes a multi-stage Dockerfile for minimal production images.

## Getting Started

### Configuration

The server can be configured using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `LAMBO_HOST` | The host address to bind to | `0.0.0.0` |
| `LAMBO_PORT` | The port to listen on | `8080` |

## Protocol

### Connection URL
Clients connect via WebSocket using the following pattern:
```
ws://<server-ip>:8080/ws/pcautomation/<room-code>?role=<master|slave>
```
- `<room-code>`: Must match `^[a-zA-Z0-9_-]+$`.
- `role`: Defaults to `slave` if omitted.

### Message Format
Messages must be valid JSON strings following this structure:
```json
{
  "event": "string",
  "payload": { "key": "value" }
}
```
- `event`: Use `room-state` for messages that should be cached for late joiners.

# Lambo01 Master

A Flutter application designed for synchronized web browsing and automated betting using a Master/Slave architecture.

## Overview

This application connects to a WebSocket room to establish a synchronized browsing session involving one Master and multiple Slaves. With the addition of manual URL input, the platform now supports synchronized browsing on **any website**.

*   **Master**: Controls the browsing session by entering any URL or selecting from the "Recent Sites" list. Actions performed on the Master's browser are transmitted to all connected slaves in real-time.
*   **Slaves**: Passively follow the Master's navigation and actions, replicating events like URL changes and clicks in real-time.
*   **Synchronization**: Real-time communication via WebSockets. The app features a persistent error banner to notify users of connection issues and allow quick retries.
*   **Modern UI**: Built with Material 3, featuring a consistent indigo theme, styled cards for recent sites with favicons, and improved form layouts.

## Key Features

- **Universal Site Support**: Manually enter any website URL to initiate a synchronized session.
- **URL Validation**: Automated HEAD requests verify website reachability before navigation.
- **Recent Sites Persistence**: Automatically saves visited sites to local storage (`SharedPreferences`) for quick access, with cloud synchronization via Supabase for authenticated users.
- **Favicon Integration**: Displays website favicons in the "Recent Sites" grid using the Google S2 API.
- **Master/Slave Synchronization**: High-fidelity replication of browsing sessions across multiple devices.
- **Action Replication**: JavaScript injection on Slave devices allows for real-time replication of interactions (e.g., clicks, input changes) performed on the Master.
- **Volume Event Integration**: A dedicated page for sending click events via the hardware Volume Up button, with real-time logs and native Android support.
- **User Authentication and Profiles**: Secure authentication via Supabase with email verification, profile management, and access control based on active status.
- **Usage Tracking**: Enforces daily time limits (2 hours) for unauthenticated users and tracks usage for inactive authenticated users.
- **Proxy Configuration**: Authenticated users can configure proxy settings, including authentication, for enhanced browsing capabilities.
- **About Page**: View application version and release history directly from the GitHub repository.
- **Screen Management**: Automatically keeps the screen awake on both Master and Slave devices to ensure uninterrupted synchronization during sessions.

## Getting Started

This project requires a WebSocket server to coordinate communication between Master and Slave devices.

- Connect devices to the same network as your WebSocket server
- Configure the WebSocket connection in the app settings:
   - Server address
   - Server port
   - Room code
   - Role (Master or Slave)

### Usage

1. Set one device as "Master" and others as "Slaves"
2. Join the same WebSocket room on all devices (the app automatically attempts to connect on startup if settings are saved)
3. Authenticate if needed: Unauthenticated users have limited access; log in via Supabase for full features and extended usage.
4. On the Master device:
   - Enter any website URL or select a site from the "Recent Sites" list
   - Click "Browse" to navigate (the app will verify the site's status first)
5. All Slave devices will replicate the Master's actions in real-time

