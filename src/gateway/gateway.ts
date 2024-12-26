import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'

@WebSocketGateway(3002)
export class MyGateway {
    @SubscribeMessage('newMessage')
    handdleeEvent(@MessageBody() body: any) {
        console.log(body)
    }

    // onModuleInit() {
    //     this.server.on('connection', (socket) => {
    //         console.log(socket.id)
    //     })
    // }
}