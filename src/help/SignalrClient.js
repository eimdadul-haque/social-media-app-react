import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export function SignalRClient() {
    let connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5200/chat", {
            accessTokenFactory: () => localStorage.getItem("tokenR")
        })
        .configureLogging(LogLevel.Information)
        .build();
    connection.start().catch(err => console.log(err))
    return connection;
}
